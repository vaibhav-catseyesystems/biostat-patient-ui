import React from "react";

function HealthMetricCard({
  title,
  value,
  unit,
  trend,
  lastChecked,
  onClick,
  isSelected,
}) {
  const getTrendIcon = (trend) => {
    switch (trend) {
      case "stable":
        return "⚪";
      case "increasing":
        return "🔴";
      case "decreasing":
        return "🟢";
      default:
        return "⚪";
    }
  };

  return (
    <article
      className={`bg-white shadow-[0_2px_12px_rgba(0,0,0,0.08)] p-6 rounded-[13px] cursor-pointer transition-all ${
        isSelected ? "ring-2 ring-[#4318D1]" : ""
      }`}
      onClick={onClick}
    >
      <h3 className="text-[18px] font-medium mb-4 text-[#1e293b]">{title}</h3>

      <div className="flex items-end gap-[8px]">
        <span className="text-[32px] font-semibold text-[#1e293b]">
          {value}
        </span>
        <span className="text-[#64748b] mb-1">{unit}</span>
      </div>

      <div className="flex items-center gap-[8px] mt-2">
        <span>{getTrendIcon(trend)}</span>
        <span className="text-[14px] text-[#64748b]">
          Last checked: {lastChecked}
        </span>
      </div>
    </article>
  );
}

export default HealthMetricCard;
