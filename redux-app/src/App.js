import { useDispatch } from "react-redux";
import "./App.css";
import MovieSide from "./components/movieSide";
import SongSide from "./components/songSide";
import { deleteMovies } from "./store/slices/movieSlice";
import { deleteSongs } from "./store/slices/songSlice";

function App() {
  const dispatch = useDispatch();
  function handleResetAll() {
    dispatch(deleteMovies());
    dispatch(deleteSongs());
  }
  return (
    <div className="App">
      <button
        onClick={handleResetAll}
        style={{
          color: "white",
          backgroundColor: "red",
          border: "none",
          padding: "5px",
        }}
      >
        Reset Both Playlists
      </button>
      <MovieSide />
      <SongSide />
    </div>
  );
}

export default App;
