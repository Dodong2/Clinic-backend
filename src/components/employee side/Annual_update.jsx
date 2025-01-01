import { Link } from "react-router-dom"
import { FaArrowLeftLong } from "react-icons/fa6";

const Annual_update = () => {
  return (
    <>
    <div className="annual">
    <Link to="/dashboard"><button className="back-btn"> <FaArrowLeftLong/> </button></Link><br/>
    
    <div className="annual-container">
    <header>Health Examination Record</header>

    <form>
      <div className="form first">
        <div className="details personal">
          <div className="endfields">
            <div className="datefield">
              <label>Date:</label>
              <input type="date" required/>
            </div>
          </div>
          <div className="mediumfield">
            <label>Name:</label>
            <input type="text" placeholder="Full Name" required/>
          </div>
          <div className="smallfield">
            <label>Age:</label>
            <input type="number" placeholder="Age" required/>
          </div>
          <div className="largefield">
            <label>Address:</label>
            <input type="text" placeholder="Complete Address" required/>
          </div>
          <div className="smallfield">
            <label>Sex:</label>
            <select required>
              <option value="default" disabled selected>Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="smallfield">
            <label>Date of Birth:</label>
            <input type="date" required/>
          </div>
          <div className="smallfield">
            <label>Civil Status:</label>
            <select required>
              <option value="" disabled selected>Select Civil Status</option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
              <option value="Divorced">Divorced</option>
              <option value="Widowed">Widowed</option>
            </select>
          </div>
          <div className="largefield">
            <label>Place of Birth:</label>
            <input type="text" placeholder="Place of Birth" required/>
          </div>
          <div className="mediumfield">
            <label>Contact Number:</label>
            <input type="tel" placeholder="Contact Number" pattern="[0-9]{10}" required />
          </div>
          <div className="smallfield">
            <label>Course Yr/Section:</label>
            <input type="text" placeholder="Course Yr/Section" required />
          </div>
          <div className="mediumfield">
            <label>Guardian’s Name:</label>
            <input type="text" placeholder="Guardian’s Name" required/>

            <div className="spacer-150"></div> 


            <div className="form-row dualfield">
          <div className="twofield">
            <label>Blood Pressure:</label>
            <input type="text" placeholder="e.g., 120/80" required />
          </div>
          <div className="twofield">
            <label>Vision:</label>
            <input type="text" placeholder="e.g., 20/20" required />
          </div>
        </div>

        <div className="form-row dualfield">
          <div className="twofield">
            <label>Height:</label>
            <input type="text" placeholder="Height in cm" required />
          </div>
          <div className="twofield">
            <label>With Glasses:</label>
            <input type="text" placeholder="Vision with Glasses" required />
          </div>
        </div>

        <div className="form-row dualfield">
          <div className="twofield">
            <label>Weight:</label>
            <input type="text" placeholder="Weight in kg" required />
          </div>
          <div className="twofield">
            <label>Without Glasses:</label>
            <input type="text" placeholder="Vision without Glasses" required />
          </div>
        </div>

        <div className="form-row dualfield">
          <div className="twofield">
            <label>BMI:</label>
            <input type="text" placeholder="Body Mass Index" required />
          </div>
          <div className="twofield">
            <label>Ideal Body Weight:</label>
            <input type="text" placeholder="Ideal Weight in kg" required />
          </div>
      </div>

      <div className="spacer-50">
      </div> 
      <span>PHYSICAL EXAMINATION:</span>
      <div className="spacer-20">
      </div> 
      <div className="largefield">
        <label>EENT:</label>
        <input type="text" placeholder="Notes" required />
      </div>
      <div className="largefield">
        <label>Lungs:</label>
        <input type="text" placeholder="Notes" required/>
      </div>
      <div className="largefield">
        <label>Heart:</label>
        <input type="text" placeholder="Notes" required/>
      </div>
      <div className="largefield">
        <label>Abdomen:</label>
        <input type="text" placeholder="Notes" required/>
      </div>
      <div className="largefield">
        <label>Extremities:</label>
        <input type="text" placeholder="Notes" required/>
      </div>
      <div className="form additional-section">
        <div className="largefield">
          <label>History of Previous Illness:</label>
          <textarea rows="3" placeholder="Enter history of previous illness" required></textarea>
        </div>
      
        <div className="largefield">
          <label>Diagnosis/Assessment:</label>
          <textarea rows="3" placeholder="Enter diagnosis or assessment" required></textarea>
        </div>
      
        <div className="largefield">
          <label>Recommendation:</label>
          <textarea rows="3" placeholder="Enter recommendations" required></textarea>
        </div>
      </div>

      <div className="spacer-50">
    </div> 
      <div className="centersign">
        <div className="signsection">
            <div className="signfield">
              <input type="text" placeholder=" " required />
              <label>Signature of Nurse</label>
            </div>
            <div className="signfield">
              <input type="text" placeholder=" " required />
              <label>Signature of Examinee</label>
            </div>
          </div>
      </div>
      <div className="center">
      <div className="signsection">
        <div className="signfield">
          <input type="text" placeholder=" " required />
          <label>Signature of Physician</label>
        </div>
    </div>
    </div>
    
    <div className="form-footer">
        <button type="button" className="cancel">Cancel</button>
        <button type="submit" className="submit">Submit</button>
      </div>

        </div>
        </div>
        </div>
        
    </form>
  </div>
  </div>
    </>
  )
}

export default Annual_update
