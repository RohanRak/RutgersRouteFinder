const busStops = [
    {stop_id: 4259062, name: "Busch Student Center"},
    {stop_id: 4229570, name: "Livingston Plaza"},
    {stop_id: 4255110, name: "Livingston Student Center"},
    {stop_id: 4266590, name: "Quads"},
    {stop_id: 4231636, name: "Hill Center Northbound"},
    {stop_id: 4231636, name: "Hill Center Southbound"},
    {stop_id: 4259048, name: "Allison Road Classroom"},
    {stop_id: 4259046, name: "Busch/Livingston Health Center"}
];

const numStops = busStops.length;
const adjMatrix = new Array(numStops).fill(null).map(() => new Array(numStops).fill(Infinity));

function addEdge(fromStopId, toStopId, weight) {
    const fromIndex = indexOf(fromStopId);
    const toIndex = indexOf(toStopId);
    
    if (fromIndex !== -1 && toIndex !== -1) {
      adjMatrix[fromIndex][toIndex] = weight;
    }
}

function printMatrix() {
    for (let i = 0; i < adjMatrix.length; i++) {
        var str = "";
        for (let j = 0; j < adjMatrix[i].length; j++) {
            if (adjMatrix[i][j] === Infinity) {
                str += "~ ";
            } else {
                str += adjMatrix[i][j] + " ";
            }
        }
        console.log(str);
    }
}

function isConnected(stopID1, stopID2) {
    if (stopID1 === stopID2) return true;
    if (adjMatrix[indexOf(stopID1)][indexOf(stopID2)] != Infinity) return true;
}

function indexOf(targetStopID) {
    return busStops.findIndex(stop => stop.stop_id === targetStopID);
}

function djikstraAlgorithm(startID) {

    distances = {}
    pred = {}
    visited = {}

    for (let i = 0; i < busStops.length; i++) {
        distances[busStops[i].stop_id] = Infinity;
        pred[busStops[i].stop_id] = -1;
        visited[busStops[i].stop_id] = false;
    }

    distances[busStops[i].stop_id] = 0;

    while(true) {
        let index = 0;
        for(let i = 0; i < distances.length; i++) {
            let min = Infinity;
            if (distances[i] < Infinity & visited[distances[i].stop_id]) {
                min = distances[i];
                index = i;
            }
        } 

        if (distances[index] === Infinity) return;
        visited[index] = true;

        //-----
    }
    return distances;
}

addEdge(4259062, 4229570, 5); // B: BSC -> LP
addEdge(4266590, 4231636, 5); // B: Quads -> HCN
addEdge(4231636, 4259048, 2); // B: HCN -> ARC
addEdge(4259048, 4259062, 2); // B: ARC -> BSC

addEdge(4259062, 4259048, 2); // BHE: BSC -> ARC
addEdge(4259048, 4231636, 2); // BHE: ARC -> HCS
addEdge(4231636, 4229570, 5); // BHE: HCS -> LP
addEdge(4266590, 4259046, 2); // BHE: Quads -> BLHC
addEdge(4259046, 4259062, 3); // BHE: BLHC -> BSC

addEdge(4229570, 4255110, 2); // B/BHE: LP -> LSC
addEdge(4255110, 4266590, 2); // B/BHE: LSC -> Quads

printMatrix(adjMatrix);

console.log(djikstraAlgorithm(4255110));