# DSA Strategy Log

After a problem is solved or a complete solution is shared in chat, add or update its entry with the strategy, the clue that suggests it, and the time complexity. Mark solutions shared in chat if the local implementation still needs work. Use the pending list for current practice.

## Hash maps and sets

Use a lookup when the current element needs information about values you have already seen.

| Problem | What to track | Time |
|---|---|---|
| [Two Sum](easy/arrays/two-sum/solution.js) | Store value → index. Look up `target - value` before inserting the current index. | O(n) average-case |
| [Contains Duplicate](easy/arrays/contains-duplicate/solution.js) | Track seen values and return as soon as one repeats. | O(n) average-case |
| [Valid Anagram](easy/strings/valid-anagram/solution.js) | Count letters in the first string and consume those counts with the second. | O(n + m) |
| [Group Anagrams](blind-75/strings/0049-group-anagrams/solution.js) | Count letters in a 26-entry array and use `counts.join(',')` as a Map key. Anagrams share a key, so append each word to its key's group. | O(C + n) average-case for C total characters and n words |
| [Longest Consecutive Sequence](blind-75/arrays/0128-longest-consecutive-sequence/solution.js) | Iterate over distinct values in a set. Start counting only when the predecessor is absent, so each run is scanned once. | O(n) average-case |

## Two pointers

| Pattern | Problem | How the pointers move | Time |
|---|---|---|---|
| Read and write | [Move Zeroes](easy/arrays/move-zeroes/solution.js) | Scan with the read pointer and advance the write pointer as nonzero values are placed. | O(n) |
| Opposite ends | [Valid Palindrome](blind-75/strings/0125-valid-palindrome/solution.js) | Compare mirrored characters. The current solution normalizes the string first. To use O(1) extra space, skip punctuation and compare case-insensitively as the pointers move inward on the original string. | O(n) |
| Opposite ends | [Container With Most Water](blind-75/arrays/0011-container-with-most-water/solution.js) | Measure the current pair, then move the shorter wall. Keeping that wall while narrowing the width cannot improve the area. Solution shared in chat. | O(n) |
| Sliding window | [Longest Substring Without Repeating Characters](medium/strings/longest-substring/solution.js) | Use last-seen indices to advance `left` past a repeat inside the window. Update the best length after processing every character. | O(n) |
| Center expansion | [Longest Palindromic Substring](medium/strings/longest-palindromic-substring/solution.js) | Try centers on each character and in each gap. Move both pointers outward while the characters match. | O(n²) |
| Center expansion | [Palindromic Substrings](medium/strings/palindromic-substrings/solution.js) | Try odd and even centers. Count each successful expansion because it identifies one unique pair of substring endpoints. | O(n²) |

## Stacks

| Pattern | Problem | What to keep on the stack | Time |
|---|---|---|---|
| Matching | [Valid Parentheses](easy/stacks/valid-parentheses/solution.js) | Unmatched opening brackets. Each closing bracket must match the most recent opener. | O(n) |
| Cancellation | [Remove Adjacent Duplicates](easy/stacks/remove-adjacent-duplicates/solution.js) | Characters that survived so far. Pop when the next character matches the top. | O(n) |
| Monotonic stack | [Daily Temperatures](medium/stacks/daily-temperatures/solution.js) | Unresolved days in non-increasing temperature order. A strictly warmer day resolves earlier days from the top. | O(n) |

## Binary search

| Problem | How to discard candidates | Time |
|---|---|---|
| [Binary Search](easy/binary-search/binary-search/solution.js) | Compare with the midpoint, then discard it and the half that cannot contain the target. | O(log n) |
| [Search Insert Position](easy/binary-search/search-insert-position/solution.js) | Run binary search and return `left` if the target is absent. | O(log n) |
| [Search in Rotated Sorted Array](medium/binary-search/search-rotated-array/solution.js) | Identify a sorted half and use its endpoints to decide which half to keep. | O(log n) |

## Running aggregates and prefix/suffix passes

| Problem | What to carry forward | Time |
|---|---|---|
| [Best Time to Buy and Sell Stock](easy/arrays/best-time-to-buy-and-sell-stock/solution.js) | The lowest price seen so far and the best profit. | O(n) |
| [Product of Array Except Self](medium/arrays/product-except-self/solution.js) | Combine the product strictly to the left with the product strictly to the right. Reuse the output array for left products to reach O(1) extra space. | O(n) |

## Sort and scan

| Problem | What sorting gives you | Time |
|---|---|---|
| [Merge Intervals](medium/intervals/merge-intervals/solution.js) | Sort by start so each new interval only needs to be compared with the last merged interval. Use the larger end when they overlap. | O(n log n) |

## Graph traversal

Use the same helper for the starting node and its neighbors. The helper checks eligibility, marks the node as discovered, and adds it to the stack or queue. When you remove a node, process its neighbors.

| Problem | How to traverse | Time |
|---|---|---|
| [Find if a Path Exists in a Graph](easy/graphs/find-if-path-exists/solution.js) | Use an adjacency list and an iterative DFS from the source. Mark each vertex when pushing it so cycles cannot revisit it. Solution shared in chat. | O(V + E) |
| [Flood Fill](easy/graphs/flood-fill/solution.js) | Treat cells as vertices with four neighbors. For in-place iterative DFS, return early when the colors match, then recolor each cell when pushing it so the image tracks visits. | O(rows × cols) |
| [Number of Islands](medium/graphs/number-of-islands/solution.js) | Set eligible land cells to `"0"` when pushing them. Count an island only when a push succeeds from the outer scan, then finish its DFS before resuming the scan. | O(rows × cols) |
| [Course Schedule](medium/graphs/course-schedule/solution.js) | Detect a directed cycle with iterative DFS. Each stack frame remembers its next prerequisite. Mark a course active on entry and finished on exit. An edge to an active course means a cycle. Solution shared in chat. | O(V + E) |

Course Schedule also works with recursive DFS. The call stack remembers where to resume, `visiting` tracks the current path, and clearing a course's prerequisite list caches successful completion. For long chains in Node.js, use iterative DFS or Kahn's queue algorithm to avoid exceeding the call stack.

## Linked lists

| Problem | How to update links | Time |
|---|---|---|
| [Reverse Linked List](blind-75/linked-lists/0206-reverse-linked-list/solution.js) | Save the next node before pointing the current node backward. Advance both references and return the head of the reversed portion. | O(n) |
| [Linked List Cycle](blind-75/linked-lists/0141-linked-list-cycle/solution.js) | Move slow and fast pointers one and two links at a time. A meeting at the same node proves a cycle. Solution shared in chat. | O(n) |
| Linked List Cycle II | After slow and fast meet, reset one pointer to the head. Advance both one link at a time. Their next meeting is the cycle entrance. Solution shared in chat. | O(n) |
| [Palindrome Linked List](blind-75/linked-lists/0234-palindrome-linked-list/solution.js) | Find the midpoint with slow and fast pointers, reverse from the midpoint, then compare from both ends. On odd lengths, including the middle compares that node with itself. | O(n) |

## Heaps

| Problem | Heap invariant | Time |
|---|---|---|
| [Top K Frequent Elements](blind-75/heaps/0347-top-k-frequent-elements/solution.js) | Count frequencies, then keep at most k values in a min-heap. Once full, replace the root only when a higher-frequency value arrives. | O(n + u log(k + 1)) average-case for n inputs and u distinct values |

The [Java practice solution](java/src/main/java/practice/heaps/TopKFrequentElements.java) uses a max-heap of all u entries and polls k times. It passes the Java suite in O(n + u log(u + 1)) average-case time and O(u) extra space.

## Backtracking

| Problem | How to explore | Time |
|---|---|---|
| [Combination Sum](java/src/main/java/practice/backtracking/CombinationSum.java) | Keep a shared path. Choose a value, recurse from the same candidate index to allow reuse, then undo the choice. Copy each path that reaches the target. | Depends on the search tree and the total length of the returned combinations |

## Tries

| Problem | What each node stores | Time |
|---|---|---|
| [Implement Trie](java/src/main/java/practice/tries/Trie.java) | Store one child reference per lowercase letter and an `isWord` flag. All operations follow the character path; exact search additionally requires `isWord` at the final node. | O(L) per operation for argument length L |

## Trees

| Pattern | Problem | Recursive meaning | Time |
|---|---|---|---|
| Postorder DFS | [Maximum Depth of Binary Tree](java/src/main/java/practice/trees/MaximumDepthOfBinaryTree.java) | The call returns the maximum depth below its node. Null contributes 0; a real node contributes 1 plus the larger child depth. | O(n) |
| Level-order BFS | [Binary Tree Level Order Traversal](java/src/main/java/practice/trees/BinaryTreeLevelOrderTraversal.java) | Snapshot the queue size before processing a level. Remove exactly that many nodes; children added during the loop belong to the next level. | O(n) |
| DFS with bounds | [Validate Binary Search Tree](java/src/main/java/practice/trees/ValidateBinarySearchTree.java) | Carry the strict range allowed by all ancestors. Going left lowers the upper bound; going right raises the lower bound. Use long bounds for int endpoint values. | O(n) |

## Pending practice

- [Subarray Sum Equals K](medium/arrays/subarray-sum-equals-k/solution.js)
- [Shortest Path in an Unweighted Graph](medium/graphs/shortest-path-unweighted-graph/solution.js)
- [Count Reachable Vertices](easy/graphs/count-reachable-vertices/solution.js)
