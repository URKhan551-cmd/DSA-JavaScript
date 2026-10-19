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
