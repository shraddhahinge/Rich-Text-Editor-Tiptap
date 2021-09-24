import React from "react";
//tiptap
import { useEditor, EditorContent, ReactRenderer } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
//tiptap extensions
import Underline from "@tiptap/extension-underline";
import Mention from "@tiptap/extension-mention";
//other libraries
import tippy from "tippy.js"; //popup
import "tippy.js/animations/scale.css";
//components
import ToolBar from "./ToolBar";
import { MentionList } from "./toolsView/MentionList";

function RichTextEditor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Mention.configure({
        HTMLAttributes: {
          class: "mention",
        },
        suggestion: {
          items: (query) => {
            return [
              "Shraddha Hinge",
              "Sudharshan Jagdale",
              "Gaurav Badhan",
              "Manoj Barde",
              "Basker Patel",
              "Naren Nandekar",
              "Lea Thompson",
              "Cyndi Lauper",
              "Tom Cruise",
              "Madonna",
            ].filter((item) =>
              item.toLowerCase().startsWith(query.toLowerCase())
            );
          },
          render: () => {
            let reactRenderer;
            let popup;
            return {
              onStart: (props) => {
                reactRenderer = new ReactRenderer(MentionList, {
                  props,
                  editor: props.editor,
                });
                popup = tippy("body", {
                  getReferenceClientRect: props.clientRect,
                  appendTo: () => document.body,
                  content: reactRenderer.element,
                  showOnCreate: true,
                  interactive: true,
                  trigger: "manual",
                  placement: "bottom-start",
                  animation: "scale",
                });
              },
              onUpdate(props) {
                reactRenderer.updateProps(props);
                popup[0].setProps({
                  getReferenceClientRect: props.clientRect,
                });
              },
              onKeyDown(props) {
                if (props.event.key === "Escape") {
                  popup[0].hide();
                  return true;
                }
                return reactRenderer.ref?.onKeyDown(props);
              },
              onExit() {
                popup[0].destroy();
                reactRenderer.destroy();
              },
            };
          },
        },
      }),
    ],
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
