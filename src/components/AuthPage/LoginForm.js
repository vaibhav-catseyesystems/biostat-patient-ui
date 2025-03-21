import React from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate=useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard')

    // Handle login submission
  };

  return (
    <form className="flex flex-col gap-[24px]" onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor="email"
          className="block text-[14px] font-medium text-[#1E293B] mb-[8px]"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          className="w-full px-[16px] py-[12px] rounded-[8px] border-[1px] border-[#E9ECEF] text-[15px]"
          placeholder="Enter your email"
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-[14px] font-medium text-[#1E293B] mb-[8px]"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          className="w-full px-[16px] py-[12px] rounded-[8px] border-[1px] border-[#E9ECEF] text-[15px]"
          placeholder="Enter your password"
        />
      </div>

      <div className="flex justify-between items-center">
        <label className="flex items-center gap-[8px] text-[14px] text-[#64748B]">
          <input
            type="checkbox"
            className="rounded-[4px] border-[1px] border-[#E9ECEF]"
          />
          <span>Remember me</span>
        </label>
        <a href="#" className="text-[14px] text-[#4318D1]">
          Forgot password?
        </a>
      </div>

      <button
        type="submit"
        className="w-full py-[12px] bg-[#4318D1] text-white rounded-[8px] text-[15px] font-medium"
      >
        Log In
      </button>
    </form>
  );
}

export default LoginForm;
