/****** react library ******/
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
/****** react icons ******/
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FiEdit, FiTrash } from "react-icons/fi";
/****** component ******/
import Modal1 from './common/Modal1'
import Modal2 from "./common/Modal2";
import Modal3 from "./common/Modal3";
import useModalhooks from "../hooks/Modalhooks";
/****** firebase ******/
import { db } from '../firebase-config'
import {collection, getDocs, orderBy, query, doc, deleteDoc, getDoc} from 'firebase/firestore'


const Patients = () => {
//Hooks
  const [lists, setLists] = useState([])
  const listsCollections = collection(db, "lists")

//logics
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

//get
query
  useEffect(() => {
    const getPatientLists = async () => {
      const q = query(listsCollections, orderBy("createdAt", "desc"))
      const data = await getDocs(q)
      setLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getPatientLists()
  }, [])
//no query
  // useEffect(() => {
  //   const getPatientLists = async () => {
  //     try {
  //       const data = await getDocs(listsCollections);
  //       console.log("Fetched Data (No Query):", data.docs.map(doc => doc.data()));
  //       setLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //     } catch (error) {
  //       console.error("Error fetching patient lists:", error.message);
  //     }
  //   };
  //   getPatientLists();
  // }, []);
  

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
            <Link to='/medical_record'><button>Add student patient</button></Link>
            <button onClick={handleModal3Open}>Add employee patient</button>
            </div>
          </div><br/>

          {/* patient tables */}
          <div className="patient-tables">
          <table>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Medical History</th> 
            <th>Allergies</th> 
            <th>Action</th> 
          </tr>
          {lists && lists.map((list) => (
            <tr key={list.id}>
            <td>{list.given_name} {list.middle_name} {list.surname}</td>
            <td>{list.sex}</td>
            <td>{list.age}</td>
            <td>{list.known_illness}</td>
            <td>{list.allergy}</td>
            <td>
              <button> <CgProfile/> </button>
              <button onClick={handleModal1Open}> <FiEdit/> </button>
              <button onClick={handleModal2Open}> <FiTrash/> </button>
            </td>
          </tr>
          ))}
          
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
