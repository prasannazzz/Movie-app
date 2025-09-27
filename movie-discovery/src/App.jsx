import React from "react";
import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle.jsx";
import Home from "./pages/home.jsx";
import Details from "./pages/details.jsx";
import About from "./pages/about.jsx";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Details />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}
