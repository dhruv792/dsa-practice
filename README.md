# Node.js DSA Practice

Use Node.js 20 or newer. The project has zero dependencies.

From this directory, run a single problem with `npm run two-sum`.
Open its `solution.js`, replace the placeholder, and rerun the command.
Tests start out failing until you implement each function.

Run the full suite with `npm test`.

To try a built-in example, uncomment its assertion at the bottom of
`solution.js`, then run `npm run run:<problem>` without arguments.
Passing assertions are silent. A failing assertion shows the expected and
actual results.

To call a solution directly, use `npm run run:<problem> --` followed by
one JSON value per function argument, in signature order. Quote arrays,
objects, and strings so the shell passes them through as single arguments.
The result is printed as JSON. Move Zeroes prints the modified input array.

```bash
npm run run:two-sum -- '[2,7,11,15]' 9
npm run run:valid-anagram -- '"listen"' '"silent"'
node medium/intervals/merge-intervals/solution.js '[[1,4],[4,5]]'
```

See the [strategy log](STRATEGIES.md) to review solved problems by technique.

## Practice tracker

The [practice tracker](blind-75/PROGRESS.md) started with Blind 75 and includes
the exercises added to your study list since then. Use `npm run blind75:sync`
to refresh progress, or `npm run blind75:test -- 128` to test a problem by ID.

The [Java 21 practice folder](java/README.md) has the current Java starter
and its test command.

## Problems

Exercise folders follow `difficulty/topic/problem`. Each solution file explains a worked example and the runtime target above the function. Uncomment an assertion below the function to try another example.

- **Easy · Two Sum**. Return two distinct indices whose values sum to target. Exactly one pair exists. Either index order is valid. Run `npm run two-sum`. [Starter](easy/arrays/two-sum/solution.js).
- **Easy · Valid Parentheses**. Return whether a string of brackets ()[]{} is balanced. Each opening bracket must close in reverse opening order. The empty string is balanced. Run `npm run valid-parentheses`. [Starter](easy/stacks/valid-parentheses/solution.js).
- **Easy · Contains Duplicate**. Run `npm run contains-duplicate`. [Starter](easy/arrays/contains-duplicate/solution.js).
- **Easy · Valid Anagram**. Run `npm run valid-anagram`. [Starter](easy/strings/valid-anagram/solution.js).
- **Easy · Best Time to Buy and Sell Stock**. Run `npm run best-time-to-buy-and-sell-stock`. [Starter](easy/arrays/best-time-to-buy-and-sell-stock/solution.js).
- **Easy · Binary Search**. Run `npm run binary-search`. [Starter](easy/binary-search/binary-search/solution.js).
- **Easy · Remove Adjacent Duplicates**. Run `npm run remove-adjacent-duplicates`. [Starter](easy/stacks/remove-adjacent-duplicates/solution.js).
- **Easy · Move Zeroes**. Run `npm run move-zeroes`. [Starter](easy/arrays/move-zeroes/solution.js).
- **Easy · Search Insert Position**. Run `npm run search-insert-position`. [Starter](easy/binary-search/search-insert-position/solution.js).
- **Easy · Find if a Path Exists in a Graph**. Run `npm run find-if-path-exists`. [Starter](easy/graphs/find-if-path-exists/solution.js).
- **Easy · Count Reachable Vertices**. Run `npm run count-reachable-vertices`. [Starter](easy/graphs/count-reachable-vertices/solution.js).
- **Easy · Flood Fill**. Run `npm run flood-fill`. [Starter](easy/graphs/flood-fill/solution.js).
- **Medium · Longest Substring**. Return the length of the longest contiguous substring with no repeated characters. Assume ASCII input. Run `npm run longest-substring`. [Starter](medium/strings/longest-substring/solution.js).
- **Medium · Merge Intervals**. Given an array of closed intervals [start, end] where start <= end, merge overlapping intervals and return them sorted by start. Intervals that touch overlap. Run `npm run merge-intervals`. [Starter](medium/intervals/merge-intervals/solution.js).
- **Medium · Product of Array Except Self**. Run `npm run product-except-self`. [Starter](medium/arrays/product-except-self/solution.js).
- **Medium · Subarray Sum Equals K**. Run `npm run subarray-sum-equals-k`. [Starter](medium/arrays/subarray-sum-equals-k/solution.js).
- **Medium · Daily Temperatures**. Run `npm run daily-temperatures`. [Starter](medium/stacks/daily-temperatures/solution.js).
- **Medium · Search in Rotated Sorted Array**. Run `npm run search-rotated-array`. [Starter](medium/binary-search/search-rotated-array/solution.js).
- **Medium · Longest Palindromic Substring**. Run `npm run longest-palindromic-substring`. [Starter](medium/strings/longest-palindromic-substring/solution.js).
- **Medium · Palindromic Substrings**. Run `npm run palindromic-substrings`. [Starter](medium/strings/palindromic-substrings/solution.js).
- **Medium · Number of Islands**. Run `npm run number-of-islands`. [Starter](medium/graphs/number-of-islands/solution.js).
- **Medium · Shortest Path in an Unweighted Graph**. Run `npm run shortest-path-unweighted-graph`. [Starter](medium/graphs/shortest-path-unweighted-graph/solution.js).
- **Medium · Course Schedule**. Run `npm run course-schedule`. [Starter](medium/graphs/course-schedule/solution.js).
