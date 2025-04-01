import React from "react";
import CardBase from "../common/CardBase";
import { BioStatButton } from "../common/BioStatButton";

const MedRecordsList = ({ records, selectRecord, activeTab, searchQuery }) => {
  // Filter records based on active tab and search query
  const filteredRecords = records.filter((record) => {
    const matchesTab =
      activeTab === "all" || record.record_type.toLowerCase() === activeTab;
    const matchesSearch =
      record.record_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      record.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTab && matchesSearch;
  });

  const getRecordIcon = (type) => {
    switch (type) {
      case "Insurance":
        return "https://cdn-icons-png.flaticon.com/512/4320/4320350.png";
      case "Test Reports":
        return "https://cdn-icons-png.flaticon.com/512/3113/3113816.png";
      case "Prescriptions":
        return "https://cdn-icons-png.flaticon.com/512/595/595784.png";
      case "Vaccinations":
        return "https://cdn-icons-png.flaticon.com/512/2885/2885221.png";
      default:
        return "https://cdn-icons-png.flaticon.com/512/8668/8668570.png";
    }
  };

  function formatDate(createdAt) {
    const date = new Date(createdAt);
    return date.toLocaleDateString("en-US"); 
  }

  return (
    <section className="grid gap-4">
      {filteredRecords.length > 0 ? (
        filteredRecords.map((record) => (
          <CardBase
          title={record.record_name}
          image={getRecordIcon(record.record_type)}
          subtitle={record.description}
          children={
            <div className="flex flex-wrap gap-x-6 gap-y-2">
            <div className="flex items-center gap-1">
              <span className="text-[14px] text-[#64748B]">Record Type:</span>
              <span className="text-[14px] text-[#1E293B] capitalize">
                {record.record_type}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[14px] text-[#64748B]">Date:</span>
              <span className="text-[14px] text-[#1E293B]">{formatDate(record.created_at)}</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[14px] text-[#64748B]">Source:</span>
              <span className="text-[14px] text-[#1E293B]">
                {record.upload_source}
              </span>
            </div>
          </div>
          }
          actionButton={
            <BioStatButton title={"View Document"} onclick={() => selectRecord(record)} icon={"👁️"}/>
          }
          />
        ))
      ) : (
        <div className="text-center py-8">
          <p className="text-[16px] text-[#64748B]">No records found</p>
        </div>
      )}
    </section>
  );
};

export default MedRecordsList;
