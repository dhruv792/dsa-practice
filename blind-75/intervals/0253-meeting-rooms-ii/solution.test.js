import assert from 'node:assert/strict';
import test from 'node:test';
import { minMeetingRooms } from './solution.js';

test('matches practice example 1', () => {
  assert.equal(minMeetingRooms([[0,30],[5,10],[15,20]]), 2);
});

test("back-to-back meetings reuse one room", () => {
  assert.equal(minMeetingRooms([[4,7],[1,4]]), 1);
});

test("simultaneous starts require separate rooms", () => {
  assert.equal(minMeetingRooms([[2,5],[2,3],[2,4]]), 3);
});

test("allows an empty schedule", () => {
  assert.equal(minMeetingRooms([]), 0);
});

test("handles nested meetings", () => {
  assert.equal(minMeetingRooms([[1,10],[2,9],[3,8],[4,7]]), 4);
});

test("does not double-count a room freed at the next start", () => {
  assert.equal(minMeetingRooms([[0,3],[1,3],[3,5],[3,6]]), 2);
});
