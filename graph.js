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
    const fromIndex = busStops.findIndex(stop => stop.stop_id === fromStopId);
    const toIndex = busStops.findIndex(stop => stop.stop_id === toStopId);
    
    if (fromIndex !== -1 && toIndex !== -1) {
      adjMatrix[fromIndex][toIndex] = weight;
    }
}

function printMatrix(adjMatrix) {
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