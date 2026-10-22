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

function checkBruteForceDfs(root){

  if(root === null) return right;

  function findMax(node){
   if(node === null) return -Infinity;

    return Math.max(
      node.val, 
      findMax(node.left), 
      findMax(node.right));
    
  }

  function findMin(node){
    if(node === null) return Infinity;

    return Math.min(node.val, findMin(node.left), findMin(node.right))
  }

  const leftCal = findMax(root.left);
  const rightCal = findMin(root.right);

  if (maxLeft >= root.val || minRight <= root.val) {
    return false;
  }
  return checkBruteForceDfs(root.left) && checkBruteForceDfs(root.right)
}






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

//


Binary Tree Tilt
LeetCode #563
↗
Easy
✓ Solved

›
details
Post-order: return subtree sums, accumulate |L − R|
Given the root of a binary tree, return the sum of every node's tilt, where a node's tilt is the absolute difference 
between the total value of its left subtree and the total value of its right subtree.

  
function subtreeSum(node) {
  if (node === null) {
    return 0;
  }
return (
    node.val +
    subtreeSum(node.left) +
    subtreeSum(node.right)
  );
}

