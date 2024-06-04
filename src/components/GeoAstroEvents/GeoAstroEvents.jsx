
import Earthquake from "./Earthquake"
import SolarEclipse from "./SolarEclipse";
import Volcanoes from "./Volcanoes";
import LunarEclipse from "./LunarEclipse"
import MeteorShowers from "./MeteorShowers";
function GeoAstroEvents() {

  return (
    <div style={{ textAlign: "justify", paddingLeft: "30px", paddingRight: "30px" }}>

      <div className="homecontainerMeteors">
        <div className="earthquakeInfo">
          <h1><strong>Recent EarthQuakes</strong></h1>
          <Earthquake />
          <h1><strong>Lunar Eclipses</strong></h1>
          <h3>25 YRS. Past-Future</h3>
          <LunarEclipse />

          <h1><strong>Solar Eclipses</strong></h1>
          <h3>25 YRS. Past-Future</h3>

          <SolarEclipse />
          <h1><strong>Major Volcanic Activity</strong></h1>
          <h3>25 YRS. Past-Potential-Future</h3>
          <Volcanoes />
        </div>
<MeteorShowers/>
      </div>

      <br></br>
      <br></br>
    </div>
  )





}

export default GeoAstroEvents