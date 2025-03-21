"use client";
import React, { useState } from "react";
import WelcomeSection from "../components/DashboardHome/WelcomeSection";
import QuickLinkCard from "../components/DashboardHome/QuickLinkCard";
import HealthMetricCard from "../components/DashboardHome/HealthMetricCard";
import useHealthData from "../utils/useHealthData";
// import FontLoader from "./FontLoader";

function HealthDash() {
  const { healthData, menuItems, quickLinks } = useHealthData();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedMetric, setSelectedMetric] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const showDetails = (metric) => {
    setSelectedMetric(selectedMetric === metric ? null : metric);
  };

  return (
    <>
      <div className="flex flex-col gap-[32px]">
        <WelcomeSection />

        <div className="grid grid-cols-4 gap-[24px] max-lg:grid-cols-2 max-sm:grid-cols-1">
          {quickLinks.map((link, index) => (
            <QuickLinkCard key={index} link={link} />
          ))}
        </div>

        <div className="grid grid-cols-3 gap-[24px] max-lg:grid-cols-2 max-sm:grid-cols-1">
          <HealthMetricCard
            title="Blood Pressure"
            value={`${healthData.bloodPressure.systolic}/${healthData.bloodPressure.diastolic}`}
            unit="mmHg"
            trend={healthData.bloodPressure.trend}
            lastChecked={healthData.bloodPressure.lastChecked}
            onClick={() => showDetails("bloodPressure")}
            isSelected={selectedMetric === "bloodPressure"}
          />

          <HealthMetricCard
            title="Blood Sugar"
            value={healthData.bloodSugar.value}
            unit="mg/dL"
            trend={healthData.bloodSugar.trend}
            lastChecked={healthData.bloodSugar.lastChecked}
            onClick={() => showDetails("bloodSugar")}
            isSelected={selectedMetric === "bloodSugar"}
          />

          <HealthMetricCard
            title="White Blood Cells"
            value={healthData.wbc.value}
            unit="K/µL"
            trend={healthData.wbc.trend}
            lastChecked={healthData.wbc.lastChecked}
            onClick={() => showDetails("wbc")}
            isSelected={selectedMetric === "wbc"}
          />

          <HealthMetricCard
            title="Heart Rate"
            value={healthData.heartRate.value}
            unit="bpm"
            trend={healthData.heartRate.trend}
            lastChecked={healthData.heartRate.lastChecked}
            onClick={() => showDetails("heartRate")}
            isSelected={selectedMetric === "heartRate"}
          />

          <HealthMetricCard
            title="Temperature"
            value={healthData.temperature.value}
            unit="°F"
            trend={healthData.temperature.trend}
            lastChecked={healthData.temperature.lastChecked}
            onClick={() => showDetails("temperature")}
            isSelected={selectedMetric === "temperature"}
          />

          <HealthMetricCard
            title="Oxygen Level"
            value={healthData.oxygenLevel.value}
            unit="%"
            trend={healthData.oxygenLevel.trend}
            lastChecked={healthData.oxygenLevel.lastChecked}
            onClick={() => showDetails("oxygenLevel")}
            isSelected={selectedMetric === "oxygenLevel"}
          />
        </div>
      </div>
    </>
  );
}

export default HealthDash;
