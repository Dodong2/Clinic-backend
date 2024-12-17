import { useState } from "react"
import SideBar from "../components/common/SideBar"
import NavBar from "../components/common/NavBar"
import Dashboard from "../components/Dashboard"
import Patients from "../components/Patients"

const DashBoardPage = () => <Dashboard/>
const PatientsPage = () => <Patients/>

const DashboardPage = () => {
  const [activePage, setActivePage] = useState("dashboard")

  const handlePageChange = (page) => {
    setActivePage(page)
  }

  return (
    <>
    <NavBar/>
    <SideBar onPageChange={handlePageChange}/>
      <div className="pages">
      {activePage === "dashboard" && <DashBoardPage />}
        {activePage === "patients" && <PatientsPage />}
      </div>
    </>
  )
}

export default DashboardPage
