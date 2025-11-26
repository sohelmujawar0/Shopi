import React from 'react'

const LoginSignup = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full
    bg-gradient-to-b from-[#47fdae] to-[#e1ffea22] py-10 px-4">

      <div className="w-full max-w-md bg-white p-6 sm:p-10 border border-black rounded-2xl">

        <h1 className="my-2 text-3xl font-bold">Sign Up</h1>

        <div className="flex flex-col gap-6 mt-6">

          <input
            type="text"
            placeholder="Your Name"
            className="h-12 w-full pl-5 border border-[#c9c9c9] outline-none
            text-[#5c5c5c] text-lg font-medium rounded-lg"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="h-12 w-full pl-5 border border-[#c9c9c9] outline-none
            text-[#5c5c5c] text-lg font-medium rounded-lg"
          />

          <input
            type="password"
            placeholder="Password"
            className="h-12 w-full pl-5 border border-[#c9c9c9] outline-none
            text-[#5c5c5c] text-lg font-medium rounded-lg"
          />

          <button className="w-full h-12 bg-[#ff4141] text-white text-xl font-medium
          rounded-lg mt-2 cursor-pointer">
            Continue
          </button>

        </div>

        <p className="mt-5 text-[#5c5c5c] text-lg font-medium">
          Already have an account?{" "}
          <span className="text-[#ff4141] font-semibold cursor-pointer">Login here</span>
        </p>

        <div className="flex items-center mt-6 gap-3 text-[#5c5c5c] text-lg font-medium">
          <input type="checkbox" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>

      </div>
    </div>
  )
}

export default LoginSignup
