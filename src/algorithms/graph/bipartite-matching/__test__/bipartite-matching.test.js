
import Graph from '../../../../data-structures/graph/Graph';
import GraphVertex from '../../../../data-structures/graph/GraphVertex';
import GraphEdge from '../../../../data-structures/graph/GraphEdge';
import bipartite-matching from '../bipartite-matching';

describe('bipartite-matching', () => {
    it('should perform bipartite-matching operation on graph', () => {
        const graph = new Graph(true);

        const vertexL1 = new GraphVertex('L1');
        const vertexL2 = new GraphVertex('L2');
        const vertexL3 = new GraphVertex('L3');
        const vertexL4 = new GraphVertex('L4');
        const vertexL5 = new GraphVertex('L5');
        const vertexR1 = new GraphVertex('R1');
        const vertexR2 = new GraphVertex('R2');
        const vertexR3 = new GraphVertex('R3');
        const vertexR4 = new GraphVertex('R4');
        const vertexR5 = new GraphVertex('R5');

        const edgeL1R1 = new GraphEdge(vertexL1, vertexR1);
        const edgeL1R2 = new GraphEdge(vertexL1, vertexR2);
        const edgeL2R1 = new GraphEdge(vertexL2, vertexR1);
        const edgeL3R2 = new GraphEdge(vertexL3, vertexR2);
        const edgeL3R3 = new GraphEdge(vertexL3, vertexR3);
        const edgeL4R4 = new GraphEdge(vertexL4, vertexR4);
        const edgeL4R5 = new GraphEdge(vertexL4, vertexR5);
        const edgeL5R3 = new GraphEdge(vertexL5, vertexR3);
        
        graph
          .addEdge(edgeL1R1)
          .addEdge(edgeL1R2)
          .addEdge(edgeL2R1)
          .addEdge(edgeL3R2)
          .addEdge(edgeL3R3)
          .addEdge(edgeL4R4)
          .addEdge(edgeL4R5)
          .addEdge(edgeL5R3)

        expect(graph.toString()).toBe('L1,L2,L3,L4,L5,R1,R2,R3,R4,R5');
        expect(bipartite-matching(5, 5, graph.getAllVertices())).toBe(4);
    });
});