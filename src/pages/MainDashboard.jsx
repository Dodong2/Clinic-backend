/****** react library ******/
import { useState } from "react"
/****** component ******/
import SideBar from "../components/common/SideBar"
import NavBar from "../components/common/NavBar"
import Dashboard from "../components/Dashboard"
import Patients from "../components/Patients"

const GraphsPage = () => <Dashboard/>
const PatientsPage = () => <Patients/>

const MainDashboard = () => {
  const [activePage, setActivePage] = useState("dashboard")

  const handlePageChange = (page) => {
    setActivePage(page)
  }

  return (
    <>
    {/* navbar */}
    <NavBar activePage={activePage} />
    {/* sidebar */}
    <SideBar onPageChange={handlePageChange}/>
    {/* pages */}
      <div className="pages">
      {activePage === "dashboard" && <GraphsPage />}
        {activePage === "patients" && <PatientsPage />}
      </div>
    </>
  )
}

export default MainDashboard
