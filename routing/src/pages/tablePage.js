import React from "react";
import SortableTable from "../components/sortableTable";
import Table from "../components/table";

export default function TablePage() {
  const data = [
    { name: "Apple", color: "bg-red-500", score: 3 },
    { name: "Orange", color: "bg-orange-500", score: 2 },
    { name: "Banana", color: "bg-yellow-500", score: 5 },
  ];
  const config = [
    {
      label: "Fruit",
      render: (item) => item.name,
      sortValue: (item) => item.name,
    },
    {
      label: "Color",
      render: (item) => <div className={`${item.color} p-3 m-2`} />,
    },
    {
      label: "Score",
      render: (item) => item.score,
      sortValue: (item) => item.score,
    },
  ];
  return (
    <div className="flex items-center justify-around">
      <SortableTable data={data} config={config} />
      <Table data={data} config={config} />
    </div>
  );
}
