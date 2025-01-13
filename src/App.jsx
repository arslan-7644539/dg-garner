import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./authFils/LogInForm";

import { AuthProvider } from "./components/AuthContext";
import { SearchProvider } from "./components/SearchContext";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import ItemNotFound from "./pages/ItemNotFound";
import ShopNow from "./pages/ShopNow";
import { Login, Signup } from "./authFils";

const App = () => {
  return (
    <AuthProvider>
      <SearchProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:ShopNow" element={<ShopNow />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog/:title" element={<BlogPost />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<ItemNotFound />} />
        </Routes>
      </SearchProvider>
    </AuthProvider>
  );
};

export default App;
