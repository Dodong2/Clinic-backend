/****** react library ******/
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
/****** react icons ******/
import { FaCheckCircle } from "react-icons/fa";

const Modal9 = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
    {/* contents */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <div className="modal-txt">
      <FaCheckCircle className="icon4"/>
      <h3>Success</h3>
      <p>The Personal record has been successfully added.</p>
      </div><br/>
      {/* buttons */}
      <div className="modal-btn4">
        <Link to="/dashboard"><button onClick={onClose}>Done</button></Link>
        </div>
      </div>
    </div>
  );
};

Modal9.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal9;
