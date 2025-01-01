import { useParams} from "react-router-dom";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../../firebase-config";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom"
import Modal8 from "../common/Modal8";
import useModalhooks from "../../hooks/Modalhooks";

const Annual_update = () => {

  const {
    modal8,
    handleModal8Open,
    handleModal8Close
  } = useModalhooks()

  const { id } = useParams(); // Employee ID
  const [formData, setFormData] = useState({
    date: "",
    name: "",
    age: "",
    address: "",
    sex: "",
    birth_place: "",
    dob: "",
    status: "",
    contact: "",
    guardian: "",
    bloodPressure: "",
    course: "",
    vision: "",
    wglass: "",
    nglass: "",
    height: "",
    weight: "",
    bmi: "",
    idealWeight: "",
    eent: "",
    lungs: "",
    heart: "",
    abdomen: "",
    extremities: "",
    history: "",
    diagnosis: "",
    recommendation: "",
    illness: "",
    nurse: "",
    examiniee:"",
    physician: ""
  });

  useEffect(() => {
    const fetchData = async () => {
      if (id && formData.date) {
        const year = new Date(formData.date).getFullYear(); // Extract the year from the date
        const docRef = doc(db, `annual/${year}/employees`, id); // Add 'employees' as a subcollection
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setFormData(docSnap.data());
        } else {
          console.log("No document found for this year and ID.");
        }
      }
    };
    fetchData();
  }, [id, formData.date]); // Re-fetch when `id` or `formData.date` changes
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const year = new Date(formData.date).getFullYear(); // Extract the year
      const docRef = doc(db, `annual/${year}/employees`, id); // Add 'employees' as a subcollection
      await setDoc(docRef, formData);
      handleModal8Open();
    } catch (error) {
      console.error("Error saving data: ", error);
    }
  };
  

  return (
    <>
    <div className="annual">
    <Link to="/dashboard"><button className="back-btn"> <FaArrowLeftLong/> </button></Link><br/>
    
    <div className="annual-container">
    <header>Health Examination Record</header>

    <form onSubmit={handleSubmit}>
      <div className="form first">
        <div className="details personal">
          <div className="endfields">
            <div className="datefield">
              <label>Date:</label>
              <input type="date" name="date" value={formData.date}
              onChange={handleChange} required/>
            </div>
          </div>
          <div className="mediumfield">
            <label>Name:</label>
            <input type="text" placeholder="Full Name" name="name" value={formData.name}
            onChange={handleChange} required/>
          </div>
          <div className="smallfield">
            <label>Age:</label>
            <input type="number" placeholder="Age" name="age" value={formData.age}
            onChange={handleChange} required/>
          </div>
          <div className="largefield">
            <label>Address:</label>
            <input type="text" placeholder="Complete Address" name="address" value={formData.address}
            onChange={handleChange} required/>
          </div>
          <div className="smallfield">
            <label>Sex:</label>
            <select name="sex" value={formData.sex}
            onChange={handleChange} required>
              <option value="default" disabled selected>Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="smallfield">
            <label>Date of Birth:</label>
            <input type="date" name="dob" value={formData.dob}
            onChange={handleChange} required/>
          </div>
          <div className="smallfield">
            <label>Civil Status:</label>
            <select name="status" value={formData.status}
            onChange={handleChange} required>
              <option value="default" disabled selected>Select Civil Status</option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
              <option value="Divorced">Divorced</option>
              <option value="Widowed">Widowed</option>
            </select>
          </div>
          <div className="largefield">
            <label>Place of Birth:</label>
            <input type="text" placeholder="Place of Birth" name="birth_place" value={formData.birth_place}
            onChange={handleChange} required/>
          </div>
          <div className="mediumfield">
            <label>Contact Number:</label>
            <input type="tel" placeholder="Contact Number" name="contact" value={formData.contact}
            onChange={handleChange} required />
          </div>
          <div className="smallfield">
            <label>Course Yr/Section:</label>
            <input type="text" placeholder="Course Yr/Section" name="course" value={formData.course}
            onChange={handleChange} required />
          </div>
          <div className="mediumfield">
            <label>Guardian’s Name:</label>
            <input type="text" placeholder="Guardian’s Name" name="guardian" value={formData.guardian}
            onChange={handleChange} required/>

            <div className="spacer-150"></div> 


            <div className="form-row dualfield">
          <div className="twofield">
            <label>Blood Pressure:</label>
            <input type="text" placeholder="e.g., 120/80" name="bloodPressure" value={formData.bloodPressure}
            onChange={handleChange} required />
          </div>
          <div className="twofield">
            <label>Vision:</label>
            <input type="text" placeholder="e.g., 20/20" name="vision" value={formData.vision}
            onChange={handleChange} required />
          </div>
        </div>

        <div className="form-row dualfield">
          <div className="twofield">
            <label>Height:</label>
            <input type="text" placeholder="Height in cm" name="height" value={formData.height}
            onChange={handleChange} required />
          </div>
          <div className="twofield">
            <label>With Glasses:</label>
            <input type="text" placeholder="Vision with Glasses" name="wglass" value={formData.wglass}
            onChange={handleChange} required />
          </div>
        </div>

        <div className="form-row dualfield">
          <div className="twofield">
            <label>Weight:</label>
            <input type="text" placeholder="Weight in kg" name="weight" value={formData.weight}
            onChange={handleChange} required />
          </div>
          <div className="twofield">
            <label>Without Glasses:</label>
            <input type="text" placeholder="Vision without Glasses" name="nglass" value={formData.nglass}
            onChange={handleChange} required />
          </div>
        </div>

        <div className="form-row dualfield">
          <div className="twofield">
            <label>BMI:</label>
            <input type="text" placeholder="Body Mass Index" name="bmi" value={formData.bmi}
            onChange={handleChange} required />
          </div>
          <div className="twofield">
            <label>Ideal Body Weight:</label>
            <input type="text" placeholder="Ideal Weight in kg" name="idealWeight" value={formData.idealWeight}
            onChange={handleChange} required />
          </div>
      </div>

      <div className="spacer-50">
      </div> 
      <span>PHYSICAL EXAMINATION:</span>
      <div className="spacer-20">
      </div> 
      <div className="largefield">
        <label>EENT:</label>
        <input type="text" placeholder="Notes" name="eent" value={formData.eent}
        onChange={handleChange} required />
      </div>
      <div className="largefield">
        <label>Lungs:</label>
        <input type="text" placeholder="Notes" name="lungs" value={formData.lungs}
        onChange={handleChange} required/>
      </div>
      <div className="largefield">
        <label>Heart:</label>
        <input type="text" placeholder="Notes" name="heart" value={formData.heart}
        onChange={handleChange} required/>
      </div>
      <div className="largefield">
        <label>Abdomen:</label>
        <input type="text" placeholder="Notes" name="abdomen" value={formData.abdomen}
        onChange={handleChange} required/>
      </div>
      <div className="largefield">
        <label>Extremities:</label>
        <input type="text" placeholder="Notes" name="extremities" value={formData.extremities}
        onChange={handleChange} required/>
      </div>
      <div className="form additional-section">
        <div className="largefield">
          <label>History of Previous Illness:</label>
          <textarea rows="3" placeholder="Enter history of previous illness" name="illness" value={formData.illness}
          onChange={handleChange} required></textarea>
        </div>
      
        <div className="largefield">
          <label>Diagnosis/Assessment:</label>
          <textarea rows="3" placeholder="Enter diagnosis or assessment" name="diagnosis" value={formData.diagnosis}
          onChange={handleChange} required></textarea>
        </div>
      
        <div className="largefield">
          <label>Recommendation:</label>
          <textarea rows="3" placeholder="Enter recommendations" name="recommendation" value={formData.recommendation}
          onChange={handleChange} required></textarea>
        </div>
      </div>

      <div className="spacer-50">
    </div> 
      <div className="centersign">
        <div className="signsection">
            <div className="signfield">
              <input type="text" placeholder=" " name="nurse" value={formData.nurse}
              onChange={handleChange} required />
              <label>Signature of Nurse</label>
            </div>
            <div className="signfield">
              <input type="text" placeholder=" " name="examiniee" value={formData.examiniee}
              onChange={handleChange} required />
              <label>Signature of Examinee</label>
            </div>
          </div>
      </div>
      <div className="center">
      <div className="signsection">
        <div className="signfield">
          <input type="text" placeholder=" " name="physician" value={formData.physician}
          onChange={handleChange} required />
          <label>Signature of Physician</label>
        </div>
    </div>
    </div>
    
    <div className="form-footer">
       <Link to="/dashboard"> <button type="button" className="cancel">Cancel</button></Link>
        <button type="submit" className="submit">Submit</button>
      </div>

        </div>
        </div>
        </div>
        
    </form>
  </div>
  </div>

  <Modal8 isOpen={modal8} onClose={handleModal8Close} />
    </>
  )
}

export default Annual_update
