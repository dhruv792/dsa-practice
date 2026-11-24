import { runSolution } from '../../../run-solution.js';

/**
 * 271. Encode and Decode Strings (Medium)
 *
 * Implement encode(strings) to return one string. Implement decode(encoded)
 * to reconstruct the original list in order, including empty strings and
 * strings that contain delimiter characters. The runner calls roundTrip(strings).
 *
 * Worked example
 * For strings = ["", "a:b", "#"], encode must produce a single string that
 * decode turns back into exactly ["", "a:b", "#"]. The empty first value
 * remains present, and the colon stays inside the second value.
 *
 * Function: roundTrip(strings)
 * Expected complexity: O(C + n) for each operation with a length-prefixed
 * encoding, where n is the number of strings and C is their total character
 * count.
 */
export function encode(strings) {
  throw new Error('Implement encode');
}

export function decode(encoded) {
  throw new Error('Implement decode');
}
    
export function roundTrip(strings) {
  return decode(encode(strings));
}

runSolution(import.meta.url, roundTrip, {
  examples(assert) {
    // Uncomment an assertion and run this file without arguments.
    // assert.deepEqual(roundTrip(["", "a:b", "#", "hello world"]), ["", "a:b", "#", "hello world"]);
    // assert.deepEqual(roundTrip([]), []);
    // assert.deepEqual(roundTrip([""]), [""]);
    // { const strings = ["12:foo","a\nb","12:foo","#"]; const encoded = encode(strings); assert.equal(typeof encoded, "string"); assert.deepEqual(decode(encoded), strings); }
    // assert.deepEqual(roundTrip(["000:abc","🌱",""]), ["000:abc", "🌱", ""]);
    // assert.deepEqual(roundTrip(["","",""]), ["", "", ""]);
  },
});
