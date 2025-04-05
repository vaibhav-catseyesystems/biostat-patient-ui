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
      <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1 max-sm:gap-4">
        <FormField
          label="ABHA Number"
          type="text"
          value={formData.abhaNumber}
          onChange={(e) => handleChange("abhaNumber", e.target.value)}
          placeholder="Enter ABHA number"
        />
        <FormField
          label="Address"
          type="text"
          value={formData.address}
          onChange={(e) => handleChange("address", e.target.value)}
          placeholder="Enter address"
        />
      </div>
      <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1 max-sm:gap-4">
        <FormField
          label="Emergency Contact No."
          type="tel"
          value={formData.emergencyContact}
          onChange={(e) => handleChange("emergencyContact", e.target.value)}
          placeholder="Enter emergency contact"
        />
        <FormField
          label="Passport No."
          type="text"
          value={formData.passportNo}
          onChange={(e) => handleChange("passportNo", e.target.value)}
          placeholder="Enter passport number"
        />
      </div>

      <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1 max-sm:gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-[14px] font-medium text-[#64748B]">Nationality</label>
          <select
            value={formData.nationality}
            onChange={(e) => handleChange("nationality", e.target.value)}
            className="rounded-[8px] border-[0.8px] border-[#E9ECEF] p-3 outline-none"
          >
            <option value="">Select nationality</option>
            <option value="Indian">Indian</option>
            <option value="American">American</option>
            <option value="British">British</option>
            <option value="Canadian">Canadian</option>
            <option value="Australian">Australian</option>
            <option value="French">French</option>
            <option value="German">German</option>
            <option value="Japanese">Japanese</option>
            <option value="Chinese">Chinese</option>
            <option value="Brazilian">Brazilian</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[14px] font-medium text-[#64748B]">Country of Residence</label>
          <select
            value={formData.countryOfResidence}
            onChange={(e) => handleChange("countryOfResidence", e.target.value)}
            className="rounded-[8px] border-[0.8px] border-[#E9ECEF] p-3 outline-none"
          >
            <option value="">Select country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
            <option value="France">France</option>
            <option value="Germany">Germany</option>
            <option value="Japan">Japan</option>
            <option value="China">China</option>
            <option value="Brazil">Brazil</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1 max-sm:gap-4">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={formData.isIndian}
            onChange={(e) => handleChange("isIndian", e.target.checked)}
            className="w-5 h-5 "
          />
          <label className="text-[14px] font-medium text-[#64748B]">Are you Indian?</label>
        </div>

        <FormField
          label="Password"
          type="password"
          value={formData.password}
          onChange={(e) => handleChange("password", e.target.value)}
          placeholder="Enter password"
        />
      </div>
    </div>
  );
};

export default BasicDetailsForm;
