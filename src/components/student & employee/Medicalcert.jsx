import { Link } from "react-router-dom"
import { FaArrowLeftLong } from "react-icons/fa6";


const Medicalcert = () => {
  return (
    <>
    <div className="medical-cert">
    <Link to="/dashboard"><button className="back-btn"> <FaArrowLeftLong/> </button></Link><br/>
    <div className="medical-cert-container">
    <header>Medical Certificate</header>
  
    <form>
      <div className="form first">
        <div className="details personal">
          <p className="indent">
            This is to certify that 
            <input type="text" className="certlargefield" placeholder="Full Name" />
            , a 
            <input type="text" className="certsmallfield" placeholder="Age" />
            year old F/M, has been seen and examined on 
            <input type="date" className="certmediumfield" /> 
            at the medical clinic.
          </p>
          
          <p>
            Pertinent findings:
            <input type="text" className="nomarginfield" placeholder=" " />
          </p>
          
          <p>
            Impression on examination:
            <input type="text" className="nomarginfield" placeholder=" " />
          </p>
  
          <div className="spacer-20"></div>
  
          <p>
            Note:
            <input type="text" className="nomarginfield" placeholder=" " />
          </p>
  
          <div className="spacer-50"></div>
  
          <p>
            License No.:
            <input type="text" className="nomarginfield" placeholder=" " />
          </p>
          
          <p>
            Date Issued:
            <input type="date" className="nomargindatefield" placeholder=" " />
          </p>
  
          <div className="spacer-50"></div>
        </div>
      </div>
    </form>
  </div>
  </div>
  
   
    </>
  )
}

export default Medicalcert
