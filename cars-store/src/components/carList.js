import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store/store";

const CarList = () => {
  const dispatch = useDispatch();
  function handleDeleteCar(id) {
    dispatch(removeCar(id));
  }

  const carlist = useSelector(({ cars: { carlist, searchTerm } }) => {
    return carlist.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  //const classname = "is-uppercase";
  return (
    <div className="box">
      {carlist.map((car) => {
        return (
          <div
            className="title is-6 is-flex is-flex-direction-row  is-justify-content-space-around container"
            key={car.id}
          >
            <div>
              {car.name} - ${car.cost}
            </div>

            <button
              className="button is-danger  "
              onClick={() => handleDeleteCar(car.id)}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default CarList;
