import assert from 'node:assert/strict';
import test from 'node:test';
import { encode, decode, roundTrip } from './solution.js';

test('matches practice example 1', () => {
  assert.deepEqual(roundTrip(["", "a:b", "#", "hello world"]), ["", "a:b", "#", "hello world"]);
});

test("round-trips an empty list", () => {
  assert.deepEqual(roundTrip([]), []);
});

test("distinguishes an empty list from one empty string", () => {
  assert.deepEqual(roundTrip([""]), [""]);
});

test("preserves separators newlines and repeated strings", () => {
  { const strings = ["12:foo","a\nb","12:foo","#"]; const encoded = encode(strings); assert.equal(typeof encoded, "string"); assert.deepEqual(decode(encoded), strings); }
});

test("preserves large length-like prefixes and emoji", () => {
  assert.deepEqual(roundTrip(["000:abc","🌱",""]), ["000:abc", "🌱", ""]);
});

test("keeps several empty values separate", () => {
  assert.deepEqual(roundTrip(["","",""]), ["", "", ""]);
});
