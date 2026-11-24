import assert from 'node:assert/strict';
import test from 'node:test';
import { isValid } from './solution.js';

test('accepts nested brackets', () => {
  assert.deepEqual(isValid("{[()]}"), true);
});

test('rejects crossed brackets', () => {
  assert.deepEqual(isValid("([)]"), false);
});

test('rejects an unmatched closing bracket', () => {
  assert.deepEqual(isValid(")"), false);
});

test('accepts empty input', () => {
  assert.deepEqual(isValid(""), true);
});

test('accepts consecutive pairs', () => {
  assert.deepEqual(isValid("()[]{}"), true);
});

test('rejects an unmatched opening bracket', () => {
  assert.deepEqual(isValid("("), false);
});

test('rejects mismatched bracket types', () => {
  assert.deepEqual(isValid("(]"), false);
});

test('rejects an extra closing bracket', () => {
  assert.deepEqual(isValid("([]))"), false);
});

test('rejects a closing bracket before its opener', () => {
  assert.deepEqual(isValid(")("), false);
});

test('accepts nested and consecutive pairs together', () => {
  assert.deepEqual(isValid("[({})]{}"), true);
});

test("rejects a closing bracket after a valid prefix", () => {
  assert.equal(isValid("[]}"), false);
});

test("rejects an opening bracket after a valid prefix", () => {
  assert.equal(isValid("{}["), false);
});

test("accepts multiple adjacent and nested groups", () => {
  assert.equal(isValid("({[]})[]{}"), true);
});

test("rejects a valid pair followed by crossed pairs", () => {
  assert.equal(isValid("[]([)]"), false);
});

test("accepts a heavily nested group", () => {
  assert.equal(isValid("{{[()]}}"), true);
});
