import { createContext, useCallback, useState } from "react";
import { addEdge, useEdgesState, useNodesState } from "reactflow";
import PropTypes from "prop-types";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const [isNodeSettingsShown, setIsNodeSettingsShown] = useState(false);
  const [currentNode, setCurrentNode] = useState();
  const [nodeValue, setNodeValue] = useState("");

  const handleSaveChanges = () => {
    setNodes((prevNodes) => {
      const copyOfNodes = prevNodes;
      const idx = copyOfNodes.findIndex((item) => item.id === currentNode);
      const node = copyOfNodes.find((item) => item.id === currentNode);
      copyOfNodes.splice(idx, 1, { ...node, data: { value: nodeValue } });
      return copyOfNodes;
    });

    setNodeValue("");
    setCurrentNode();
    setIsNodeSettingsShown(false);
  };

  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  const addNodes = ({ x, y }) => {
    setNodes((prevNodes) => [
      ...prevNodes,
      {
        id: Number(
          (Number(prevNodes[prevNodes.length - 1]?.id) || 0) + 1
        ).toString(),
        type: "send_message",
        position: { x, y },
      },
    ]);
  };

  return (
    <GlobalContext.Provider
      value={{
        nodes,
        edges,
        onNodesChange,
        onEdgesChange,
        onConnect,
        addNodes,
        isNodeSettingsShown,
        setIsNodeSettingsShown,
        currentNode,
        setCurrentNode,
        nodeValue,
        setNodeValue,
        handleSaveChanges,
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
