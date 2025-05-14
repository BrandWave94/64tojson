import { useCallback } from "react";
import { Handle, Position } from "@xyflow/react";

const handleStyle = { left: 10 };

export function CustomeNode({ data }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <>
      <div className="border-3 border-amber-300 bg-[#1E1E1E] p-4 rounded-md font-semibold">
        <label htmlFor="text">Text:</label>
      </div>
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} id="a" />
    </>
  );
}
