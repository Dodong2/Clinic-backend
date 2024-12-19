/****** graphs ******/
import GenderGraph from './graphs/GenderGraph'
import AgeGraph from "./graphs/AgeGraph"
import AllergiesGraph from "./graphs/AllergiesGraph"
import BloodGraph from "./graphs/BloodGraph"

const Dashboard = () => {
  return (
    <>
    <div className='graphs'>
    {/* layer 1 */}
    <div className="graph-layer1">
    <GenderGraph/>
    <AgeGraph/>
    </div>
    {/* layer 2 */}
    <div className="graph-layer2">
      <BloodGraph/>
      <AllergiesGraph/>
    </div>
    </div>
    </>
  )
}

export default Dashboard
