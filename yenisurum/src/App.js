import React, { useContext, useEffect } from "react";
import Form from "./components/form";
import "../src/App.css";
import Booklist from "./components/booklist";
import BookContext from "./context/books";

export default function App() {
  const { getDatas } = useContext(BookContext);
  useEffect(() => {
    getDatas();
  }, [getDatas]);

  return (
    <div>
      <h3 className="list">Reading List</h3>
      <Booklist />
      <Form />
    </div>
  );
}
//json server kullanarak verilerimizi bir apiden çekeceğiz böylece kalıcı hale getireceğiz.
//axios bir kütüphane ama arka planda fetch yapısını kullanıyor, önemki projelerde axios kullanacağız.
//useEffect hooku bir react fonksiyonu.ilk argümanı bir arrow fonksiyonu, ikinci argümanı bir array ya da hiçbirşey.
