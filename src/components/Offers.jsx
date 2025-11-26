import React from "react";
import exclusive from "../../src/assets/exclu.webp";

const Offers = () => {
  return (
    <div className="w-full max-w-screen-xl flex flex-col md:flex-row items-center bg-gradient-to-b from-[#e1ffea22] to-[#47fdae] mx-auto my-36 px-4 sm:px-6 md:px-10 gap-8 md:gap-16 min-h-[60vh]">
      <div className="flex-1 flex flex-col justify-center text-center md:text-left">
        <h1 className="text-[#171717] text-3xl sm:text-4xl md:text-[40px] font-normal">
          Exclusive
        </h1>
        <h1 className="text-[#171717] text-3xl sm:text-4xl md:text-[40px] font-normal">
          Offers For You
        </h1>

        <p className="text-[#171717] text-[14px] sm:text-[16px] md:text-[18px] font-semibold mt-2">
          ONLY ON BEST SELLERS PRODUCTS
        </p>

        <button className="w-full sm:w-[180px] md:w-[200px] h-[40px] rounded-full bg-[#ff4141] text-white text-[14px] sm:text-[16px] font-medium mt-6 mx-auto md:mx-0 cursor-pointer">
          Check Now
        </button>
      </div>

      <div className="flex-1 flex items-center justify-center md:justify-end">
        <img
          src={exclusive}
          alt="Exclusive Offer"
          className="h-[220px] sm:h-[280px] md:h-[330px]"
        />
      </div>
    </div>
  );
};

export default Offers;
