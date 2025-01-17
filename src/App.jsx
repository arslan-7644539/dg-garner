import React from "react";
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
import AddBlog from "./Admin/pages/AddBlog";
import AddItems from "./Admin/Components/AddItems";
import AddUser from "./Admin/Components/AddUser";
import EditProfile from "./Admin/Components/EditProfile";
import SuperUser from "./SuperUser";
import Frontend from "./frontend/Frontend";

const App = () => {
  return (
    <AuthProvider>
      <SearchProvider>
        <Routes>
          {/* Frontend Side */}
          <Route path="/" element={<Frontend />}>
            <Route index element={<Home />} />
            <Route path="ShopNow" element={<ShopNow />} />
            <Route path="about" element={<About />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blog/:title" element={<BlogPost />} />
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
          </Route>

          {/*  */}
          <Route path="*" element={<ItemNotFound />} />
          {/*  */}

          {/* admin Side */}
          <Route path="/superUser" element={<SuperUser />}>
            <Route path="admin" element={<AdminHome />} />
            <Route path="users" element={<UserTable />} />
            <Route path="addUser" element={<AddUser />} />
            <Route path="production" element={<ProductManagement />} />
            <Route path="addItems" element={<AddItems />} />
            <Route path="profile" element={<Profaile />} />
            <Route path="editProfile" element={<EditProfile />} />
            <Route path="blogs" element={<BlogManagement />} />
            <Route path="addBlog" element={<AddBlog />} />
            <Route path="item" element={<ProductManagement />} />
            <Route path="feedback" element={<Messages />} />
          </Route>
          {/* admin side end */}
        </Routes>
      </SearchProvider>
    </AuthProvider>
  );
};

export default App;

{
  /* {con  ? "yes" : con2 ? "2nd " : "jaj"} */
}
