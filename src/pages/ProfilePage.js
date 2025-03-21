import React from "react";
import ProfileSection from "../components/Profile/ProfileSection";
import InfoCard from "../components/Profile/InfoCard";
import DiseaseProfile from "../components/Profile/DiseaseProfile";

function ProfilePage() {
  const personalInfo = [
    { label: "Date of Birth", value: "March 15, 1985" },
    { label: "Gender", value: "Female" },
    { label: "Blood Type", value: "O+", isBold: true },
    { label: "Height", value: "5'6\"" },
    { label: "Weight", value: "140 lbs" },
  ];

  const contactInfo = [
    { label: "Email", value: "sarah.j@email.com" },
    { label: "Phone", value: "(555) 123-4567" },
    { label: "Address", value: "123 Health St, NY" },
    { label: "Emergency Contact", value: "John (Husband)" },
    { label: "Emergency Phone", value: "(555) 987-6543" },
  ];

  const diseases = [
    {
      name: "Type 2 Diabetes",
      icon: "🩺",
      severity: "Moderate",
      diagnosed: "2022-03-15",
      status: "Managed",
      nextCheckup: "2024-02-15",
      doctor: "Dr. Emily Chen",
      symptoms: [
        "Increased thirst",
        "Frequent urination",
        "Fatigue",
        "Blurred vision",
        "Slow healing wounds",
      ],
      precautions: [
        "Regular blood sugar monitoring",
        "Daily foot inspection",
        "Regular exercise",
        "Avoid sugary foods",
        "Keep medications on schedule",
        "Regular eye checkups",
      ],
      diet: [
        "Low glycemic index foods",
        "High-fiber vegetables",
        "Lean proteins",
        "Healthy fats",
        "Limited carbohydrates",
        "No sugary drinks",
      ],
      metrics: [
        { name: "Blood Sugar", value: "120", unit: "mg/dL", trend: "stable" },
        { name: "A1C", value: "6.5", unit: "%", trend: "improving" },
      ],
    },
    {
      name: "Hypertension",
      icon: "❤️",
      severity: "Mild",
      diagnosed: "2022-01-10",
      status: "Under Control",
      nextCheckup: "2024-03-01",
      doctor: "Dr. Michael Ross",
      symptoms: ["Headaches", "Shortness of breath", "Chest pain", "Dizziness"],
      precautions: [
        "Regular BP monitoring",
        "Stress management",
        "Limited sodium intake",
        "Regular exercise",
        "Adequate sleep",
      ],
      diet: [
        "Low sodium foods",
        "DASH diet principles",
        "Potassium-rich foods",
        "Limited alcohol",
        "Heart-healthy fats",
      ],
      metrics: [
        { name: "Systolic", value: "128", unit: "mmHg", trend: "improving" },
        { name: "Diastolic", value: "82", unit: "mmHg", trend: "stable" },
      ],
    },
  ];

  return (
    <div className="">
      {/* <Sidebar /> */}
      <main className="flex-1 max-sm:p-4 overflow-auto">
        <div className="flex flex-col gap-[32px]">
          <ProfileSection />

          <section className="grid grid-cols-2 max-sm:grid-cols-1 gap-[24px]">
            <InfoCard
              title="Personal Information"
              icon="👤"
              items={personalInfo}
            />
            <InfoCard
              title="Contact Information"
              icon="📞"
              items={contactInfo}
            />
          </section>

          <section className="flex flex-col gap-[24px]">
            <header className="text-[24px] max-sm:text-[20px] font-semibold text-[#1E293B] flex items-center gap-3 max-sm:flex-col max-sm:items-start">
              <h2>🏥 Disease Profile</h2>
              <span className="text-[16px] text-[#64748B] font-normal">
                Managing {diseases.length} conditions
              </span>
            </header>
            <div className="grid grid-cols-1 gap-[24px]">
              {diseases.map((disease, index) => (
                <DiseaseProfile key={index} disease={disease} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default ProfilePage;
