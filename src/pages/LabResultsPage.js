import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LabResultCard from "../components/LabResults/LabResultCard";
import BookTestDialog from "../components/LabResults/BookTestDialog";
import FindLabsTab from "../components/LabResults/FindLabsTab";
import UpcomingTestsTab from "../components/LabResults/UpcomingTestsTab";
import { getLabsList } from "../actions/findLabActions";
import PageHeader from "../components/common/PageHeader";
import Loader from "../components/common/Loader";
const labResults = [
    {
        testName: "Complete Blood Count",
        status: "Normal",
        statusColor: "green",
        lab: "City Diagnostics",
        date: "2024-01-15",
        category: "Hematology",
    },
    {
        testName: "Lipid Panel",
        status: "Critical",
        statusColor: "red",
        lab: "HealthLab Plus",
        date: "2024-01-10",
        category: "Cardiac",
    },
];

function LabResultsPage() {

    const dispatch = useDispatch();
    const { labList, loading, error} = useSelector((state) => state.labReducer);

    useEffect(() => {
        dispatch(getLabsList());
        console.log(labList);
    }, []);


    const [activeTab, setActiveTab] = useState("results");
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleBookTest = () => {
        setIsDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
    };

    const handleBookingComplete = (bookingData) => {
        console.log("Booking completed:", bookingData);
        setIsDialogOpen(false);
        // In a real app, you would send this data to your backend
    };


    return (
        <section className="flex-1 max-md:px-4">
            <PageHeader heading={"Lab Results"} subheading={"View your lab results and tests"} />

            <div className="flex gap-4 mb-8 max-sm:flex-col">
                <button
                    className="gap-2 px-6 py-4 text-base font-medium leading-6 text-white bg-indigo-700 rounded-lg"
                    onClick={handleBookTest}
                >
                    Book New Test 🔬
                </button>
                <input
                    type="text"
                    placeholder="Search tests or labs..."
                    className="flex-1 px-4 py-3 text-base bg-white rounded-lg border border-gray-200"
                    aria-label="Search tests or labs"
                />
            </div>

            <div className="flex gap-4 mb-6 max-sm:flex-col">
                <button
                    className={`flex-1 py-3 text-base font-medium leading-6 rounded-lg ${activeTab === "results"
                        ? "bg-indigo-700 text-white"
                        : "bg-slate-100 text-slate-500"
                        }`}
                    onClick={() => setActiveTab("results")}
                >
                    Test Results
                </button>
                <button
                    className={`flex-1 py-3 text-base font-medium leading-6 rounded-lg ${activeTab === "upcoming"
                        ? "bg-indigo-700 text-white"
                        : "bg-slate-100 text-slate-500"
                        }`}
                    onClick={() => setActiveTab("upcoming")}
                >
                    Upcoming Tests
                </button>
                <button
                    className={`flex-1 py-3 text-base font-medium leading-6 rounded-lg ${activeTab === "findLabs"
                        ? "bg-indigo-700 text-white"
                        : "bg-slate-100 text-slate-500"
                        }`}
                    onClick={() => setActiveTab("findLabs")}
                >
                    Find Labs
                </button>
            </div>

            {activeTab === "results" && <div className="flex flex-col gap-4">
                {labResults.map((result, index) => (
                    <LabResultCard key={index} result={result} />
                ))}
            </div>}
            {activeTab === "upcoming" && <UpcomingTestsTab />}
            {activeTab === "findLabs" && (
                <>
                    {loading && <Loader />}
                    {error ? (
                        <p className="text-center text-red-500 py-8">Failed to load labs. Please try again.</p>
                    ) : (
                        <FindLabsTab labs={labList} />
                    )}
                </>
            )}

            {isDialogOpen && (
                <BookTestDialog
                    onClose={handleCloseDialog}
                    onBookingComplete={handleBookingComplete}
                />
            )}
            

        </section>

    );
}

export default LabResultsPage;
