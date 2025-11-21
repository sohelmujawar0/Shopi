import React from 'react'

const LoginSignup = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-gradient-to-b from-[#47fdae] to-[#e1ffea22] pt-[50px]">

      <div className="w-[500px] h-[500px] bg-white mx-auto p-[40px] px-[60px] pb-[100px] border border-black rounded-[20px]">
        
        <h1 className="my-[10px] text-[28px] font-bold">Sign Up</h1>

        <div className="flex flex-col gap-[30px] mt-[30px]">
          <input
            type="text"
            placeholder="Your Name"
            className="h-[40px] w-full pl-[20px] border border-[#c9c9c9] outline-none text-[#5c5c5c] text-[18px] font-[500]"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="h-[40px] w-full pl-[20px] border border-[#c9c9c9] outline-none text-[#5c5c5c] text-[18px] font-[500]"
          />

          <input
            type="password"
            placeholder="Password"
            className="h-[40px] w-full pl-[20px] border border-[#c9c9c9] outline-none text-[#5c5c5c] text-[18px] font-[500]"
          />

          <button className="w-[400px] h-[40px] bg-[#ff4141] text-white text-[20px] font-[500] mt-[10px] cursor-pointer">
            Continue
          </button>

        </div>

        <p className="mt-[20px] text-[#5c5c5c] text-[18px] font-[500]">
          Already have an account ?{" "}
          <span className="text-[#ff4141] font-[600] cursor-pointer">Login here</span>
        </p>

        <div className="flex items-center mt-[25px] gap-[20px] text-[#5c5c5c] text-[18px] font-[500]">
          <input type="checkbox" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>

      </div>
    </div>
  )
}

export default LoginSignup
