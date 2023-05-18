import React from "react";

export default function Sidebar({ nodeName, setNodeName, selectedNode }) {
  const handleInputChange = (event) => {
    setNodeName(event.target.value);
  };
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div className="border-r p-4 text-sm bg-gray-100 w-64 h-screen text-black">
      {selectedNode ? (
        //settings panel
        <div>
          <label class="block mb-2 text-sm font-medium text-gray-900">
            {" "}
            Update Node Name:
          </label>
          <input
            type="text"
            class="block w-full pt-2 px-2 pb-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md "
            value={nodeName}
            onChange={handleInputChange}
          />
        </div>
      ) : (
        //node panel
        <>
          <div className="mb-4">Nodes Panel</div>
          <div
            className=" p-10 border-2 border-purple-700 rounded mb-4 flex justify-center items-center cursor-move"
            onDragStart={(event) => onDragStart(event, "textnode")}
            draggable
          >
            Message
          </div>
        </>
      )}
    </div>
  );
}
