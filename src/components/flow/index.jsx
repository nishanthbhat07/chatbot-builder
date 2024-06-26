import ReactFlow, { Background, Controls } from "reactflow";
import "reactflow/dist/style.css";
import CustomNode from "../custom-node";
import { useMemo } from "react";
import { useGlobalContext } from "../../contexts/global-hooks";

// Main component containing the flow builder with controls and background
export default function Flow() {
  const {
    nodes,
    onNodesChange,
    onConnect,
    edges,
    onEdgesChange,
    setCurrentNode,
    setIsNodeSettingsShown,
  } = useGlobalContext();

  const nodeTypes = useMemo(() => ({ send_message: CustomNode }), []);

  return (
    <ReactFlow
      draggable
      onNodeClick={(e, node) => {
        setCurrentNode(node?.id);
        setIsNodeSettingsShown(true);
      }}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodes={nodes}
      nodeTypes={nodeTypes}
      edges={edges}
    >
      <Background />
      <Controls />
    </ReactFlow>
  );
}
