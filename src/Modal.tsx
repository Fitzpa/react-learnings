import React, { useEffect, useRef, FunctionComponent } from "react";
import { createPortal } from "react-dom";

const Modal: FunctionComponent = ({ children }) => {
  const elRef = useRef(document.createElement("div"));

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    if (!modalRoot) {
      return;
    }
    modalRoot.appendChild(elRef.current);

    // returning a function from a useEffect hook is how you would unmount useEffect
    // So it will only run this function when the modal gets closed
    return () => {
      modalRoot.removeChild(elRef.current);
    };
  }, [elRef]);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
