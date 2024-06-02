
import Earthquake from "./Earthquake"

import Meteorshowers from "./Meteorshowers";
import SolarEclipse from "./SolarEclipse";
import Volcanoes from "./Volcanoes";
import LunarEclipse from "./LunarEclipse"
function GeoAstroEvents() {

  return (
    <div style={{ textAlign: "justify", paddingLeft: "30px", paddingRight: "30px" }}>

      <div className="homecontainerMeteors">
        <div className="earthquakeInfo">
          <h1>Recent EarthQuakes</h1>
          <Earthquake />
          <h1>Lunar Eclipses</h1>
          <h3>25 YRS. Past-Future</h3>
          <LunarEclipse />

          <h1>Solar Eclipses</h1>
          <h3>25 YRS. Past-Future</h3>

          <SolarEclipse />
          <h1>Major Volcanic Activity</h1>
          <h3>25 YRS. Past-Potential-Future</h3>
          <Volcanoes />
        </div>
        <div><Meteorshowers /></div>


      </div>

      <br></br>
      <br></br>
    </div>
  )





}

export default GeoAstroEvents