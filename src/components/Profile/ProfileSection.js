import React from "react";
import { Link } from "react-router-dom";

const ProfileSection = () => {
  return (
    <section className="flex max-sm:flex-col items-center gap-[24px]">
      <div className="relative">
        <img
          src="https://placehold.co/120x120"
          alt="Profile picture of Sarah Johnson"
          className="rounded-full w-[120px] h-[120px] border-[4px] border-[#4318D1]"
        />
        <button
          aria-label="Change profile picture"
          className="absolute bottom-0 right-0 bg-[#4318D1] text-white rounded-full w-[32px] h-[32px] flex items-center justify-center cursor-pointer"
        >
          📷
        </button>
      </div>
      <div className="flex flex-col gap-[8px] max-sm:items-center">
        <h1 className="text-[32px] max-sm:text-[24px] font-semibold text-[#1E293B]">
          Sarah Johnson
        </h1>
        <p className="text-[16px] text-[#64748B]">Patient ID: #12345</p>
        <div className="flex gap-[16px] mt-[16px] max-sm:flex-col max-sm:w-full">
          <button className="bg-[#4318D1] text-white px-6 py-3 rounded-[8px] text-[14px] font-medium flex items-center justify-center gap-2 max-sm:w-full">
            ✏️ Edit Profile
          </button>
          <Link to={'/dashboard/med-history'} className="bg-[#F1F5F9] text-[#1E293B] px-6 py-3 rounded-[8px] text-[14px] font-medium flex items-center justify-center gap-2 max-sm:w-full">
            📋 Medical History
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
