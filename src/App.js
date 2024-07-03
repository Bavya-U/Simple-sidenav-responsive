import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard.jsx";
import About from "./pages/About.jsx";
import Download from "./pages/Analytics.jsx";
import Content from "./pages/Comment.jsx";
import Product from "./pages/Product.jsx";

import Home from "./Home";
import Blogs from "./Blogs";
import Add from "./Add";
import Counter from "./Counter";
import Contact from "./Contact";
import NoPage from "./NoPage";
import Login from "./pages/Login.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/add" element={<Add />}/>        
             <Route path="/counter" element={<Counter />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/content" element={<Content />} />
            <Route path="/download" element={<Download />} />
            <Route path="/product" element={<Product />} />
            <Route path="/login" element={<Login />} />

          </Route>
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}
