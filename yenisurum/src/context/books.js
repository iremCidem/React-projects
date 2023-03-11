import { createContext } from "react";
import axios from "axios";
import { useState } from "react";
import { useCallback } from "react";

const BookContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);
  const getDatas = useCallback(async () => {
    const datas = await axios.get("http://localhost:8000/books");
    setBooks(datas.data);
  }, []);

  async function deleteItem(bookId) {
    try {
      await axios.delete(`http://localhost:8000/books/${bookId}`);
      getDatas();
    } catch (error) {
      console.log("zarrr", error);
    }
  }
  async function submit(value) {
    const newName = await axios.post("http://localhost:8000/books", {
      name: value,
    });

    getDatas();
  }
  async function changeTitle(newtitle, id) {
    const changed = await axios.put(`http://localhost:8000/books/${id}`, {
      name: newtitle,
    });
    getDatas();
  }
  const values = {
    books,
    getDatas,
    deleteItem,
    submit,
    changeTitle,
  };
  return <BookContext.Provider value={values}>{children}</BookContext.Provider>;
}
export default BookContext;
export { Provider };
//default olarak export ettiğimizi düz import ediyoruz, {}ile ve const ile export ettiğimizi {}ile import ediyoruz.
