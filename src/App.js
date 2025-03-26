
import { Routes, Route, Outlet } from "react-router-dom";
import HealthDash from './pages/HealthDash';
import './index.css';
import ProfilePage from "./pages/ProfilePage";
import Sidebar from "./Sidebar";
import MobileHeader from "./MobileHeader";
import { useState } from "react";
import useHealthData from "./utils/useHealthData";
import AppointmentsPage from "./pages/AppointmentsPage";
import MedicalRecordsPage from "./pages/MedicalRecordsPage";
import MedicationPage from "./pages/MedicationsPage";
import LabResultsPage from "./pages/LabResultsPage";
import MessagesDashboard from "./pages/MessagesDashboard";
import LandingHomePage from "./pages/LandingHomePage";
import AuthPage from "./pages/AuthPage";
import HealthCheckPage from "./pages/HealthCheckPage";
import MedicalHistoryPage from "./pages/MedicalHistoryPage";
import DietPage from "./pages/DietPage";
import FamilyPage from "./pages/FamilyPage"
import PharmacistPage from "./pages/PharmacistPage";
import DoctorPage from "./pages/DoctorPage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { menuItems } = useHealthData();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


  return (
    <>
      <ToastContainer position='top-center' />
      <Routes>
        <Route path="/" element={<LandingHomePage/>} />
        <Route path="/auth" element={<AuthPage/>} />
        <Route path="/dashboard"
          element={
            <main className="min-h-screen bg-[#f8f9fa] font-[Comfortaa] flex">
              <Sidebar menuItems={menuItems} />
              <section className="flex-grow ml-[280px] max-lg:ml-0">
                <MobileHeader
                  isMobileMenuOpen={isMobileMenuOpen}
                  toggleMobileMenu={toggleMobileMenu}
                  menuItems={menuItems}
                />
                <div className="p-8">
                  <Outlet />
                </div>
              </section>
            </main>
          }
        >
          <Route path="/dashboard" element={<HealthDash />} />
          <Route path="/dashboard/family-page" element={<FamilyPage />} />
          <Route path="/dashboard/profile" element={<ProfilePage />} />
          <Route path="/dashboard/med-history" element={<MedicalHistoryPage />} />
          <Route path="/dashboard/appointments" element={<AppointmentsPage />} />
          <Route path="/dashboard/health-check" element={<HealthCheckPage />} />
          <Route path="/dashboard/medications" element={<MedicationPage />} />
          <Route path="/dashboard/doctors" element={<DoctorPage />} />
          <Route path="/dashboard/pharmacists" element={<PharmacistPage />} />
          <Route path="/dashboard/lab-results" element={<LabResultsPage />} />
          <Route path="/dashboard/medical-reports" element={<MedicalRecordsPage />} />
          <Route path="/dashboard/diet-page" element={<DietPage/>}/>
          <Route path="/dashboard/messages" element={<MessagesDashboard />} />
          <Route path="/dashboard/settings" element={<HealthDash />} />
        </Route>


      </Routes>
    </>
  );
}

export default App;