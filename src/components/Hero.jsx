import React from "react";
import hand_icon from "../../src/assets/hand_icon.png";
import arrow_icon from "../../src/assets/arrow_icon.png";
import men from "../../src/assets/p8.webp";

const Hero = () => {
  return (
    <div
      className="h-screen bg-[linear-gradient(180deg,#47fdae,#e1ffea22_60%)] flex"
    >
      {/* LEFT */}
      <div className="flex-1 flex flex-col justify-center pl-[80px]">
        <h2 className="text-[#090909] text-[20px] font-semibold">
          Best Deals ! Best Prices !
        </h2>

        <div className="flex items-center gap-[20px]">
          <p className="text-[#171717] text-[60px] font-bold">new</p>
          <img src={hand_icon} alt="" className="h-[60px]" />
        </div>

        <p className="text-[#171717] text-[60px] font-bold">collections</p>
        <p className="text-[#171717] text-[60px] font-bold">for everyone</p>

        <div className="flex justify-center items-center gap-[4px] w-[300px] h-[50px] rounded-[75px] mt-[30px] bg-[#ff4141] text-white text-[18px] font-medium cursor-pointer">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" className="h-[30px]" />
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex-1 flex items-center justify-center">
        <img src={men} alt="" className="h-[400px]" />
      </div>
    </div>
  );
};

export default Hero;
