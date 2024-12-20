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

  return (
    <>
    <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/medical_record" element={<Medical_records />} />
        {/* <Route path="/" element={<User/>}/> */}
      </Routes>
    </Suspense>
  </Router>
    </>
  )
}

export default App
