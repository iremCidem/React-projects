import { useState } from "react";
import bookimg from "../book.png";
import { useContext } from "react";
import BookContext from "../context/books";

const Book = ({ book }) => {
  const { deleteItem, changeTitle } = useContext(BookContext);
  const [state, setState] = useState(true);
  const [newTitle, setNewTitle] = useState();
  function deleteClick() {
    deleteItem(book.id);
  }
  function düzenle() {
    setState(!state);
  }
  function save(e) {
    e.preventDefault();

    changeTitle(newTitle, book.id);
    düzenle();
  }
  function changeTit(e) {
    setNewTitle(e.target.value);
  }

  return (
    <div className="book" key={book.id}>
      {state && (
        <div>
          <img src={bookimg} alt="book" width="80px" />

          <h3 className="name">{book.name}</h3>

          <button className="btn" onClick={düzenle}>
            D
          </button>
          <button className="btn" onClick={deleteClick}>
            X
          </button>
        </div>
      )}
      {!state && (
        <div>
          <form onSubmit={save}>
            <label>Title</label>
            <input type="text" value={newTitle} onChange={changeTit} />
            <button className="buton">Save</button>
          </form>
          <div>
            <button className="btn" onClick={düzenle}>
              D
            </button>
            <button className="btn" onClick={deleteClick}>
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Book;
