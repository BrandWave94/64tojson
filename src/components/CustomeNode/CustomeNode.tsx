import { useCallback } from "react";
import { Handle, Position } from "@xyflow/react";

const handleStyle = { left: 10 };

export function CustomeNode({ data }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <>
      <Handle type="target" position={Position.Right} />
      <div className="bg-orange-300 p-4 rounded-md">
        <label htmlFor="text">Text:</label>
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
    </>
  );
}
