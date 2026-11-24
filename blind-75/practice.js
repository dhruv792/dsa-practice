import { spawnSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import { relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const folder = fileURLToPath(new URL('.', import.meta.url));
const project = resolve(folder, '..');
const problems = JSON.parse(readFileSync(new URL('./problems.json', import.meta.url), 'utf8'));
const [command, id, ...args] = process.argv.slice(2);

function paths(problem) {
  const directory = resolve(project, problem.directory);
  return {
    solution: resolve(directory, 'solution.js'),
    tests: resolve(directory, 'solution.test.js'),
  };
}

function syncProgress() {
  let verified = 0;
  let verifiedBlind75 = 0;
  const blind75Total = problems.filter(problem => problem.blind75).length;
  const tiers = [
    {
      title: 'Priority 1 · Highest return',
      description: 'Practice reusable patterns, starting with linked lists, heaps, backtracking, tries, trees, and dynamic programming.',
      rows: [],
    },
    {
      title: 'Priority 2 · Broaden coverage',
      description: 'Add variants and additional patterns once the core techniques feel comfortable.',
      rows: [],
    },
    {
      title: 'Priority 3 · Stretch and specialized',
      description: 'Save the harder combinations and narrower techniques for after the earlier tiers.',
      rows: [],
    },
    {
      title: 'Review · Passing locally',
      description: 'Revisit these for timed practice. If a solution stops passing, it returns to its practice tier on the next sync.',
      rows: [],
    },
  ];
  const review = tiers[tiers.length - 1];

  for (const problem of problems) {
    const { solution, tests } = paths(problem);
    const source = readFileSync(solution, 'utf8');
    let status = 'Starter';
    let section = tiers[problem.priority - 1];

    if (!/^\s*throw new Error\('Implement [\w.]+?'\);\s*$/m.test(source)) {
      const check = spawnSync(process.execPath, ['--test', '--test-reporter=tap', tests], {
        cwd: project,
        encoding: 'utf8',
        timeout: 10_000,
      });
      const pass = check.stdout?.match(/^# pass (\d+)$/m)?.[1];
      const total = check.stdout?.match(/^# tests (\d+)$/m)?.[1];
      const count = total && Number(total) > 0 ? ` (${pass ?? '0'}/${total})` : '';

      if (check.status === 0 && Number(total) > 0) {
        verified++;
        if (problem.blind75) verifiedBlind75++;
        status = `Passing${count}`;
        section = review;
      } else {
        status = `In progress${count}`;
      }
    }

    const acceptance = problem.acceptance ? `${problem.acceptance}%` : '—';
    const blind75 = problem.blind75 ? '✓' : '—';
    const link = relative(folder, solution);
    section.rows.push(`| ${problem.id} | [${problem.title}](${link}) | ${problem.difficulty} | ${blind75} | ${acceptance} | ${status} |`);
  }

  const document = [
    '# DSA Practice Progress',
    '',
    `**Solved ${verified} of ${problems.length}**`,
    `**Blind 75 solved ${verifiedBlind75} of ${blind75Total}**`,
    '',
    'Refresh this file from the project directory with `npm run blind75:sync`.',
    'An exercise counts as solved when all its current local tests pass. ✓ marks an exercise from the original Blind 75 list.',
    'Acceptance rates reflect the original snapshot where available.',
    'Work through each priority tier from top to bottom. The order favors techniques that transfer across questions and gaps in your current practice. [HackerRank Interview Preparation Kit](https://www.hackerrank.com/interview/interview-preparation-kit)',
    '',
    '- Run a test suite by ID with `npm run blind75:test -- 128`.',
    '- Run a solution with custom arguments using `npm run blind75:run -- 128 \'[100,4,200,1,3,2]\'`.',
    '- To run an uncommented inline assertion, omit the arguments after the ID.',
    '',
    ...tiers.flatMap(({ title, description, rows }) => [
      `## ${title}`,
      '',
      description,
      '',
      ...(rows.length > 0 ? [
        '| # | Problem | Difficulty | Blind 75 | Acceptance | Local status |',
        '|---:|---|---|:---:|---:|---|',
        ...rows,
      ] : ['No problems in this section.']),
      '',
    ]),
  ].join('\n');

  writeFileSync(resolve(folder, 'PROGRESS.md'), document);
  console.log(`Solved ${verified} of ${problems.length} exercises.`);
  console.log(`Blind 75 solved ${verifiedBlind75} of ${blind75Total}.`);
}

if (command === 'sync') {
  syncProgress();
} else {
  const problem = problems.find(entry => String(entry.id) === id);
  if (!problem || !['test', 'run'].includes(command)) {
    console.error('Use blind75:sync, blind75:test -- <id>, or blind75:run -- <id> [JSON args].');
    process.exitCode = 1;
  } else {
    const { solution, tests } = paths(problem);
    const nodeArgs = command === 'test' ? ['--test', tests] : [solution, ...args];
    const check = spawnSync(process.execPath, nodeArgs, { cwd: project, stdio: 'inherit' });
    if (check.error) throw check.error;
    process.exitCode = check.status ?? 1;
  }
}
