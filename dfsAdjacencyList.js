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
