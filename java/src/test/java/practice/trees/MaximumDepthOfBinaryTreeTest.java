package practice.trees;

import java.util.List;
import practice.trees.MaximumDepthOfBinaryTree.TreeNode;

public final class MaximumDepthOfBinaryTreeTest {
    private record Case(String name, TreeNode root, int depth) {}

    public static void main(String[] args) {
        List<Case> cases = List.of(
            new Case("empty tree", null, 0),
            new Case("single node", new TreeNode(1), 1),
            new Case("balanced tree", new TreeNode(1, new TreeNode(2), new TreeNode(3)), 2),
            new Case("deeper left branch",
                new TreeNode(1, new TreeNode(2, new TreeNode(3), null), new TreeNode(4)), 3),
            new Case("deeper right branch",
                new TreeNode(1, new TreeNode(2), new TreeNode(3, new TreeNode(4), null)), 3),
            new Case("right-only chain",
                new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3, null, new TreeNode(4)))), 4),
            new Case("repeated values at different depths",
                new TreeNode(0, new TreeNode(0, null, new TreeNode(0)), new TreeNode(0)), 3)
        );

        int passed = 0;
        for (Case example : cases) {
            try {
                int actual = MaximumDepthOfBinaryTree.maxDepth(example.root());
                if (example.depth() != actual) {
                    throw new AssertionError("Expected " + example.depth() + ", received " + actual);
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
