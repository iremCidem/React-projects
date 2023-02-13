import React, { useState } from "react";
import Book from "./book";

export default function Booklist({ booklist, deleteItem, changeTitle }) {
  const component = booklist.map((book) => {
    return (
      <div>
        <Book
          book={book}
          key={book.id}
          deleteItem={deleteItem}
          change={changeTitle}
        />
      </div>
    );
  });

  return <div className="books">{component}</div>;
}
