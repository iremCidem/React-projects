import React from "react";

export default function Table({ data, config }) {
  return (
    <div>
      <table>
        <thead className="border-b-2">
          <tr>
            {config.map((item) => {
              if (item.header) {
                return <th key={item.label}>{item.header()}</th>;
              }
              return <th key={item.label}>{item.label} </th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr>
                {config.map((data) => {
                  return (
                    <td key={data.label} className="p-2">
                      {data.render(item)}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
