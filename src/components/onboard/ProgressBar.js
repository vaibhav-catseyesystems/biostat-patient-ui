import React from "react";

const ProgressBar = ({ formProgress, completedSections }) => {
  return (
    <div className="mt-4">
      <div className="flex items-center gap-2">
        <div
          className={`h-2 w-1/3 rounded-full ${
            formProgress.basicDetails ? "bg-[#4318D1]" : "bg-[#E9ECEF]"
          }`}
        />
        <div
          className={`h-2 w-1/3 rounded-full ${
            formProgress.familyDetails ? "bg-[#4318D1]" : "bg-[#E9ECEF]"
          }`}
        />
        <div
          className={`h-2 w-1/3 rounded-full ${
            formProgress.healthDetails ? "bg-[#4318D1]" : "bg-[#E9ECEF]"
          }`}
        />
      </div>
      <p className="mt-2 text-[14px] text-[#64748B]">
        Progress: {completedSections} of 3 sections completed
      </p>
    </div>
  );
};

export default ProgressBar;
