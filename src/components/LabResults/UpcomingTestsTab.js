import React from "react";

const upcomingTests = [
    {
        testName: "Thyroid Function Test",
        lab: "MedLife Diagnostics",
        date: "2024-02-15",
        time: "10:30 AM",
        preparationRequired: "Fast for 8 hours before the test",
    },
    {
        testName: "Vitamin D Test",
        lab: "City Diagnostics",
        date: "2024-02-20",
        time: "09:00 AM",
        preparationRequired: "No special preparation required",
    },
];

function UpcomingTestsTab() {
    return (
        <div className="flex flex-col gap-4">
            {upcomingTests.map((test, index) => (
                <article key={index} className="p-6 bg-white rounded-xl shadow-sm">
                    <header className="flex justify-between items-start mb-4">
                        <div className="flex gap-3.5 items-center">
                            <span className="text-2xl">📅</span>
                            <h2 className="text-lg font-medium leading-7 text-slate-800">
                                {test.testName}
                            </h2>
                        </div>
                        <span className="px-3 py-1 text-sm leading-5 text-blue-800 bg-blue-100 rounded-full">
                            Scheduled
                        </span>
                    </header>

                    <div className="flex flex-col gap-1 mb-4">
                        <p className="text-sm leading-5 text-slate-500">Lab: {test.lab}</p>
                        <p className="text-sm leading-5 text-slate-500">
                            Date: {test.date}
                        </p>
                        <p className="text-sm leading-5 text-slate-500">
                            Time: {test.time}
                        </p>
                        <p className="text-sm leading-5 text-slate-500 mt-2">
                            <span className="font-medium">Preparation: </span>
                            {test.preparationRequired}
                        </p>
                    </div>

                    <div className="flex gap-2 max-sm:flex-col">
                        <button className="px-4 py-2 text-base leading-6 text-white bg-indigo-700 rounded-lg">
                            Reschedule
                        </button>
                        <button className="gap-2 px-4 py-2 text-base leading-6 rounded-lg bg-slate-100 text-slate-500">
                            Cancel Appointment
                        </button>
                    </div>
                </article>
            ))}
        </div>
    );
}

export default UpcomingTestsTab;
