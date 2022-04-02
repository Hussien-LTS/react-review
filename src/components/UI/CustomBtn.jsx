import React from "react";

import classes from "./Button.module.css";

const CustomBtn = (props) => {
  return (
    <button
      className={classes.button}
      type={props.type || "button"}
      // onHide={props.hide || null}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default CustomBtn;
