import React, { useState, useContext } from 'react'
import logo from "../../src/assets/logo.webp"
import cart_icon from "../../src/assets/cart_icon.png"
import { Link } from 'react-router-dom'
import { ShopContext } from '../../src/Context/ShopContext'

const Navbar = () => {
  const [menu, setMenu] = useState("home")
  const { getTotalCartItems } = useContext(ShopContext)

  return (
    <div className="flex justify-around items-center py-4 shadow-[0_1px_3px_-2px_black]">

      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="" className="h-[70px]" />
        <p className="text-[#171717] text-[28px] font-semibold">Shopifi</p>
      </div>

      {/* Menu */}
      <ul className="flex items-center gap-[50px] list-none text-[#626262] text-[18px] font-medium">
        <li
          className="flex flex-col items-center justify-center gap-[3px] cursor-pointer"
          onClick={() => setMenu("home")}
        >
          <Link to="/" className="no-underline text-[#626262]">Home</Link>
          {menu === "home" && (
            <hr className="w-[80%] h-[3px] rounded-[10px] bg-[#ff4141] border-none" />
          )}
        </li>

        <li
          className="flex flex-col items-center justify-center gap-[3px] cursor-pointer"
          onClick={() => setMenu("mens")}
        >
          <Link to="/mens" className="no-underline text-[#626262]">Men</Link>
          {menu === "mens" && (
            <hr className="w-[80%] h-[3px] rounded-[10px] bg-[#ff4141] border-none" />
          )}
        </li>

        <li
          className="flex flex-col items-center justify-center gap-[3px] cursor-pointer"
          onClick={() => setMenu("womens")}
        >
          <Link to="/womens" className="no-underline text-[#626262]">Women</Link>
          {menu === "womens" && (
            <hr className="w-[80%] h-[3px] rounded-[10px] bg-[#ff4141] border-none" />
          )}
        </li>

        <li
          className="flex flex-col items-center justify-center gap-[3px] cursor-pointer"
          onClick={() => setMenu("kids")}
        >
          <Link to="/kids" className="no-underline text-[#626262]">Kids</Link>
          {menu === "kids" && (
            <hr className="w-[80%] h-[3px] rounded-[10px] bg-[#ff4141] border-none" />
          )}
        </li>
      </ul>

      {/* Login + Cart */}
      <div className="flex items-center gap-[45px] relative">
        <Link to="/login">
          <button className="w-[140px] h-[40px] border border-[#7a7a7a] rounded-[75px] 
            text-[#515151] text-[16px] font-medium bg-white 
            active:bg-[#f3f3f3]">
            Login
          </button>
        </Link>

        <Link to="/cart">
          <img src={cart_icon} alt="" className="h-[40px]" />
        </Link>

        {/* Cart Count Bubble */}
        <div
          className="absolute top-[-10px] right-[-10px] w-[22px] h-[22px] 
          flex justify-center items-center text-white bg-red-600 
          text-[14px] rounded-full"
        >
          {getTotalCartItems()}
        </div>
      </div>

    </div>
  )
}

export default Navbar
