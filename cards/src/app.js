import React from "react";
import Form from "./components/form";
import "../src/app.css";
import { useState } from "react";
import Booklist from "./components/booklist";

export default function App() {
  const [books, setBooks] = useState([]);
  function deleteItem(bookId) {
    const deleted = books.filter((book) => {
      return book.id !== bookId;
    });
    setBooks(deleted);
  }
  function submit(value) {
    const id = Math.floor(Math.random() * 9999);
    const updated = [...books, { id: id, name: value }];
    setBooks(updated);
  }
  function changeTitle(newtitle, id) {
    const updated = books.map((book) => {
      if (book.id === id) {
        return { id: id, name: newtitle };
      }
      return book;
    });
    setBooks(updated);
  }

  return (
    <div>
      <h3 className="list">Reading List</h3>
      <Booklist
        booklist={books}
        deleteItem={deleteItem}
        changeTitle={changeTitle}
      />
      <Form submit={submit} />
    </div>
  );
}
