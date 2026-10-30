function buildGraph(edges) {
  const graph = {};

  for (const [a, b] of edges) {
    // Ensure both nodes have neighbor arrays.
    if (!graph[a]) {
      graph[a] = [];
    }

    if (!graph[b]) {
      graph[b] = [];
    }

    // Add the undirected connection in both directions.
    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
}

const edges = [
  ["A", "B"],
  ["A", "C"],
  ["B", "D"],
  ["C", "D"],
];

console.log(buildGraph(edges));


//

// A shorter way to initialize adjacency lists
// You may encounter this pattern:

function createGraph2(edges) {
  const graph = {};

  for (const [a, b] of edges) {
    graph[a] ??= [];
    graph[b] ??= [];

    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
}

// The operator:
// graph[a] ??= [];

// means approximately:
// If graph[a] is null or undefined, assign an empty array to it.

// It is shorthand for the explicit initialization check.

// For example:
// const graph = {};

// graph["A"] ??= [];

// graph["A"].push("B");

// console.log(graph);

// Output:
// {
//   A: ["B"]
// }

// For learning purposes, the longer version is useful because it makes the initialization process explicit.
// Once you understand it, the shorter version is equally valid.


for (const [from, to] of edges) {
    if (!graph[from]) {
      graph[from] = [];
    }

    if (!graph[to]) {
      graph[to] = [];
    }

    graph[from].push(to);
  }

  return graph;
}

const edges = [
  ["A", "B"],
  ["B", "C"],
];

console.log(buildDirectedGraph(edges));

Output:
{
  A: ["B"],
  B: ["C"],
  C: []
}

// Notice that we initialize both nodes:
if (!graph[from]) {
  graph[from] = [];
}

if (!graph[to]) {
  graph[to] = [];
}

// But we only add the outgoing connection:

// But we only add the outgoing connection:
// graph[from].push(to);

// We do not write:
// graph[to].push(from);

// That would introduce a reverse edge that the original graph does not contain.


// new implementation 
Weighted graphs: What if edges have costs?
Not every connection is identical.

Consider a flight network:
Dubai -------- Abu Dhabi
       140 km

// Or a computer network in which each connection has a latency.

// The graph may assign a value to each edge.

// That value is called a weight.

function buildWeightedGraph(edges) {
  const graph = {};

  for (const [a, b, weight] of edges) {
    if (!graph[a]) {
      graph[a] = [];
    }

    if (!graph[b]) {
      graph[b] = [];
    }

    graph[a].push({
      node: b,
      weight: weight,
    });

    graph[b].push({
      node: a,
      weight: weight,
    });
  }

  return graph;
}

const edges = [
  ["Dubai", "Abu Dhabi", 140],
  ["Dubai", "Sharjah", 30],
  ["Sharjah", "Abu Dhabi", 160],
];

const graph = buildWeightedGraph(edges);

console.log(graph);

// A traversal can now examine the weight when necessary.

// However, remember that storing weights and finding the minimum-cost path are different tasks.

// An adjacency list stores the graph's structure. Algorithms such as Dijkstra's algorithm use that structure to calculate shortest paths when their assumptions are satisfied.

const nodes = ["A", "B", "C", "D", "E"];

const edges = [
  ["A", "B"],
  ["D", "E"],
];

// We can initialize every node before processing the edges:
function makingGraph(nodes, edges) {
  const graph = {};

  for (const node of nodes) {
    graph[node] = [];
  }

  for (const [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
}

console.log(makingGraph(nodes, edges));

Output:
{
  A: ["B"],
  B: ["A"],
  C: [],
  D: ["E"],
  E: ["D"]
}

// This is a robust approach when the problem explicitly provides the complete set of nodes.

// Important: If nodes are known only through the edge list, an isolated node cannot be discovered from the edges alone. 
// The input must provide that node separately.


//

Using an adjacency list with DFS
Now let's connect graph representation to graph traversal.

Suppose we have:
const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "E"],
  D: ["B", "E"],
  E: ["C", "D"],
};

// We want to visit every node reachable from A.
// Here is the DFS implementation:
function dfs(graph, start) {
  const visited = new Set();

  function visit(node) {
    if (visited.has(node)) {
      return;
    }

    visited.add(node);

    console.log(node);

    for (const neighbor of graph[node]) {
      visit(neighbor);
    }
  }

  visit(start);
}

dfs(graph, "A");

// Output:
// A
// B
// D
// E
// C


//

. An important distinction: An adjacency list does not guarantee reachability
Consider:
const graph = {
  A: ["B"],
  B: ["A"],
  C: ["D"],
  D: ["C"],
};

The graph has two connected components:
A ----- B

C ----- D

Calling:
dfs(graph, "A");

will visit A and B, but not C and D.

The adjacency list tells us how the graph is connected. It does not mean that every node is reachable from every other node.

If the task requires visiting every node, we can iterate over the nodes and start DFS from every unvisited node.
function dfsAll(graph) {
  const visited = new Set();

  function visit(node) {
    if (visited.has(node)) {
      return;
    }

    visited.add(node);

    for (const neighbor of graph[node]) {
      visit(neighbor);
    }
  }

  for (const node of Object.keys(graph)) {
    visit(node);
  }

  return visited;
}

console.log([...dfsAll(graph)]);

// The outer loop finds nodes that have not yet been reached by earlier traversals.

// For an undirected graph, this approach can identify all connected components.

// For directed graphs, reachability and component structure require more careful definitions.


// ADJACENCY MATRIX
13. Adjacency list versus adjacency matrix
An adjacency list is not the only way to store a graph.

Another common representation is an adjacency matrix.

Let's compare them using the same graph:
A ----- B
|
C

The undirected edges are:
const edges = [
  ["A", "B"],
  ["A", "C"],
];

13.1 Adjacency list
const graph = {
  A: ["B", "C"],
  B: ["A"],
  C: ["A"],
};

We store each node alongside its neighbors.
13.2 Adjacency matrix
A matrix represents every possible pair of nodes.

First, choose an ordering:
const nodes = ["A", "B", "C"];

Then create a matrix:
        A        B        C
A        0        1        1
B        1        0        0
C        1        0        0


A value of 1 means an edge exists. A value of 0 means no edge exists.

In JavaScript:
const matrix = [
  [0, 1, 1],
  [1, 0, 0],
  [1, 0, 0],
];

With this node ordering:
- Row 0 represents A.
- Row 1 represents B.
- Row 2 represents C.
To check whether A connects to C:
console.log(matrix[0][2]);

Output:
1

To check whether B connects to C:
console.log(matrix[1][2]);

Output:
0

// Which is better?
// Neither representation is universally better.

// The choice depends on the graph's structure and the operations you need.
// Property        Adjacency list        Adjacency matrix
// Storage        Proportional to nodes and edges        Proportional to the square of the number of nodes
// Check whether an edge exists        Usually requires searching the relevant neighbor list        Constant-time matrix lookup
// Iterate through one node's neighbors        Efficient for sparse graphs        Requires scanning the entire row
// Best suited to        Often sparse graphs        Often dense graphs or frequent edge-existence checks
// DFS/BFS        Very common        Also possible


// For an adjacency list, retrieving a node's neighbor array from a JavaScript object or Map is typically expected to take \(O(1)\) time. Iterating through its neighbors takes time proportional to the number of neighbors.

// For an adjacency matrix, checking an edge is \(O(1)\), but finding all neighbors of a node requires scanning its entire row, which takes \(O(V)\) time.
