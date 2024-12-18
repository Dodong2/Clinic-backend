import GenderGraph from './graphs/GenderGraph'
import AgeGraph from "./graphs/AgeGraph"
import AllergiesGraph from "./graphs/AllergiesGraph"
import BloodGraph from "./graphs/BloodGraph"

const Dashboard = () => {
  return (
    <>
    <div className='graphs'>
    <div className="graph-layer1">
    <GenderGraph/>
    <AgeGraph/>
    </div>
    <div className="graph-layer2">
      <BloodGraph/>
      <AllergiesGraph/>
    </div>
    </div>
    </>
  )
}

export default Dashboard
