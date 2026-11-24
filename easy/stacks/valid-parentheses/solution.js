import { runSolution } from '../../../run-solution.js';

/**
 * Valid Parentheses (Easy)
 *
 * Given a string s containing only bracket characters, determine whether
 * it is balanced. Each closing bracket must match the type of the most
 * recent unmatched opening bracket. Every opening bracket must be closed.
 * The empty string is balanced.
 *
 * Worked example
 * For s = "([)]", return false. When the first closing bracket ")" arrives,
 * the most recent unmatched opening bracket is "[", so the types do not
 * match. For "([])", both bracket types close in the right order.
 *
 * Function: isValid(s)
 * Returns: true if s is balanced, or false otherwise.
 *
 * Expected time complexity: O(n), where n is s.length.
 *
 * Constraints:
 * - 0 <= s.length <= 10,000
 * - s contains only (, ), [, ], {, and }.
 *
 * Examples are available as commented assertions below.
 */
export function isValid(s) {
    const stack = []
    const open = ["(", "{", "["]
    const closed  = [")", "}", "]"]
    
    for (let i=0;i<s.length;i++){
        const char = s.charAt(i)
        if (open.indexOf(char)>-1) {
            stack.push(char)
            continue
        }
        const index =  closed.indexOf(char)
        const counter = open[index]
        if (stack.at(-1) != counter) return false
        stack.pop()
    }

    if (stack.length) return false

    return true
}

runSolution(import.meta.url, isValid, {
  examples(assert) {
    // Uncomment any line and run this file without arguments.
    // assert.equal(isValid("{[()]}"), true);
    // assert.equal(isValid("([)]"), false);
    // assert.equal(isValid(")"), false);
    // assert.equal(isValid(""), true);
    // assert.equal(isValid("()[]{}"), true);
    // assert.equal(isValid("("), false);
    // assert.equal(isValid("(]"), false);
    // assert.equal(isValid("([]))"), false);
    // assert.equal(isValid(")("), false);
    // assert.equal(isValid("[({})]{}"), true);
    // assert.equal(isValid("[]}"), false);
    // assert.equal(isValid("{}["), false);
    // assert.equal(isValid("({[]})[]{}"), true);
    // assert.equal(isValid("[]([)]"), false);
    // assert.equal(isValid("{{[()]}}"), true);
  },
});
