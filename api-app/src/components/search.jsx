import React, { useState } from "react";
import UseFetch from "../useFetch";

export default function Search({ submit }) {
  const [search, setSearch] = useState();
  function handleChange(e) {
    setSearch(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    submit(search);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={search} onChange={handleChange} />
      </form>
    </div>
  );
}
//bir childdan parenta değer aktarmanın yolu, ikisinde de bir fonksiyon oluşturup parent fonksiyonda o değeri fonksiyon parametresi olarak yazmak ve childada o fonksiyonu çağırıp değeri parametre olarak vermektir.
