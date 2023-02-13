import React, { useState } from "react";
export default function Form({ submit }) {
  const [inputvalue, setInputvalue] = useState();
  function handleChange(e) {
    setInputvalue(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    submit(inputvalue);
  }

  return (
    <div className="form-bg">
      <h2 className="title">Add a book</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          className="input"
          value={inputvalue}
          onChange={handleChange}
        />
        <div>
          <button className="btn">Create!</button>
        </div>
      </form>
    </div>
  );
}
