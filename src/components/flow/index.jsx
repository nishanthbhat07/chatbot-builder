import ReactFlow, { Background, Controls } from "reactflow";
import "reactflow/dist/style.css";
import CustomNode from "../custom-node";
import { useMemo } from "react";
import { useGlobalContext } from "../../contexts/global-hooks";

export default function Flow() {
  const { nodes, onNodesChange, onConnect, edges, onEdgesChange } =
    useGlobalContext();

  const nodeTypes = useMemo(() => ({ send_message: CustomNode }), []);

  return (
    <ReactFlow
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
