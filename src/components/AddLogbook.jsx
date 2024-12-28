import { Link } from "react-router-dom"
import { FaArrowLeftLong } from "react-icons/fa6";

const AddLogbook = () => {
  return (
    <>
    <div className="annual">
    <Link to="/"><button className="back-btn"> <FaArrowLeftLong/> </button></Link><br/>
    <div className="annual-container">
    <header>Health Examination Record</header>

    <form action="#">
      <div className="form first">
        <div className="details personal">
          <div className="endfields">
            <div className="datefield">
              <label>Date:</label>
              <input type="date" required />
            </div>
          </div>
          <div className="mediumfield">
            <label>Name:</label>
            <input type="text" placeholder="Full Name" required />
          </div>
          <div className="largefield">
            <label>Complaint:</label>
            <input type="text" placeholder="Complaint" required />
          </div>
          <div className="smallfield">
            <label>Course Yr/Section:</label>
            <input type="text" placeholder="Course Yr/Section" required />
          

            <div className="spacer-50"></div>

        <span>TRANSACTION</span>

        <div className="spacer-20"></div> 

        <div className="form-row dualfield">
            <div className="twofield">
                <label>Time Started:</label>
                <input type="time" />
            </div>
            <div className="twofield">
                <label>Time Finished:</label>
                <input type="time" />
            </div>
        </div>

      <div className="spacer-50">
      </div> 

      <div className="largefield">
        <label>Medication treatment:</label>
        <input type="text" placeholder="Medication treatment" required />
      </div>
      <div className="mediumfield">
        <label>Signature:</label>
        <input type="text" placeholder="Signature" required />
      </div>
      <div className="mediumfield">
        <label>Remarks:</label>
        <input type="text" placeholder="Remarks" required />
      </div>

      
      <div className="spacer-20">
      </div> 
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

export default AddLogbook
