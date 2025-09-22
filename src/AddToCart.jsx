import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AddToCart = () => {
  const cartSelector = useSelector((state) => state.cart.items);
  //   console.log(carSelector.length);

  return (
    <div className="relative">
      <Link to="/cart">
        <button className="cursor-pointer text-white hover:text-blue-600 focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9h14l-2-9M10 21a2 2 0 104 0"
            />
          </svg>
        </button>
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
          {cartSelector.length ? cartSelector.length : 0}
        </span>
      </Link>
    </div>
  );
};

export default AddToCart;
