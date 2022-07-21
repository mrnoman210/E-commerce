import React from "react";
import { useParams } from "react-router-dom";

const Card = () => {
  const { itemsId } = useParams;
  let url = `http://localhost:8000${itemsId}`;
  async function getAllProduct() {
    try {
      const res = await fetch(url);
      setProduct(await res.json());
      setLoader(false);
      // console.log(posts);
      // setProduct(posts);
    } catch (error) {
      console.log(error.message);
    }
  }
  // console.log(post); //infinite loop
  useEffect(() => {
    getAllProduct();
  }, []);
  return <div>Card</div>;
};

export default Card;
