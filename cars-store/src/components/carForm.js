import { useDispatch, useSelector } from "react-redux";
import { changeCarName, changeCarValue, addCarList } from "../store/store";
const CarForm = () => {
  const dispatch = useDispatch();
  const { carName, carValue } = useSelector((state) => {
    return {
      carName: state.form.name,
      carValue: state.form.cost,
    };
  });

  function handleNameChange(e) {
    dispatch(changeCarName(e.target.value));
  }
  function handleValueChange(e) {
    const cost = Number(e.target.value) || 0;
    dispatch(changeCarValue(cost));
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addCarList({ name: carName, cost: carValue }));
    // dispatch(changeCarName(" "));
    // dispatch(changeCarValue(0));
    //bu işe yarar bir kullanım ancak best practice değil
  }
  return (
    <div>
      <form className="is-align-items-center" onSubmit={handleSubmit}>
        <h4 className="title is-3 mr-3">Add Car</h4>
        <label className="title is-5 mr-3">Car Name</label>
        <input
          className="mr-3"
          type="text"
          value={carName}
          onChange={handleNameChange}
        />

        <label className="title is-5 mr-3">Car Value</label>
        <input
          className="mr-3"
          type="number"
          value={carValue || ""}
          onChange={handleValueChange}
        />

        <button className="button is-link">Submit</button>
      </form>
    </div>
  );
};
export default CarForm;
