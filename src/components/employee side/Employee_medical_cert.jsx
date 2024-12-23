import { Link } from "react-router-dom"
import { FaArrowLeftLong } from "react-icons/fa6";

const Employee_medical_cert = () => {
  return (
    <>
    <div className="employee-cert">
    <Link to="/"><button className="back-btn"> <FaArrowLeftLong/> </button></Link><br/>
    <div className="employee-cert-container">
    
    <form action="#">
      <div className="form first">
        <div className="details personal">
          
          <header>
            <h1>MEDICAL CERTIFICATE</h1>
            <p>(For Employment)</p>
          </header>

          <div className="spacer-50"></div> 

          <section className="instructions">
            <h3>INSTRUCTIONS</h3>
            <p>a. This certificate should be accomplished by a licensed government physician.</p>
            <p>b. Attach this certificate to original appointment, transfer, and reemployment.</p>
            <p>c. The results of the following pre-employment medical/physical must be attached to this form:</p>
            <div className="checkbox-list">
              <label><input type="checkbox"/> Blood Test</label>
              <label><input type="checkbox"/> Urinalysis</label>
              <label><input type="checkbox"/> Chest X-Ray</label>
              <label><input type="checkbox"/> Drug Test</label>
              <label><input type="checkbox"/> Psychological Test</label>
              <label><input type="checkbox"/> Neuro-Psychiatric examination (if applicable)</label>
            </div>
          </section>

          <div className="spacer-50"></div> 

          <section className="appointee-details">
            <h3>FOR THE PROPOSED APPOINTEE</h3>
            
              <div className="form-row dualfield">
                  <div className="dosfield">
                    <label>NAME (Last Name, First Name, Name Extension (if any) and Middle Name)</label>
                    <input type="text" placeholder=" " required />
                  </div>
                  <div className="dosfield">
                    <label>AGENCY / ADDRESS</label>
                    <input type="text" placeholder=" " required />
                  </div>
                </div>
        
              <div className="largefield">
                <label>AGENCY / ADDRESS</label>
                <input type="text" id="name" placeholder=" " required/>
              </div>
            
            <div className="form-row dualfield">
              <div className="smallfield">
                <label>AGE</label>
                <input type="text" id="name" placeholder=" " required/>
              </div>
              <div className="smallfield">
                  <label>Sex:</label>
                  <select required>
                    <option value="" disabled selected>Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
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
                <label>PROPOSED POSITION</label>
                <input type="text" id="name" placeholder=" " required/>
              </div>
            </div>
          </section>
        
          <div className="spacer-50"></div> 

          <div className="certification">
            <h4>INSTRUCTIONS</h4>

            <p>
              I hereby certify that I have reviewed and evaluated the attached examination results, personally examined the
              above-named individual, and found him/her to be physically and medically
              <label className="checkbox-inline">
                <input type="checkbox" name="fit-status" /> FIT /
              </label>
              <label className="checkbox-inline">
                <input type="checkbox" name="fit-status" /> UNFIT
              </label>
              for employment.
            </p>
          </div>

          <div className="form-row dualfield">
            <div className="twofield">
              <label>SIGNATURE over PRINTED NAME OF LICENSED GOVERNMENT PHYSICIAN:</label>
              <input type="text" placeholder=" " required />
            </div>
            <div className="twofield">
              <label>OTHER INFORMATION ABOUT THE PROPOSED APPOINTEE</label>
              <textarea></textarea>
            </div>
          </div>

          <div className="form-row dualfield">
            <div className="largefield">
              <label>License No.</label>
              <input type="text" id="name" placeholder=" " required/>
            </div>
            <div className="smallfield">
              <label>Height</label>
              <input type="text" id="name" placeholder=" " required/>
            </div>
            <div className="smallfield">
              <label>Weight</label>
              <input type="text" id="name" placeholder=" " required/>
            </div>
            <div className="largefield">
              <label>Blood Type</label>
              <input type="text" id="name" placeholder=" " required/>
            </div>
          </div>

          <div className="form-row dualfield">
            <div className="twofield">
              <label>Official Designation</label>
              <input type="text" placeholder=" " required />
            </div>
            <div className="form-row">
              <div className="twofield specific-twofield">
                  <div className="datefield">
                    <label>Date Examined</label>
                    <input type="date" required />
                  </div>
              </div>
            </div>
        </div>

        <div className="spacer-50"></div> 

        <div className="form-footer">
          <button type="button" className="cancel">Cancel</button>
          <button type="submit" className="submit">Submit</button>
        </div>

        </div>
        </div> 

    </form>
  </div>
  </div>
    </>
  )
}

export default Employee_medical_cert
