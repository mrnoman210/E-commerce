import React from "react";
import "./Button.css";
function Button({ Name, SVG, to }) {
  return (
    <a
      href={to}
      className="myClas w-fit px-4 items-center hover:text-white bg-gray-100 border-0 py-3 focus:outline-none text-black hover:bg-red-400 rounded text-base sm:m-4  "
    >
      {Name}
      {SVG}
    </a>
  );
}

export default Button;
