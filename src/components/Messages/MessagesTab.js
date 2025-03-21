import React from "react";

const MessagesTabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: "all", label: "All Messages" },
    { id: "reminder", label: "Reminders" },
    { id: "test", label: "Test Results" },
    { id: "appointment", label: "Appointments" },
  ];

  return (
    <nav className="flex gap-2 mb-6 flex-wrap pb-2">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`px-8 m-1 py-3 rounded-[8px] font-medium ${
            activeTab === tab.id
              ? "bg-[#4318D1] text-white"
              : "bg-[#F1F5F9] text-[#64748B]"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
};

export default MessagesTabs;
