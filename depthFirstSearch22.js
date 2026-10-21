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
