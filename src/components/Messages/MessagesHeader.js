import React from "react";

const MessagesHeader = () => {
  return (
    <header className="flex-1 justify-between items-center mb-16">
      <div>
        <h1 className="text-[32px] font-semibold text-[#1E293B] mb-4">
          Messages
        </h1>
        <p className="text-[16px] text-[#64748B]">
          View and manage your healthcare communications
        </p>
      </div>

      <div className="flex gap-4 items-center mt-6 mb-8 max-sm:flex-wrap">
        <button className="bg-[#4318D1] text-white px-6 py-3 rounded-[8px] font-[500] max-sm:w-full flex items-center justify-center gap-2">
          <span>Compose Message</span>
          <span>✏️</span>
        </button>

        <div className="relative flex-1 max-sm:w-full">
          <input
            type="text"
            placeholder="Search messages..."
            className="w-full px-4 py-3 rounded-[8px] border-[0.8px] border-[#E9ECEF] bg-white"
          />
        </div>
      </div>
    </header>
  );
};

export default MessagesHeader;
