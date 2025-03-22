import React, { useState } from "react";
import MedicalHistorydModal from "../components/MedicalHistory/MedicalHistoryModal";
import MedicalHistory from "../components/MedicalHistory/MedicalHistory";

const MedicalHistoryPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const records = [
    {
      id: 1,
      date: "2024-01-15",
      type: "Surgery",
      description: "Appendectomy",
      doctor: "Dr. Sarah Smith",
      hospital: "Central Hospital",
      status: "completed",
      details: "Laparoscopic procedure performed",
      notes: "Recovery as expected",
    },
    {
      id: 2,
      date: "2023-12-10",
      type: "Vaccination",
      description: "COVID-19 Booster",
      doctor: "Dr. Michael Chen",
      hospital: "City Medical Center",
      status: "completed",
      details: "Moderna booster shot",
      notes: "No adverse reactions",
    },
    {
      id: 3,
      date: "2023-11-05",
      type: "Consultation",
      description: "Annual Physical",
      doctor: "Dr. James Wilson",
      hospital: "Family Care Clinic",
      status: "completed",
      details: "Routine checkup",
      notes: "All vitals normal",
    },
    {
      id: 4,
      date: "2023-10-20",
      type: "Treatment",
      description: "Physical Therapy",
      doctor: "Dr. Emily Brown",
      hospital: "Rehabilitation Center",
      status: "ongoing",
      details: "Lower back pain treatment",
      notes: "Showing improvement",
    },
  ];

  const filterRecords = () => {
    return records.filter((record) => {
      if (activeTab !== "all" && record.status !== activeTab) return false;
      if (
        searchQuery &&
        !record.description.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !record.type.toLowerCase().includes(searchQuery.toLowerCase())
      )
        return false;
      return true;
    });
  };

  const handleRecordClick = (record) => {
    setSelectedRecord(record);
    setShowDetails(true);
  };

  const handleAddNewRecord = () => {
    setSelectedRecord(null);
    setShowDetails(true);
  };

  const handleCloseModal = () => {
    setShowDetails(false);
    setSelectedRecord(null);
  };

  return (
    <div className="">
      <MedicalHistory
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        filteredRecords={filterRecords()}
        onAddNewRecord={handleAddNewRecord}
        onRecordClick={handleRecordClick}
      />

      {showDetails && (
        <MedicalHistorydModal record={selectedRecord} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default MedicalHistoryPage;
