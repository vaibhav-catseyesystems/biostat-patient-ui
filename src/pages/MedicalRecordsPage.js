import React, { useEffect, useState } from "react";
import UploadMedRecordModal from "../components/MedicalRecords/UploadMedRecordModal";
import ViewMedRecordModal from "../components/MedicalRecords/ViewMedRecordModal";
import MedRecordsList from "../components/MedicalRecords/MedRecordsList";
import PageHeader from "../components/common/PageHeader";
import SearchBar from "../components/common/SearchBar";
import { BioStatButton } from "../components/common/BioStatButton";
import { toast } from 'react-toastify'
import { fetchRecordsFromGmail, getUserMedicalRecords, } from "../actions/medicalRecordActions";
import { useDispatch, useSelector } from 'react-redux'
import Loader from "../components/common/Loader";

const MedicalRecordsPage = () => {
  const dispatch = useDispatch()
  const [activeTab, setActiveTab] = useState("all");
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showRecordModal, setShowRecordModal] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const medicalRecordsReducer = useSelector((state) => state.medicalRecordsReducer)
  const { medicalRecords, loading, error } = medicalRecordsReducer

  const recordTypes = [
    "Insurance",
    "Prescriptions",
    "Test Reports",
    "Vaccinations",
    "Surgeries",
  ];

  const selectRecord = (record) => {
    setSelectedRecord(record);
    setShowRecordModal(true);
  };

  const syncMail = async () => {
    fetchRecordsFromGmail()
  };


  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get('status');
    if (status == "processing") {
      toast.success("Emails syncing in progress you'll be notified once done")

      setTimeout(() => {
        urlParams.delete('status');
        const newUrl = window.location.pathname + (urlParams.toString() ? '?' + urlParams.toString() : '');
        window.history.replaceState({}, '', newUrl);
      }, 3000);
    }
  }, [])

  useEffect(()=>{
    dispatch(getUserMedicalRecords())
  },[])

  return (
    <>
      <div className="flex flex-col gap-[32px]">
        <div className="">
          <PageHeader heading={"Medical Records"} subheading={"View and manage your health records"} />

          <div className="flex gap-4 items-center mt-6 mb-8 max-sm:flex-wrap">
            <BioStatButton title={"Upload New Record"} onclick={() => setShowUploadModal(true)} icon={"📤"} />
            <BioStatButton title={"Sync Mail"} onclick={() => syncMail()} icon={"✉️"} />
            <SearchBar value={searchQuery} onChange={setSearchQuery} placeholder="Search records..." />
          </div>

          <div className="flex gap-2 mb-6 flex-wrap pb-2">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-6 py-3 rounded-[8px] font-[500] whitespace-nowrap ${activeTab === "all"
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
                className={`px-6 py-3 rounded-[8px] font-[500] whitespace-nowrap ${activeTab === type.toLowerCase()
                  ? "bg-[#4318D1] text-white"
                  : "bg-[#F1F5F9] text-[#64748B]"
                  }`}
              >
                {type}
              </button>
            ))}
          </div>

          {loading && <Loader />}
          {error ? (
            <p className="text-center text-red-500 py-8">Failed to load medical records. Please try again.</p>
          ) : (
            <MedRecordsList
              records={medicalRecords}
              selectRecord={selectRecord}
              activeTab={activeTab}
              searchQuery={searchQuery}
            />
          )}

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
