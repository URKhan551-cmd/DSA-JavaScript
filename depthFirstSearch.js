function dfsIterative(root) {
    if (root === null) return;

    const stack = [root];

    while (stack.length > 0) {
        const node = stack.pop();

        console.log(node.value);

        if (node.right !== null) {
            stack.push(node.right);
        }

        if (node.left !== null) {
            stack.push(node.left);
        }
    }
}

Our goal is to visit the nodes in this order:

1 → 2 → 4 → 5 → 3 → 6 → 7


//

Fundamentals   // this will give us how many nodes count
✓ Solved

›
details
The recursion template: base case → recurse → combine

function dfs(node){
if(node === null) return 0;

const left = dfs(node.left);
const right = dfs(node.right);

return 1 + left + right;

}


    //

Return Values   // how much the sum of each node value

›
details
Bubbling answers UP with post-order

function depthFirstSearch(node){
 if(node === null){
 return 0;
}

const left = depthFirstSearch(node.left);
const right = depthFirstSearch(node.right);

return node.value + left + right;
}


Notice that the leaf nodes return their own values because both children contribute 0.
3. Why this is post-order
The function processes the left subtree first, then the right subtree, and only then combines their results with the current node's value.

That is post-order processing: left → right → current node.

The values bubble back up through the recursive call stack until the root returns the total.
4. Complexity
- Time: \(O(n)\) — each node is visited once.
- Auxiliary space: \(O(h)\) — the recursion stack depends on the tree height, reaching \(O(n)\) for a skewed tree.


    //

    Maximum Depth of Binary Tree
LeetCode #104
↗
Easy

›
details
Depth = 1 + max(left, right)
Given the root of a binary tree, return its maximum depth: the number of nodes along the 
    longest path from the root down to the farthest leaf.

        
function dfs22(node){
if(node === null){
 return 0;
}

const left = dfs(node.left);
const = right = dfs(node.right);

return 1 + Math.max(left, right);
}




    // problem 4
Path Sum
LeetCode #112
↗
Easy
✓ Solved

›
details
Root-to-leaf sum == target · carry the remainder down
Given the root of a binary tree and a target sum, return true if there is a 
root-to-leaf path whose node values add up exactly to the target, and false otherwise.

// typescript

type TreeNode = { val: number; left: TreeNode | null; right: TreeNode | null }
function hasPathSum(root: TreeNode | null, target: number): boolean {
  if (!root) return false;
  if (!root.left && !root.right) return target === root.val;
  const rem = target - root.val;
  return hasPathSum(root.left, rem) || hasPathSum(root.right, rem);
}


    //


function dfsPathSum(root, targetSum) {
    if (root === null) {
        return false;
    }

    const remaining = targetSum - root.val;

    // A leaf must finish the sum exactly.
    if (root.left === null && root.right === null) {
        return remaining === 0;
    }

    // Either subtree may contain a valid path.
    return (
        hasPathSum(root.left, remaining) ||
        hasPathSum(root.right, remaining)
    );
}


//
class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(
        val = 0,
        left: TreeNode | null = null,
        right: TreeNode | null = null
    ) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function dfsTreeNodeSUm(
    root: TreeNode | null,
    targetSum: number
): boolean {
    if (root === null) {
        return false;
    }

    const remaining = targetSum - root.val;

    if (root.left === null && root.right === null) {
        return remaining === 0;
    }

    return (
        hasPathSum(root.left, remaining) ||
        hasPathSum(root.right, remaining)
    );
}


    //
    // GOLANG
Go solution
// Go uses pointers to represent tree nodes and nil to represent a missing child.
func dfsGoPathSum(root *TreeNode, targetSum int) bool {
    if root == nil {
        return false
    }

    remaining := targetSum - root.Val

    if root.Left == nil && root.Right == nil {
        return remaining == 0
    }

    return hasPathSum(root.Left, remaining) ||
        hasPathSum(root.Right, remaining)
}


// In Path Sum (LeetCode #112), we are given a binary tree and a targetSum. Our job is to check whether there is a path 
// from the root node to a leaf node where the sum of all node values equals the target. 
// A root is the first node of the tree, and a leaf is a node that has no left or right child. 
// We must follow one connected path downward; we cannot add values from different branches.

// We solve this problem using Depth-First Search (DFS), which means exploring one branch as far as 
// possible before moving to another branch. At each node, we subtract its value from the targetSum and continue 
// to its children with the remaining sum. For example, if the target is 22 and the path contains 5 → 4 → 11 → 2, 
// the total is \(5+4+11+2=22\). Since this path reaches a leaf and the sum matches the target, we return true.

// There are two important conditions. First, if the current node is null, there is no path through it, 
// so we return false. Second, if we reach a leaf, we check whether its value equals the remaining target; 
// if it does, we return true, otherwise false. If neither condition applies, we recursively check the left 
// and right children. If either side finds a valid path, the answer is true; if both fail, the answer is false.

// Every invocation has a small responsibility:
1. Receive one node.
2. Stop if that node is null.
3. Process the current node.
4. Explore its left subtree completely.
5. Resume and explore its right subtree completely.
6. Return to the caller.

    
//

Concept
Passing Values Down and Up
✓ Solved

›
details
Parameters go down, returns come up

function dfsValuesDown(node, sum){
if(node === null) return 0;

sum += node.val;

const left = dfsValuesDown(node.left, sum);
const right = dfsValuesDown(node.right, sum);

return 1 + Math.max(left, right);
}

