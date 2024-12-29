/****** react library ******/
import { useState } from "react"
import { Link } from "react-router-dom"
/****** Icons ******/
import { FaArrowLeftLong } from "react-icons/fa6";
/****** components ******/
import Modal5 from "./common/Modal5";
import useModalhooks from "../hooks/Modalhooks";
/****** database ******/
import { db } from "../firebase-config"
import {collection, addDoc, serverTimestamp} from 'firebase/firestore'
/****** hooks ******/
import { handleTimeChange } from '../hooks/FormatTime'


const AddLogbook = () => {
//hooks
  const [fullname, setFullname] = useState('')
  const [date, setDate] = useState('')
  const [complaint, setComplaint] = useState('')
  const [courseYear, setCourseYear] = useState('') 
  const [timestart, setTimestart] = useState('') 
  const [timefinish, setTimefinish] = useState('') 
  const [medictreat, setMedictreat] = useState('') 
  const [remarks, setRemarks] = useState('') 
  const logbookCollections = collection(db, 'logbook')

  const {
    modal5,
    handleModal5Open,
    handleModal5Close
  } = useModalhooks()

//logics
  const addLogbook = async (event) => {
    event.preventDefault()
    try {
      await addDoc(logbookCollections, {
        fullname: fullname,
        date: date,
        complaint: complaint,
        courseYear: courseYear,
        timestart: timestart,
        timefinish: timefinish,
        medictreat: medictreat,
        remarks: remarks,
        createdAt: serverTimestamp()
      })
      handleModal5Open(true)
    } catch(error) {
      console.error("Error adding task:", error);
      alert("Error adding task, please try again!");
    }
  }

  return (
    <>
    <div className="annual">
    <Link to="/"><button className="back-btn"> <FaArrowLeftLong/> </button></Link><br/>
    <div className="annual-container">
    <header>Health Examination Record</header>

    <form onSubmit={addLogbook}>
      <div className="form first">
        <div className="details personal">
          <div className="endfields">
            <div className="datefield">
              <label>Date:</label>
              <input type="date" onChange={(event) => setDate(event.target.value)} required />
            </div>
          </div>
          <div className="mediumfield">
            <label>Name:</label>
            <input type="text" placeholder="Full Name" onChange={(event) => setFullname(event.target.value)} required />
          </div>
          <div className="largefield">
            <label>Complaint:</label>
            <input type="text" placeholder="Complaint" onChange={(event) => setComplaint(event.target.value)} required />
          </div>
          <div className="smallfield">
            <label>Course Yr/Section:</label>
            <input type="text" placeholder="Course Yr/Section" onChange={(event) => setCourseYear(event.target.value)} required />
          

            <div className="spacer-50"></div>

        <span>TRANSACTION</span>

        <div className="spacer-20"></div> 

        <div className="form-row dualfield">
            <div className="twofield">
                <label>Time Started:</label>
                <input type="time" onChange={(event) => handleTimeChange(event, setTimestart)} />
            </div>
            <div className="twofield">
                <label>Time Finished:</label>
                <input type="time" onChange={(event) => handleTimeChange(event, setTimefinish)} />
            </div>
        </div>

      <div className="spacer-50">
      </div> 

      <div className="largefield">
        <label>Medication treatment:</label>
        <input type="text" placeholder="Medication treatment" onChange={(event) => setMedictreat(event.target.value)} required />
      </div>
      {/*<div className="mediumfield">
        <label>Signature:</label>
        <input type="text" placeholder="Signature" required />
      </div>*/}
      <div className="mediumfield">
        <label>Remarks:</label>
        <input type="text" placeholder="Remarks" onChange={(event) => setRemarks(event.target.value)} required />
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

  {/* Modal */}
              <Modal5 isOpen={modal5} onClose={handleModal5Close} redirectTo='/logbook' />
    </>
  )
}

export default AddLogbook
