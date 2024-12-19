/****** react library ******/
import PropTypes from "prop-types";
/****** react icons ******/
import { IoMdCloseCircle } from "react-icons/io";

const Modal2 = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
    {/* contents */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <div className="modal-txt">
      <IoMdCloseCircle className="icon3"/>
      <h3>Are you sure?</h3>
      <p>Do you really want to delete this records? This process cannot be undone</p>
      </div><br/>
      {/* buttons */}
      <div className="modal-btn2">
      <button onClick={onClose}>Cancel</button>
        <button>Delete</button>
        </div>
      </div>
    </div>
  );
};

Modal2.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal2;
