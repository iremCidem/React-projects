import React, { useState } from "react";
import { datas } from "../datas/data";
import { BsArrowDownSquareFill } from "react-icons/bs";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

export default function Collapse() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <div>
      {datas?.map((item, index) => (
        <div key={item.id}>
          <div className="flex justify-between m-4">
            <span onClick={() => setExpandedIndex(index)} className="text-4xl ">
              {item.label}
            </span>
            <span className=" text-3xl">
              {index === expandedIndex ? (
                <BsFillArrowLeftSquareFill />
              ) : (
                <BsArrowDownSquareFill />
              )}
            </span>
          </div>

          {index === expandedIndex && <p>{item.content}</p>}
        </div>
      ))}
    </div>
  );
}
