import GoogleMaps from "../components/GoogleMaps";
// import data from "../../data.json"
// import Individual from "../components/Individual";
// import { useState } from "react";
import SearchPeople from "../components/SearchPeople";
// import axios from "axios";
// import MyMap from "../components/MyMap";
// import { useState, useEffect } from "react";
// const dataJSON = require("../../data.json")

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
return (
  <>
  <div>
    <GoogleMaps mapMarkers={mapMarkers} />
  </div><SearchPeople setAccessToken={setAccessToken} loginUsername={loginUsername} location={location} mapMarkers={mapMarkers} setMapMarkers={setMapMarkers} />
</>
);
}
export default Index