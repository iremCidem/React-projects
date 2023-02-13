import React from "react";

export default function ImageShow({ url }) {
  return (
    <div>
      <img src={url} alt="photo" width="210px" />
    </div>
  );
}
