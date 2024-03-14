import GoogleMaps from "../components/GoogleMaps";
// import data from "../../data.json"
// import Individual from "../components/Individual";
// import { useState } from "react";
import SearchPeople from "../components/SearchPeople";
// import axios from "axios";
// import MyMap from "../components/MyMap";
// import { useState, useEffect } from "react";
// const dataJSON = require("../../data.json")
import telescopeicon2 from "./telescopeicon2.png"
import markerImage from "../components/markerImage.png"
import { useState } from "react";
import SearchPreserves from "../components/SearchPreserves";
import collegeMarker from "../components/collegeMarker.png"
// import observatoryMarker from "./observatoryMarker.png"
import SearchObservatories from "../components/SearchObservatories";
import observatoryMarker from "../components/observatoryMarker.png"
function Index({setMapMarkers, mapMarkers, location, setAccessToken,loginUsername}) {

// const [data, setData] = useState([])
// useEffect(() => {
//     axios
//       .get(import.meta.env.BACKEND_API)
//       .then((response) => setData(response.data))
//       .catch((e) => console.error("catch", e));
//   }, []);
// function filterByName(data, filterText) {
//     if (!data || !Array.isArray(data)) {
//       return [];
//     }
  
//     return data.filter((item) => {
//         return item.first_Name.toLowerCase().includes(filterText.toLowerCase()) || item.last_Name.toLowerCase().includes(filterText.toLowerCase());
//       })
    
//   }
const [observatoryMarkers,setObservatoryMarker]=useState([])

const [preserveMarkers,setPreserveMarkers]=useState([])

const [darkPreserve,setDarkPreserve]=useState(0)

function darkSKIES(){
  setDarkPreserve(1)
}

function communityPosts(){
  setDarkPreserve(2)
}


function ObservatoryPosts(){
  setDarkPreserve(3)
}

function AstronomyColleges(){
  setDarkPreserve(4)
}

const [showLegend, setShowLegend]=useState(false)
function legendToggle(){
  setShowLegend(!showLegend)
}
return (
  <>
  <div>
    <GoogleMaps preserveMarkers={preserveMarkers} mapMarkers={mapMarkers} observatoryMarkers={observatoryMarkers} />
    <br></br>
    <button style={{backgroundColor:" #00000000", color:"yellow"}} onClick={legendToggle}>🧭</button>
    <br></br>
    <div>
      <h2><strong>Astronomy Atlas</strong></h2>
      <p>Points of Interest</p>
      <br></br>
   {showLegend ? <div style={{paddingBottom:"10px",border:"dashed"}}>
<img style={{paddingRight:"10px"}} src={telescopeicon2}></img>
<div>This Marker on the Map denotes a Dark Sky Preserve</div>
<img src={markerImage}></img>
<div>This Marker on the Map denotes a Point of Interest by a Community User</div>
<img src={collegeMarker}></img>
<div>This Marker on the Map denotes a College that offers Astronomy as a Major</div>
<img src={observatoryMarker}></img>
<div>This Marker on the Map denotes a public Observatory</div>


</div> :null}</div>
<br></br>

<button onClick={(darkSKIES)} style={{width:"250px", color:"green",textShadow: "0 0 3px #000000, 0 0 5px #ffffff"}}>Dark Sky Preserves</button>   <button onClick={communityPosts} style={{width:"250px", color:"orange",textShadow: "0 0 3px #000000, 0 0 5px #ffffff"}}>Community Posts</button>
<button onClick={(ObservatoryPosts)} style={{width:"250px", color:"green",textShadow: "0 0 3px #000000, 0 0 5px #ffffff"}}>Public Observatories</button>  
 {/* <button onClick={AstronomyColleges} style={{width:"250px", color:"orange"}}>Astronomy Colleges</button> */}
<br></br>
<br></br>
{darkPreserve === 1 ? <h3 style={{textShadow: "0 0 3px #000000, 0 0 5px #ffffff"}}>Dark Sky Preserves</h3> : null}
{darkPreserve === 2 ? <h3 style={{textShadow: "0 0 3px #000000, 0 0 5px #ffffff"}}> Community Posts</h3> : null}
{darkPreserve === 3 ? <h3 style={{textShadow: "0 0 3px #000000, 0 0 5px #ffffff"}}>Public Observatories</h3> : null}
{/* {darkPreserve === 4 ? <h1>Astronomy Colleges</h1> : null} */}
<div className="cardCONTAIN">
{darkPreserve ===1 ?<div><SearchPreserves preserveMarkers={preserveMarkers} setPreserveMarkers={setPreserveMarkers} /></div>
  :null}
  
  
  {darkPreserve ===2 ?<SearchPeople setAccessToken={setAccessToken} loginUsername={loginUsername} location={location} mapMarkers={mapMarkers} setMapMarkers={setMapMarkers} /> : null}
 
  {darkPreserve ===3 ?<div><SearchObservatories observatoryMarkers={observatoryMarkers} setObservatoryMarker={setObservatoryMarker} /></div>
  :null}
 </div>
 
 <br></br>
  <br></br>
  <br></br>
  <br></br>
</div>
</>
);
}
export default Index