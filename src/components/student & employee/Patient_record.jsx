/****** react library ******/
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
/****** firebase or API integration ******/
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import Modal9 from "../common/Modal9";
import useModalhooks from "../../hooks/Modalhooks";

const Patient_record = () => {
//hooks
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: "",
    medic_age: "",
    medic_add: "",
    medic_course: "",
    notes: "",
  });
  const [loading, setLoading] = useState(false); // For showing loading feedback
  const [error, setError] = useState(""); // For error handling
  const [hideButton, setHideButton] = useState(false);

  const {
    modal9,
    handleModal9Open,
    handleModal9Close
  } = useModalhooks()

  //logics
    const handlePrint = () => {
      setHideButton(true); // Hide the button
      setTimeout(() => {
        window.print();
        setHideButton(false); // Optionally show the button again after print
      }, 0); // Allow time for print dialog to open
    };

  useEffect(() => {
    const fetchPatientRecord = async () => {
      if (id) {
        try {
          const docRef = doc(db, "patients", id);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            // If the document exists, set the form data with the existing document data
            setFormData(docSnap.data());
          } else {
            console.log("No such document!");
            // If the document does not exist, inform the user
            // alert("No existing patient record. You can create a new one.");
            // Do nothing, the form will be ready for new record input
          }
        } catch (error) {
          console.error("Error fetching patient record:", error);
          setError("Failed to load patient data. Please try again.");
        }
      }
    };
    fetchPatientRecord();
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const docRef = id ? doc(db, "patients", id) : doc(db, "patients", Date.now().toString());
      const updateData = {
        fullname: formData.fullname.trim(),
        medic_age: Number(formData.medic_age),
        medic_add: formData.medic_add.trim(),
        medic_course: formData.medic_course,
        notes: formData.notes.trim(),
      };

      if (id) {
        // Update existing record
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          await updateDoc(docRef, updateData);
          handleModal9Open()
        } else {
          // If the document doesn't exist, inform the user
          // alert("No such document to update, creating a new one.");
          await setDoc(docRef, updateData); // Create a new record
          alert("New record created successfully!");
        }
      } else {
        // Create a new record
        await setDoc(docRef, updateData);
        alert("New record created successfully!");
      }

    } catch (error) {
      console.error("Error saving record:", error);
      setError("Failed to save the record. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <div className="patient-record">
      <Link to="/dashboard">
        <button className="back-btn">
          <FaArrowLeftLong />
        </button>
      </Link>
      <div className="patient-container">
        <header>Medical Clinic</header>
        <header>Patient Record</header>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form first">
            <div className="details personal">
              <div className="mediumfield">
                <label>Name:</label>
                <input
                  type="text"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="smallfield">
                <label>Age:</label>
                <input
                  type="number"
                  name="medic_age"
                  value={formData.medic_age}
                  onChange={handleChange}
                  placeholder="Age"
                  required
                />
              </div>
              <div className="largefield">
                <label>Address:</label>
                <input
                  type="text"
                  name="medic_add"
                  value={formData.medic_add}
                  onChange={handleChange}
                  placeholder="Complete Address"
                  required
                />
              </div>
              <div className="smallfield">
                <label>Course:</label>
                <select
                  name="medic_course"
                  value={formData.medic_course}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select Course
                  </option>
                  <option value="BSIT">BSIT</option>
                  <option value="BSCS">BSCS</option>
                  <option value="BSN">BSN</option>
                </select>
              </div>
              <div className="largefield">
                <textarea
                  id="notefield"
                  rows="4"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Enter notes here"
                  required
                ></textarea>
              </div>
            </div>
            {!hideButton && (
            <div className="form-footer">
              <button
                type="button"
                className="cancel"
                onClick={() => navigate("/dashboard")}
              >
                Cancel
              </button>
              <button type="submit" className="submit" disabled={loading}>
                {loading ? "Saving..." : id ? "Update" : "Submit"}
              </button>

              <button onClick={handlePrint} className="submit">
              Print Page
            </button>
            </div>
          )}
          </div>
        </form>
      </div>
    </div>
    {/* Modal */}
                  <Modal9 isOpen={modal9} onClose={handleModal9Close} />
    </>
  );
};

export default Patient_record;
