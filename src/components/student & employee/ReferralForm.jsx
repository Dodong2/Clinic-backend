import { Link } from "react-router-dom"
import { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";


const ReferralForm = () => {
  const [selectedCourse, setSelectedCourse] = useState("default");

  const handleSubmit = (e) => {
    e.preventDefault(); // Para hindi mag-refresh ang page
    console.log("Selected Course:", selectedCourse);
  };

  return (
    <>
    <div className="referral">
    <Link to="/dashboard"><button className="back-btn"> <FaArrowLeftLong/> </button></Link><br/>
    <div className="referral-container">
    <header>Referral Form</header>

    <form onSubmit={handleSubmit}>
      <div className="form first">
        <div className="details personal">
          <div className="endfields">
            <div className="datefield">
              <label>Date:</label>
              <input type="date" required />
            </div>
          </div>
         
          <div className="largefield">
            <label htmlFor="tofield">To:</label>
            <textarea id="tofield" rows="4" placeholder=" " required></textarea>
          </div>

          <div className="spacer-20"></div>

          <table className="form-table">
            <tr>
              <td className="namefield">
                <label htmlFor="name">NAME:</label>
                <input type="text" id="name" placeholder="Full Name" required />
              </td>
              <td className="agefield">
                <label htmlFor="age">AGE:</label>
                <input type="number" id="age" placeholder="Age" required/>
              </td>
              <td className="genderfield">
                <label htmlFor="gender">GENDER:</label>
                <select id="gender" value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                required>
                  <option value="default" disabled>Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </td>
            </tr>
          </table>

          <div className="spacer-50"></div> 

          <div className="largefield">
            <label htmlFor="comment">HISTORY PRESENT ILLNESS:</label>
            <textarea id="comment" rows="4" placeholder=" " required></textarea>
          </div>

          <div className="spacer-20"></div> 

          <div className="largefield">
            <label htmlFor="comment">PERTINENT PHYSICAL EXAMINATION FINDINGS:</label>
            <textarea id="comment" rows="4" placeholder=" " required></textarea>
          </div>

          <div className="spacer-20"></div> 

          <div className="largefield">
            <label htmlFor="comment">IMPRESSION:</label>
            <textarea id="comment" rows="4" placeholder=" " required></textarea>
          </div>

          <div className="spacer-20"></div> 

          <div className="largefield">
            <label htmlFor="comment">REASON FOR REFERRAL:</label>
            <textarea id="comment" rows="4" placeholder=" " required></textarea>
          </div>

          <div className="spacer-20"></div> 

          <label>THANK YOU</label>

          <div className="spacer-50"></div> 

          <div className="mediumfield">
            <input type="text" placeholder=" " required/>
            <label>PHYSICIAN:</label>
          </div>
    
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

export default ReferralForm
