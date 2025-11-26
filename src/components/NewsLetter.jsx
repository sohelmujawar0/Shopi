import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full min-h-[50vh] flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 mb-36 gap-6 bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22]">
      <h1 className="text-[#454545] text-2xl sm:text-3xl md:text-4xl lg:text-[55px] font-semibold text-center">
        Get Exclusive Offers on Your Email
      </h1>

      <p className="text-[#454545] text-[16px] sm:text-[18px] md:text-[20px] text-center">
        Subscribe to our newsletter and stay updated
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center bg-white w-full max-w-lg sm:max-w-2xl h-auto sm:h-[50px] rounded-full border border-[#e3e3e3] p-2 sm:p-0 gap-2">
        <input
          type="email"
          placeholder="Your Email id"
          className="flex-1 border-none outline-none text-[#616161] text-[14px] sm:text-[16px] px-4 py-2 sm:py-0 rounded-full sm:rounded-none w-full"
        />
        <button className="w-full sm:w-[200px] h-[50px] rounded-full sm:rounded-full bg-black text-white text-[16px] cursor-pointer">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
