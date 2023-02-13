import React from "react";

import ImageShow from "./imageShow";

export default function ImagesList({ arr }) {
  const component = arr.map((item) => {
    return <ImageShow key={item.id} url={item.urls.small} />;
  });

  return <div className="images">{component}</div>;
}
