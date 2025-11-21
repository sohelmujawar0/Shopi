import React from 'react'

const Newsletter = () => {
  return (
    <div className="w-full h-[50vh] flex flex-col items-center justify-center mx-auto px-[140px] mb-[150px] gap-[30px] bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22]">
      
      <h1 className="text-[#454545] text-[55px] font-semibold text-center">
        Get Exclusive Offers on Your Email
      </h1>

      <p className="text-[#454545] text-[20px] text-center">
        Subscribe to our newsletter and stay updated
      </p>

      <div className="flex items-center justify-between bg-white w-[700px] h-[50px] rounded-[80px] border border-[#e3e3e3]">
        
        <input
          type="email"
          placeholder="Your Email id"
          className="w-[500px] ml-[30px] border-none outline-none text-[#616161] text-[16px]"
        />

        <button className="w-[200px] h-[50px] rounded-[80px] bg-black text-white text-[16px] cursor-pointer">
          Subscribe
        </button>

      </div>
    </div>
  )
}

export default Newsletter
