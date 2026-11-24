package practice.backtracking;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

public final class CombinationSumTest {
    private record Case(String name, int[] candidates, int target, Set<List<Integer>> expected) {}

    public static void main(String[] args) {
        List<Case> cases = List.of(
            new Case("single choice or repeated candidates",
                new int[]{2, 3, 6, 7}, 7, Set.of(List.of(2, 2, 3), List.of(7))),
            new Case("several combinations with different lengths",
                new int[]{4, 2}, 8, Set.of(List.of(2, 2, 2, 2), List.of(2, 2, 4), List.of(4, 4))),
            new Case("use one candidate three times", new int[]{3, 5}, 9, Set.of(List.of(3, 3, 3))),
            new Case("all candidates exceed the target", new int[]{4, 8}, 3, Set.of()),
            new Case("no candidates", new int[]{}, 5, Set.of()),
            new Case("exact match without reusing a candidate", new int[]{5, 9}, 5, Set.of(List.of(5)))
        );

        int passed = 0;
        for (Case example : cases) {
            try {
                verify(example);
                passed++;
                System.out.println("PASS " + example.name());
            } catch (AssertionError | RuntimeException error) {
                System.err.println("FAIL " + example.name() + " — " + error.getMessage());
            }
        }

        System.out.printf("%d/%d passed%n", passed, cases.size());
        if (passed != cases.size()) System.exit(1);
    }

    private static void verify(Case example) {
        List<List<Integer>> actual = CombinationSum.combinationSum(example.candidates(), example.target());
        Set<List<Integer>> normalized = new HashSet<>();
        for (List<Integer> combination : actual) {
            if (!normalized.add(combination.stream().sorted().toList())) {
                throw new AssertionError("Duplicate combination: " + combination);
            }
        }
        if (!normalized.equals(example.expected())) {
            throw new AssertionError("Expected " + example.expected() + ", received " + actual);
        }
    }
}
