import React from "react";

function QuickLinkCard({ link }) {
  return (
    <article className="bg-white shadow-[0_2px_12px_rgba(0,0,0,0.08)] p-6 rounded-[13px] flex items-center justify-between">
      <div className="flex items-center gap-[12px]">
        <span className="text-[24px]">{link.icon}</span>
        <h3 className="text-[16px] font-medium text-[#1e293b]">{link.title}</h3>
      </div>

      {link.count > 0 && (
        <span className="bg-[#4318D1] text-white rounded-full w-[24px] h-[24px] flex items-center justify-center text-[12px]">
          {link.count}
        </span>
      )}
    </article>
  );
}

export default QuickLinkCard;
