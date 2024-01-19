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

const [preserveMarkers,setPreserveMarkers]=useState([])

const [darkPreserve,setDarkPreserve]=useState(true)

function darkSKIES(){
  setDarkPreserve(true)
}

function communityPosts(){
  setDarkPreserve(false)
}


return (
  <>
  <div>
    <GoogleMaps preserveMarkers={preserveMarkers} mapMarkers={mapMarkers} />
    <div style={{paddingBottom:"10px"}}>
<img style={{paddingRight:"10px"}} src={telescopeicon2}></img>
<div>This Marker on the Map denotes a Dark Sky Preserve</div>
<img src={markerImage}></img>
<div>This Marker on the Map denotes a Point of Interest by a Community User</div>
</div>
<button onClick={(darkSKIES)} style={{width:"250px", color:"green"}}>Dark Sky Preserves</button>   <button onClick={communityPosts} style={{width:"250px", color:"orange"}}>Community Posts</button>
{darkPreserve ? <h1>Dark Sky Preserves</h1> : <h1>Community Posts</h1>}
  {darkPreserve ?<div><SearchPreserves preserveMarkers={preserveMarkers} setPreserveMarkers={setPreserveMarkers} /></div>
  :<SearchPeople setAccessToken={setAccessToken} loginUsername={loginUsername} location={location} mapMarkers={mapMarkers} setMapMarkers={setMapMarkers} />}
  <br></br>
  <br></br>
  <br></br>
  <br></br>
</div>
</>
);
}
export default Index