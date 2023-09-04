import React from "react";
import "./Modal.css";

export default function Modal({ children, onClose }) {
  return (
    <>
      <div className="backdrop" onClick={onClose}></div>
      <dialog open className="modal">{children}</dialog>
    </>
  );
}
