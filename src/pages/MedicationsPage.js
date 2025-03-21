import React, { useState } from "react";
import AddMedicationModal from "../components/Medications/AddMedicationModal";
import MedicationContent from "../components/Medications/MedicationContent";

function MedicationPage() {
    const [activeTab, setActiveTab] = useState("current");
    const [showAddModal, setShowAddModal] = useState(false);
    const [showMedicineModal, setShowMedicineModal] = useState(false);
    const [uploadPrescription, setUploadPrescription] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedMedicine, setSelectedMedicine] = useState(null);

    const [currentMedications, setCurrentMedications] = useState([
        {
            id: 1,
            name: "Lisinopril",
            dosage: "10mg",
            frequency: "Once daily",
            nextRefill: "2024-02-20",
            status: "Active",
            doctor: "Dr. Sarah Smith",
            lastOrdered: "2024-01-15",
        },
        {
            id: 2,
            name: "Metformin",
            dosage: "500mg",
            frequency: "Twice daily",
            nextRefill: "2024-02-25",
            status: "Active",
            doctor: "Dr. Michael Chen",
            lastOrdered: "2024-01-18",
        },
    ]);

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

        const searchRes = currentMedications.filter(
            (medicine) => 
            medicine.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        setSearchResults(searchRes);
    };

    const selectMedicine = (medicine) => {
        setSelectedMedicine(medicine);
        setShowMedicineModal(true);
    };

    return (
        <>
            <MedicationContent
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                performSearch={performSearch}
                searchResults={searchResults}
                currentMedications={currentMedications}
                recentOrders={recentOrders}
                setShowAddModal={setShowAddModal}
                selectMedicine={selectMedicine}
            />
            {showAddModal && (
                <AddMedicationModal
                    setShowAddModal={setShowAddModal}
                    uploadPrescription={uploadPrescription}
                    setUploadPrescription={setUploadPrescription}
                />
            )}
        </>
    );
}

export default MedicationPage;
