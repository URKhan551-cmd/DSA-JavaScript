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

Output:
A
B
D
E
C
