import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { BioStatButton } from "../common/BioStatButton";
import { registerUser } from "../../actions/userActions";

function RegisterForm() {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    email: "",
    phone: null,
    password: ""
  });

  const updateFormData = (newData) => {
    setFormData((prevData) => ({ ...prevData, ...newData }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let user = {
      "first_name": formData.firstName,
      "last_name": formData.lastName,
      "role": "patient",
      "username": formData.phone,
      "password": formData.password,
      "email": formData.email,
      "contact_info": formData.phone
    }
    dispatch(registerUser(user))
    console.log("Registration data:", formData);
  };

  return (
    <div>
      <div>
        <form className="flex flex-col gap-[24px]" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-[16px]">
            <div>
              <label
                htmlFor="firstName"
                className="block text-[14px] font-medium text-[#1E293B] mb-[8px]"
              >
                First Name
              </label>
              <input id="firstName"
                name="firstName" type="text" required
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-[16px] py-[12px] rounded-[8px] border-[1px] border-[#E9ECEF] text-[15px]"
                placeholder="Enter first name"
              />
            </div>
            <div>
              <label
                htmlFor="lastName" className="block text-[14px] font-medium text-[#1E293B] mb-[8px]"
              >Last Name</label>
              <input
                id="lastName"
                name="lastName" type="text" required
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-[16px] py-[12px] rounded-[8px] border-[1px] border-[#E9ECEF] text-[15px]"
                placeholder="Enter last name"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-[14px] font-medium text-[#1E293B] mb-[8px]"
            >
              Email
            </label>
            <input
              id="email"
              name="email" type="email" required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-[16px] py-[12px] rounded-[8px] border-[1px] border-[#E9ECEF] text-[15px]"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-[14px] font-medium text-[#1E293B] mb-[8px]"
            >
              Phone
            </label>
            <input
              id="phone"
              name="phone" type="tel" required
              minLength={10}
              maxLength={10}
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-[16px] py-[12px] rounded-[8px] border-[1px] border-[#E9ECEF] text-[15px]"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="grid grid-cols-2 gap-[16px]">
            <div>
              <label
                htmlFor="dateOfBirth"
                className="block text-[14px] font-medium text-[#1E293B] mb-[8px]"
              >
                Date of Birth
              </label>
              <input
                id="dateOfBirth"
                name="dateOfBirth" type="date" required
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="w-full px-[16px] py-[12px] rounded-[8px] border-[1px] border-[#E9ECEF] text-[15px]"
              />
            </div>
            <div>
              <label
                htmlFor="gender"
                className="block text-[14px] font-medium text-[#1E293B] mb-[8px]"
              >
                Gender
              </label>
              <select
                id="gender"
                name="gender" required
                value={formData.gender}
                onChange={handleChange}
                className="w-full px-[16px] py-[12px] rounded-[8px] border-[1px] border-[#E9ECEF] text-[15px]"
              >
                <option value="" disabled>Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
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
              name="password" type="password" required
              value={formData.password}
              onChange={handleChange}
              className="w-full px-[16px] py-[12px] rounded-[8px] border-[1px] border-[#E9ECEF] text-[15px]"
              placeholder="Create password"
            />
          </div>
          <BioStatButton title={"Register"} />
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
