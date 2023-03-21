import { useSelector } from "react-redux";

const CarValue = () => {
  const totalCost = useSelector(({ cars: { carlist, searchTerm } }) => {
    return carlist
      .filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .reduce((acc, item) => acc + item.cost, 0);
  });
  return (
    <div>
      <p>Total Cost: ${totalCost}</p>
    </div>
  );
};

export default CarValue;
