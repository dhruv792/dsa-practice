package practice.trees;

import java.util.List;
import practice.trees.BinaryTreeLevelOrderTraversal.TreeNode;

public final class BinaryTreeLevelOrderTraversalTest {
    private record Case(String name, TreeNode root, List<List<Integer>> expected) {}

    public static void main(String[] args) {
        List<Case> cases = List.of(
            new Case("empty tree", null, List.of()),
            new Case("single node", new TreeNode(7), List.of(List.of(7))),
            new Case("standard example",
                new TreeNode(3, new TreeNode(9),
                    new TreeNode(20, new TreeNode(15), new TreeNode(7))),
                List.of(List.of(3), List.of(9, 20), List.of(15, 7))),
            new Case("left-only chain",
                new TreeNode(1, new TreeNode(2, new TreeNode(3), null), null),
                List.of(List.of(1), List.of(2), List.of(3))),
            new Case("right-only chain",
                new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3))),
                List.of(List.of(1), List.of(2), List.of(3))),
            new Case("incomplete tree preserves left-to-right order",
                new TreeNode(1,
                    new TreeNode(2, null, new TreeNode(5)),
                    new TreeNode(3, new TreeNode(6), null)),
                List.of(List.of(1), List.of(2, 3), List.of(5, 6))),
            new Case("repeated and negative values",
                new TreeNode(0,
                    new TreeNode(-1, new TreeNode(0), null),
                    new TreeNode(-1, null, new TreeNode(0))),
                List.of(List.of(0), List.of(-1, -1), List.of(0, 0)))
        );

        int passed = 0;
        for (Case example : cases) {
            try {
                List<List<Integer>> actual = BinaryTreeLevelOrderTraversal.levelOrder(example.root());
                if (!example.expected().equals(actual)) {
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
