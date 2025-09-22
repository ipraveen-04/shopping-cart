import { useState } from "react";
import AddToCart from "./AddToCart";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#1d3557] shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/">
          <div className="text-2xl font-bold text-white">ShopNest</div>
          {/* <img src="https://chatgpt.com/s/m_68d0daea0b8c8191b4bfc767c1b6fa3e" /> */}
        </Link>

        <nav className="hidden md:flex space-x-6">
          {/* <a className="text-gray-700 hover:text-blue-600"></a> */}
          <Link className="cursor-pointer text-white" to="/">
            Home
          </Link>
        </nav>
        <div className="flex items-center space-x-6">
          <AddToCart />
          {/* <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Login
          </button> */}
        </div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          ☰
        </button>
      </div>
      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-700 shadow-lg border-t border-blue-600">
          <nav className="flex flex-col space-y-2 p-4 font-medium">
            <Link
              to="/"
              className="text-white hover:text-yellow-300"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
