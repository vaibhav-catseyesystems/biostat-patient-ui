import React, { useState } from "react";
import BodyMapTab from "../components/HealthCheck/BodyMapTab";
import VideoAnalysisTab from "../components/HealthCheck/VideoAnalysisTab";

function HealthCheckPage() {
  const [activePane, setActivePane] = useState("bodyMap");

  return (
    <main className="flex-1 p-8 max-sm:p-4 overflow-auto">
      <div className="flex flex-col gap-[16px]">
        <h1 className="text-[32px] max-sm:text-[24px] font-semibold text-[#1E293B]">
          Health Check
        </h1>
        <p className="text-[16px] text-[#64748B]">
          Map your symptoms or record a video analysis
        </p>

        <div className="flex gap-[16px] mt-4">
          <button
            className={`px-6 py-3 rounded-[8px] cursor-pointer ${
              activePane === "bodyMap"
                ? "bg-[#4318D1] text-[#FFF]"
                : "bg-[#F1F5F9] text-[#64748B]"
            }`}
            onClick={() => setActivePane("bodyMap")}
          >
            Body Map
          </button>
          <button
            className={`px-6 py-3 rounded-[8px] cursor-pointer ${
              activePane === "videoAnalysis"
                ? "bg-[#4318D1] text-[#FFF]"
                : "bg-[#F1F5F9] text-[#64748B]"
            }`}
            onClick={() => setActivePane("videoAnalysis")}
          >
            Video Analysis
          </button>
        </div>

        <section className="mt-8">
          {activePane === "bodyMap" ? <BodyMapTab /> : <VideoAnalysisTab />}
        </section>
      </div>
    </main>
  );
}

export default HealthCheckPage;
