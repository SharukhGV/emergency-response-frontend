import { useEffect, useState } from "react";
import axios from "axios";
// import data from "../../data.json"
import { v4 as uuidv4 } from 'uuid';
import markerImage from "./markerImage.png"
import Individual from "./Individual";
// import solarsystem from "../pages/solarsystem.png"
import { useNavigate } from "react-router-dom";
export default function SearchPeople({loginUsername, setMapMarkers, emergencyType, setLongitude, setLatitude, lat, lng }) {
  const [data, setData] = useState([])
useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_API}/findspots`)
      .then((response) => setData(response.data))
      .catch((e) => console.error("catch", e));
  }, []);

// Set data in sessionStorage
sessionStorage.setItem('username', loginUsername);



// console.log(data)
  const [query, setQuery] = useState("");

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredPeople = data.filter((person) => {
    return person.full_name.toLowerCase().includes(query.toLowerCase());
  });

  useEffect(() => {
    const markerArray = filteredPeople.map((person) => ({
      lat: person.latitude,
      lng: person.longitude,
    }));

    setMapMarkers(markerArray); // Update mapMarkers based on filtered data
  }, [query]); // Update markers when the query changes


  return (
    <div>
      {/* <div>
        <img onClick={planetsvis} style={{width:"100px"}} src={solarsystem}></img>
        <strong>Search for a Location</strong>
      </div> */}
      {/* <div></div>
              <strong>Search for a Location</strong>
<div></div> */}
      <input type="text" placeholder="Search for a Location" value={query} onChange={handleQueryChange} />
      <ul className="ultraelem"> 
        {filteredPeople.map((person) => (
          <li className="listelem" style={{display:"flex",flexWrap:"wrap"}} key={person.id}>
            <Individual loginUsername={loginUsername} id={person.id} person={person} />
          </li>
        ))}
      </ul>
    </div>
  );
}
