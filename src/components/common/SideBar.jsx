/****** react library ******/
import { useState } from "react";
import PropTypes from "prop-types";
// import { useNavigate } from "react-router-dom";
/****** react icons ******/
import { IoMenu, IoClose } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";
import { BiSolidLogOut } from "react-icons/bi";
import { LuBookText } from "react-icons/lu";
import { PiStudent } from "react-icons/pi";
import { GrUserManager } from "react-icons/gr";
/****** assets ******/
import clinic from '../../assets/images/LSPUlogo.png'
/****** components ******/
import Modal6 from "./Modal6";
import useModalhooks from "../../hooks/Modalhooks";

const SideBar = ({ onPageChange  }) => {
//
  const [isOpen, setIsOpen] = useState(false);
  // const navigate = useNavigate();

  const {
    modal6,
    handleModal6Open,
    handleModal6Close,
  } = useModalhooks();

  const handlePageChange = (page) => {
    onPageChange(page); 
    setIsOpen(false);  
    // navigate(route);
  };

  return (
    <>
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="inner">
        {/* sidebar header */}
          <header>
            <button type="button" className="sidebar-burger"onClick={() => setIsOpen(!isOpen)}><span className="icon">{isOpen ? <IoClose /> : <IoMenu />}</span></button>
            <div className="sidebar-title-container">
            <div className="sidebar-title">
            <h2>LSPU Clinic</h2>
            <div className='sidebar-img'>
            <img src={clinic} alt="clinic" />
            </div>
            </div>
            </div>
          </header>
          {/* sidebar nav button pages */}
          <nav className={isOpen ? "" : "notxt"}>
          <button onClick={() => handlePageChange("Dashboard", "/")}>< LuLayoutDashboard/><span>Dashboard</span></button>
          <button onClick={() => handlePageChange("Patients", "/patients")}><PiStudent/> <span>Students</span></button>
          <button onClick={() => handlePageChange("Employee", "/employee")}><GrUserManager/> <span>Employer</span></button>
          <button onClick={() => handlePageChange("Logbook", "/logbook")}><LuBookText/> <span>Logbook</span></button>
          <button className="logout" onClick={handleModal6Open}><BiSolidLogOut/> <span>Logout</span></button>
          </nav>
        </div>
      </aside>

      {/* Modal6 */}
      <Modal6 isOpen={modal6} onClose={handleModal6Close} />

    </>
  );
};

SideBar.propTypes = {
    onPageChange: PropTypes.func.isRequired,
}

export default SideBar;
