"use client";
import { useState } from "react";

function useHealthData() {
  const [healthData] = useState({
    bloodPressure: {
      systolic: 120,
      diastolic: 80,
      trend: "stable",
      lastChecked: "2 hours ago",
    },
    bloodSugar: {
      value: 95,
      trend: "decreasing",
      lastChecked: "4 hours ago",
    },
    wbc: {
      value: 7.5,
      trend: "increasing",
      lastChecked: "1 day ago",
    },
    heartRate: {
      value: 72,
      trend: "stable",
      lastChecked: "1 hour ago",
    },
    temperature: {
      value: 98.6,
      trend: "stable",
      lastChecked: "3 hours ago",
    },
    oxygenLevel: {
      value: 98,
      trend: "stable",
      lastChecked: "30 mins ago",
    },
  });

  const [menuItems] = useState([
    { icon: "👨‍👩‍👧‍👦", title: "Family", active: true, path: "/dashboard/family-page" },
    { icon: "🏠", title: "My Health", active: true, path: "/dashboard" },
    { icon: "👤", title: "Profile", active: false, path: "/dashboard/profile" },
    { icon: "🗓️", title: "Appointments", active: false, path: "/dashboard/appointments" },
    { icon: "🏥", title: "Health Check", active: false, path: "/dashboard/health-check" },
    { icon: "💊", title: "Medications", active: false, path: "/dashboard/medications" },
    { icon: "🔬", title: "Lab Results", active: false, path: "/dashboard/lab-results" },
    { icon: "📝", title: "Medical Records", active: false, path: "/dashboard/medical-reports" },
    { icon: "🥗", title: "Diet", active: false, path: "/dashboard/diet-page" },
    { icon: "✉️", title: "Messages", active: false, path: "/dashboard/messages" },
    { icon: "⚙️", title: "Settings", active: false, path: "/dashboard/settings" },
  ]);

  const [quickLinks] = useState([
    { title: "Appointments", icon: "🗓️", count: 2 },
    { title: "Medications", icon: "💊", count: 4 },
    { title: "Lab Results", icon: "🔬", count: 1 },
    { title: "Message" ,icon: "✉️", count: 3 },
  ]);

  return {
    healthData,
    menuItems,
    quickLinks,
  };
}

export default useHealthData;
