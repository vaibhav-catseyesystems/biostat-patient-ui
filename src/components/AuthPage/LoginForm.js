import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../actions/userActions";

function LoginForm() {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let user = {
      "username": formData.username,
      "password": formData.password
    }
    dispatch(loginUser(user))
  };

  return (
    <form className="flex flex-col gap-[24px]" onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor="username"
          className="block text-[14px] font-medium text-[#1E293B] mb-[8px]"
        >
          Email
        </label>
        <input
          id="username" type="text" name="username"
          value={formData.username} onChange={handleChange}
          className="w-full px-[16px] py-[12px] rounded-[8px] border-[1px] border-[#E9ECEF] text-[15px]"
          placeholder="Enter your username"
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
          id="password" type="password" name="password"
          value={formData.password} onChange={handleChange}
          className="w-full px-[16px] py-[12px] rounded-[8px] border-[1px] border-[#E9ECEF] text-[15px]"
          placeholder="Enter your password"
        />
      </div>

      <div className="flex justify-between items-center">
        <><div></div></>
        {/* <label className="flex items-center gap-[8px] text-[14px] text-[#64748B]">
          <input
            type="checkbox"
            className="rounded-[4px] border-[1px] border-[#E9ECEF]"
          />
          <span>Remember me</span>
        </label> */}
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
