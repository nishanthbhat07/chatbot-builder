import { Handle, Position } from "reactflow";
import "./styles.css";
import PropTypes from "prop-types";
import { useGlobalContext } from "../../contexts/global-hooks";

// Creating Custom Node for displaying desired UI
function CustomNode({ data, isConnectable, id }) {
  const { currentNode, isNodeSettingsShown } = useGlobalContext();

  return (
    <div
      style={{
        flexBasis: "auto",
      }}
      className={`rounded border-2 w-auto ${
        isNodeSettingsShown && currentNode === id ? "border-blue-400" : ""
      }`}
    >
      <div>
        <div className="bg-teal-400 px-4 py-1">
          <span className="text-xs font-bold text-center">Send Message</span>
        </div>
        <p className="text-black text-xs px-4 py-4">{data?.value || ""}</p>
      </div>
      <Handle
        type="target"
        position={Position.Left}
        id="a"
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        id="b"
        position={Position.Right}
        isConnectable={isConnectable}
      />
    </div>
  );
}

export default CustomNode;
CustomNode.propTypes = {
  data: PropTypes.object.isRequired,
  isConnectable: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};
