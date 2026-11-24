package practice.trees;

import java.util.List;
import practice.trees.KthSmallestElementInBST.TreeNode;

public final class KthSmallestElementInBSTTest {
    private record Case(String name, TreeNode root, int k, int expected) {}

    public static void main(String[] args) {
        TreeNode standard = new TreeNode(3,
            new TreeNode(1, null, new TreeNode(2)),
            new TreeNode(4));

        TreeNode larger = new TreeNode(5,
            new TreeNode(3,
                new TreeNode(2, new TreeNode(1), null),
                new TreeNode(4)),
            new TreeNode(7, new TreeNode(6), new TreeNode(9,
                new TreeNode(8), null)));

        List<Case> cases = List.of(
            new Case("single node", new TreeNode(42), 1, 42),
            new Case("smallest is deep left", standard, 1, 1),
            new Case("interior value", standard, 2, 2),
            new Case("largest is right child", standard, 4, 4),
            new Case("root is kth value", larger, 5, 5),
            new Case("deep right interior value", larger, 8, 8),
            new Case("maximum value", larger, 9, 9),
            new Case("negative values",
                new TreeNode(-3, new TreeNode(-10), new TreeNode(-1)), 2, -3),
            new Case("integer endpoints",
                new TreeNode(0, new TreeNode(Integer.MIN_VALUE),
                    new TreeNode(Integer.MAX_VALUE)), 3, Integer.MAX_VALUE)
        );

        int passed = 0;
        for (Case example : cases) {
            try {
                int actual = KthSmallestElementInBST.kthSmallest(example.root(), example.k());
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
