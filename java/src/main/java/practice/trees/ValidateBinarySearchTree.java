package practice.trees;

public final class ValidateBinarySearchTree {
    private ValidateBinarySearchTree() {}

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
     * 98. Validate Binary Search Tree (Medium)
     *
     * Return whether the entire binary tree satisfies the strict BST rule:
     * every value in a node's left subtree must be smaller than that node,
     * and every value in its right subtree must be larger. The rule applies
     * to all ancestors, not only to a node's immediate parent. Duplicates are
     * therefore invalid. An empty tree is a valid BST.
     *
     * Node values may be any Java int, including Integer.MIN_VALUE and
     * Integer.MAX_VALUE.
     *
     * Aim for O(n) time and O(h) recursion or explicit-stack space, where h
     * is the tree height.
     */
    public static boolean isValidBST(TreeNode root) {
        return isValid(root, Long.MIN_VALUE, Long.MAX_VALUE);
    }

    private static boolean isValid(TreeNode node, long lowerBound, long upperBound) {
        if (node == null) return true;

        if (node.val <= lowerBound || node.val >= upperBound) return false;

        return isValid(node.left, lowerBound, node.val)
            && isValid(node.right, node.val, upperBound);
    }
}
