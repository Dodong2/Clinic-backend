import { Link } from "react-router-dom"
import { FaArrowLeftLong } from "react-icons/fa6";
import Modal4 from "../common/Modal4";
import useModalhooks from "../../hooks/Modalhooks";

const MedicalRecords = () => {
  const {
    modal4,
    handleModal4Open,
    handleModal4Close
  } = useModalhooks()

  return (
    <>
      <div className="medical-records">
      <Link to="/"><button className="back-btn"> <FaArrowLeftLong/> </button></Link><br/>
        <div className="container">

        {/* Patient Information */}
        <h2>Patient Information</h2>
        <form onSubmit={(e) => {e.preventDefault()
           handleModal4Open()}}>
        <table>
          {/* Patient layer 1 */}
          <tr>
            <td>Surname:</td>
            <td><input type="text" placeholder="Surname..." /></td>
            <td>Given Name:</td>
            <td><input type="text" placeholder="Given name..." /></td>
            <td>Middle Name:</td>
            <td><input type="text" placeholder="Middle name..." /></td>
          </tr>
          {/* Patient layer 2 */}
          <tr>
            <td>Age:</td>
            <td><input type="text" placeholder="Age..." /></td>
            <td>Sex:</td>
            <td><select>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select></td>
            <td>Status:</td>
            <td><input type="text" placeholder="Status..." /></td>
          </tr>
          {/* Patient layer 3 */}
          <tr>
            <td>Date of Birth:</td>
            <td><input type="date" placeholder="MM-DD-YYYY" /></td>
            <td>Course:</td>
            <td><input type="text" placeholder="Course..." /></td>
            <td>School Year Entered:</td>
            <td><input type="text" placeholder="Year..." /></td>
          </tr>
          {/* Patient layer 4 */}
          <tr>
            <td>Current Address:</td>
            <td colSpan={2}><input type="text" placeholder="Address..." style={{ width: "100%" }} /></td>
            <td>Cell No.</td>
            <td colSpan={2}><input type="text" placeholder="Contact..." style={{ width: "100%" }} /></td>
          </tr>
          {/* Patient layer 5 */}
          <tr>
            <td>Mother Name:</td>
            <td><input type="text" placeholder="Mother name..." style={{ width: "100%" }} /></td>
            <td>Father Name:</td>
            <td><input type="text" placeholder="Father name..." style={{ width: "100%" }} /></td>
            <td>Guardian Name:</td>
            <td><input type="text" placeholder="Guardian name..." style={{ width: "100%" }} /></td>
          </tr>
          {/* Patient layer 6 */}
          <tr>
            <td>Emergency Contact Person:</td>
            <td><input type="text" placeholder="Emergency contact person..." style={{ width: "100%" }} /></td>
            <td>Relationship:</td>
            <td><input type="text" placeholder="Relationship..." style={{ width: "100%" }} /></td>
            <td>Cell No.</td>
            <td><input type="text" placeholder="Contact..." style={{ width: "100%" }} /></td>
          </tr>
        </table><br/><br/>

        {/* Past Medical and Dental History */}
        <h2>Past Medical and Dental History  (Fill out if applicable)</h2>
        <table>
        {/* Past layer 1 */}
        <tr>
          <td>Previous/present known illness:</td>
          <td colSpan={2}><input type="text" placeholder="Previous/present known illness..." style={{ width: "100%" }} /></td>
          <td>Present immunization:</td>
          <td colSpan={2}><input type="text" placeholder="Present immunization..." style={{ width: "100%" }} /></td>
        </tr>
        {/* Past layer 2 */}
        <tr>
          <td>Past hospitalization/confinement:</td>
          <td colSpan={2}><input type="text" placeholder="Past hospitalization/confinement..." style={{ width: "100%" }} /></td>
          <td>Current taking medicine:</td>
          <td colSpan={2}><input type="text" placeholder="Current taking medicine..." style={{ width: "100%" }} /></td>
        </tr>
        {/* Past layer 3 */}
        <tr>
          <td>Known allergies to food or medicine:</td>
          <td colSpan={2}><input type="text" placeholder="Known allergies to food or medicine..." style={{ width: "100%" }} /></td>
          <td>Dental problem:</td>
          <td colSpan={2}><input type="text" placeholder="Dental problem..." style={{ width: "100%" }} /></td>
        </tr>
        {/* Past layer 4 */}
        <tr>
          <td>Childhood immunization:</td>
          <td colSpan={2}><input type="text" placeholder="Childhood immunization..." style={{ width: "100%" }} /></td>
          <td>Primary care physician:</td>
          <td colSpan={2}><input type="text" placeholder="Primary care physician..." style={{ width: "100%" }} /></td>
        </tr>
        </table><br/><br/>

        {/* Family Medical History  (Fill out if applicable) */}
        <h2>Family Medical History  (Fill out if applicable)</h2>
        <table>
        {/* Family layer 1 */}
        <tr>
          <td>Allergy:</td>
          <td colSpan={2}><input type="text" placeholder="Allergy..." style={{ width: "100%" }} /></td>
          <td>Cancer:</td>
          <td colSpan={2}><input type="text" placeholder="Cancer..." style={{ width: "100%" }} /></td>
        </tr>
        {/* Family layer 2 */}
        <tr>
          <td>Asthma/hika:</td>
          <td colSpan={2}><input type="text" placeholder="Asthma/hika..." style={{ width: "100%" }} /></td>
          <td>Liver disease:</td>
          <td colSpan={2}><input type="text" placeholder="Liver disease..." style={{ width: "100%" }} /></td>
        </tr>
        {/* Family layer 3 */}
        <tr>
          <td>Tuberculosis:</td>
          <td colSpan={2}><input type="text" placeholder="Tuberculosis..." style={{ width: "100%" }} /></td>
          <td>Kidney or bladder disease:</td>
          <td colSpan={2}><input type="text" placeholder="Kidney or bladder disease..." style={{ width: "100%" }} /></td>
        </tr>
        {/* Family layer 4 */}
        <tr>
          <td>Hypertension:</td>
          <td colSpan={2}><input type="text" placeholder="Hypertension..." style={{ width: "100%" }} /></td>
          <td>Blood disorder:</td>
          <td colSpan={2}><input type="text" placeholder="Blood disorder..." style={{ width: "100%" }} /></td>
        </tr>
        {/* Family layer 5 */}
        <tr>
          <td>Heart disease:</td>
          <td colSpan={2}><input type="text" placeholder="Heart disease..." style={{ width: "100%" }} /></td>
          <td>Epilepsy:</td>
          <td colSpan={2}><input type="text" placeholder="Epilepsy..." style={{ width: "100%" }} /></td>
        </tr>
        {/* Family layer 6 */}
        <tr>
          <td>Stroke:</td>
          <td colSpan={2}><input type="text" placeholder="Stroke..." style={{ width: "100%" }} /></td>
          <td>Mental disorder:</td>
          <td colSpan={2}><input type="text" placeholder="Mental disorder..." style={{ width: "100%" }} /></td>
        </tr>
        {/* Family layer 7 */}
        <tr>
          <td>Diabetes:</td>
          <td colSpan={2}><input type="text" placeholder="Diabetes..." style={{ width: "100%" }} /></td>
          <td>Others:</td>
          <td colSpan={2}><input type="text" placeholder="Others..." style={{ width: "100%" }} /></td>
        </tr>
        {/* Family layer 8 */}
        <tr>
          <td>Childhood immunization:</td>
          <td colSpan={2}><input type="text" placeholder="Childhood immunization..." style={{ width: "100%" }} /></td>
          <td>Primary care physician:</td>
          <td colSpan={2}><input type="text" placeholder="Primary care physician..." style={{ width: "100%" }} /></td>
        </tr>
        </table><br/><br/>

        {/* Personal and Social History  (Fill out if applicable) */}
        <h2>Personal and Social History  (Fill out if applicable)</h2>
        <table>
        {/* Personal layer 1 */}
        <tr>
          <td>Alcohol intake:</td>
          <td colSpan={2}><input type="text" placeholder="Alcohol intake..." style={{ width: "100%" }} /></td>
          <td>Tobacco use:</td>
          <td colSpan={2}><input type="text" placeholder="Tobacco use..." style={{ width: "100%" }} /></td>
        </tr>
        {/* Personal layer 2 */}
        <tr>
          <td>Illicit drug use:</td>
          <td colSpan={2}><input type="text" placeholder="Illicit drug use..." style={{ width: "100%" }} /></td>
        </tr>
        </table><br/><br/>

        {/* For Females (Fill out if applicable) */}
        <h2>For Females (Fill out if applicable)</h2>
        <h2>A. Menstrual period</h2>
        <table>
        {/* Females layer 1 */}
        <tr>
          <td>menstrual period (MM-DD-YYYY):</td>
          <td colSpan={2}><input type="text" placeholder="Date of first day of LAST menstrual period (MM-DD-YYYY)..." style={{ width: "100%" }} /></td>
          <td>menstrual period (MM-DD-YYYY):</td>
          <td className="checkbox"> <div className="checkbox-cont"><input type="checkbox" name="tobacco" value="yes" className="custom-checkbox" /> Regular </div> <div className="checkbox-cont"><input type="checkbox" name="tobacco" value="no" /> Irregular </div></td>
        </tr>
        {/* Females layer 2 */}
        <tr>
          <td>Duration (days/weeks):</td>
          <td colSpan={2}><input type="text" placeholder="Duration (days/weeks)..." style={{ width: "100%" }} /></td>
          <td>Duration (days/weeks):</td>
          <td colSpan={2}><input type="text" placeholder="Duration (days/weeks)..." style={{ width: "100%" }} /></td>
        </tr>
        {/* Females layer 3 */}
        <tr>
        <td></td>
        <td className="checkbox">
        <div className="checkbox-wrapper">
          <div className="checkbox-title">
            <h3>History of dysmenorrhea</h3>
          </div>
          <div className="checkbox-group">
            <div className="checkbox-option">
              <input type="checkbox" name="history" value="regular" className="custom-checkbox" />
              Yes
            </div>
            <div className="checkbox-option">
              <input type="checkbox" name="history" value="irregular" className="custom-checkbox" />
              No
            </div>
          </div>
        </div>
      </td>
      <td></td>
      <td></td>
      <td className="checkbox">
        <div className="checkbox-wrapper">
          <div className="checkbox-title">
            <h3>If Yes, how severe is your dysmenorrhea?</h3>
          </div>
          <div className="checkbox-group">
            <div className="checkbox-option">
              <input type="checkbox" name="history" value="regular" className="custom-checkbox" />
              Mild
            </div>
            <div className="checkbox-option">
              <input type="checkbox" name="history" value="irregular" className="custom-checkbox" />
              Moderate
            </div>
            <div className="checkbox-option">
              <input type="checkbox" name="history" value="irregular" className="custom-checkbox" />
              Severe
            </div>
          </div>
        </div>
      </td>
        </tr>
        {/* Females layer 4 */}
        <tr>
          <td>Last OB-GYN check-up:</td>
          <td colSpan={2}><input type="text" placeholder="Last OB-GYN check-up (MM-DD-YYYY)..." style={{ width: "100%" }} /></td>
          <td>History of excessive/abnormal bleeding (Details):</td>
          <td colSpan={2}><input type="text" placeholder="History of excessive/abnormal bleeding (Details)..." style={{ width: "100%" }} /></td>
        </tr>
        {/* Females layer 5 */}
        <tr>
          <td>Previous Pregnancy:</td>
          <td colSpan={2}><input type="text" placeholder="(Details: normal, C-section, home/hospital, etc.)..." style={{ width: "100%" }} /></td>
          <td>Children (If you have, how many?):</td>
          <td colSpan={2}><input type="text" placeholder="Children (If you have, how many?)..." style={{ width: "100%" }} /></td>
        </tr>
        </table><br/><br/>
        
        {/* Physical Examination  */}
        <h2>Physical Examination </h2>
        <table>
        {/* Physical layer 1 */}
        <tr>
         <td><input type="text" placeholder="Height (m)..." /></td>
         <td><input type="text" placeholder="Weight (kg)..." /></td>
         <td><input type="text" placeholder="BMI (kg/m2)..." /></td>
         <td><input type="text" placeholder="BP (mmHg)..." /></td>
         <td><input type="text" placeholder="HR (bpm)..." /></td>
         <td><input type="text" placeholder="RR (cpm)..." /></td>
         <td><input type="text" placeholder="Temp (c)..." /></td>
        </tr>
        {/* Physical layer 2 */}
        <tr>
         <td>Gen. Appearance and skin:</td>
         <td><input type="text" placeholder="Gen. Appearance and skin..." /></td>
         <td>Head and Neck:</td>
         <td><input type="text" placeholder="Head and Neck..." /></td>
         <td>Chest and Back:</td>
         <td><input type="text" placeholder="Chest and Back..." /></td>
        </tr>
        {/* Physical layer 3 */}
        <tr>
         <td>Abdomen:</td>
         <td><input type="text" placeholder="Abdomen..." /></td>
         <td>Extremeties:</td>
         <td><input type="text" placeholder="Extremeties..." /></td>
         <td>Other:</td>
         <td><input type="text" placeholder="Other..." /></td>
        </tr>
        </table><br/><br/>

        {/* Physical Examination  */}
        <h2>Diagnostic Results (Pls. include date of examination)</h2>
        <table>
        {/* Diagnostic layer 1 */}
        <tr>
         <td>Chest X-Ray:</td>
         <td colSpan={2}><input type="text" placeholder="Chest X-Ray..." /></td>
         <td>Impression:</td>
         <td colSpan={2}><input type="text" placeholder="Impression..." /></td>
        </tr>
        </table><br/><br/>

        {/* Plan  */}
        <h2>Plan</h2>
        <table>
        {/* Plan layer 1 */}
        <tr>
         <td>Chest X-Ray:</td>
         <td colSpan={2}><input type="text" placeholder="Chest X-Ray..." /></td>
         <td>Impression:</td>
         <td colSpan={2}><input type="text" placeholder="Impression..." /></td>
        </tr>
        {/* Plan layer 1 */}
        <tr>
         <td>Diagnostics:</td>
         <td colSpan={2}><input type="text" placeholder="Diagnostics..." style={{ width: "100%" }} /></td>
         <td>Home Medication:</td>
         <td colSpan={2}><input type="text" placeholder="Home Medication..." style={{ width: "100%" }} /></td>
        </tr>
        {/* Plan layer 2 */}
        <tr>
         <td>Home Instructions:</td>
         <td colSpan={2}><input type="text" placeholder="Home Instructions..." style={{ width: "100%" }} /></td>
         <td>Advice:</td>
         <td colSpan={2}><input type="text" placeholder="Advice..." style={{ width: "100%" }} /></td>
        </tr>
        {/* Plan layer 3 */}
        <tr>
         <td>F-f (Date):</td>
         <td colSpan={2}><input type="text" placeholder="F-f (Date)..." style={{ width: "100%" }} /></td>
         <td>Medical Certificate issued:</td>
         <td colSpan={2}><input type="text" placeholder="Medical Certificate issued..." style={{ width: "100%" }} /></td>
        </tr>
        {/* Plan layer 4 */}
        <tr>
         <td>Referred:</td>
         <td colSpan={2}><input type="text" placeholder="Referred..." style={{ width: "100%" }} /></td>
        </tr>
        </table><br/><br/>

        {/* Recommendation */}
        <h2>Recommendation</h2>
        {/* Recommendation layer 1 */}
        <div className="checkbox-recommend-parent">
        <div className="border-test">
        <div className="checkbox-recommend-child">
         <input type="checkbox"/>
         <h3>Fit to enroll</h3>
         </div>
         <div className="checkbox-recommend-child">
         <input type="checkbox"/>
         <h3>Fit to work</h3>
         </div>
         <div className="checkbox-recommend-child">
         <input type="checkbox"/>
         <h3>Fit to participate sports</h3>
         </div>
         </div>
         {/* Recommendation layer 2 */}
         <div className="border-test">
        <div className="checkbox-recommend-child">
         <input type="checkbox"/>
         <h3>Fit to enroll but require further evaluation</h3>
         </div>
         <div className="checkbox-recommend-child">
         <input type="checkbox"/>
         <h3>Fit to work but require further evaluation</h3>
         </div>
         <div className="checkbox-recommend-child">
         <input type="checkbox"/>
         <h3>Fit to participate sports but require further evaluation</h3>
         </div>
         </div>
        </div>
        <br/>
        <br/>

        {/* last */}
        {/* last layer 1 */}
        <div className="last-container-parent">
        <div className="last-container-child">
        <input type="text" placeholder="Physician name..."/>
        <input type="text" placeholder="License number..."/>
        <input type="date" placeholder="Date"/>
        </div>
        <div className="last-container-child">
        <Link to="/"><button>Cancel</button></Link>
        <button type="submit">Submit</button>
        </div>
        </div>

      </form>
        </div>
      </div>

      {/* Modal */}
            <Modal4 isOpen={modal4} onClose={handleModal4Close} />
    </>
  )
}

export default MedicalRecords
