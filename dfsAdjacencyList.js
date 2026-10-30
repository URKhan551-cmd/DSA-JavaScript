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
