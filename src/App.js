import "./App.css";
import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./screens/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./screens/shop/Shop";
import Pages from "./screens/pages/Pages";
import Blog from "./screens/blog/Blog";
import Contact from "./screens/Contact";
import Card from "./components/cards/Card";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/:id" element={<Card />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
