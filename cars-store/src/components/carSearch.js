import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../store/store";
const CarSearch = () => {
  const dispatch = useDispatch();
  function handleChange(e) {
    dispatch(changeSearchTerm(e.target.value));
  }
  const searchTerm = useSelector((state) => {
    return state.cars.searchTerm;
  });

  return (
    <div className="mb-5">
      <form>
        <label className="title is-5">Search</label>
        <input
          value={searchTerm}
          className="input is-primary"
          type="text"
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default CarSearch;
