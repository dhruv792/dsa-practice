import assert from 'node:assert/strict';
import test from 'node:test';
import { countSubstrings } from './solution.js';

test('counts no substrings for empty input', () => {
  assert.equal(countSubstrings(""), 0);
});

test('counts a single character', () => {
  assert.equal(countSubstrings("x"), 1);
});

test('counts each distinct character on its own', () => {
  assert.equal(countSubstrings("abc"), 3);
});

test('counts each occurrence of repeated palindromes', () => {
  assert.equal(countSubstrings("aaa"), 6);
});

test('counts an odd palindrome', () => {
  assert.equal(countSubstrings("aba"), 4);
});

test('counts nested even palindromes', () => {
  assert.equal(countSubstrings("abba"), 6);
});

test('counts overlapping palindromes', () => {
  assert.equal(countSubstrings("ababa"), 9);
});

test('counts palindromes at separate positions', () => {
  assert.equal(countSubstrings("aabbaa"), 11);
});

test('treats uppercase and lowercase as distinct', () => {
  assert.equal(countSubstrings("Aa"), 2);
});

test('counts palindromes containing digits', () => {
  assert.equal(countSubstrings("x121x"), 7);
});

test('counts all substrings of 1,000 identical characters', () => {
  assert.equal(countSubstrings("a".repeat(1_000)), 500_500);
});

test("counts two separate odd palindromes", () => {
  assert.equal(countSubstrings("abacdc"), 8);
});

test("counts both equal length-two groups", () => {
  assert.equal(countSubstrings("aabb"), 6);
});

test("counts nested palindromes that include zeros", () => {
  assert.equal(countSubstrings("00100"), 9);
});

test("counts palindromes that overlap between different centers", () => {
  assert.equal(countSubstrings("aaaa"), 10);
});

test("treats uppercase and lowercase as distinct in triples", () => {
  assert.equal(countSubstrings("AaA"), 4);
});
