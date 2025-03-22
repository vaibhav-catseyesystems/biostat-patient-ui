import React from "react";
import RecordItem from "./RecordItem";

const MedicalHistory = ({
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    searchQuery,
    setSearchQuery,
    activeTab,
    setActiveTab,
    filteredRecords,
    onAddNewRecord,
    onRecordClick,
}) => {
    return (
        <main className="">
            <section className="">
                <h1 className="text-[32px] max-lg:text-[24px] font-semibold text-[#1E293B]">
                    Medical History
                </h1>
                <p className="text-[16px] text-[#64748B] mt-4">
                    View and manage your complete medical history
                </p>

                <div className="flex gap-4 items-center mt-6 mb-8 max-sm:flex-wrap">
                    <button
                        onClick={onAddNewRecord}
                        className="bg-[#4318D1] text-white px-6 py-3 rounded-[8px] font-[500] max-sm:w-full flex items-center justify-center gap-2"
                    >
                        <span>Add New Record</span>
                        <span className="text-[20px]">📝</span>
                    </button>
                    <div className="relative flex-1 max-sm:w-full">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search medical records..."
                            className="w-full px-4 py-3 rounded-[8px] border-[0.8px] border-[#E9ECEF] bg-white"
                        />
                    </div>
                </div>



                <div className="flex gap-2 mb-6 flex-wrap pb-2">
                    <FilterButton
                        label="All Records"
                        isActive={activeTab === "all"}
                        onClick={() => setActiveTab("all")}
                    />
                    <FilterButton
                        label="Completed"
                        isActive={activeTab === "completed"}
                        onClick={() => setActiveTab("completed")}
                    />
                    <FilterButton
                        label="Ongoing"
                        isActive={activeTab === "ongoing"}
                        onClick={() => setActiveTab("ongoing")}
                    />
                </div>

                <div className="mt-6 flex flex-col gap-4">
                    {filteredRecords.map((record) => (
                        <RecordItem
                            key={record.id}
                            record={record}
                            onClick={() => onRecordClick(record)}
                        />
                    ))}

                    {filteredRecords.length === 0 && (
                        <p className="text-center text-[#64748B] py-8">
                            No records found matching your criteria.
                        </p>
                    )}
                </div>
            </section>
        </main>
    );
};

const FilterButton = ({ label, isActive, onClick }) => {
    return (
        <button
            onClick={onClick}
            style={{
                background: isActive ? "#4318D1" : "#F1F5F9",
                color: isActive ? "#FFF" : "#64748B",
            }}
            className="px-6 py-3 rounded-[8px] font-medium whitespace-nowrap"
        >
            {label}
        </button>
    );
};

export default MedicalHistory;
