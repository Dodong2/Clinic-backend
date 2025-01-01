/********** react library **********/
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/********** styles **********/
import './assets/App.css'

function App() {

//Pages
//admin dashboard page
  const Login = lazy(() => import('./components/Login.jsx'))
  const DashboardPage = lazy(() => import('./pages/MainDashboard.jsx'))
  const AddLogbook = lazy(() => import('../src/components/AddLogbook.jsx'))
//Student patient page
  const Medical_records = lazy(() => import('./pages/Medical_recordPage.jsx'))
//Student and Employee page
  const MedicalcertPage = lazy(() => import('./pages/MedicalcertPage.jsx'))
  const PatientrecordPage = lazy(() => import('./pages/PatientrecordPage.jsx'))
  const ReferralFormPage = lazy(() => import('./pages/ReferralFormPage.jsx'))
  // const Patients = lazy(() => import('./components/Patients.jsx'))
//Employee page
  const Employee_medical_certPage = lazy(() => import('./pages/Employee_medical_certPage.jsx'))
  const Annual_updatePage = lazy(() => import('./pages/Annual_updatePage.jsx'))

  return (
    <>
    <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
{/* admin dashboard page */}
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        
        <Route path="/addlog" element={<AddLogbook />} />
        {/*<Route path="/patients" element={<Patients />} />*/}
{/* Student patient page */}
        <Route path="/medical_record" element={<Medical_records />} />
{/* Student and Employee page */}
        <Route path="/medical_cert" element={<MedicalcertPage />} />
        <Route path="/patient_record/:id" element={<PatientrecordPage />} />
        <Route path="/referral" element={<ReferralFormPage />} />
{/* Employee page */}
        <Route path="/employee_cert" element={<Employee_medical_certPage />} />
        <Route path="/annual" element={<Annual_updatePage />} />
        {/* <Route path="/" element={<User/>}/> */}
      </Routes>
    </Suspense>
  </Router>
    </>
  )
}

export default App
