Graph Valid Tree
LeetCode #261
↗
Medium

›
details
Connected + exactly n−1 edges + no cycle
Given n nodes and a list of undirected edges, determine whether the edges form a 
valid tree, meaning the graph is fully connected and contains no cycles.

  // core concept
  A valid tree is a connected, undirected graph with no cycles.
n = vertice = node 
edge = connection between nodes undircted mean a to b   same b to a
 n = 5
edges = {
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 4]
}


Q: what makes a graph a tree?
  tree is a special type of graph that satisfies two fundamental properties.
PROP A:  Every vertex must be reached from every other vertex .  connected graph : 
        connectivity measures the entire graph belongs to one connectde component
in disconnected graph you cannot raech to specific node through pass on ithers,

 PROB  B:  a cycle is a path that starts from vertex/node eventually returns ti the same vertex through different route.

  why does a tree prohibit cycle. ? tree must have exactly one unque simple path between any two vertices.\
  if there is two diffrent routes between two  vertices those vertices create cycle.

  this is an important Geo-theory invatiant.

  A undirected graph with n vertices/nodes is a tree if and only if when its connected thrugh n - 1 edges between of them,

  1: check the edges length 
2: run dfs from any vertex
3: check dfs reaches all n vertices

if both condittion pass this is a tree.

  


