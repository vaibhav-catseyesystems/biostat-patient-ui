import React, { useState, useEffect } from "react";
import AddMedicationModal from "../components/Medications/AddMedicationModal";
import MedicationContent from "../components/Medications/MedicationContent";
import { getMedicationsList } from "../actions/medicationAction";
import { useDispatch, useSelector } from "react-redux";
import PageHeader from "../components/common/PageHeader";
import Loader from "../components/common/Loader";

function MedicationPage() {

    const dispatch = useDispatch();
    const { medicationList, loading, error } = useSelector((state) => state.medicationReducer);
  
    useEffect(() => {
      dispatch(getMedicationsList());
      console.log(medicationList);
    }, []);

    const [activeTab, setActiveTab] = useState("current");
    const [showAddModal, setShowAddModal] = useState(false);
    const [showMedicineModal, setShowMedicineModal] = useState(false);
    const [uploadPrescription, setUploadPrescription] = useState(false);
    const [searchQuery, setSearchQuery] = useState();
    const [selectedMedicine, setSelectedMedicine] = useState(null);

    const [currentMedications, setCurrentMedications] = useState([]);

    const [recentOrders, setRecentOrders] = useState([
        {
            id: 1,
            name: "Lisinopril",
            dosage: "10mg",
            quantity: "30 tablets",
            orderDate: "2024-01-15",
            status: "Delivered",
            trackingNo: "TRK123456",
        },
        {
            id: 2,
            name: "Metformin",
            dosage: "500mg",
            quantity: "60 tablets",
            orderDate: "2024-01-18",
            status: "In Transit",
            trackingNo: "TRK789012",
        },
    ]);

    const [searchResults, setSearchResults] = useState([]);

    const performSearch = () => {
        if (searchQuery.trim() === "") {
            setSearchResults([]);
            return;
        }

        const searchRes = medicationList.filter(
            (medicine) =>
                medicine.medicine_name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        setSearchResults(searchRes);
    };

    const selectMedicine = (medicine) => {
        setSelectedMedicine(medicine);
        setShowMedicineModal(true);
    };

    return (
      <div>
         <PageHeader heading={"Medications"} subheading={"Manage your medications and orders"} />
      {loading && <Loader />}
      {error ? (
        <p className="text-center text-red-500 py-8">Failed to load medications plans. Please try again.</p>
      ) :(
            <MedicationContent
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                performSearch={performSearch}
                searchResults={searchResults}
                currentMedications={medicationList}
                recentOrders={recentOrders}
                setShowAddModal={setShowAddModal}
                selectMedicine={selectMedicine}
            />)}
            {showAddModal && (
                <AddMedicationModal
                    setShowAddModal={setShowAddModal}
                    uploadPrescription={uploadPrescription}
                    setUploadPrescription={setUploadPrescription}
                />
            )}
      
      </div>
    );
}

export default MedicationPage;
