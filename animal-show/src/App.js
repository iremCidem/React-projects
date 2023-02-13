import "bulma/css/bulma.css";
import { useState } from "react";
import Animal from "./animal";

function App() {
  const animalList = ["cow", "cat", "gator", "horse", "bird", "dog"];
  const [items, setItems] = useState([]);
  function handleClick() {
    setItems([...items, animalList[Math.floor(Math.random() * 6)]]);
    console.log(items);
  }
  const component = items.map((item) => {
    return <Animal item={item} />;
  });
  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      <div className="yan">{component}</div>
    </div>
  );
}

export default App;
//array destructing
// const [item1, item2] = [1, 15, 20, 80];
// console.log(item1); //1
// console.log(item2); //15
//useState(10)= [10,f()], useState array döndüren bir fonksiyon
