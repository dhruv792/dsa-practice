import assert from 'node:assert/strict';
import { pathToFileURL } from 'node:url';

export function runSolution(moduleUrl, solve, { outputArgument, examples } = {}) {
  const [, scriptPath, ...rawArgs] = process.argv;
  if (!scriptPath || moduleUrl !== pathToFileURL(scriptPath).href) return;

  if (rawArgs.length === 0 && examples) {
    examples(assert);
    return;
  }

  if (rawArgs.length !== solve.length) {
    console.error(`Expected ${solve.length} JSON argument(s) for ${solve.name}. Received ${rawArgs.length}.`);
    process.exitCode = 1;
    return;
  }

  let args;
  try {
    args = rawArgs.map(raw => JSON.parse(raw));
  } catch (error) {
    console.error(`Pass each argument as JSON. ${error.message}`);
    process.exitCode = 1;
    return;
  }

  const result = solve(...args);
  const output = outputArgument === undefined ? result : args[outputArgument];
  console.log(JSON.stringify(output));
}
