package practice.trees;

public final class MaximumDepthOfBinaryTree {
    private MaximumDepthOfBinaryTree() {}

    public static final class TreeNode {
        public final int val;
        public TreeNode left;
        public TreeNode right;

        public TreeNode(int val) {
            this(val, null, null);
        }

        public TreeNode(int val, TreeNode left, TreeNode right) {
            this.val = val;
            this.left = left;
            this.right = right;
        }
    }

    /**
     * 104. Maximum Depth of Binary Tree (Easy)
     *
     * Given the root of a binary tree, return the number of nodes on its
     * longest root-to-leaf path. Each node has up to two children. A missing
     * child is null. A leaf has no children. An empty tree has depth 0.
     *
     * If root 1 has children 2 and 3, and 3 has a child 4, return 3.
     * The longest path is 1 → 3 → 4, with three nodes and two edges.
     *
     * Aim for O(n) time, where n is the number of nodes.
     */
    public static int maxDepth(TreeNode root) {
        if (root == null) return 0;
        return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));

    }
}
