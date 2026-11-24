package practice.heaps;

import java.util.Arrays;
import java.util.List;

public final class TopKFrequentElementsTest {
    private record Case(String name, int[] nums, int k, int[][] accepted) {}

    public static void main(String[] args) {
        List<Case> cases = List.of(
            new Case("distinct frequencies", new int[]{1, 1, 1, 2, 2, 3}, 2, new int[][]{{1, 2}}),
            new Case("negative value wins", new int[]{-1, -1, 2}, 1, new int[][]{{-1}}),
            new Case("keep all distinct values", new int[]{3, 3, 2, 1}, 3, new int[][]{{1, 2, 3}}),
            new Case("tie at the cutoff", new int[]{4, 4, 7, 8}, 2, new int[][]{{4, 7}, {4, 8}}),
            new Case("tie below the cutoff", new int[]{4, 4, 4, 1, 2}, 1, new int[][]{{4}}),
            new Case("single value", new int[]{0}, 1, new int[][]{{0}}),
            new Case("both value bounds", new int[]{-10_000, 0, 10_000, 10_000, -10_000}, 2,
                new int[][]{{-10_000, 10_000}}),
            new Case("higher frequencies arrive after the heap fills",
                new int[]{1, 2, 3, 4, 5, 6, 7, 5, 6, 6, 7, 7, 7}, 3, new int[][]{{5, 6, 7}})
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
        int[] actual = TopKFrequentElements.topKFrequent(example.nums(), example.k());
        if (actual == null) throw new AssertionError("Expected an array, received null");

        Arrays.sort(actual);
        for (int[] accepted : example.accepted()) {
            if (Arrays.equals(actual, accepted)) return;
        }

        throw new AssertionError(
            "Expected one of " + Arrays.deepToString(example.accepted()) + ", received " + Arrays.toString(actual)
        );
    }
}
