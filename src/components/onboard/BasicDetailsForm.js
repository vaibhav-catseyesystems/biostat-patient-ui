import React from "react";
import FormField from "./FormField";

const BasicDetailsForm = ({ formData, updateFormData }) => {
  const handleChange = (field, value) => {
    updateFormData(field, value);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1 max-sm:gap-4">
        <FormField
          label="First Name"
          type="text"
          value={formData.firstName}
          onChange={(e) => handleChange("firstName", e.target.value)}
          placeholder="Enter first name"
        />
        <FormField
          label="Last Name"
          type="text"
          value={formData.lastName}
          onChange={(e) => handleChange("lastName", e.target.value)}
          placeholder="Enter last name"
        />
      </div>

      <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1 max-sm:gap-4">
        <FormField
          label="Email"
          type="email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          placeholder="Enter email address"
        />
        <FormField
          label="Phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          placeholder="Enter phone number"
        />
      </div>

      <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1 max-sm:gap-4">
        <FormField
          label="Date of Birth"
          type="date"
          value={formData.dateOfBirth}
          onChange={(e) => handleChange("dateOfBirth", e.target.value)}
        />
        <div className="flex flex-col gap-2">
          <label className="text-[14px] font-medium text-[#64748B]">
            Gender
          </label>
          <select
            value={formData.gender}
            onChange={(e) => handleChange("gender", e.target.value)}
            className="rounded-[8px] border-[0.8px] border-[#E9ECEF] p-3 outline-none"
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default BasicDetailsForm;
