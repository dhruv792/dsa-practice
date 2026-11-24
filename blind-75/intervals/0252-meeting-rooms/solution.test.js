import assert from 'node:assert/strict';
import test from 'node:test';
import { canAttendMeetings } from './solution.js';

test('matches practice example 1', () => {
  assert.equal(canAttendMeetings([[7,10],[2,4]]), true);
});

test("a room can be reused at a shared endpoint", () => {
  assert.equal(canAttendMeetings([[5,8],[1,5]]), true);
});

test("rejects overlap in unsorted meetings", () => {
  assert.equal(canAttendMeetings([[3,5],[0,4]]), false);
});

test("an empty schedule has no conflict", () => {
  assert.equal(canAttendMeetings([]), true);
});

test("detects overlapping meetings with the same start", () => {
  assert.equal(canAttendMeetings([[2,5],[2,3]]), false);
});

test("attends three unsorted back-to-back meetings", () => {
  assert.equal(canAttendMeetings([[6,9],[2,4],[4,6]]), true);
});
