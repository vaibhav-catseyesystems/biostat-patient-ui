import React from "react";

function FilterSection({ searchQuery, setSearchQuery }) {
  return (
    <div className="mb-6 bg-white rounded-[13px] p-6 shadow-[0px_2px_12px_0px_rgba(0,0,0,0.08)]">
      <div className="flex flex-col gap-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by doctor or specialty"
          className="w-full p-3 border-[0.8px] border-[#E9ECEF] rounded-[8px]"
        />
        <div className="flex gap-4 max-sm:flex-wrap">
          <button className="px-4 py-2 rounded-[8px] bg-[#F1F5F9] text-[#64748B] max-sm:w-full">
            Date Range
          </button>
          <button className="px-4 py-2 rounded-[8px] bg-[#F1F5F9] text-[#64748B] max-sm:w-full">
            Doctor
          </button>
          <button className="px-4 py-2 rounded-[8px] bg-[#F1F5F9] text-[#64748B] max-sm:w-full">
            Type
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilterSection;
