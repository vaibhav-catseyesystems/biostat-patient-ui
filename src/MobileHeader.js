import React from "react";
import { Link, useLocation } from "react-router-dom";

function MobileHeader({ isMobileMenuOpen, toggleMobileMenu, menuItems }) {
  const location = useLocation();
  
  return (
    <header className="max-lg:block hidden bg-white border-b-[1px] border-[#e9ecef] p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-[24px] font-bold text-[#4318D1]"><span className="text-green-500 font-bold">Bio</span>
        <span className="text-blue-500 font-bold">Stat</span></h2>
        <button
          onClick={toggleMobileMenu}
          className="text-[24px]"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {isMobileMenuOpen && (
        <nav className="mt-4">
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
      )}
    </header>
  );
}

export default MobileHeader;
