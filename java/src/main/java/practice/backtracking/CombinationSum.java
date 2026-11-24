package practice.backtracking;

import java.util.ArrayList;
import java.util.List;

public final class CombinationSum {
	private CombinationSum() {
	}

	/**
	 * 39. Combination Sum (Medium)
	 *
	 * Return all unique combinations of distinct positive candidate values
	 * that sum to target. You may use each candidate any number of times.
	 * Order within a combination and order between combinations are arbitrary.
	 *
	 * For candidates = [2, 3, 6, 7] and target = 7, one valid result is
	 * [[2, 2, 3], [7]]. The combinations [2, 2, 3] and [3, 2, 2] are the same.
	 * Return an empty list when no combination reaches the target.
	 *
	 * Assume target is positive. Aim to visit each combination once and
	 * stop exploring any choice that would exceed the remaining target.
	 */
	public static List<List<Integer>> combinationSum(int[] candidates, int target) {
		List<List<Integer>> res = new ArrayList<>();

		List<Integer> path = new ArrayList<>();

		backtrack(candidates, 0, target, path, res);

		return res;
	}

	private static void backtrack(
			int[] candidates,
			int start,
			int remaining,
			List<Integer> path,
			List<List<Integer>> result) {
		if (remaining == 0) {
			result.add(new ArrayList<>(path));
			return;
		}

		for (int i = start; i < candidates.length; i++) {
			int choice = candidates[i];

			if (choice > remaining) continue;

			path.add(choice);

			backtrack(candidates, i, remaining - choice, path, result);

			path.removeLast();
		}
	}
}
