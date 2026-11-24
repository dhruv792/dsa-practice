package practice.trees;

public final class KthSmallestElementInBST {
    private KthSmallestElementInBST() {}

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
     * 230. Kth Smallest Element in a BST (Medium)
     *
     * Given the root of a valid binary search tree and a one-based integer k,
     * return the kth smallest node value. The tree is nonempty, contains no
     * duplicate values, and 1 <= k <= the number of nodes.
     *
     * For a BST containing [1, 2, 3, 4], k = 1 returns 1 and k = 4 returns 4.
     * Do not modify the tree.
     *
     * Aim for O(h + k) time with O(h) auxiliary space, where h is the tree
     * height. Avoid collecting and sorting all values.
     */
    public static int kthSmallest(TreeNode root, int k) {
        throw new UnsupportedOperationException("Implement kthSmallest");
    }
}
