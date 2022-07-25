import React from "react";
import Cards from "../../components/cards/Cards";
import { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import PopupLogin from "../../components/Login/Popup/PopupLogin";

function Home() {
  const [product, setProduct] = useState([]);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState("");
  const url = "http://localhost:8000/api/product";

  async function getProducts() {
    try {
      const res = await fetch(url);
      setProduct(await res.json());
      setLoader(false);
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      getProducts();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loader == true && <Loader />}
      <div class="container mx-auto">
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {product.map((items, index) => {
            return <Cards items={items} key={index} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
