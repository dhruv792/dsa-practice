package practice.dynamicprogramming;

import java.util.List;

public final class ClimbingStairsTest {
    private record Case(String name, int n, int expected) {}

    public static void main(String[] args) {
        List<Case> cases = List.of(
            new Case("one step", 1, 1),
            new Case("two steps", 2, 2),
            new Case("three steps", 3, 3),
            new Case("four steps", 4, 5),
            new Case("five steps", 5, 8),
            new Case("ten steps", 10, 89),
            new Case("twenty steps", 20, 10946),
            new Case("largest allowed input", 45, 1836311903)
        );

        int passed = 0;
        for (Case example : cases) {
            try {
                int actual = ClimbingStairs.climbStairs(example.n());
                if (example.expected() != actual) {
                    throw new AssertionError("Expected " + example.expected() + ", received " + actual);
                }
                passed++;
                System.out.println("PASS " + example.name());
            } catch (AssertionError | RuntimeException error) {
                System.err.println("FAIL " + example.name() + " — " + error.getMessage());
            }
        }

        System.out.printf("%d/%d passed%n", passed, cases.size());
        if (passed != cases.size()) System.exit(1);
    }
}
