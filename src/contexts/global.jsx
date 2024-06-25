import { createContext, useCallback, useState } from "react";
import { addEdge, applyEdgeChanges, applyNodeChanges } from "reactflow";
import PropTypes from "prop-types";

export const GlobalContext = createContext();

const initalNodes = [
  {
    id: "1", // required
    type: "send_message",
    position: { x: 0, y: 0 }, // required
  },
  {
    id: "2", // required
    position: { x: 200, y: 10 }, // required
  },
];

export const GlobalProvider = ({ children }) => {
  const [nodes, setNodes] = useState(initalNodes);
  const [edges, setEdges] = useState([]);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  const addNodes = ({ x, y }) => {
    setNodes((prevNodes) => [
      ...prevNodes,
      {
        id: Number(Number(prevNodes[prevNodes.length - 1]?.id) + 1).toString(),
        type: "send_message",
        position: { x, y },
      },
    ]);
  };

  console.log("NODES", nodes);

  return (
    <GlobalContext.Provider
      value={{
        nodes,
        edges,
        onNodesChange,
        onEdgesChange,
        onConnect,
        addNodes,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

GlobalProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
