/****** react library ******/
import PropTypes from "prop-types";
/****** react icons ******/
import { CgProfile } from "react-icons/cg";
import { IoMdCloseCircle } from "react-icons/io";

const Modal3 = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
    {/* content */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <div className="modal-txt">
      <CgProfile className="icon2"/>
      <h3>Select Form Type</h3>
      <p>Is this form for a New Employee or an Annual Update?</p>
      </div><br/>
      <button className="modal-close" onClick={onClose}> <IoMdCloseCircle/></button>
      {/* buttons */}
      <div className="modal-btn3">
        <button>New Employee</button>
        <button>Annual Update</button>
        </div>
      </div>
    </div>
  );
};

Modal3.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal3;
