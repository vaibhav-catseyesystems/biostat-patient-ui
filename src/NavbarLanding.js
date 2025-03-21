"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavbarLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-[#fff] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.08)] z-50">
      <div className="max-w-[1272px] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[48px]">
            <a href="#" className="text-[24px] font-bold text-[#4318D1]">
            <h2 className="text-[24px] font-bold text-[#4318D1]"><span className="text-green-500 font-bold">Bio</span>
            <span className="text-blue-500 font-bold">Stat</span></h2>
            </a>
            <div className="max-lg:hidden flex items-center gap-[32px]">
              <a href="#features" className="text-[15px] text-[#64748B]">
                Features
              </a>
              <a href="#benefits" className="text-[15px] text-[#64748B]">
                Benefits
              </a>
              <a href="#about" className="text-[15px] text-[#64748B]">
                About
              </a>
              <a href="#contact" className="text-[15px] text-[#64748B]">
                Contact
              </a>
            </div>
          </div>
          <div className="flex items-center gap-[16px]">
            <div className="max-lg:hidden flex items-center gap-[16px]">
              <Link className="px-[24px] py-[12px] text-[15px] text-[#1E293B] bg-[#F1F5F9] rounded-[8px]" to={'/auth'} >
                Log In
              </Link>
              <Link className="px-[24px] py-[12px] text-[15px] text-white bg-[#4318D1] rounded-[8px]" to={'/auth'}>
                Sign Up
              </Link>
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-[24px]"
            >
              ☰
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <div className="flex flex-col gap-[16px]">
              <a href="#features" className="text-[15px] text-[#64748B]">
                Features
              </a>
              <a href="#benefits" className="text-[15px] text-[#64748B]">
                Benefits
              </a>
              <a href="#about" className="text-[15px] text-[#64748B]">
                About
              </a>
              <a href="#contact" className="text-[15px] text-[#64748B]">
                Contact
              </a>
              <button className="px-[24px] py-[12px] text-[15px] text-[#1E293B] bg-[#F1F5F9] rounded-[8px] w-full">
                Log In
              </button>
              <button className="px-[24px] py-[12px] text-[15px] text-white bg-[#4318D1] rounded-[8px] w-full">
                Sign Up
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavbarLanding;
