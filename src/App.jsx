/********** react library **********/
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/********** styles **********/
import './assets/App.css'

function App() {

//Pages
//admin dashboard page
  const DashboardPage = lazy(() => import('./pages/MainDashboard.jsx'))
//Student patient page
  const Medical_records = lazy(() => import('./pages/Medical_recordPage.jsx'))
//Student and Employee page
  const MedicalcertPage = lazy(() => import('./pages/MedicalcertPage.jsx'))
  const PatientrecordPage = lazy(() => import('./pages/PatientrecordPage.jsx'))
  const ReferralFormPage = lazy(() => import('./pages/ReferralFormPage.jsx'))

  return (
    <>
    <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/medical_record" element={<Medical_records />} />
        <Route path="/medical_cert" element={<MedicalcertPage />} />
        <Route path="/patient_record" element={<PatientrecordPage />} />
        <Route path="/referral" element={<ReferralFormPage />} />
        {/* <Route path="/" element={<User/>}/> */}
      </Routes>
    </Suspense>
  </Router>
    </>
  )
}

export default App
