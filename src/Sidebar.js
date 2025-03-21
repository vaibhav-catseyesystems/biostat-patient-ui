import React from "react";
import { Link, useLocation } from "react-router-dom";

function Sidebar({ menuItems }) {
  const location = useLocation();
  return (
    <aside className="w-[280px] bg-white border-r-[1px] border-[#e9ecef] h-screen fixed left-0 top-0 flex flex-col max-lg:hidden">
      <header className="p-6 border-b-[1px] border-[#e9ecef]">
        <h2 className="text-[24px] font-bold text-[#4318D1]"><span className="text-green-500 font-bold">Bio</span>
          <span className="text-blue-500 font-bold">Stat</span></h2>
      </header>

      <div className="p-4 border-t-[1px] border-[#e9ecef]">
        <div className="flex items-center gap-[12px] p-2">
          <img
            src="https://placehold.co/40x40"
            className="rounded-full"
            alt="Profile"
          />
          <div>
            <p className="text-[14px] font-medium text-[#1e293b]">
              Sarah Johnson
            </p>
            <p className="text-[12px] text-[#64748b]">Patient ID: #12345</p>
          </div>
        </div>
      </div>

      <nav className="flex flex-col gap-[8px] p-4 flex-grow">
        {menuItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          return <>
            <Link
              key={index}
              to={item.path}
              className={`flex items-center gap-[12px] p-4 rounded-[8px] ${isActive
                  ? "bg-[#4318D1] text-white"
                  : "text-[#64748b] hover:bg-[#f1f5f9]"
                }`}
            >
              <span>{item.icon}</span>
              <span>{item.title}</span>
            </Link>
          </>
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;
