import PriorityQueue from '../../../data-structures/priority-queue/PriorityQueue';

/**
 * @param {Graph} graph
 * @param {GraphVertex} startVertex
 */
export default function astar(graph, startVertex) {
  const distances = {};
  const heuristic = {};
  const previousVertices = {};
  const closed = {};
  const open = new PriorityQueue();

  // Init all distances with infinity assuming that currently we can't reach
  // any of the vertices except start one.
  graph.getAllVertices().forEach((vertex) => {
    distances[vertex.getKey()] = Infinity;
    previousVertices[vertex.getKey()] = null;
    heuristic[vertex.getKey()] = Infinity;
  });
  distances[startVertex.getKey()] = 0;

  // Init vertices queue.
  open.add(startVertex, distances[startVertex.getKey()]);

  while (!open.isEmpty()) {
    while(1){
      const currentVertex = open.poll();
      open.remove(currentVertex);
      
      // Update distances to every neighbor from current vertex.
      const edge = graph.findEdge(currentVertex, neighbor);

      const existingDistanceToNeighbor = distances[neighbor.getKey()];
      const distanceToNeighborFromCurrent = distances[currentVertex.getKey()] + edge.weight;

      if (distanceToNeighborFromCurrent < existingDistanceToNeighbor) {
        distances[neighbor.getKey()] = distanceToNeighborFromCurrent;

        // Change priority.
        if (open.hasValue(neighbor)) {
          open.changePriority(neighbor, distances[neighbor.getKey()]);
        }

        // Remember previous vertex.
        previousVertices[neighbor.getKey()] = currentVertex;
      }
    }
    
    // Add current vertex to visited ones.
    closed[currentVertex.getKey()] = currentVertex;
    graph.getNeighbors(currentVertex).forEach((neighbor) => {
        // Add neighbor to the queue for further visiting.
        if (!open.hasValue(neighbor)) {
          open.add(neighbor, distances[neighbor.getKey()]);
        }
    });
  }

  return {
    distances,
    previousVertices,
  };
}
