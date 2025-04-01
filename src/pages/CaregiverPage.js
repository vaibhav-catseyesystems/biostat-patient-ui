import React from "react";

const caregivers = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    relation: "Doctor",
    status: "Available",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 2,
    name: "Nurse Emily Brown",
    relation: "Nurse",
    status: "On Duty",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 3,
    name: "James Wilson",
    relation: "Son",
    status: "Available",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 4,
    name: "Sophia Davis",
    relation: "Relative",
    status: "Busy",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

const CaregiverCard = ({ caregiver }) => {
  // Get status color
  const getStatusColor = () => {
    switch (caregiver.status) {
      case "Available":
        return "bg-green-100 text-green-800";
      case "On Duty":
        return "bg-blue-100 text-blue-800";
      case "Busy":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <article className="bg-white rounded-[13px] p-6 shadow-[0px_2px_12px_0px_rgba(0,0,0,0.08)] cursor-pointer hover:shadow-lg transition-shadow">
      <div className="flex gap-4 items-start max-sm:flex-col">
        <img
          src={caregiver.image}
          alt={caregiver.name}
          className="w-[60px] h-[60px] rounded-full object-cover"
        />

        <div className="flex-1">
          <div className="flex justify-between items-start mb-2 max-sm:flex-col max-sm:gap-2">
            <div>
              <h3 className="text-[18px] font-[600] text-[#1E293B]">
                {caregiver.name}
              </h3>
              <p className="text-[14px] text-[#64748B]">{caregiver.relation}</p>
            </div>

            <span
              className={`px-3 py-1 rounded-full text-[12px] font-medium ${getStatusColor()}`}
            >
              {caregiver.status}
            </span>
          </div>

          <div className="flex gap-3 mt-4">
            <button className="px-4 py-2 bg-[#4318D1] text-white rounded-[8px] text-[14px] font-[500]">
              Contact
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

const CaregiverPage = () => {
  return (
    <div className="flex flex-col gap-[32px]">
      {/* Header Section */}
      <section className="flex flex-col gap-4">
        <h1 className="text-[32px] max-sm:text-[24px] font-[600] text-[#1E293B]">
          Caregivers
        </h1>
        <p className="text-[16px] text-[#64748B]">
          A list of caregivers associated with the patient.
        </p>
      </section>

      {/* Caregiver Cards */}
      <div className="grid grid-cols-2 gap-6 max-lg:grid-cols-1">
        {caregivers.map((caregiver) => (
          <CaregiverCard key={caregiver.id} caregiver={caregiver} />
        ))}
      </div>
    </div>
  );
};

export default CaregiverPage;
