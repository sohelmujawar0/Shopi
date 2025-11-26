import React from "react";
import hand_icon from "../../src/assets/hand_icon.png";
import arrow_icon from "../../src/assets/arrow_icon.png";
import men from "../../src/assets/p8.webp";

const Hero = () => {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#47fdae,#e1ffea22_60%)] flex flex-col-reverse md:flex-row items-center md:items-start">
      <div className="flex-1 flex flex-col justify-center px-6 md:pl-20 text-center md:text-left mt-10 md:mt-0">
        <h2 className="text-[#090909] text-[16px] sm:text-[20px] font-semibold">
          Best Deals ! Best Prices !
        </h2>

        <div className="flex items-center justify-center md:justify-start gap-4 mt-3">
          <p className="text-[#171717] text-[40px] sm:text-[60px] font-bold">
            new
          </p>
          <img src={hand_icon} alt="" className="h-[40px] sm:h-[60px]" />
        </div>

        <p className="text-[#171717] text-[40px] sm:text-[60px] font-bold">
          collections
        </p>
        <p className="text-[#171717] text-[40px] sm:text-[60px] font-bold">
          for everyone
        </p>

        <div className="flex justify-center md:justify-start items-center gap-2 w-[220px] sm:w-[280px] h-[45px] sm:h-[50px] rounded-full mt-6 bg-[#ff4141] text-white text-[16px] sm:text-[18px] font-medium cursor-pointer mx-auto md:mx-0">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" className="h-[22px] sm:h-[28px]" />
        </div>
      </div>

      <div className="flex-1 flex justify-center md:justify-end">
        <img src={men} alt="" className="h-[260px] sm:h-[330px] md:h-[420px]" />
      </div>
    </div>
  );
};

export default Hero;
