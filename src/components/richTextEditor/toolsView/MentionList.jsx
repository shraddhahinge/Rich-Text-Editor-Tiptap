import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
export const MentionList = forwardRef((props, ref) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectItem = (index) => {
    const item = props.items[index];
    if (item) {
      props.command({ id: item });
    }
  };
  const upHandler = () => {
    setSelectedIndex(
      (selectedIndex + props.items.length - 1) % props.items.length
    );
  };

  const downHandler = () => {
    setSelectedIndex((selectedIndex + 1) % props.items.length);
  };
  const enterHandler = () => {
    selectItem(selectedIndex);
  };
  useEffect(() => setSelectedIndex(0), [props.items]);
  useImperativeHandle(ref, () => ({
    onKeyDown: ({ event }) => {
      if (event.key === "ArrowUp") {
        upHandler();
        return true;
      }

      if (event.key === "ArrowDown") {
        downHandler();
        return true;
      }

      if (event.key === "Enter") {
        enterHandler();
        return true;
      }
      return false;
    },
  }));
  return (
    <div className="border rounded-lg bg-white text-gray-500 overflow-y-scroll h-28 text-sm">
      {props.items.map((item, index) => (
        <button
          className={`w-full text-left  border-none p-1 hover:text-white hover:bg-purple-300 ${
            index === selectedIndex ? " text-white bg-purple-300" : ""
          }`}
          key={index}
          onClick={() => selectItem(index)}
        >
          {item}
        </button>
      ))}
    </div>
  );
});
// hover:text-white hover:bg-purple-300
