import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DetailPage } from "../pages/DetailPage";
import { Home } from "../pages/Home";



export default function Router(props) {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}
