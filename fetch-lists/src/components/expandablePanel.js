import { useState } from "react";
import { GoChevronLeft, GoChevronDown } from "react-icons/go";

const ExpandablePanel = ({ header, children }) => {
  const [showContent, setShowContent] = useState(false);
  function showClick() {
    setShowContent(!showContent);
  }
  return (
    <div className="mb-2 border rounded">
      <div className=" flex items-center">
        <div className="flex flex-row items-center justify-between text-orange-700">
          {header}
        </div>
        <div onClick={showClick}>
          {showContent ? <GoChevronDown /> : <GoChevronLeft />}
        </div>
      </div>
      <div className="p-2">{showContent && children}</div>
    </div>
  );
};
export default ExpandablePanel;
//rtk içindeki tag sistemi ile istediğimiz zaman veriçağırma işlemini otomatik yaptırabiliriz.
