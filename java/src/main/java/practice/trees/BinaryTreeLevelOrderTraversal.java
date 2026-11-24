package practice.trees;

import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.List;
import java.util.Queue;

public final class BinaryTreeLevelOrderTraversal {
    private BinaryTreeLevelOrderTraversal() {}

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
     * 102. Binary Tree Level Order Traversal (Medium)
     *
     * Return the values of a binary tree one depth at a time, from left to
     * right within each depth. Return an empty list for an empty tree.
     *
     * For the tree 3 with children 9 and 20, where 20 has children 15 and 7,
     * return [[3], [9, 20], [15, 7]].
     *
     * Aim for O(n) time and O(w) queue space, where n is the number of nodes
     * and w is the maximum number of nodes at any single level.
     */
    public static List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> res = new ArrayList<>();
        if (root==null) return res;
        Queue<TreeNode> queue = new ArrayDeque<>();

        queue.add(root);

        while(!queue.isEmpty()){
            int levelSize = queue.size();
            List<Integer> currentLevel = new ArrayList<>();

            for(int i=0;i<levelSize;i++){
                TreeNode x = queue.poll();
                currentLevel.add(x.val);
                if (x.left != null)
                    queue.add(x.left);
                if(x.right != null)
                    queue.add(x.right);
            }
            res.add(currentLevel);
        }
        return res;





    }
}
