import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import CustomBtn from "./CustomBtn";

import classes from "./ErrorModal.module.css";
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};
const ModalOverlay = (props) => {
  return (
    <Card classname={classes.modal}>
      <header classeName={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.msg}</p>
      </div>
      <footer className={classes.actions}>
        <CustomBtn onClick={props.onConfirm}>Okay</CustomBtn>
      </footer>
    </Card>
  );
};
const ErrorModel = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          msg={props.msg}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("ovarlay-root")
      )}
    </Fragment>
  );
};

export default ErrorModel;
