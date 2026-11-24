import assert from 'node:assert/strict';
import test from 'node:test';
import { maxPathSum } from './solution.js';

test('matches practice example 1', () => {
  assert.equal(maxPathSum({ val: -3, left: null, right: null }), -3);
});

test("uses a path that avoids a negative root", () => {
  assert.equal(maxPathSum({val:-10,left:{val:9,left:null,right:null},right:{val:20,left:{val:15,left:null,right:null},right:{val:7,left:null,right:null}}}), 42);
});

test("chooses the largest single node when every value is negative", () => {
  assert.equal(maxPathSum({val:-8,left:{val:-3,left:null,right:null},right:{val:-5,left:null,right:null}}), -3);
});

test("can join two positive child branches", () => {
  assert.equal(maxPathSum({val:1,left:{val:2,left:null,right:null},right:{val:3,left:null,right:null}}), 6);
});

test("keeps only the profitable child branch", () => {
  assert.equal(maxPathSum({val:3,left:{val:-4,left:null,right:null},right:{val:5,left:null,right:null}}), 8);
});

test("handles a zero-valued leaf", () => {
  assert.equal(maxPathSum({val:0,left:null,right:null}), 0);
});
