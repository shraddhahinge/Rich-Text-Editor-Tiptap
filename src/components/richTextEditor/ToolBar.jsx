import React from "react";
import Extensions from "../../properties/Extensions";
function ToolBar({ editor, align }) {
  const textExtensionTool = Extensions.TextExtensions.map((item) => {
    return (
      <button
        key={item.title}
        className={`w-8 h-8 ring-2 ring-gray-300 ${
          item.isActive && "focus:outline-none focus:ring-3 focus:ring-gray-500"
        } cursor-pointer border-none rounded-lg p-1 mr-2 bg-gray-300`}
        onClick={() => item.action(editor)}
      >
        {item.icon}
      </button>
    );
  });

  // const
  if (!editor) {
    return null;
  }

  return (
    <div className="flex items-center justify-items-stretch p-2   ">
      <div>{textExtensionTool}</div>
      <div></div>
      {/* <button className="w-50 bg-blue-500 p-1">Bold</button> */}
    </div>
  );
}

export default ToolBar;
