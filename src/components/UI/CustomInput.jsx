import React from "react";

// import "./CustomInput.css";

const CustomInput = (props) => {
  return (
    <>
      <input
        value={props.value}
        id={props.id}
        type={props.type}
        onChange={props.onChange}
        min={props.min || null}
        max={props.max || null}
        step={props.step || null}
      />
    
    </>
  );
};

export default CustomInput;