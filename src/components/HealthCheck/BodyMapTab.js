import React, { useState } from "react";

function BodyMapTab() {
    const [selectedGender, setSelectedGender] = useState("male");
    const [selectedParts, setSelectedParts] = useState([]);
    const [hoveredPart, setHoveredPart] = useState(null);
    const [symptoms, setSymptoms] = useState("");

    const bodyParts = {
        head: "Head & Face",
        neck: "Neck",
        chest: "Chest",
        abdomen: "Abdomen",
        leftArm: "Left Arm",
        rightArm: "Right Arm",
        leftLeg: "Left Leg",
        rightLeg: "Right Leg",
        // back: "Back",
        leftShoulder: "Left Shoulder",
        rightShoulder: "Right Shoulder",
    };

    const togglePart = (part) => {
        if (selectedParts.includes(part)) {
            setSelectedParts(selectedParts.filter((p) => p !== part));
        } else {
            setSelectedParts([...selectedParts, part]);
        }
    };

    const getPartPosition = (part) => {
        if (part?.includes("head")) return { top: "7%", left: "50%" };
        if (part?.includes("neck")) return { top: "16%", left: "50%" };

        if (part?.includes("Leg")) {
            return {
                top: "70%",
                left: part.includes("left") ? "40%" : "60%",
            };
        }
        if (part?.includes("chest")) return { top: "25%", left: "50%" };
        if (part?.includes("abdomen")) return { top: "40%", left: "50%" };
        if (part?.includes("Arm")) {
            return {
                top: "40%",
                left: part.includes("left") ? "20%" : "80%",
            };
        }

        return {
            top: "20%",
            left: part?.includes("left")
                ? "30%"
                : part?.includes("right")
                    ? "70%"
                    : "50%",
        };
    };

    return (
        <article className="bg-[#FFF] rounded-[13px] p-8 max-sm:p-4 shadow-[0px_2px_12px_0px_rgba(0,0,0,0.08)]">
            <div className="flex gap-[16px] mb-8">
                <button
                    onClick={() => setSelectedGender("male")}
                    className={`px-6 py-3 rounded-[8px] flex items-center gap-[8px] ${selectedGender === "male"
                            ? "bg-[#4318D1] text-[#FFF]"
                            : "bg-[#F1F5F9] text-[#64748B]"
                        }`}
                >
                    <span className="text-[20px]">👨</span>
                    <span>Male</span>
                </button>
                <button
                    onClick={() => setSelectedGender("female")}
                    className={`px-6 py-3 rounded-[8px] flex items-center gap-[8px] ${selectedGender === "female"
                            ? "bg-[#4318D1] text-[#FFF]"
                            : "bg-[#F1F5F9] text-[#64748B]"
                        }`}
                >
                    <span className="text-[20px]">👩</span>
                    <span>Female</span>
                </button>
            </div>

            <div className="flex max-sm:flex-col gap-[32px]">
                <div className="relative w-[300px] max-sm:w-full h-[500px] bg-[#F8F9FA] rounded-[8px] flex items-center justify-center">
                    <div className="relative">
                        {selectedGender === "male" ? (
                            <img
                                src="https://meduxtemplate.merku.love/static/media/male_front.e960015cf12eff3b095a0eaba96b8dfa.svg"
                                alt="Male body outline"
                                className="max-h-[400px] w-auto"
                            />
                        ) : (
                            <img
                                src="https://meduxtemplate.merku.love/static/media/female_front.50eea7dffdf3ad63f95e6a84f19f7877.svg"
                                alt="Female body outline"
                                className="max-h-[400px] w-auto"
                            />
                        )}

                        {/* Interactive body parts */}
                        {Object.keys(bodyParts).map((part) => (
                            <div
                                key={part}
                                onClick={() => togglePart(part)}
                                onMouseEnter={() => setHoveredPart(part)}
                                onMouseLeave={() => setHoveredPart(null)}
                                className="absolute w-[10px] h-[10px] rounded-full bg-transparent cursor-pointer hover:bg-[rgba(67,24,209,0.2)]"
                                style={{
                                    backgroundColor: 'red',
                                    top: getPartPosition(part).top,
                                    left: getPartPosition(part).left,
                                    transform: "translate(-50%, -50%)",
                                    border: selectedParts.includes(part)
                                        ? "2px solid #4318D1"
                                        : "none",
                                }}
                            />
                        ))}

                        {hoveredPart && (
                            <div
                                className="absolute bg-[#FFF] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.08)] p-2 rounded-[4px] z-[1]"
                                style={{
                                    ...getPartPosition(hoveredPart),
                                    transform: "translate(-50%, -100%)",
                                }}
                            >
                                <span>{bodyParts[hoveredPart]}</span>
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex-1">
                    <h2 className="text-[24px] max-sm:text-[20px] font-semibold text-[#1E293B] mb-4">
                        Select Areas of Discomfort
                    </h2>
                    <p className="text-[16px] text-[#64748B] mb-8">
                        Click on multiple body parts where you're experiencing symptoms
                    </p>

                    <div className="flex flex-wrap gap-[8px] mb-6">
                        {selectedParts.map((part) => (
                            <span
                                key={part}
                                className="px-3 py-1 bg-[#F0F1FF] text-[#4318D1] rounded-[4px] text-[14px]"
                            >
                                {bodyParts[part]}
                            </span>
                        ))}
                    </div>

                    {selectedParts.length > 0 && (
                        <div className="flex flex-col gap-[16px]">
                            <label htmlFor="symptoms" className="text-[14px] text-[#64748B]">
                                Describe your symptoms for selected areas:
                            </label>
                            <textarea
                                id="symptoms"
                                className="w-full h-[120px] p-4 rounded-[8px] border-[1px] border-[#E9ECEF] resize-none"
                                placeholder="Please describe your symptoms in detail..."
                                value={symptoms}
                                onChange={(e) => setSymptoms(e.target.value)}
                            />
                            <div className="flex gap-[16px] mt-4 max-sm:flex-col">
                                <button className="px-6 py-3 bg-[#4318D1] text-[#FFF] rounded-[8px] max-sm:w-full">
                                    Submit Symptoms
                                </button>
                                <button
                                    onClick={() => {
                                        setSelectedParts([]);
                                        setSymptoms("");
                                    }}
                                    className="px-6 py-3 bg-[#F1F5F9] text-[#64748B] rounded-[8px] max-sm:w-full"
                                >
                                    Clear Selection
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </article>
    );
}

export default BodyMapTab;
