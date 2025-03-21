import React from "react";

const InfoCard = ({ title, icon, items }) => {
  return (
    <article className="bg-white p-6 rounded-[13px] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.08)] transform hover:translate-y-[-2px] transition-transform duration-200 cursor-pointer">
      <h3 className="text-[18px] font-medium text-[#1E293B] mb-4 flex items-center gap-2">
        <span>{icon}</span> {title}
      </h3>
      <div className="flex flex-col gap-[16px]">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-2 rounded-[8px] hover:bg-[#F8F9FA]"
          >
            <span className="text-[#64748B]">{item.label}</span>
            <span
              className={`text-[#1E293B] ${item.isBold ? "font-medium" : ""} max-sm:text-[13px]`}
            >
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </article>
  );
};

export default InfoCard;
