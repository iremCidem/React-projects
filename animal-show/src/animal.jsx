import React, { useState } from "react";
import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import heart from "./svg/heart.svg";
import horse from "./svg/horse.svg";

export default function Animal({ item }) {
  const object = { bird, cat, cow, dog, gator, horse };
  const [bigger, setBigger] = useState(20);
  const handleClick = () => {
    setBigger(bigger + 10);
  };

  return (
    <div onClick={handleClick} className="kutu">
      <img src={object[item]} alt="pic" width="150px" />

      <img
        src={heart}
        alt="kalp"
        width={bigger}
        style={{ maxWidth: 100 }}
        className="kalp"
      />
    </div>
  );
}
