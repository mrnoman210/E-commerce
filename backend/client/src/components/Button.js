import React from "react";

function Button({ Name, SVG }) {
  return (
    <a
      href="../login"
      className="w-fit px-4 items-center hover:text-white hover:drop-shadow-lg bg-gray-100 border-0 py-3 focus:outline-none text-black hover:bg-red-400 rounded text-base sm:m-4  "
    >
      {Name}
      {SVG}
    </a>
  );
}

export default Button;
