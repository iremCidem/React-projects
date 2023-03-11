import React from "react";
import { createRandomMovie } from "../data/datas";
import { addMovie, removeMovie } from "../store/slices/movieSlice";
import { useDispatch, useSelector } from "react-redux";

export default function MovieSide() {
  const dispatch = useDispatch();
  const movieData = useSelector((state) => {
    return state.movies;
  });
  const handleMovieAdd = (movie) => {
    dispatch(addMovie(movie));
  };
  const handleRemoveMovie = (movie) => {
    dispatch(removeMovie(movie));
  };
  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "10px" }}
      >
        <p style={{ marginRight: "15px" }}>Movie Playlist</p>
        <button
          onClick={() => handleMovieAdd(createRandomMovie())}
          style={{
            color: "white",
            backgroundColor: "blue",
            border: "none",
            padding: "5px",
          }}
        >
          + Add Movie
        </button>
      </div>
      {movieData.map((movie) => {
        return (
          <div
            style={{
              listStyle: "none",
              display: "flex",
              justifyContent: "space-between",
              margin: "10px 350px",
            }}
          >
            <li>{movie}</li>
            <button
              onClick={() => handleRemoveMovie(movie)}
              style={{
                color: "white",
                backgroundColor: "red",
                border: "none",
                padding: "5px",
              }}
            >
              [X]
            </button>
          </div>
        );
      })}
    </div>
  );
}
//bir state objesine ve birden fazla reducer fonksiyonuna sahip olacağız.
//reducers içine stateleri değiştirmek için kullanacağımız fonksiyonları yazıyoruz.
