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
