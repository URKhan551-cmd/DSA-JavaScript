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
