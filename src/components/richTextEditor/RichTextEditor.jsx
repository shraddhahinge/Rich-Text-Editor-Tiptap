import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import React from "react";
import ToolBar from "./ToolBar";

function RichTextEditor() {
  const editor = useEditor({
    extensions: [StarterKit, Underline],
    content: "hello world",
    autofocus: true,
  });
  return (
    <div className="editor my-5 w-3/4 border rounded-lg border-black flex items-center flex-col justify-center">
      <div className="w-full h-12 border rounded-t-lg border-black">
        <ToolBar editor={editor} />
      </div>
      <div className="w-full p-1 min-h-20 border rounded-b-lg border-black">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}

export default RichTextEditor;
