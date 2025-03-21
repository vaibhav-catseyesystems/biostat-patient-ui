import React from "react";
import RecordItem from "./RecordItem";

const MedRecordsList = ({ records, selectRecord, activeTab, searchQuery }) => {
  // Filter records based on active tab and search query
  const filteredRecords = records.filter((record) => {
    const matchesTab =
      activeTab === "all" || record.type.toLowerCase() === activeTab;
    const matchesSearch =
      record.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      record.provider.toLowerCase().includes(searchQuery.toLowerCase()) ||
      record.type.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTab && matchesSearch;
  });

  return (
    <section className="grid gap-4">
      {filteredRecords.length > 0 ? (
        filteredRecords.map((record) => (
          <RecordItem
            key={record.id}
            record={record}
            onClick={() => selectRecord(record)}
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
