import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createRandomSong } from "../data/datas";
import { addSong, removeSong } from "../store/slices/songSlice";

export default function SongSide() {
  const dispatch = useDispatch();
  const songData = useSelector((state) => state.songs);

  const handleSongAdd = (song) => {
    dispatch(addSong(song));
  };
  const handleSongRemove = (song) => {
    dispatch(removeSong(song));
  };
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p style={{ marginRight: "15px" }}>Song Playlist</p>

        <button
          onClick={() => handleSongAdd(createRandomSong())}
          style={{
            color: "white",
            backgroundColor: "blue",
            border: "none",
            padding: "5px",
          }}
        >
          + Add Song
        </button>
      </div>
      <div>
        <ul style={{ listStyle: "none" }}>
          {songData.map((song) => {
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "10px 350px",
                }}
              >
                <li>{song} </li>
                <button
                  onClick={() => handleSongRemove(song)}
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
        </ul>
      </div>
    </div>
  );
}
console.log();
