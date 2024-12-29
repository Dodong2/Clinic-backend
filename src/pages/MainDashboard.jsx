  /****** react library ******/
  import { useEffect ,useState } from "react"
  import { useLocation } from "react-router-dom"
  /****** component ******/
  import SideBar from "../components/common/SideBar"
  import NavBar from "../components/common/NavBar"
  import Dashboard from "../components/Dashboard"
  import Patients from "../components/Patients"
  import LogbookRecord from "../components/LogbookRecord"
  import EmployeePatients from "../components/EmployeePatients"

  const GraphsPage = () => <Dashboard/>
  const PatientsPage = () => <Patients/>
  const LogbookRecordPage = () => <LogbookRecord/>
  const EmployeePatientsPage = () => <EmployeePatients/>

  const MainDashboard = () => {
    const location = useLocation();
    const [activePage, setActivePage] = useState("dashboard")

    useEffect(() => {
      // Set active page based on the URL path
      if (location.pathname === "/") {
        setActivePage("Dashboard");
      } else if (location.pathname === "/patients") {
        setActivePage("Patients");
      } else if (location.pathname === "/logbook") {
        setActivePage("Logbook");
      } else if (location.pathname === "/employee") {
        setActivePage("Employee")
      }
    }, [location.pathname]);

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
        {activePage === "Dashboard" && <GraphsPage />}
        {activePage === "Patients" && <PatientsPage />}
        {activePage === "Logbook" && <LogbookRecordPage />}
        {activePage === "Employee" && <EmployeePatientsPage />}
        </div>
      </>
    )
  }

  export default MainDashboard
