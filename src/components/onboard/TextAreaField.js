import React from "react";

const TextAreaField = ({ label, value, onChange, placeholder }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[14px] font-medium text-[#64748B]">{label}</label>
      <textarea
        value={value}
        onChange={onChange}
        className="h-[100px] rounded-[8px] border-[0.8px] border-[#E9ECEF] p-3 outline-none"
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextAreaField;
