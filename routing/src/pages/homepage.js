import React from "react";
import Sidebar from "../components/sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Collapse from "../components/collapse";
import Dropdown from "../components/dropdown";
import ButtonPage from "../pages/buttonPage";
import ModalPage from "./modalPage";
import TablePage from "./tablePage";
import CounterPage from "./counterPage";

export default function Homepage() {
  return (
    <Router>
      <div>
        <Sidebar />
      </div>
      <Routes>
        <Route path="/buttons" element={<ButtonPage />}></Route>
        <Route path="/collapse" element={<Collapse />}></Route>
        <Route path="/dropdown" element={<Dropdown />}></Route>
        <Route path="/modal" element={<ModalPage />}></Route>
        <Route path="/table" element={<TablePage />}></Route>
        <Route
          path="/counter"
          element={<CounterPage initialCount={0} />}
        ></Route>
      </Routes>
    </Router>
  );
}
