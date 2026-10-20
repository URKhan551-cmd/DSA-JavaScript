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




    //

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
func hasPathSum(root *TreeNode, targetSum int) bool {
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
