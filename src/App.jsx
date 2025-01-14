import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { Login, Signup } from "./authFils";
import { AuthProvider } from "./components/AuthContext";
import { SearchProvider } from "./components/SearchContext";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import ItemNotFound from "./pages/ItemNotFound";
import ShopNow from "./pages/ShopNow";

import AdminHome from "./Admin/pages/AdminHome";
import UserTable from "./Admin/Components/UserTable";
import ProductManagement from "./Admin/Components/ProductManagement";
import Profaile from "./Admin/pages/Profaile";
import BlogManagement from "./Admin/Components/BlogManagement";
import Messages from "./Admin/pages/Messages";


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
          {/* admin side */}
         <Route path="/admin" element={<AdminHome />} />
          <Route path="/users" element={<UserTable />} />
          <Route path="/production" element={<ProductManagement />} />
          <Route path="/profile" element={<Profaile />} />
          <Route path="/blogs" element={<BlogManagement />} />
         
          <Route path="/item" element={<ProductManagement />} />
          <Route path="/feedback" element={<Messages />} />
        </Routes>
      </SearchProvider>
    </AuthProvider>

);
};

export default App;

{/* {con  ? "yes" : con2 ? "2nd " : "jaj"} */}