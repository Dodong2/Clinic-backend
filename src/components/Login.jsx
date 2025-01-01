import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase-config";
import lspuLogo from "../assets/images/lspu.png";

const Login = () => {
//Hooks
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showpass, setshowpass] = useState(false)
  const [changeicon, setchangeicon] = useState(true)
  const navigate = useNavigate();

//logics
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous errors

    try {
      const q = query(
        collection(db, "credentials"), // Use your collection name
        where("gmail", "==", email),
        where("pass", "==", password)
      );

      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        // Login successful
        navigate("/dashboard");
      } else {
        // Invalid credentials
        setError("Invalid email or password. Please try again.");
      }
    } catch (err) {
      console.error("Error logging in:", err);
      setError("An error occurred. Please try again.");
    }
  };

  const tgglePass = () => {
    setshowpass(!showpass)
  }
  const tggleicons = () => {
    setchangeicon(!changeicon)
  }

  return (
    <div className="logincontainer">
      <div className="left"></div>
      <div className="right">
        <div className="formbox">
          <img src={lspuLogo} alt="Logo" className="logo" />
          <div className="logincenter">
            <h1>LSPU Clinic</h1>
            <p>Please login to Clinic Admin Dashboard</p>
            <form className="formspace" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div className="pass-container">
              <input
              type={showpass ? 'text' : 'password'}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className='toggle-icons' onClick={tggleicons}>{changeicon ? (<FaEye onClick={tgglePass} />) : (<FaEyeSlash onClick={tgglePass} />)}</div>
              </div>
              {error && <p>{error}</p>}
              <button type="submit" className="loginsubmit">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
