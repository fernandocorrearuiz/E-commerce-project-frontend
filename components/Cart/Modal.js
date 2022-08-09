import React from "react";
import ReactDOM from "react-dom";
import { Fragment } from "react";
import classes from "../../styles/Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

// function addElement() {
//   // create a new div element
//   const newDiv = document.createElement("div");

//   // and give it some content
//   const newContent = document.createTextNode("Hi there and greetings!");

//   // add the text node to the newly created div
//   newDiv.appendChild(newContent);

//   // add the newly created element and its content into the DOM
//   const currentDiv = document.getElementById("div1");
//   document.body.insertBefore(newDiv, currentDiv);
// }
// addElement();

// const portalElement = document.getElementById("__next");

export default function Modal(props) {
  return (
    <Fragment>
      {/* {ReactDOM.createPortal(<Backdrop />, portalElement)}
    {ReactDOM.createPortal(
    <ModalOverlay>{props.children}</ModalOverlay>,
    portalElement)} */}
      <Backdrop onClose={props.onClose} />
      <ModalOverlay>{props.children}</ModalOverlay>
    </Fragment>
  );
}
