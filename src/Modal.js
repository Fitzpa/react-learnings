import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const elRef = useRef(null);
  if (!elRef.current) {
    const div = document.createElement("div");
    //  Now we will always have the same div instead of React created a new div each time the modal opens
    elRef.current = div;
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);

    // returning a function from a useEffect hook is how you would unmount useEffect
    // So it will only run this function when the modal gets closed
    return () => modalRoot.removeChild(elRef.current);
  }, [elRef]);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
