/**
 * @param {Graph} graph
 * @param {GraphVertex} startVertex
 * @param {Callbacks} [callbacks]
 */
export default function astar(graph, startVertex, callbacks) {
  const distances = {};
  const previousVertices = {};

  return {
    distances,
    previousVertices,
  };
}
