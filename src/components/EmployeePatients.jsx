/****** react library ******/
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
/****** react icons ******/
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FiEdit, FiTrash } from "react-icons/fi";
import { MdOutlineCalendarMonth } from "react-icons/md";
/****** component ******/
import Modal1 from './common/Modal1'
import Modal2 from "./common/Modal2";
import Modal3 from "./common/Modal3";
import useModalhooks from "../hooks/Modalhooks";
import UpdateEmployee from "./employee side/updateEmployee";
/****** firebase ******/
import { db } from '../firebase-config'
import {collection, orderBy, query, doc, deleteDoc, onSnapshot} from 'firebase/firestore'

const EmployeePatients = () => {
//hooks
  const [employees, setEmployee] = useState([]) 
  const employeeCollections = collection(db, "employee")
  const [filteredLists, setFilteredLists] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPatientId, setSelectedPatientId] = useState(null)
  const [patientToDelete, setPatientToDelete] = useState(null);


//logics
  const {modal1,
    modal2,
    modal3,
    handleModal1Open,
    handleModal1Close,
    handleModal2Open,
    handleModal2Close,
    handleModal3Close
  } = useModalhooks()

  //get
useEffect(() => {
  const unsubscribe = onSnapshot(
    query(employeeCollections, orderBy("createdAt", "desc")),
    (snapshot) => {
      const patientLists = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setEmployee(patientLists);
      setFilteredLists(patientLists);
    }
  );

  // Cleanup listener on component unmount
  return () => unsubscribe();
}, []);

//search
const handleSearch = (event) => {
  const query = event.target.value.toLowerCase();
  setSearchQuery(query);
  setFilteredLists(
    employees.filter((employ) => 
      `${employ.fullname}`.toLowerCase().includes(query)
    )
  );
};

const handleUpdateEmployee = (updatedTodo) => {
  setEmployee((prevEmploy) =>
    prevEmploy.map((employ) =>
    employ.id === updatedTodo.id ? updatedTodo : employ
    )
  )
}

//delete
const deletePatient = async () => {
  try {
    if (patientToDelete) {
      const patientDoc = doc(db, "employee", patientToDelete);
      await deleteDoc(patientDoc);
      setEmployee((prevLists) => prevLists.filter((list) => list.id !== patientToDelete));
      setPatientToDelete(null);
      handleModal2Close();
    }
  } catch (error) {
    console.error("Error deleting patient", error);
  }
};


  return (
    <>
    <div className="patient">
    {/* layer 1 */}
      <div className="patient-layer1">
        <div className="number-of-patients">
          <h3>Number of Patients</h3>
          <p>{employees.length}</p>
        </div>
        <div className="gender-count">
          <div className="gender-count-male">
            <h3>Male</h3>
            <p>{employees.filter(list => list.sex === "Male").length}</p>
          </div>
          <div className="gender-count-female">
            <h3>Female</h3>
            <p>{employees.filter(list => list.sex === "Female").length}</p>
          </div>
        </div>
      </div><br/>

      {/* layer 2 */}
      <div className="patient-layer2">
        <div className="patient-header">
        <div className="search-bar">
        <FaSearch className="icon"/>
          <input type="text" onChange={handleSearch} value={searchQuery} placeholder="Search...."/>
          </div>
          <div className="add-patient">
          <Link to='/employee_cert'><button>Add employee patient</button></Link>
          </div>
        </div><br/>

        {/* patient tables */}
        <div className="patient-tables">
        <table>
        <tr>
          <th>Name</th>
          <th>Gender</th>
          <th>Age</th>
          <th>Proposed Position</th> 
          <th>Status</th> 
          <th>Action</th> 
        </tr>
        {filteredLists.length > 0 ? (
          filteredLists.map((employ) => (
            <tr key={employ.id}>
              <td>{employ.fullname}</td>
              <td>{employ.sex}</td>
              <td>{employ.age}</td>
              <td>{employ.position}</td>
              <td>{employ.status}</td>
              <td>
                <button onClick={() => setSelectedPatientId(employ)}> <CgProfile/> </button>
                <Link to={`/annual/${employ.id}`}> <button> <MdOutlineCalendarMonth/> </button> </Link>
                <button  onClick={handleModal1Open}> <FiEdit/> </button>
                <button onClick={() => { setPatientToDelete(employ.id); handleModal2Open(); }}> 
  <FiTrash /> 
</button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
              <td colSpan="6" style={{ textAlign: "center" }}>
                No existing record...
              </td>
            </tr>
        )}
            
      </table>
        </div>
      </div>
    </div>

     {/* Modal */}
          <Modal1 isOpen={modal1} onClose={handleModal1Close} />
          <Modal2 isOpen={modal2} onClose={() => {setPatientToDelete(null); handleModal2Close()}} onDelete={deletePatient}/>
          <Modal3 isOpen={modal3} onClose={handleModal3Close}/>
    
          {selectedPatientId && (
            <UpdateEmployee
              employ={selectedPatientId} // Ipapasa ang buong employee object
              onClose={() => setSelectedPatientId(null)} // Isasara kapag tapos na
              onUpdate={handleUpdateEmployee} // Update handler
            />
          )}
    </>
  )
}

export default EmployeePatients
