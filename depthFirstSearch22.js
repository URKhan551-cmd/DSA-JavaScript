Validate Binary Search Tree
LeetCode #98
↗
Medium
✓ Solved

›
details
Carry (low, high) bounds down
Given the root of a binary tree, determine whether it is a valid binary search tree, 
where every node in a left subtree is strictly less than its parent and every node in a right subtree is strictly greater.



function checkDfs(root){
  function dfs(node, low, high){
  if(node === null) return true;
  if(node.val <= low || node.val >= high){
 return false;
}

return (
 dfs(node.left, low, node.val) &&
 dfs(node.right, node.val, high)
);

}
return dfs(root, -Infinity, Infinity);
}
