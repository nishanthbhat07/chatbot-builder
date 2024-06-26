import { createContext, useCallback, useEffect, useState } from "react";
import { addEdge, useEdgesState, useNodesState } from "reactflow";
import PropTypes from "prop-types";
import { findNodesWithoutEdges } from "../utils/common-utils";

// Global Store for handling of the nodes.
// Improvments to be done: Instead of handling the state in context, use ReactFlowProvider
export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  // Initialising the node and edge states
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const [isNodeSettingsShown, setIsNodeSettingsShown] = useState(false);
  const [currentNode, setCurrentNode] = useState();
  const [nodeValue, setNodeValue] = useState("");
  const [isErrorSavingNode, setIsErrorSavingNode] = useState(false);

  // Function that handles the onclick of Save Changes CTA
  const handleSaveChanges = () => {
    if (!isNodeSettingsShown) {
      console.log(edges);
      const nodesWithoutEdges = findNodesWithoutEdges({ nodes, edges });
      console.log("nodesWithoutEdges", nodesWithoutEdges);
      if (nodesWithoutEdges?.length) {
        setIsErrorSavingNode(true);
        return;
      }
      if (isErrorSavingNode) setIsErrorSavingNode(false);
      sessionStorage.setItem(
        "SAVED_PROJECT",
        JSON.stringify({
          nodes,
          edges,
        })
      );
      return;
    }
    setNodes((prevNodes) => {
      // creating a copy of previous react state and replacing the current node with the copy of the replaced node with the node's value
      const copyOfNodes = prevNodes;
      const idx = copyOfNodes.findIndex((item) => item.id === currentNode);
      const node = copyOfNodes.find((item) => item.id === currentNode);
      setNodeValue("");
      setCurrentNode();
      setIsNodeSettingsShown(false);
      copyOfNodes.splice(idx, 1, { ...node, data: { value: nodeValue } });
      onNodesChange(copyOfNodes);
      return copyOfNodes;
    });
  };

  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  // Function that helps in adding nodes to the flow playground
  const addNodes = ({ x, y }) => {
    setNodes((prevNodes) => [
      ...prevNodes,
      {
        id: Number(
          (Number(prevNodes[prevNodes.length - 1]?.id) || 0) + 1
        ).toString(),
        type: "send_message",
        position: { x, y },
        data: {
          value: "",
        },
      },
    ]);
  };

  // side effect that runs on every page load to check whether we have saved flow in session storage
  useEffect(() => {
    const values = sessionStorage.getItem("SAVED_PROJECT");
    if (sessionStorage.getItem("SAVED_PROJECT")) {
      const { nodes: savedNodes, edges: savedEdges } = JSON.parse(values);
      setNodes(savedNodes);
      setEdges(savedEdges);
    }
  }, [setEdges, setNodes]);

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
        isErrorSavingNode,
        setIsErrorSavingNode,
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
