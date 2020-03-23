import React from "react";

export const FrostedGlassView = (props) => {
  return (
    <div
      style={
        !props.disabled
          ? { backgroundColor: props.bg, backgroundImage: props.bg }
          : {}
      }
      className={"bg frosted-glass " + (props.className ? props.className : "")}
    >
      <div className="frosted-glass-content">{props.children}</div>
    </div>
  );
};
