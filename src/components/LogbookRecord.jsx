import { Link } from "react-router-dom"

const LogbookRecord = () => {
  return (
    <>
    <div className="containertable">
    <form>
      <div className="form first">
        <div className="details personal">
          <div className="unique-table-layout">
            <div className="header">
              <div className="search-bar">
                <input type="text" placeholder="Search"/>
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
                    <th>Signature</th>
                    <th>Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
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
