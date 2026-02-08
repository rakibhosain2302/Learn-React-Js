import React, { useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";

// Components
import Navbar from "./Navbar/Navbar.jsx";

// Pages
import Home from "./pages/home.jsx";
import Blogs from "./pages/addBlog.jsx";
import About from "./pages/about.jsx";
import Err from "../pages/error.jsx"
import Protected from "./protected.jsx";

const Routing = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <BrowserRouter>
      <div className="mt-5">
        <h1 className="text-center">Protected Routing</h1>
      </div>
      <Navbar />
      {isLoggedIn ? <button onClick={() => setIsLoggedIn(!isLoggedIn) }>Logout</button> : <button onClick={() => setIsLoggedIn(true)}>Login</button>}
      <Routes>
        <Route path="/homePage" element={<Home />} />
        <Route path="/aboutPage" element={<About />} />
        <Route path="/blogsPage" element={<Protected isLoggedIn={isLoggedIn}><Blogs /></Protected>} />
        <Route path="*" element={<Err />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
