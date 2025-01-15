
import Earthquake from "./Earthquake"
import SolarEclipse from "./SolarEclipse";
import Volcanoes from "./Volcanoes";
import LunarEclipse from "./LunarEclipse"
import MeteorShowers from "./MeteorShowers";
import PlanetsVisible from "../Planets/PlanetsVisible";
function GeoAstroEvents() {

  return (
    <div style={{ textAlign: "justify", paddingLeft: "30px", paddingRight: "30px" }}>

      <div className="homecontainerMeteors">
        <div className="earthquakeInfo">
    

          <PlanetsVisible />


        </div>
        <MeteorShowers />
      </div>

      <br></br>
      <br></br>
    </div>
  )





}

export default GeoAstroEvents