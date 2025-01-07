import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import BlogPost from "./pages/BlogPost";
import ShopNow from "./pages/ShopNow";
import { SearchProvider } from "./components/SearchContext";
import OrderForm from "./components/OrderForm";

const App = () => {
  return (
    <SearchProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:ShopNow" element={<ShopNow />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog/:title" element={<BlogPost />} />
      </Routes>
    </SearchProvider>
  );
};

export default App;
