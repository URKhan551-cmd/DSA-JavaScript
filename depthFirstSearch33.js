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


function dfs(root){
let maxSum = -Infinity;
function dfs2(node){
if(node === null) return 0;

let left = dfs2(node.left);
let right = dfs2(node.right);

let leftgain = Math.max(0, left);  // it has been check the left.val is 0 or holds some value; if have some value get it
let rightgain = Math.max(0, right); // same as like the upper one
let currentPathSum = node.val + leftgain + rightgain;   
maxSum = Math.max(maxSum, currentPathSum);
return node.val + Math.max(leftgain, rightgain);

}
dfs2(root)
return maxSum
}

// So when calculating the best path through 5, we should ignore the negative contribution from its left child.
// This is the idea behind clamping negative gains to zero.
// Conceptually:
// \[
// \text{usable gain} = \max(0,\text{child gain})
// \]
// If a subtree contributes -10, its usable gain becomes 0.
// If it contributes 6, its usable gain remains 6.
// Why zero?
// Because the path can omit that branch entirely. Omitting a branch contributes nothing; including a negative branch reduces the total.




  //

Graphs Overview
✓ Solved

›
details
Nodes, edges, and why DFS needs a visited set

  function graphsDetail(graphs, node, visited = new Set()){
if(visited.has(node)){
 return;
}

visited.add(node);
console.log(node);
for(let neighbor of graphs[node]){
 graphsDetail(graphs, neighbor, visited);
}
}


  //


Serialize and Deserialize Binary Tree
LeetCode #297
↗
Hard
✓ Solved

›
details
Pre-order with null markers, then rebuild from the stream
Design an algorithm to serialize a binary tree to a string and deserialize that 
string back into the identical tree. There is no restriction on the encoding/decoding format.

  
var Codec = function () {};

Codec.prototype.serialize = function (root) {
    const result = [];

    function dfs(node) {
        if (node === null) {
            result.push("#");
            return;
        }

        result.push(String(node.val));

        dfs(node.left);
        dfs(node.right);
    }

    dfs(root);

    return result.join(",");
};

Codec.prototype.deserialize = function (data) {
    const nodes = data.split(",");
    let index = 0;

    function buildTree() {
        const value = nodes[index++];

        if (value === "#") {
            return null;
        }

        const node = new TreeNode(Number(value));

        node.left = buildTree();
        node.right = buildTree();

        return node;
    }
   return buildTree;
}
