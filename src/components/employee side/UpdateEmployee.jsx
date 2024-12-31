/****** react library ******/
import { useState } from "react"
import PropTypes from "prop-types"
/****** firebase ******/
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase-config"

const UpdateEmployee = ({ employ, onClose, onUpdate }) => {
//hooks  
const [bloodTest, setBloodTest] = useState(employ.bloodTest)
const [urinalysis, setUranlysis] = useState(employ.urinalysis)
const [chestX_ray, setChestX_ray] = useState(employ.chestX_ray)
const [drugTest, setDrugTest] = useState(employ.drugTest)
const [psycho_test, setPsycho_test] = useState(employ.psycho_test)
const [neuro_psy, setNeuro_psy] = useState(employ.neuro_psy)
const [fullname, setFullname] = useState(employ.fullname)
const [address, setAddress] = useState(employ.address)
const [agency_add, setAgency_add] = useState(employ.agency_add)
const [age, setAge] = useState(employ.age)
const [sex, setSex] = useState(employ.sex)
const [status, setStatus] = useState(employ.status)
const [position, setPosition] = useState(employ.position)
const [govern_phys, setGovern_phys] = useState(employ.govern_phys)
const [appointee, setAppointee] = useState(employ.appointee)
const [liscense, setLiscense] = useState(employ.liscense)
const [height, setHeight] = useState(employ.height)
const [weight, setWeight] = useState(employ.weight)
const [blood_type, setBlood_type] = useState(employ.blood_type)
const [designation, setDesignation] = useState(employ.designation)
const [date_examined, setDate_examined] = useState(employ.date_examined)
const [fit, setFit] = useState(employ.fit)
const [unfit, setUnfit] = useState(employ.unfit)

//logics 
const handleUpdate = async (event) => {
    event.preventDefault();

    const updateData = {
        bloodTest,
        urinalysis,
        chestX_ray,
        drugTest,
        psycho_test,
        neuro_psy,
        fullname,
        address,
        agency_add,
        age,
        sex,
        status,
        position,
        govern_phys,
        appointee,
        liscense,
        height,
        weight,
        blood_type,
        designation,
        date_examined,
        fit,
        unfit,
    }
    const listDoc = doc(db, "employee", employ.id)
    await updateDoc(listDoc, updateData)
    onUpdate({ ...employ, ...updateData })
    onClose()
    }

  return (
    <>
    <div className="update-overlay" onClick={onClose}>
    <div className="update-records">
    <div className="employee-cert">
    <div className="employee-cert-container" onClick={(e) => e.stopPropagation()}>
    
    <form onSubmit={handleUpdate}>
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
              <label><input type="checkbox" value={bloodTest} onChange={(e) => setBloodTest(e.target.checked)}/> Blood Test</label>
              <label><input type="checkbox" value={urinalysis} onChange={(e) => setUranlysis(e.target.checked)}/> Urinalysis</label>
              <label><input type="checkbox" value={chestX_ray} onChange={(e) => setChestX_ray(e.target.checked)}/> Chest X-Ray</label>
              <label><input type="checkbox" value={drugTest} onChange={(e) => setDrugTest(e.target.checked)}/> Drug Test</label>
              <label><input type="checkbox" value={psycho_test} onChange={(e) => setPsycho_test(e.target.checked)}/> Psychological Test</label>
              <label><input type="checkbox" value={neuro_psy} onChange={(e) => setNeuro_psy(e.target.checked)}/> Neuro-Psychiatric examination (if applicable)</label>
            </div>
          </section>

          <div className="spacer-50"></div> 

          <section className="appointee-details">
            <h3>FOR THE PROPOSED APPOINTEE</h3>
            
              <div className="form-row dualfield">
                  <div className="dosfield">
                    <label>NAME (Last Name, First Name, Name Extension (if any) and Middle Name)</label>
                    <input type="text" placeholder=" " value={fullname} onChange={(e) => setFullname(e.target.value)} required />
                  </div>
                  <div className="dosfield">
                    <label>ADDRESS</label>
                    <input type="text" placeholder=" " value={address} onChange={(e) => setAddress(e.target.value)} required />
                  </div>
                </div>
        
              <div className="largefield">
                <label>AGENCY / ADDRESS</label>
                <input type="text" id="name" value={agency_add} onChange={(e) => setAgency_add(e.target.value)} placeholder=" " required/>
              </div>
            
            <div className="form-row dualfield">
              <div className="smallfield">
                <label>AGE</label>
                <input type="text" id="name" value={age} onChange={(e) => setAge(e.target.value)} placeholder=" " required/>
              </div>
              <div className="smallfield">
                  <label>Sex:</label>
                  <select value={sex} onChange={(e) => setSex(e.target.value)} required>
                    <option value="" disabled selected>Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
              </div>
              <div className="smallfield">
                  <label>Civil Status:</label>
                  <select value={status} onChange={(e) => setStatus(e.target.value)} required>
                    <option value="" disabled selected>Select Civil Status</option>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                    <option value="Divorced">Divorced</option>
                    <option value="Widowed">Widowed</option>
                  </select>
                </div>
              <div className="largefield">
                <label>PROPOSED POSITION</label>
                <input type="text" id="name" value={position} onChange={(e) => setPosition(e.target.value)} placeholder=" " required/>
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
                <input type="checkbox" name="fit" value={fit} onChange={(e) => setFit(e.target.value)} /> FIT /
              </label>
              <label className="checkbox-inline">
                <input type="checkbox" name="unfit" value={unfit} onChange={(e) => setUnfit(e.target.value)} /> UNFIT
              </label>
              for employment.
            </p>
          </div>

          <div className="form-row dualfield">
            <div className="twofield">
              <label>SIGNATURE over PRINTED NAME OF LICENSED GOVERNMENT PHYSICIAN:</label>
              <input type="text" placeholder=" " value={govern_phys} onChange={(e) => setGovern_phys(e.target.value)} required />
            </div>
            <div className="twofield">
              <label>OTHER INFORMATION ABOUT THE PROPOSED APPOINTEE</label>
              <textarea value={appointee} onChange={(e) => setAppointee(e.target.value)}></textarea>
            </div>
          </div>

          <div className="form-row dualfield">
            <div className="largefield">
              <label>License No.</label>
              <input type="text" id="name" placeholder=" " value={liscense} onChange={(e) => setLiscense(e.target.value)} required/>
            </div>
            <div className="smallfield">
              <label>Height</label>
              <input type="text" id="name" placeholder=" " value={height} onChange={(e) => setHeight(e.target.value)} required/>
            </div>
            <div className="smallfield">
              <label>Weight</label>
              <input type="text" id="name" placeholder=" " value={weight} onChange={(e) => setWeight(e.target.value)} required/>
            </div>
            <div className="largefield">
              <label>Blood Type</label>
              <input type="text" id="name" placeholder=" " value={blood_type} onChange={(e) => setBlood_type(e.target.value)} required/>
            </div>
          </div>

          <div className="form-row dualfield">
            <div className="twofield">
              <label>Official Designation</label>
              <input type="text" placeholder=" " value={designation} onChange={(e) => setDesignation(e.target.value)} required />
            </div>
            <div className="form-row">
              <div className="twofield specific-twofield">
                  <div className="datefield">
                    <label>Date Examined</label>
                    <input type="date" value={date_examined} onChange={(e) => setDate_examined(e.target.value)} required />
                  </div>
              </div>
            </div>
        </div>

        <div className="spacer-50"></div> 

        <div className="form-footer">
          <button type="button" className="cancel" onClick={onClose}>Cancel</button>
          <button type="submit" className="submit">Submit</button>
        </div>

        </div>
        </div> 

    </form>
  </div>
  </div>
  </div>
 </div>
    </>
  )
}

UpdateEmployee.propTypes = {
  employ: PropTypes.shape({
    bloodTest: PropTypes.string.isRequired,
    urinalysis: PropTypes.string.isRequired,
    chestX_ray: PropTypes.string.isRequired,
    drugTest: PropTypes.string.isRequired,
    psycho_test: PropTypes.string.isRequired,
    neuro_psy: PropTypes.string.isRequired,
    fullname: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    agency_add: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    sex: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    govern_phys: PropTypes.string.isRequired,
    appointee: PropTypes.string.isRequired,
    liscense: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    weight: PropTypes.string.isRequired,
    blood_type: PropTypes.string.isRequired,
    designation: PropTypes.string.isRequired,
    date_examined: PropTypes.string.isRequired,
    fit: PropTypes.string.isRequired,
    unfit: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default UpdateEmployee
