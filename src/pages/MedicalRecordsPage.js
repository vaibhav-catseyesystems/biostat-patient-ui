import React, { useState } from "react";
import UploadMedRecordModal from "../components/MedicalRecords/UploadMedRecordModal";
import ViewMedRecordModal from "../components/MedicalRecords/ViewMedRecordModal";
import MedRecordsList from "../components/MedicalRecords/MedRecordsList";

const MedicalRecordsPage = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showRecordModal, setShowRecordModal] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const recordTypes = [
    "Insurance",
    "Prescriptions",
    "Test Reports",
    "Vaccinations",
    "Surgeries",
  ];

  const records = [
    {
      id: 1,
      type: "Insurance",
      title: "Health Insurance Policy",
      date: "2024-01-15",
      provider: "BlueCross Insurance",
      status: "Active",
      details: "Policy #ABC123456",
      file: "insurance_doc.pdf",
    },
    {
      id: 2,
      type: "Test Reports",
      title: "Annual Blood Work",
      date: "2024-01-10",
      provider: "City Hospital Lab",
      status: "Completed",
      details: "Complete Blood Count, Lipid Panel",
      file: "blood_work.pdf",
    },
    {
      id: 3,
      type: "Prescriptions",
      title: "Monthly Medication",
      date: "2024-01-05",
      provider: "Dr. Sarah Smith",
      status: "Active",
      details: "Prescription for Lisinopril 10mg",
      file: "prescription.pdf",
    },
  ];

  const selectRecord = (record) => {
    setSelectedRecord(record);
    setShowRecordModal(true);
  };

  return (
    <>
        <div className="flex flex-col gap-[32px]">
          <div className="">
            <header className="flex flex-col gap-4">
              <h1 className="text-[32px] max-sm:text-[24px] font-[600] text-[#1E293B]">
                Medical Records
              </h1>
              <p className="text-[16px] text-[#64748B]">
                View and manage your health records
              </p>
            </header>

            <div className="flex gap-4 items-center mt-6 mb-8 max-sm:flex-wrap">
              <button
                onClick={() => setShowUploadModal(true)}
                className="bg-[#4318D1] text-white px-6 py-3 rounded-[8px] font-[500] max-sm:w-full flex items-center justify-center gap-2"
              >
                <span>Upload New Record</span>
                <span className="text-[20px]">📤</span>
              </button>
              <div className="relative flex-1 max-sm:w-full">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search records..."
                  className="w-full px-4 py-3 rounded-[8px] border-[0.8px] border-[#E9ECEF] bg-white"
                />
              </div>
            </div>

            <div className="flex gap-2 mb-6 flex-wrap pb-2">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-6 py-3 rounded-[8px] font-[500] whitespace-nowrap ${
                  activeTab === "all"
                    ? "bg-[#4318D1] text-white"
                    : "bg-[#F1F5F9] text-[#64748B]"
                }`}
              >
                All Records
              </button>
              {recordTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveTab(type.toLowerCase())}
                  className={`px-6 py-3 rounded-[8px] font-[500] whitespace-nowrap ${
                    activeTab === type.toLowerCase()
                      ? "bg-[#4318D1] text-white"
                      : "bg-[#F1F5F9] text-[#64748B]"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            <MedRecordsList
              records={records}
              selectRecord={selectRecord}
              activeTab={activeTab}
              searchQuery={searchQuery}
            />
          </div>
        </div>

      {showUploadModal && (
        <UploadMedRecordModal
          recordTypes={recordTypes}
          closeModal={() => setShowUploadModal(false)}
        />
      )}

      {showRecordModal && selectedRecord && (
        <ViewMedRecordModal
          record={selectedRecord}
          closeModal={() => setShowRecordModal(false)}
        />
      )}
    </>
  );
};

export default MedicalRecordsPage;
