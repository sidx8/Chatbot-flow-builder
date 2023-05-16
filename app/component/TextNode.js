import React from "react";
import { Handle, Position } from "reactflow";

function TextNode({ data }) {
  return (
    <div className="w-60 shadow-md rounded-md bg-white border-2 ">
      <div className="flex flex-col">
        <div className="max-h-max px-2 text-left text-black text-lg font-bold bg-teal-300">
          ✉️ send message
        </div>
        <div className="px-4 py-2 ml-2">
          <div className="text-lg font-normal text-black">
            {data.name ?? "Text Node"}
          </div>
        </div>
      </div>

      <Handle
        type="target"
        position={Position.Top}
        className="w-16 bg-red-800"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        className="w-16 bg-red-800"
      />
    </div>
  );
}

export default TextNode;
