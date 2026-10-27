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


//

Same Tree
LeetCode #100
↗
Easy

›
details
Lockstep pre-order DFS over both trees
Given the roots of two binary trees p and q, return true if they are structurally identical 
and every corresponding pair of nodes has the same value.

  function sameTree(proot, qroot){
 if(proot === null && qroot === null)return true;
if(proot === null || qroot === null)return false;

if(proot.val !== qroot.val) return false;
return (
 sameTree(proot.left, qroot.left) &&
 sameTree(proot.right, qroot.right);
)

}


  //

Binary Tree Maximum Path Sum
LeetCode #124
↗
Hard
✓ Solved

›
details
Post-order gains · clamp negative arms
Given the root of a binary tree, return the maximum sum of any non-empty path. 
A path is a sequence of connected nodes and need not pass through the root.
