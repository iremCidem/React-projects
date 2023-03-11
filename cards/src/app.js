import React, { useEffect } from "react";
import Form from "./components/form";
import "../src/app.css";
import { useState } from "react";
import Booklist from "./components/booklist";
import axios from "axios";

export default function App() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getDatas();
  }, []);
  async function getDatas() {
    const datas = await axios.get("http://localhost:8000/books");

    setBooks(datas.data);
  }

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
//json server kullanarak verilerimizi bir apiden çekeceğiz böylece kalıcı hale getireceğiz.
//axios bir kütüphane ama arka planda fetch yapısını kullanıyor, önemki projelerde axios kullanacağız.
//useEffect hooku bir react fonksiyonu.ilk argümanı bir arrow fonksiyonu, ikinci argümanı bir array ya da hiçbirşey.
