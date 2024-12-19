/****** react icons ******/
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FiEdit, FiTrash } from "react-icons/fi";
/****** component ******/
import Modal1 from './common/Modal1'
import Modal2 from "./common/Modal2";
import Modal3 from "./common/Modal3";
import useModalhooks from "../hooks/Modalhooks";

const Patients = () => {
  const {modal1,
    modal2,
    modal3,
    handleModal1Open,
    handleModal1Close,
    handleModal2Open,
    handleModal2Close,
    handleModal3Open,
    handleModal3Close
  } = useModalhooks()


  return (
    <>
      <div className="patient">
      {/* layer 1 */}
        <div className="patient-layer1">
          <div className="number-of-patients">
            <h3>Number of Patients</h3>
            <p>0</p>
          </div>
          <div className="gender-count">
            <div className="gender-count-male">
              <h3>Male</h3>
              <p>0</p>
            </div>
            <div className="gender-count-female">
              <h3>Female</h3>
              <p>0</p>
            </div>
          </div>
        </div><br/>

        {/* layer 2 */}
        <div className="patient-layer2">
          <div className="patient-header">
          <div className="search-bar">
          <FaSearch className="icon"/>
            <input type="text" placeholder="Search...."/>
            </div>
            <div className="add-patient">
            <button>Add student patient</button>
            <button onClick={handleModal3Open}>Add employee patient</button>
            </div>
          </div><br/>

          {/* patient tables */}
          <div className="patient-tables">
          <table>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Blood Type</th>
            <th>Medical History</th> 
            <th>Allergies</th> 
            <th>Action</th> 
          </tr>
          <tr>
            <td>1</td>
            <td>Alison Rrysaldi C Dizon</td>
            <td>Male</td>
            <td>20</td>
            <td>O</td>
            <td>Pneunomia</td>
            <td>Shrimp</td>
            <td>
              <button> <CgProfile/> </button>
              <button onClick={handleModal1Open}> <FiEdit/> </button>
              <button onClick={handleModal2Open}> <FiTrash/> </button>
            </td>
          </tr>
        </table>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal1 isOpen={modal1} onClose={handleModal1Close} />
      <Modal2 isOpen={modal2} onClose={handleModal2Close}/>
      <Modal3 isOpen={modal3} onClose={handleModal3Close}/>
    </>
  )
}

export default Patients
