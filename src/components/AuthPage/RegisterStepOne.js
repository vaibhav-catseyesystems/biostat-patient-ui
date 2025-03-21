import React from "react";

function RegisterStepOne({ formData, updateFormData, onNext }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <div>
      <h3 className="text-[18px] font-medium text-[#1E293B] mb-[24px]">
        Basic Information
      </h3>
      <form className="flex flex-col gap-[24px]" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-[16px]">
          <div>
            <label
              htmlFor="firstName"
              className="block text-[14px] font-medium text-[#1E293B] mb-[8px]"
            >
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-[16px] py-[12px] rounded-[8px] border-[1px] border-[#E9ECEF] text-[15px]"
              placeholder="Enter first name"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-[14px] font-medium text-[#1E293B] mb-[8px]"
            >
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
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
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
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
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-[16px] py-[12px] rounded-[8px] border-[1px] border-[#E9ECEF] text-[15px]"
            placeholder="Create password"
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
              name="dateOfBirth"
              type="date"
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
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-[16px] py-[12px] rounded-[8px] border-[1px] border-[#E9ECEF] text-[15px]"
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-[12px] bg-[#4318D1] text-white rounded-[8px] text-[15px] font-medium"
        >
          Next
        </button>
      </form>
    </div>
  );
}

export default RegisterStepOne;
