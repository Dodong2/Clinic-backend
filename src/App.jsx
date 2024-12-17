/********** react library **********/
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/********** styles **********/
import './assets/App.css'

function App() {

//Pages
  const DashboardPage = lazy(() => import('./Pages/dashboardPage'))

  return (
    <>
    <Router>
    <Suspense fallback={<>Loading...</>}>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        {/* <Route path="/" element={<User/>}/> */}
      </Routes>
    </Suspense>
  </Router>
    </>
  )
}

export default App
