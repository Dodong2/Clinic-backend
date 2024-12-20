/****** react library ******/
import { useState } from "react";
import PropTypes from "prop-types";
/****** react icons ******/
import { IoMenu, IoClose } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { BiSolidLogOut } from "react-icons/bi";
/****** assets ******/
import clinic from '../../assets/images/LSPUlogo.png'


const SideBar = ({ onPageChange  }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handlePageChange = (page) => {
    onPageChange(page); // I-trigger ang parent function para magbago ang page
    setIsOpen(false);   // Isara ang sidebar
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
          <button onClick={() => handlePageChange("dashboard")}>< LuLayoutDashboard/><span>Dashboard</span></button>
          <button onClick={() => handlePageChange("patients")}><CgProfile/> <span>Patients</span></button>
          <button className="logout"><BiSolidLogOut/> <span>Logout</span></button>
          </nav>
        </div>
      </aside>
    </>
  );
};

SideBar.propTypes = {
    onPageChange: PropTypes.func.isRequired,
}

export default SideBar;
