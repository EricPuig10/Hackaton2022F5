import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DetailPage } from "../pages/DetailPage";
import { Home } from "../pages/Home";
import { NavBar } from "../components/NavBar/NavBar";
import { Register } from "../pages/Register";
import { Sell} from "../pages/Sell";

export default function Router(props) {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<DetailPage />} />
        <Route path="/nav" element={<NavBar />} />
        <Route path="/login" element={<Register />} />
        <Router path="/sell" element={<Sell />} />
      </Routes>
    </BrowserRouter>
  );
}
