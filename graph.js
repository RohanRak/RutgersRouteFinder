
class Graph {

    constructor(graphSize) {
        this.graphSize = graphSize;
        this.AdjList = new Map();
    }

    addVertex(v) {
        if (!this.AdjList[v]) {
            this.AdjList.set(v, []);
        }
    }

    addEdge(v, w) {
        this.AdjList.get(v).push(w);
    }

    printGraph() {

        this.AdjList.forEach(function(keys) {
            console.log("" + keys.name);
        });

        var get_keys = this.AdjList.keys();



        for (var i in get_keys.name) {

            var get_values = this.AdjList.get(i);
            var str = "";

            for (var j in get_values.name) {
                str += j + " ";
            }

            console.log(i + " -> " + str);
        }
    }

}

class Node {
    constructor(stopID, name) {
        this.stopID = stopID;
        this.name = name;
    }

    printNode() {
        console.log("" + this.name);
    }
}

var g = new Graph(7);

const BSC = new Node(4259062, "Busch Student Center");
const ARC = new Node(4259048, "Allison Road Classroom");
const HCN = new Node(4231636, "Hill Center (NB)");
const LP = new Node(4229570, "Livingston Plaza");
const LSC = new Node(4254110, "Livingston Student Center");
const Quads = new Node(4266590, "Quads");
const BLHC = new Node(4259046, "Busch-Livingston Health Center");

g.addVertex(BSC);
g.addVertex(ARC);
g.addVertex(HCN);
g.addVertex(LP);
g.addVertex(LSC);
g.addVertex(Quads);
g.addVertex(BLHC);

 
g.addEdge(BSC, ARC);
g.addEdge(ARC, HCN);
g.addEdge(HCN, LP);
g.addEdge(LP, LSC);
g.addEdge(LSC, Quads);
g.addEdge(Quads, BLHC);
g.addEdge(BLHC, BSC);