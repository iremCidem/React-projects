import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Button from "../components/button";

export default function Modal({ handleClick, children, actionBar }) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);
  return ReactDOM.createPortal(
    <div>
      <div
        className=" bg-rose-300/80 fixed inset-0"
        onClick={handleClick}
      ></div>
      <div className="bg-rose-400 fixed inset-40 text-center">
        <div className="p-5 flex flex-col justify-between h-full">
          {children}
          <div className="flex justify-end mr-5">{actionBar}</div>
        </div>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
}
