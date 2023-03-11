import React, { useState } from "react";
import Table from "./table";

import { BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";

export default function SortableTable(props) {
  const { config, data } = props;
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);
  function changeIcon(label, sortBy, sortOrder) {
    if (label !== sortBy) {
      return (
        <div>
          <BiUpArrowAlt />
          <BiDownArrowAlt />
        </div>
      );
    }
    if (sortOrder === "asc") {
      return <BiUpArrowAlt />;
    } else if (sortOrder === "desc") {
      return <BiDownArrowAlt />;
    } else {
      return (
        <div>
          <BiUpArrowAlt />
          <BiDownArrowAlt />
        </div>
      );
    }
  }
  function handleClick(label) {
    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(label);
    }
    if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(label);
    }
    if (sortOrder === "desc") {
      setSortOrder(null);
    }
  }
  const updatedConfig = config.map((data) => {
    if (data.sortValue) {
      return {
        ...data,
        header: () => (
          <div key={data.label} onClick={() => handleClick(data.label)}>
            <div className="flex items-center justify-center ">
              <span>{data.label} </span>
              <span> {changeIcon(data.label, sortBy, sortOrder)} </span>
            </div>
          </div>
        ),
      };
    }
    return data;
  });
  let updatedData = data;
  if (sortOrder && sortBy) {
    const { sortValue } = config.find((item) => item.label === sortBy);
    updatedData = [...data].sort((a, b) => {
      const order = sortOrder === "asc" ? 1 : -1;
      const valueA = sortValue(a);
      const valueB = sortValue(b);
      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * order;
      } else {
        return (valueA - valueB) * order;
      }
    });
  }

  return (
    <div>
      <Table {...props} config={updatedConfig} data={updatedData} />
    </div>
  );
}
