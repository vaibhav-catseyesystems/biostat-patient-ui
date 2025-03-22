import React from "react";

const RecordItem = ({ record, onClick }) => {
    const { type, description, date, doctor, hospital, status } = record;

    const statusColors = {
        completed: "bg-green-100 text-green-800",
        ongoing: "bg-blue-100 text-blue-800",
    };

    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "short", day: "numeric" };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <article
            className="p-6 bg-white rounded-[12px] border border-[#E9ECEF] cursor-pointer hover:shadow-md transition-shadow"
            onClick={onClick}
        >
            <div className="flex justify-between items-start max-md:flex-col max-md:gap-4">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <span className="text-[18px]">
                            {type === "Surgery"
                                ? "🔪"
                                : type === "Vaccination"
                                    ? "💉"
                                    : type === "Consultation"
                                        ? "👨‍⚕️"
                                        : type === "Treatment"
                                            ? "🏥"
                                            : "📋"}
                        </span>
                        <h2 className="text-[18px] font-semibold text-[#1E293B]">
                            {description}
                        </h2>
                    </div>
                    <p className="text-[14px] text-[#64748B]">{type}</p>
                </div>

                <div className="flex items-center gap-4 max-md:w-full max-md:justify-between">
                    <span
                        className={`px-3 py-1 rounded-full text-[12px] font-medium ${statusColors[status]}`}
                    >
                        {status.charAt(0).toUpperCase() + status.slice(1)}
                    </span>
                    <time className="text-[14px] text-[#64748B]">{formatDate(date)}</time>
                </div>
            </div>

            <div className="mt-4 pt-4 border-t border-[#E9ECEF] flex justify-between items-center max-md:flex-col max-md:items-start max-md:gap-2">
                <p className="text-[14px] text-[#64748B]">
                    <span className="font-medium">Doctor:</span> {doctor}
                </p>
                <p className="text-[14px] text-[#64748B]">
                    <span className="font-medium">Location:</span> {hospital}
                </p>
            </div>
        </article>
    );
};

export default RecordItem;
