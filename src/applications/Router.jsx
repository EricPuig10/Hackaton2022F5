import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { NavBar } from "../components/NavBar/NavBar";



export default function Router(props) {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nav" element={<NavBar />}/>

      </Routes>
    </BrowserRouter>
  );
}
