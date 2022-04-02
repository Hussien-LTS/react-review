import React from "react";

// import "./CustomInput.css";

const CustomLabel = (props) => {
  return (
      <label htmlFor={props.htmlFor} >
        {props.labelText}
      </label>
  );
};

export default CustomLabel;