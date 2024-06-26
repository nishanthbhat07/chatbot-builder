export const findNodesWithoutEdges = ({ edges, nodes }) => {
  // Create a set of node IDs that are part of edges
  const nodeIdsInEdges = new Set();

  edges.forEach((edge) => {
    nodeIdsInEdges.add(edge.source);
    nodeIdsInEdges.add(edge.target);
  });

  // Filter nodes to find ones that are not in the nodeIdsInEdges set
  const nodesWithoutEdges = nodes.filter(
    (node) => !nodeIdsInEdges.has(node.id)
  );

  return nodesWithoutEdges;
};
