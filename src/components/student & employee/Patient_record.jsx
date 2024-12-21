import { Link } from "react-router-dom"
import { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";


const Patient_record = () => {
  const [selectedCourse, setSelectedCourse] = useState("default");

  const handleSubmit = (e) => {
    e.preventDefault(); // Para hindi mag-refresh ang page
    console.log("Selected Course:", selectedCourse);
  };

  return (
    <>
      <div className="patient-record">
        <Link to="/"><button className="back-btn"><FaArrowLeftLong /></button></Link><br />
        <div className="patient-container">
          <header>Medical Clinic</header>
          <header>Patient Record</header>

          <form onSubmit={handleSubmit}>
            <div className="form first">
              <div className="details personal">
                <div className="spacer-50"></div>
                <div className="mediumfield">
                  <label>Name:</label>
                  <input type="text" placeholder="Full Name" required />
                </div>
                <div className="smallfield">
                  <label>Age:</label>
                  <input type="number" placeholder="Age" required />
                </div>
                <div className="largefield">
                  <label>Address:</label>
                  <input type="text" placeholder="Complete Address" required />
                </div>
                <div className="smallfield">
                  <label>Course:</label>
                  <select
                    value={selectedCourse}
                    onChange={(e) => setSelectedCourse(e.target.value)}
                    required
                  >
                    <option value="default" disabled>Select Course</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div><br />

                <div className="largefield">
                  <textarea id="notefield" rows="4" placeholder="Enter notes here" required></textarea>
                </div>
              </div>

              <div className="form-footer">
                <button type="button" className="cancel">Cancel</button>
                <button type="submit" className="submit">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Patient_record;
