/****** react library ******/
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
/****** react icons ******/
import { FaSearch } from "react-icons/fa";
/****** firebase ******/
import { db } from "../firebase-config"
import {collection, getDocs, orderBy, query} from 'firebase/firestore'

const LogbookRecord = () => {
//hooks
  const [logbook, setLogbook] = useState([])
  const logbookCollections = collection(db, "logbook")
  const [filteredLists, setFilteredLists] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

//logics
  //get
  useEffect(() => {
    const getLogbook = async () => {
      const q = query(logbookCollections, orderBy("createdAt", "desc"))
      const data = await getDocs(q)
      const logbookLists = data.docs.map((doc) => ({ ...doc.data(), id: doc.id}))
      setLogbook(logbookLists)
      setFilteredLists(logbookLists)
    }
    getLogbook()
  }, [])

//search
const handleSearch = (event) => {
  const query = event.target.value.toLowerCase();
  setSearchQuery(query);
  setFilteredLists(
    logbook.filter((logbooks) => 
      `${logbooks.fullname}`.toLowerCase().includes(query)
    )
  );
};

  return (
    <>
    <div className="containertable">
    <form>
      <div className="form first">
        <div className="details personal">
          <div className="unique-table-layout">
            <div className="header">
              <div className="search-bar">
              <FaSearch className="icon"/>
                <input type="text" placeholder="Search..." onChange={handleSearch} value={searchQuery}/>
              </div>
              <Link to="/addlog"><button className="add-record-btn">Add Record</button></Link>
            </div>

            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Complaint</th>
                    <th>Course/Yr/Sec</th>
                    <th>Time Started</th>
                    <th>Time Finished</th>
                    <th>Medication/Treatment</th>
                    <th>Remarks</th>
                  </tr>
                </thead>
                <tbody>
                {filteredLists.length > 0 ? (
                filteredLists.map((logbooks) => (
                  <tr key={logbooks.id}>
                    <td>{logbooks.date}</td>
                    <td>{logbooks.fullname}</td>
                    <td>{logbooks.complaint}</td>
                    <td>{logbooks.courseYear}</td>
                    <td>{logbooks.timestart}</td>
                    <td>{logbooks.timefinish}</td>
                    <td>{logbooks.medictreat}</td>
                    <td>{logbooks.remarks}</td>
                  </tr>
                ))) : (
                  <tr>
                    <td colSpan="6" style={{ textAlign: "center" }}>
                          No existing record...
                    </td>
                  </tr>
                )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
    </>
  )
}

export default LogbookRecord
