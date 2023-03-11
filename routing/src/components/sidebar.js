import classNames from "classnames";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const classes = classNames(
    "m-5",
    "font-bold border-b-4 border-blue-500 pb-2"
  );
  const links = [
    { text: "Buttons", to: "buttons" },
    { text: "Collapse", to: "collapse" },
    { text: "Dropdown", to: "dropdown" },
    { text: "Modal", to: "modal" },
    { text: "Table", to: "table" },
    { text: "Counter", to: "counter" },
  ];

  return (
    <div className="flex justify-center border-b-[3px]">
      {links.map((link) => {
        return (
          <Link key={link.text} to={link.to} className={classes}>
            {link.text}
          </Link>
        );
      })}
    </div>
  );
}
