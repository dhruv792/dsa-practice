package practice.heaps;

import java.util.Comparator;
import java.util.HashMap;
import java.util.Map;
import java.util.PriorityQueue;

public final class TopKFrequentElements {
	private TopKFrequentElements() {
	}

	/**
	 * 347. Top K Frequent Elements (Medium)
	 *
	 * Return the k distinct integers with the highest frequencies. Result order
	 * is arbitrary. If values tie at the cutoff, any valid selection is allowed.
	 *
	 * nums contains 1 to 100,000 integers in [-10,000, 10,000].
	 * k is between 1 and the number of distinct values, inclusive.
	 *
	 * For nums = [1, 1, 1, 2, 2, 3] and k = 2, return [1, 2] in either order.
	 * The value 1 occurs three times and 2 occurs twice.
	 *
	 * Practice a min-heap of size at most k using Java's PriorityQueue.
	 * Aim for O(n + u log(k + 1)) average-case time and O(u + k) extra space,
	 * where n is nums.length and u is the number of distinct values.
	 */
	public static int[] topKFrequent(int[] nums, int k) {

		Map<Integer, Integer> counts = new HashMap<>();

		for (int num : nums) {
			counts.put(num, counts.getOrDefault(num, 0) + 1);
		}

		PriorityQueue<Map.Entry<Integer, Integer>> heap = new PriorityQueue<>(
				(a, b) -> Integer.compare(b.getValue(), a.getValue()));

		heap.addAll(counts.entrySet());
		int[] res = new int[k];
		for (int i = 0; i < k; i++) {
			Map.Entry<Integer, Integer> x = heap.poll();
			res[i] = x.getKey();
		}

		return res;
	}
}
