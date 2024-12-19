/****** react library ******/
import PropTypes from "prop-types";
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
      <div className="modal-btn">
        <button>Patient Record</button>
        <button>Medical Certificate</button>
        <button>Referral Form</button>
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
