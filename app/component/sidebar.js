import React from "react";

export default function Sidebar() {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div className="border-r p-4 text-sm bg-gray-100 w-64 h-screen text-black">
      <div className="mb-4">
        You can drag these nodes to the pane on the right.
      </div>
      <div
        className="h-10 p-1 border-2 border-purple-700 rounded mb-4 flex justify-center items-center cursor-move"
        onDragStart={(event) => onDragStart(event, "textnode")}
        draggable
      >
        Text Node
      </div>
    </div>
  );
}
