import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./navbar.jsx";

// Pages
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Blogs from "./pages/blogs.jsx";
import BlogDetails from "./pages/blog.jsx";
import Contact from "./pages/contact.jsx";
import Error from "./pages/error.jsx";

function NavbarExample() {
  return (
    <BrowserRouter>
      <h1 className="text-center mt-5">NavbarExample React Router</h1>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default NavbarExample;
