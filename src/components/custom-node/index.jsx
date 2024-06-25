// import { useCallback } from "react";
import { Handle, Position } from "reactflow";
import Draggable from "react-draggable";
import "./styles.css";
import PropTypes from "prop-types";

const handleStyle = { left: 10 };

function CustomNode({ data, isConnectable }) {
  //   const onChange = useCallback((evt) => {
  //     console.log(evt.target.value);
  //   }, []);

  return (
    <Draggable>
      <div className="rounded border-2">
        <Handle
          type="target"
          position={Position.Top}
          isConnectable={isConnectable}
        />
        <div>
          <div className="bg-teal-400 px-4 py-1">
            <span className="text-sm">Send Message</span>
          </div>
          <p className="text-black text-xs px-4 py-4">{data?.value || ""}</p>
        </div>
        <Handle
          type="source"
          position={Position.Bottom}
          id="a"
          style={handleStyle}
          isConnectable={isConnectable}
        />
        <Handle
          type="source"
          position={Position.Bottom}
          id="b"
          isConnectable={isConnectable}
        />
      </div>
    </Draggable>
  );
}

export default CustomNode;
CustomNode.propTypes = {
  data: PropTypes.object.isRequired,
  isConnectable: PropTypes.bool.isRequired,
};
