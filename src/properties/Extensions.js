import React, { Component } from "react";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import tippy, { roundArrow } from "tippy.js";
import Picker from "emoji-picker-react";
class Extensions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emoji: null,
    };
  }

  static emojiPicker = function () {
    const onEmojiClick = (e, emojiObject) => {
      return emojiObject.emoji;
    };
    const emojiIconElement = document.getElementById("emojiIcon");
    let popup = tippy(emojiIconElement, {
      content: <Picker onEmojiClick={onEmojiClick} />,
      trigger: "click",
      placement: "bottom-start",
      animation: "scale",
      arrow: roundArrow,
    });
    return popup;
  };
  static TextExtensions = [
    {
      icon: <FormatBoldIcon className="hover:text-white" />,
      title: "Bold",
      action: (editor) => editor.chain().focus().toggleBold().run(),
      isActive: (editor) => editor.isActive("bold"),
    },
    {
      icon: <FormatItalicIcon className="hover:text-white" />,
      title: "Italic",
      action: (editor) => editor.chain().focus().toggleItalic().run(),
      isActive: (editor) => editor.isActive("italic"),
    },
    {
      icon: <FormatUnderlinedIcon className="hover:text-white" />,
      title: "Underline",
      action: (editor) => editor.chain().focus().toggleUnderline().run(),
      isActive: (editor) => editor.isActive("underline"),
    },
  ];
  static RichExtensions = [
    {
      icon: <AlternateEmailIcon className="hover:text-white" />,
      title: "Mention",
      action: (editor) => editor.chain().focus().insertContent("@").run(),
    },
    {
      icon: <InsertEmoticonIcon className="hover:text-white " id="emojiIcon" />,
      title: "Emoji",
      action: () => Extensions.emojiPicker(),
    },
  ];
}

export default Extensions;
