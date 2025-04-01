import React, { useState, useEffect } from "react";
import AddMedicationModal from "../components/Medications/AddMedicationModal";
import MedicationContent from "../components/Medications/MedicationContent";
import { getMedicationsList } from "../actions/medicationAction";
import { useDispatch, useSelector } from "react-redux";
import PageHeader from "../components/common/PageHeader";
import Loader from "../components/common/Loader";
import SearchBar from "../components/common/SearchBar";
import { BioStatButton } from "../components/common/BioStatButton";

function MedicationPage() {

    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.medicationReducer);
    const [showAddModal, setShowAddModal] = useState(false);
    const [uploadPrescription, setUploadPrescription] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

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

    useEffect(() => {
        dispatch(getMedicationsList());
    }, []);

    return (
        <div>
            <PageHeader heading={"Medications"} subheading={"Manage your medications and orders"} />
            <div className="flex gap-4 items-center mt-6 mb-8 max-sm:flex-wrap">
                <BioStatButton title={"Add Medication"} icon={'💊'} onclick={() => setShowAddModal(true)} />
                <div className="relative flex-1 max-sm:w-full">
                    <SearchBar
                        value={searchQuery}
                        onChange={setSearchQuery}
                        placeholder="Search medications..."
                        className="w-full px-4 py-3 rounded-[8px] border-[0.8px] border-[#E9ECEF] bg-white"
                    />
                </div>
            </div>
            {loading && <Loader />}
            {error ? (
                <p className="text-center text-red-500 py-8">Failed to load medications plans. Please try again.</p>
            ) : (
                <MedicationContent
                    searchQuery={searchQuery}
                    recentOrders={recentOrders}
                />)}

            {showAddModal && (
                <AddMedicationModal
                    closeModal={() => setShowAddModal(false)}
                    uploadPrescription={uploadPrescription}
                    setUploadPrescription={setUploadPrescription}
                />
            )}

        </div>
    );
}

export default MedicationPage;
