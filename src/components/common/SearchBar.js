import React from "react";

const SearchBar = ({ value, onChange, placeholder }) => {
  return (
    <div className="flex-1 relative  rounded-[8px] border-[0.8px] border-[#E9ECEF] bg-white">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full h-12 px-4 rounded-[8px] border-[0.8px] border-[#E9ECEF] text-[#1E293B]"
      />
      <span className="absolute right-4 top-3.5 text-[#64748B]">🔍</span>
    </div>
  );
};

export default SearchBar;
