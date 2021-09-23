import React, { Component } from "react";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
class Extensions extends Component {
  static TextExtensions = [
    {
      icon: <FormatBoldIcon />,
      title: "Bold",
      action: (editor) => editor.chain().focus().toggleBold().run(),
      isActive: (editor) => editor.isActive("bold"),
    },
    {
      icon: <FormatItalicIcon />,
      title: "Italic",
      action: (editor) => editor.chain().focus().toggleItalic().run(),
      isActive: (editor) => editor.isActive("italic"),
    },
    {
      icon: <FormatUnderlinedIcon />,
      title: "Underline",
      action: (editor) => editor.chain().focus().toggleUnderline().run(),
      isActive: (editor) => editor.isActive("underline"),
    },
  ];
  //   static RichAndToolsExtensions = [
  //       {

  //       }
  //   ]
}

export default Extensions;
