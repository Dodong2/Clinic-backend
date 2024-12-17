import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { BiSolidLogOut } from "react-icons/bi";
import clinic from '../../assets/images/clinic.svg'
import PropTypes from "prop-types";


const SideBar = ({ onPageChange  }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="inner">
          <header>
            <button type="button" className="sidebar-burger"onClick={() => setIsOpen(!isOpen)}><span className="icon">{isOpen ? <IoClose /> : <IoMenu />}</span></button>
            <div className="sidebar-img">
            <img src={clinic} alt="clinic"/>
            </div>
          </header><hr/>
          <nav className={isOpen ? "" : "notxt"}>
          <button onClick={() => onPageChange("dashboard")}>< LuLayoutDashboard/><span>Dashboard</span></button>
          <button onClick={() => onPageChange("patients")}><CgProfile/> <span>Patients</span></button>
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
