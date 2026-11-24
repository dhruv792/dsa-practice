import { runSolution } from '../../../run-solution.js';

/**
 * 347. Top K Frequent Elements (Medium)
 *
 * Return k distinct values occurring most often in nums, in any order. k is
 * valid. If frequencies tie at the cutoff, any valid selection is allowed.
 *
 * Constraints:
 * - 1 <= nums.length <= 100,000
 * - Each nums[i] is an integer from -10,000 through 10,000, inclusive.
 * - 1 <= k <= the number of distinct values in nums.
 *
 * Worked example
 * For nums = [1, 1, 1, 2, 2, 3] and k = 2, return [1, 2] or [2, 1]. The
 * counts are three for 1, two for 2, and one for 3, so 1 and 2 are the two
 * most frequent values.
 *
 * Function: topKFrequent(nums, k)
 * Expected complexity: O(n) average-case with frequency buckets, or O(n + u
 * log(k + 1)) average-case with a heap, where n is nums.length, u is the number
 * of distinct values, and k is the requested result size.
 */
export function topKFrequent(nums, k) {
  const counts = new Map();
  for (const value of nums) {
    counts.set(value, (counts.get(value) ?? 0) + 1);
  }

  // The root is the least frequent of the values currently kept.
  const heap = [];
  for (const [value, frequency] of counts) {
    if (heap.length < k) {
      heap.push({ value, frequency });
      siftUp(heap, heap.length - 1);
    } else if (frequency > heap[0].frequency) {
      heap[0] = { value, frequency };
      siftDown(heap);
    }
  }

  return heap.map(entry => entry.value);
}

function siftUp(heap, index) {
  const entry = heap[index];
  while (index > 0) {
    const parent = Math.floor((index - 1) / 2);
    if (heap[parent].frequency <= entry.frequency) break;

    heap[index] = heap[parent];
    index = parent;
  }
  heap[index] = entry;
}

function siftDown(heap) {
  const entry = heap[0];
  let index = 0;
  let left = 1;

  while (left < heap.length) {
    const right = left + 1;
    let child = left;
    if (right < heap.length && heap[right].frequency < heap[left].frequency) {
      child = right;
    }
    if (entry.frequency <= heap[child].frequency) break;

    heap[index] = heap[child];
    index = child;
    left = 2 * index + 1;
  }
  heap[index] = entry;
}

runSolution(import.meta.url, topKFrequent, {
  examples(assert) {
    // Uncomment an assertion and run this file without arguments.
    // assert.deepEqual(topKFrequent([1,1,1,2,2,3], 2).sort((a,b) => a-b), [1,2]);
    // assert.deepEqual(topKFrequent([-1,-1,2],1), [-1]);
    // assert.deepEqual(topKFrequent([3,3,2,1],3).sort((a,b) => a-b), [1,2,3]);
    // { const result = topKFrequent([4,4,7,8], 2); assert.equal(result.length, 2); assert.ok(result.includes(4)); assert.ok(result.includes(7) || result.includes(8)); }
    // assert.deepEqual(topKFrequent([4,4,4,1,2],1), [4]);
    // assert.deepEqual(topKFrequent([0],1), [0]);
  },
});
