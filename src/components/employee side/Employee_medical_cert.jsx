/****** react library ******/
import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
/****** Icons ******/
import { FaArrowLeftLong } from "react-icons/fa6";
/****** database ******/
import { db } from "../../firebase-config"
import {collection, addDoc, serverTimestamp} from 'firebase/firestore'

const Employee_medical_cert = () => {
//hooks  
  const [bloodTest, setBloodTest] = useState(true)
  const [urinalysis, setUranlysis] = useState(true)
  const [chestX_ray, setChestX_ray] = useState(true)
  const [drugTest, setDrugTest] = useState(true)
  const [psycho_test, setPsycho_test] = useState(true)
  const [neuro_psy, setNeuro_psy] = useState(true)
  const [fullname, setFullname] = useState('')
  const [address, setAddress] = useState('')
  const [agency_add, setAgency_add] = useState('')
  const [age, setAge] = useState('')
  const [sex, setSex] = useState('')
  const [status, setStatus] = useState('')
  const [position, setPosition] = useState('')
  const [govern_phys, setGovern_phys] = useState('')
  const [appointee, setAppointee] = useState('')
  const [liscense, setLiscense] = useState('')
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [blood_type, setBlood_type] = useState('')
  const [designation, setDesignation] = useState('')
  const [date_examined, setDate_examined] = useState('')
  const [fit, setFit] = useState('')
  const [unfit, setUnfit] = useState('')
  const employCollections = collection(db, "employee")
  const navigate = useNavigate()

//logics
  const Addemploy = async (event) => {
    event.preventDefault()
    try {
      await addDoc(employCollections, { 
        bloodTest: bloodTest,
        urinalysis: urinalysis,
        chestX_ray: chestX_ray,
        drugTest: drugTest,
        psycho_test: psycho_test,
        neuro_psy: neuro_psy,
        fullname: fullname,
        address: address,
        agency_add: agency_add,
        age: age,
        sex: sex,
        status: status,
        position: position,
        govern_phys: govern_phys,
        appointee: appointee,
        liscense: liscense,
        height: height,
        weight: weight,
        blood_type: blood_type,
        designation: designation,
        date_examined: date_examined,
        fit: fit,
        unfit: unfit,
        createdAt: serverTimestamp()
      })
      alert("Task added successfully!");
      navigate("/")
    } catch(error) {
      console.error("Error adding task:", error);
        alert("Error adding task, please try again!");
    }
  }


  return (
    <>
    <div className="employee-cert">
    <Link to="/"><button className="back-btn"> <FaArrowLeftLong/> </button></Link><br/>
    <div className="employee-cert-container">
    
      <div className="form first">
        <div className="details personal">
        <form onSubmit={Addemploy}>
          
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
              <label><input type="checkbox" onChange={(event) => setBloodTest(event.target.checked)}/> Blood Test</label>
              <label><input type="checkbox" onChange={(event) => setUranlysis(event.target.checked)}/> Urinalysis</label>
              <label><input type="checkbox" onChange={(event) => setChestX_ray(event.target.checked)}/> Chest X-Ray</label>
              <label><input type="checkbox" onChange={(event) => setDrugTest(event.target.checked)}/> Drug Test</label>
              <label><input type="checkbox" onChange={(event) => setPsycho_test(event.target.checked)}/> Psychological Test</label>
              <label><input type="checkbox" onChange={(event) => setNeuro_psy(event.target.checked)}/> Neuro-Psychiatric examination (if applicable)</label>
            </div>
          </section>

          <div className="spacer-50"></div> 

          <section className="appointee-details">
            <h3>FOR THE PROPOSED APPOINTEE</h3>
            
              <div className="form-row dualfield">
                  <div className="dosfield">
                    <label>NAME (Last Name, First Name, Name Extension (if any) and Middle Name)</label>
                    <input type="text" onChange={(event) => setFullname(event.target.value)} placeholder=" " required />
                  </div>
                  <div className="dosfield">
                    <label>ADDRESS</label>
                    <input type="text" onChange={(event) => setAddress(event.target.value)} placeholder=" " required />
                  </div>
                </div>
        
              <div className="largefield">
                <label>AGENCY / ADDRESS</label>
                <input type="text" id="name" onChange={(event) => setAgency_add(event.target.value)} placeholder=" " required/>
              </div>
            
            <div className="form-row dualfield">
              <div className="smallfield">
                <label>AGE</label>
                <input type="text" id="name" onChange={(event) => setAge(event.target.value)} placeholder=" " required/>
              </div>
              <div className="smallfield">
                  <label>Sex:</label>
                  <select value={sex} onChange={(event) => setSex(event.target.value)} required>
                    <option value="" disabled>Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
              </div>
              <div className="smallfield">
                  <label>Civil Status:</label>
                  <select value={status} onChange={(event) => setStatus(event.target.value)} required>
                    <option value="" disabled>Select Civil Status</option>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                    <option value="Divorced">Divorced</option>
                    <option value="Widowed">Widowed</option>
                  </select>
                </div>
              <div className="largefield">
                <label>PROPOSED POSITION</label>
                <input type="text" id="name" onChange={(event) => setPosition(event.target.value)} placeholder=" " required/>
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
                <input type="checkbox" name="fit" onChange={(event) => setFit(event.target.checked)} /> FIT /
              </label>
              <label className="checkbox-inline">
                <input type="checkbox" name="unfit" onChange={(event) => setUnfit(event.target.checked)} /> UNFIT
              </label>
              for employment.
            </p>
          </div>

          <div className="form-row dualfield">
            <div className="twofield">
              <label>SIGNATURE over PRINTED NAME OF LICENSED GOVERNMENT PHYSICIAN:</label>
              <input type="text" onChange={(event) => setGovern_phys(event.target.value)} placeholder=" " required />
            </div>
            <div className="twofield">
              <label>OTHER INFORMATION ABOUT THE PROPOSED APPOINTEE</label>
              <textarea onChange={(event) => setAppointee(event.target.value)}></textarea>
            </div>
          </div>

          <div className="form-row dualfield">
            <div className="largefield">
              <label>License No.</label>
              <input type="text" id="name" onChange={(event) => setLiscense(event.target.value)} placeholder=" " required/>
            </div>
            <div className="smallfield">
              <label>Height</label>
              <input type="text" id="name" onChange={(event) => setHeight(event.target.value)} placeholder=" " required/>
            </div>
            <div className="smallfield">
              <label>Weight</label>
              <input type="text" id="name" onChange={(event) => setWeight(event.target.value)} placeholder=" " required/>
            </div>
            <div className="largefield">
              <label>Blood Type</label>
              <input type="text" id="name" onChange={(event) => setBlood_type(event.target.value)} placeholder=" " required/>
            </div>
          </div>

          <div className="form-row dualfield">
            <div className="twofield">
              <label>Official Designation</label>
              <input type="text" onChange={(event) => setDesignation(event.target.value)} placeholder=" " required />
            </div>
            <div className="form-row">
              <div className="twofield specific-twofield">
                  <div className="datefield">
                    <label>Date Examined</label>
                    <input type="date" onChange={(event) => setDate_examined(event.target.value)} required />
                  </div>
              </div>
            </div>
        </div>

        <div className="spacer-50"></div> 

        <div className="form-footer">
          <button type="button" className="cancel">Cancel</button>
          <button type="submit" className="submit">Submit</button>
        </div>
        </form>
        </div>
        </div> 

  </div>
  </div>
    </>
  )
}

export default Employee_medical_cert
