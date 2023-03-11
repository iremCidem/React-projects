import { useState } from "react";
import { Items } from "../datas/dropdownItems";
import { BsArrowDownSquareFill } from "react-icons/bs";

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState(null);

  function handleClick(color) {
    setText(color);
    setOpen(false);
  }

  return (
    <div>
      <button
        className="p-5 border items-center m-3 flex  "
        onClick={() => setOpen(!open)}
      >
        {text || "Select..."}
        <BsArrowDownSquareFill className="m-3" />
      </button>
      {open &&
        Items.map((item) => (
          <div key={item.value} className="hover:bg-sky-100 rounded cursor p-3">
            <button onClick={() => handleClick(item.label)}>
              {item.label}
            </button>
          </div>
        ))}
    </div>
  );
};
export default Dropdown;
//text || "Select..." doğru olan sonuncu değeri alır, text null iken selecti aldı, text doğru iken texti aldı.
