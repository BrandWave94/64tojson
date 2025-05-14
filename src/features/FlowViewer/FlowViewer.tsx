import { useCallback } from "react";
import {
  ReactFlow,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from "@xyflow/react";
import { CustomeNode } from "../../components";

import "@xyflow/react/dist/style.css";

const initialNodes = [
  {
    id: "1",
    type: "customeNode",
    position: { x: 0, y: 0 },
    data: { label: "1" },
  },
  {
    id: "2",
    type: "customeNode",
    position: { x: 100, y: 20 },
    data: { label: "2" },
  },
  {
    id: "3",
    type: "customeNode",
    position: { x: 100, y: 100 },
    data: { label: "3" },
  },
];
const initialEdges = [
  { id: "e1-2", source: "1", target: "2", type: "step" },
  { id: "e1-3", source: "1", target: "3", type: "step" },
];

const nodeTypes = {
  customeNode: CustomeNode,
};

export function FlowViewer() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div className="w-full h-full bg-[#1E1E1E]">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
      >
        <Controls />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}
