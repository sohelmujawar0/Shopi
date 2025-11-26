import React, { useState, useContext } from "react";
import logo from "../../src/assets/logo.webp";
import cart_icon from "../../src/assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../src/Context/ShopContext";
import { Menu, X } from "lucide-react"; // optional icons (if installed)

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [open, setOpen] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <nav className="w-full shadow-sm px-4 py-3 bg-white flex justify-between items-center">
      
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" className="h-10 md:h-14" />
        <p className="text-[#171717] text-2xl md:text-3xl font-semibold">Shopifi</p>
      </div>

      <button
        className="md:hidden"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      <ul
        className={`flex flex-col md:flex-row md:static absolute left-0 w-full md:w-auto
        bg-white md:bg-transparent top-[68px] md:top-0 transition-all duration-300
        ${open ? "opacity-100 visible" : "opacity-0 invisible md:visible md:opacity-100"}
        md:items-center gap-6 md:gap-10 px-6 md:px-0 py-4 md:py-0 shadow-md md:shadow-none`}
      >
        {[
          { name: "Home", path: "/", key: "home" },
          { name: "Men", path: "/mens", key: "mens" },
          { name: "Women", path: "/womens", key: "womens" },
          { name: "Kids", path: "/kids", key: "kids" },
        ].map((item) => (
          <li
            key={item.key}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => {
              setMenu(item.key);
              setOpen(false); 
            }}
          >
            <Link to={item.path} className="text-[#626262] text-lg font-medium">
              {item.name}
            </Link>
            {menu === item.key && (
              <hr className="w-3/4 h-[3px] rounded-full bg-[#ff4141]" />
            )}
          </li>
        ))}
      </ul>


      <div className="hidden md:flex items-center gap-6 relative">
        <Link to="/login">
          <button className="px-6 py-2 border border-[#7a7a7a] rounded-full 
          text-[#515151] font-medium bg-white active:bg-[#f3f3f3]">
            Login
          </button>
        </Link>

        <Link to="/cart">
          <img src={cart_icon} alt="cart" className="h-10" />
        </Link>

        <span className="absolute top-[-6px] right-[-6px] bg-red-600 text-white 
          text-xs w-5 h-5 rounded-full flex items-center justify-center">
          {getTotalCartItems()}
        </span>
      </div>

      <div className="md:hidden flex items-center gap-4 relative">
        <Link to="/cart">
          <img src={cart_icon} alt="cart" className="h-8" />
        </Link>

        <span className="absolute top-[-6px] right-[-6px] bg-red-600 text-white 
          text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
          {getTotalCartItems()}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
