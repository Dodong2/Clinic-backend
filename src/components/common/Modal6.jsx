/****** react library ******/
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
/****** react icons ******/
import { CgProfile } from "react-icons/cg";
/****** firebase auth ******/
import { getAuth, signOut } from "firebase/auth";

const Modal6 = ({ isOpen, onClose}) => {
//hooks
    const navigate = useNavigate();

//logic
    if (!isOpen) return null;
    
    const handleLogout = () => {
        const auth = getAuth(); // Initialize Firebase Auth
        signOut(auth)
          .then(() => {
            // Successfully logged out
            navigate("/"); // Redirect to homepage
          })
          .catch((error) => {
            console.error("Error logging out:", error);
          });
      };

  return (
    <div className="modal-overlay" onClick={onClose}>
    {/* contents */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <div className="modal-txt">
      <CgProfile className="icon3"/>
      <h3>Are you sure you want to log out?</h3>
      </div><br/>
      {/* buttons */}
      <div className="modal-btn2">
      <button onClick={onClose}>Cancel</button>
        <button onClick={handleLogout}>confirm</button>
        </div>
      </div>
    </div>
  );
};

Modal6.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal6;
