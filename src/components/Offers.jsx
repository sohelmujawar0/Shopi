import React from 'react'
import exclusive from "../../src/assets/exclu.webp"

const Offers = () => {
  return (
    <div className="w-[65%] h-[60vh] flex mx-auto mt-[150px] mb-[150px] px-[140px] bg-gradient-to-b from-[#e1ffea22] to-[#47fdae]">
      
      {/* LEFT SIDE */}
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-[#171717] text-[40px] font-normal">Exclusive</h1>
        <h1 className="text-[#171717] text-[40px] font-normal">Offers For You</h1>

        <p className="text-[#171717] text-[18px] font-semibold mt-2">
          ONLY ON BEST SELLERS PRODUCTS
        </p>

        <button className="w-[200px] h-[40px] rounded-[35px] bg-[#ff4141] text-white text-[16px] font-medium mt-[30px] cursor-pointer">
          Check Now
        </button>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1 flex items-center justify-end">
        <img src={exclusive} alt="" className="h-[330px]" />
      </div>

    </div>
  )
}

export default Offers
