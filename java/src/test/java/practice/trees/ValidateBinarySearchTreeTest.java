package practice.trees;

import java.util.List;
import practice.trees.ValidateBinarySearchTree.TreeNode;

public final class ValidateBinarySearchTreeTest {
    private record Case(String name, TreeNode root, boolean expected) {}

    public static void main(String[] args) {
        List<Case> cases = List.of(
            new Case("empty tree", null, true),
            new Case("single node", new TreeNode(8), true),
            new Case("valid three-node tree",
                new TreeNode(2, new TreeNode(1), new TreeNode(3)), true),
            new Case("invalid immediate left child",
                new TreeNode(2, new TreeNode(4), new TreeNode(5)), false),
            new Case("invalid immediate right child",
                new TreeNode(2, new TreeNode(1), new TreeNode(0)), false),
            new Case("deep node violates root lower bound",
                new TreeNode(5, new TreeNode(1),
                    new TreeNode(6, new TreeNode(3), new TreeNode(7))), false),
            new Case("deep node violates root upper bound",
                new TreeNode(10,
                    new TreeNode(5, new TreeNode(2), new TreeNode(12)),
                    new TreeNode(15)), false),
            new Case("duplicate child is invalid",
                new TreeNode(2, new TreeNode(2), new TreeNode(3)), false),
            new Case("valid unbalanced tree",
                new TreeNode(8,
                    new TreeNode(3, new TreeNode(1),
                        new TreeNode(6, new TreeNode(4), new TreeNode(7))),
                    new TreeNode(10, null,
                        new TreeNode(14, new TreeNode(13), null))), true),
            new Case("integer endpoints are valid",
                new TreeNode(0, new TreeNode(Integer.MIN_VALUE),
                    new TreeNode(Integer.MAX_VALUE)), true)
        );

        int passed = 0;
        for (Case example : cases) {
            try {
                boolean actual = ValidateBinarySearchTree.isValidBST(example.root());
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
