var FibonacciHeap = require('fibonacci-heap').FibonacciHeap, deepEqual = require('deep-equal'), stringify = require('json-stable-stringify');

function dijkstra(graph, source) {

  var queue = new FibonacciHeap();
  var dist = {}, prev = {};
  dist[stringify(source)] = 0;

  graph.vertices.forEach(function(vertex) {

    var key = stringify(vertex);
    
    if (!deepEqual(vertex, source)) {
      dist[key] = Infinity;
      prev[key] = null;
    }

    queue.insert({ value: vertex, priority: dist[key] });

  });

  while (queue.trees() !== 0) {

    var next = queue.deleteMin().value;
    var nextKey = stringify(next);
    var neighbors = graph.neighbors(next);

    neighbors.forEach(function(neighbor) {
      var neighborKey = stringify(neighbor);
      var alt = dist[nextKey] + graph.distance(next, neighbor);
      if (alt < dist[neighborKey]) {
        dist[neighborKey] = alt;
        prev[neighborKey] = next;
        queue.update({ value: neighbor, priority: alt });
      }
    });

  }

  return dist;

}

function Graph() {
  this.vertexToEdges = {};
}

Graph.prototype = {

  vertexToEdges: null,

  get vertices() {
    return Object.keys(this.vertexToEdges).map(function(vertex) {
      return JSON.parse(vertex);
    });
  },

  addVertex: function(vertex) {
    var key = stringify(vertex);
    this.vertexToEdges[key] = {};
  },

  addEdge: function(u, v, distance) {
    var ukey = stringify(u);
    var vkey = stringify(v);
    this.vertexToEdges[ukey][vkey] = distance;
    this.vertexToEdges[vkey][ukey] = distance;
  },

  distance: function(u, v) {
    var ukey = stringify(u);
    var vkey = stringify(v);
    return this.vertexToEdges[ukey][vkey];
  },

  neighbors: function(vertex) {
    var key = stringify(vertex);
    return Object.keys(this.vertexToEdges[key]).map(function(neighbor) { 
      return JSON.parse(neighbor); 
    });
  }

};

var g = new Graph();


g.addVertex(4259062) // BSC
g.addVertex(4229570) // LP
g.addVertex(4255110) // LSC
g.addVertex(4266590) // Quads
g.addVertex(4231636) // HCN/HCS
g.addVertex(4259048) // ARC
g.addVertex(4259046) // BLHC

g.addEdge(4259062, 4229570, 5); // B: BSC -> LP
g.addEdge(4266590, 4231636, 5); // B: Quads -> HCN
g.addEdge(4231636, 4259048, 2); // B: HCN -> ARC
g.addEdge(4259048, 4259062, 2); // B: ARC -> BSC

g.addEdge(4259062, 4259048, 2); // BHE: BSC -> ARC
g.addEdge(4259048, 4231636, 2); // BHE: ARC -> HCS
g.addEdge(4231636, 4229570, 5); // BHE: HCS -> LP
g.addEdge(4266590, 4259046, 2); // BHE: Quads -> BLHC
g.addEdge(4259046, 4259062, 3); // BHE: BLHC -> BSC

g.addEdge(4229570, 4255110, 2); // B/BHE: LP -> LSC
g.addEdge(4255110, 4266590, 2); // B/BHE: LSC -> Quads

console.log(g);
console.log(g.neighbors(4259062));

console.log(dijkstra(g, 4259062));