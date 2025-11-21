import React from "react";
import logo from "../../src/assets/logo.webp";
import instagram_icon from "../../src/assets/instagram.png";
import facebook_icon from "../../src/assets/facebook.png";
import whatsapp_icon from "../../src/assets/whatsapp.png";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-[50px]">
      
      {/* Logo */}
      <div className="flex items-center gap-[20px]">
        <img src={logo} alt="" className="h-[100px]" />
        <p className="text-[#383838] text-[40px] font-bold">Shopifi</p>
      </div>

      {/* Links */}
      <ul className="flex list-none gap-[50px] text-[#252525] text-[20px]">
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Products</li>
        <li className="cursor-pointer">Offices</li>
        <li className="cursor-pointer">Company</li>
        <li className="cursor-pointer">Contact</li>
      </ul>

      {/* Social Icons */}
      <div className="flex gap-[20px]">
        <div className="p-[10px] pb-[6px] bg-[#fbfbfb] border border-[#ebebeb]">
          <img src={instagram_icon} alt="" className="h-[30px]" />
        </div>

        <div className="p-[10px] pb-[6px] bg-[#fbfbfb] border border-[#ebebeb]">
          <img src={facebook_icon} alt="" className="h-[30px]" />
        </div>

        <div className="p-[10px] pb-[6px] bg-[#fbfbfb] border border-[#ebebeb]">
          <img src={whatsapp_icon} alt="" className="h-[30px]" />
        </div>
      </div>

      {/* Copyright */}
      <div className="flex flex-col items-center gap-[30px] w-full mb-[30px] text-[#1a1a1a] text-[20px]">
        <hr className="w-[80%] h-[3px] bg-[#c7c7c7] border-none rounded-[10px]" />
        <p>Copyright © 2023 - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
