import React from "react";
import logo from "../../src/assets/logo.webp";
import instagram_icon from "../../src/assets/instagram.png";
import facebook_icon from "../../src/assets/facebook.png";
import whatsapp_icon from "../../src/assets/whatsapp.png";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 py-10 px-4 sm:px-6 md:px-10 bg-white">
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
        <img src={logo} alt="Logo" className="h-16 sm:h-20" />
        <p className="text-[#383838] text-2xl sm:text-4xl font-bold">Shopifi</p>
      </div>

      <ul className="flex flex-wrap justify-center list-none gap-4 sm:gap-6 text-[#252525] text-base sm:text-lg">
        <li className="cursor-pointer hover:text-[#ff4141] transition">About</li>
        <li className="cursor-pointer hover:text-[#ff4141] transition">Products</li>
        <li className="cursor-pointer hover:text-[#ff4141] transition">Offices</li>
        <li className="cursor-pointer hover:text-[#ff4141] transition">Company</li>
        <li className="cursor-pointer hover:text-[#ff4141] transition">Contact</li>
      </ul>

      <div className="flex gap-4 sm:gap-6">
        {[instagram_icon, facebook_icon, whatsapp_icon].map((icon, idx) => (
          <div
            key={idx}
            className="p-2 sm:p-3 bg-[#fbfbfb] border border-[#ebebeb] rounded cursor-pointer hover:bg-[#ff4141] hover:scale-110 transition"
          >
            <img src={icon} alt="social" className="h-6 sm:h-8" />
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-4 w-full text-[#1a1a1a] text-sm sm:text-base mt-6">
        <hr className="w-11/12 h-[2px] bg-[#c7c7c7] border-none rounded" />
        <p>Copyright © 2023 - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
