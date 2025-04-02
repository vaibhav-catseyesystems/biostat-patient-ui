import React from "react";
import FormField from "./FormField";

const FamilyInformationForm = ({ formData, updateFormData }) => {
  const handleChange = (field, value) => {
    updateFormData(field, value);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1 max-sm:gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-[14px] font-medium text-[#64748B]">
            Marital Status
          </label>
          <select
            value={formData.maritalStatus}
            onChange={(e) => handleChange("maritalStatus", e.target.value)}
            className="rounded-[8px] border-[0.8px] border-[#E9ECEF] p-3 outline-none"
          >
            <option value="">Select status</option>
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="divorced">Divorced</option>
            <option value="widowed">Widowed</option>
          </select>
        </div>
        <FormField
          label="Spouse Name"
          type="text"
          value={formData.spouseName}
          onChange={(e) => handleChange("spouseName", e.target.value)}
          placeholder="Enter spouse name"
        />
      </div>

      <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1 max-sm:gap-4">
        <FormField
          label="Number of Children"
          type="number"
          value={formData.children}
          onChange={(e) => handleChange("children", e.target.value)}
          placeholder="Enter number of children"
        />
        <FormField
          label="Emergency Contact Name"
          type="text"
          value={formData.emergencyContact}
          onChange={(e) => handleChange("emergencyContact", e.target.value)}
          placeholder="Enter emergency contact name"
        />
      </div>

      <FormField
        label="Emergency Contact Phone"
        type="tel"
        value={formData.emergencyPhone}
        onChange={(e) => handleChange("emergencyPhone", e.target.value)}
        placeholder="Enter emergency contact phone"
      />
    </div>
  );
};

export default FamilyInformationForm;
