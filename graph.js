
class Graph {

    constructor(graphSize) {
        this.graphSize = graphSize;
        this.AdjList = new Map();
    }

    addVertex(vertex) {
        if (!this.AdjList[vertex]) {
            this.AdjList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2, weight) {
        this.AdjList[vertex1].push({node: vertex2, weight});
    }

    removeEdge(vertex1, vertex2) {
        this.AdjList[vertext1] = this.AdjList[vertex1].filter(
            v => v !== vertex2
        );
    }

    removeVertex(vertex) {
        const edges = this.AdjList[vertex];
        edges.forEach(e => this.removeEdge(e,vertex));
        delete this.AdjList[vertex];
    }

    printGraph() {

        var get_keys = this.AdjList.keys();

        for (var i of get_keys) {

            var get_values = this.AdjList.get(i);
            var str = "";

            for (var j of get_values) {
                str += j + " ";
            }

            console.log(i + " -> " + str);
        }
    }

}

var g = new Graph(6);
var vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ];

for (var i = 0; i < vertices.length; i++) {
    g.addVertex(vertices[i]);
}
 
g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('E', 'C');
g.addEdge('C', 'F');

g.printGraph();