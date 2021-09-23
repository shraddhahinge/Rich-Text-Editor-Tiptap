import React from "react";

function Header() {
  return (
    <div className="w-1/2 m-auto flex items-center justify-center text-center mt-5 text-3xl font-sans font-medium border border-b-4 border-gray-500 rounded-lg ">
      <h1 className="text-pink-700">Rich Text Editor</h1>
      <span>-</span>
      <h1 className="text-black">Tiptap</h1>
    </div>
  );
}

export default Header;
