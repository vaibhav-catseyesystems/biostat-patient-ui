import React from "react";

function HomeHeroSection() {
  return (
    <header className="pt-[120px] pb-[80px] bg-[#F8F9FA]">
      <div className="max-w-[1272px] mx-auto px-6">
        <div className="flex max-lg:flex-col items-center gap-[48px]">
          <div className="flex-1">
            <h1 className="text-[48px] max-sm:text-[36px] font-bold text-[#1E293B] leading-[1.2] mb-[24px]">
              Your Complete Health Monitoring Solution
            </h1>
            <p className="text-[18px] text-[#64748B] mb-[32px]">
              Track your vital signs, manage appointments, and stay connected
              with your healthcare providers - all in one place.
            </p>
            <div className="flex max-sm:flex-col gap-[16px]">
              <button className="px-[32px] py-[16px] text-[16px] text-white bg-[#4318D1] rounded-[8px] font-medium">
                Get Started Free
              </button>
              <button className="px-[32px] py-[16px] text-[16px] text-[#1E293B] bg-[#F1F5F9] rounded-[8px] font-medium">
                Watch Demo
              </button>
            </div>
          </div>
          <div className="flex-1">
            <img
              src="https://placehold.co/600x400"
              alt="Dashboard Preview"
              className="w-full rounded-[13px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.08)]"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default HomeHeroSection;
