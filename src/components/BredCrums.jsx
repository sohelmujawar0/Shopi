import React from "react";
import arrow_icon from "../../src/assets/arrow_icon.png";

const Bredcrums = ({ product }) => {
  return (
    <div className="flex flex-wrap items-center gap-2 text-[#5e5e5e] text-[14px] sm:text-[16px] font-semibold justify-center mt-6 mb-6 capitalize px-4">
      Home
      <img src={arrow_icon} alt="" className="h-[10px]" />
      Shop
      <img src={arrow_icon} alt="" className="h-[10px]" />
      {product.category}
      <img src={arrow_icon} alt="" className="h-[10px]" />
      {product.name}
    </div>
  );
};

export default Bredcrums;
