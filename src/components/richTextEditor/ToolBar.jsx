import React from "react";
import Extensions from "../../properties/Extensions";
function ToolBar({ editor, align }) {
  const textExtensionTool = Extensions.TextExtensions.map((item) => {
    return (
      <button
        key={item.title}
        className="w-8 h-8 ring-2 ring-gray-600   hover:bg-black focus:bg-black  cursor-pointer border-none rounded-lg p-1 mr-2 bg-gray-300"
        onClick={() =>
          item.action ? item.action(editor) : console.log("clicked")
        }
      >
        {item.icon}
      </button>
    );
  });

  const richExtensionTool = Extensions.RichExtensions.map((item) => {
    return (
      <button
        key={item.title}
        className="w-8 h-8 ring-2 ring-gray-600   hover:bg-black focus:bg-black  cursor-pointer border-none rounded-lg p-1 mr-2 bg-gray-300"
        onClick={() =>
          item.action ? item.action(editor) : console.log("clicked")
        }
      >
        {item.icon}
      </button>
    );
  });
  if (!editor) {
    return null;
  }

  return (
    <div className="flex items-center space-x-2  p-2 divide-x-4 divide-black divide-solid  ">
      <div>{textExtensionTool}</div>
      <div className="pl-4">{richExtensionTool}</div>
      {/* <button className="w-50 bg-blue-500 p-1">Bold</button> */}
    </div>
  );
}

export default ToolBar;
