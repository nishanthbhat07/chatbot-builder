import ReactFlow, { Background, Controls } from "reactflow";
import "reactflow/dist/style.css";

const nodes = [
  {
    id: "1", // required
    position: { x: 0, y: 0 }, // required
  },
];

export default function Flow() {
  return (
    <ReactFlow nodes={nodes}>
      <Background />
      <Controls />
    </ReactFlow>
  );
}
