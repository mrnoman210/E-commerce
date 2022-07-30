import React from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import "./PlaceOnTop.css";

const PlaceOnTop = () => {
  const [visible, setVisible] = React.useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div className="sticky border-r-4 cursor-pointer text-4xl bottom-7 w-11 h-13 inline">
      <FaArrowCircleUp
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
        className=" text-center glow text-green-400 "
      />
    </div>
  );
};

export default PlaceOnTop;
