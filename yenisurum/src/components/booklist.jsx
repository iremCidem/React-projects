import React from "react";
import Book from "./book";
import BookContext from "../context/books";
import { useContext } from "react";

export default function Booklist() {
  const { books } = useContext(BookContext);
  const component = books.map((book) => {
    return (
      <div key={book.id}>
        <Book book={book} key={book.id} />
      </div>
    );
  });

  return <div className="books">{component}</div>;
}
