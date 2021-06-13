import React from "react";

function RichTextButton(props) {
  const toggleInlineStyle = (event) => {
    event.preventDefault();
    props.iconClick(props.styleName);
  };
  return (
    <button
      type='button'
      className={
        props.dark ? "btn btn-dark btn-sm mx-1 " : "btn btn-light btn-sm mx-1 "
      }
      data-style={props.styleName}
      onMouseDown={toggleInlineStyle}
    >
      {props.buttonIcon}
    </button>
  );
}

export default RichTextButton;
