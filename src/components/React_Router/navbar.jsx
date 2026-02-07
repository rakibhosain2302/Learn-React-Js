import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Blog from "./pages/blog.jsx";
import Contact from "./pages/contact.jsx";
import Error from "./pages/error.jsx";


function NavbarExample() {
  return (
    <BrowserRouter>
      <h1 className="text-center mt-5">NavbarExample React Router</h1>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default NavbarExample;
