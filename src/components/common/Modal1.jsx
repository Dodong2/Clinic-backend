/****** react library ******/
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
/****** react icons ******/
import { CgProfile } from "react-icons/cg";
import { IoMdCloseCircle } from "react-icons/io";

const Modal1 = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
    {/* content */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <div className="modal-txt">
      <CgProfile className="icon2"/>
      <h3>Select Form Type</h3>
      <p>is this for a Patient Record, Medical Certificate or Referral Form?</p>
      </div><br/>
      <button className="modal-close" onClick={onClose}> <IoMdCloseCircle/></button>
      {/* buttons */}
      <div className="modal-btn1">
        <Link to='/patient_record'><button onClick={onClose}>Patient Record</button></Link>
        <Link to='/medical_cert'><button onClick={onClose}>Medical Certificate</button></Link>
        <Link to='/referral'><button onClick={onClose}>Referral Form</button></Link>
        </div>
      </div>
    </div>
  );
};

Modal1.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal1;
