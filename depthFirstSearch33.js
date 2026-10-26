Invert Binary Tree
LeetCode #226
↗
Easy

›
details
Pre-order DFS, swap every node's children
Given the root of a binary tree, invert it (mirror it left-to-right) and return the root. The interview classic that, 
per legend, once tripped up a well-known whiteboard candidate.

  function invert(root){

   if(root === null) return null;

   [root.left, root.right] = [root.right, root.left];

   invert(root.left);
   invert(root.right);
    return root;
}
