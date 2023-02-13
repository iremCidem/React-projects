import "./App.css";
import Search from "./components/search";
import UseFetch from "./useFetch";
import { useState } from "react";
import ImagesList from "./components/imagesList";

function App() {
  const [array, setArray] = useState();
  async function submit(input) {
    const data = await UseFetch(input);
    setArray(data.data.results);
  }

  return (
    <div className="App">
      <Search submit={submit} />
      {array && <ImagesList arr={array} />}
    </div>
  );
}

export default App;
