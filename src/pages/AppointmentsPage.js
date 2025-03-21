import React, { useState } from "react";
import FilterSection from "../components/Appointment/FilterSection";
import AppointmentSection from "../components/Appointment/AppointmentSection";
import BookAppointmentModal from "../components/Appointment/BookAppointmentModal";
import DoctorSelection from "../components/Appointment/DoctorSelectionModal";
import DateTimeSelection from "../components/Appointment/DateTimeSelection";
import SymptomDetails from "../components/Appointment/SymptomDetails";

function AppointmentsPage() {
    const [activeTab, setActiveTab] = useState("upcoming");
    const [showModal, setShowModal] = useState(false);
    const [selectedAppointment, setSelectedAppointment] = useState(null);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [showFilters, setShowFilters] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const [isOpen, setIsOpen] = useState(false);
    const [formStep, setFormStep] = useState(1);
    const [formData, setFormData] = useState({
        selectedDoctor: "",
        appointmentType: "",
        selectedDate: "",
        selectedTime: "",
        symptoms: "",
    });

    const updateFormData = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleNext = () => {
        setFormStep((prev) => prev + 1);
    };

    const handleBack = () => {
        setFormStep((prev) => prev - 1);
    };

    const handleSubmit = () => {
        // Here you would typically send the form data to your backend
        console.log("Appointment scheduled:", formData);
        setIsOpen(false);
        setFormStep(1);
        // Reset form data if needed
        // setFormData({
        //   selectedDoctor: "",
        //   appointmentType: "",
        //   selectedDate: "",
        //   selectedTime: "",
        //   symptoms: ""
        // });
    };

    const closeModal = () => {
        setIsOpen(false);
        setFormStep(1);
    };

    const getStepTitle = () => {
        switch (formStep) {
            case 1:
                return "Schedule Appointment";
            case 2:
                return "Select Date & Time";
            case 3:
                return "Additional Details";
            default:
                return "Schedule Appointment";
        }
    };




    const [appointments] = useState({
        upcoming: [
            {
                id: 1,
                doctor: "Dr. Sarah Smith",
                specialty: "Cardiologist",
                date: "2024-02-15",
                time: "10:30 AM",
                type: "In-Person Visit",
                location: "Heart Care Center, 123 Medical Ave",
                status: "Confirmed",
                image: "https://placehold.co/100x100",
            },
            {
                id: 2,
                doctor: "Dr. Michael Chen",
                specialty: "Dermatologist",
                date: "2024-02-18",
                time: "2:15 PM",
                type: "Video Consultation",
                location: "Virtual",
                status: "Pending",
                image: "https://placehold.co/100x100",
            },
        ],
        past: [
            {
                id: 3,
                doctor: "Dr. Emily Johnson",
                specialty: "General Physician",
                date: "2024-01-20",
                time: "11:00 AM",
                type: "In-Person Visit",
                location: "Medical Center, 456 Health St",
                status: "Completed",
                image: "https://placehold.co/100x100",
            },
        ],
    });

    const selectAppointment = (appointment) => {
        setSelectedAppointment(appointment);
        setShowModal(true);
    };

    return (
        <>
            <div className="flex flex-col gap-[32px]">
                <section className="flex flex-col gap-4">
                    <h1 className="text-[32px] max-sm:text-[24px] font-[600] text-[#1E293B]">
                        Appointments
                    </h1>
                    <p className="text-[16px] text-[#64748B]">
                        Manage your upcoming and past appointments
                    </p>
                </section>

                <div className="flex gap-4 items-center mt-6 mb-8 max-sm:flex-wrap">
                    <button className="bg-[#4318D1] text-white px-6 py-3 rounded-[8px] font-[500] max-sm:w-full"
                        onClick={() => setIsOpen(true)}
                    >
                        Schedule Appointment
                    </button>
                    <button
                        onClick={() => setShowFilters(!showFilters)}
                        className="bg-[#F1F5F9] text-[#1E293B] px-6 py-3 rounded-[8px] font-[500] flex items-center gap-2 max-sm:w-full justify-center"
                    >
                        <span>Filter</span>
                        <span className="text-[20px]">🔍</span>
                    </button>
                </div>

                {showFilters && (
                    <FilterSection
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                    />
                )}

                <AppointmentSection
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    appointments={appointments}
                    selectAppointment={selectAppointment}
                />

                {isOpen && (
                    <BookAppointmentModal title={getStepTitle()} onClose={closeModal}>
                        {formStep === 1 && (
                            <DoctorSelection
                                formData={formData}
                                updateFormData={updateFormData}
                                onContinue={handleNext}
                            />
                        )}

                        {formStep === 2 && (
                            <DateTimeSelection
                                formData={formData}
                                updateFormData={updateFormData}
                                onBack={handleBack}
                                onContinue={handleNext}
                            />
                        )}

                        {formStep === 3 && (
                            <SymptomDetails
                                formData={formData}
                                updateFormData={updateFormData}
                                onBack={handleBack}
                                onSubmit={handleSubmit}
                            />
                        )}
                    </BookAppointmentModal>
                )}
            </div>
        </>
    );
}

export default AppointmentsPage;
