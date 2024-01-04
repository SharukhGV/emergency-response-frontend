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
  // const [usrname777, setUsername777] = useState(true)
  // const [description777, setDescription777] = useState(false)
  // const [locationNickanme, setLocationNickname] = useState(true)

// function userNAME7(){
//   setUsername777(true)
//   setDescription777(false)
//   setLocationNickname(false)
// }


// function description7(){
//   setUsername777(false)
//   setDescription777(true)
//   setLocationNickname(false)
// }

// function locationNickanme7(){
//   setUsername777(false)
//   setDescription777(false)
//   setLocationNickname(true)
// }

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
  // const [queryUser, setQueryUser] = useState("");
  // const [queryDescription, setQueryDescription] = useState("");

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };
  
  // const handleQueryChangeUser = (event) => {
  //   setQueryUser(event.target.value);
  // };
  
  // const handleQueryChangeDescription = (event) => {
  //   setQueryDescription(event.target.value);
  // };

  const filteredPeople = data.filter((person) => {
    return person.full_name.toLowerCase().includes(query.toLowerCase());
  });

  // const filteredusers = data.filter((person) => {
  //   return person.username.toLowerCase().includes(queryUser.toLowerCase());
  // });

  // const filteredDescription = data.filter((person) => {
  //   return person.description.toLowerCase().includes(queryDescription.toLowerCase());
  // });

// FOR LOCCATION NICKNAME
  useEffect(() => {
    const markerArray = filteredPeople.map((person) => ({
      lat: person.latitude,
      lng: person.longitude,
    }));

    setMapMarkers(markerArray); // Update mapMarkers based on filtered data
  }, [query]); // Update markers when the query changes

  // // FOR USERS
  // useEffect(() => {
  //   const markerArray = filteredusers.map((person) => ({
  //     lat: person.latitude,
  //     lng: person.longitude,
  //   }));

  //   setMapMarkers(markerArray); // Update mapMarkers based on filtered data
  // }, [queryUser]); // Update markers when the query changes

  // useEffect(() => {
  //   const markerArray = filteredDescription.map((person) => ({
  //     lat: person.latitude,
  //     lng: person.longitude,
  //   }));

  //   setMapMarkers(markerArray); // Update mapMarkers based on filtered data
  // }, [queryDescription]); // Update markers when the query changes

  return (
    <div>
      {/* <div>
        <img onClick={planetsvis} style={{width:"100px"}} src={solarsystem}></img>
        <strong>Search for a Location</strong>
      </div> */}
      {/* <div></div>
              <strong>Search for a Location</strong>
<div></div> */}


{/* <button onClick={locationNickanme7}>Location Nickname</button>   <button onClick={userNAME7}>Username</button> <button onClick={description7}>Description</button> */}
<input type="text" placeholder="Search for a Location" value={query} onChange={handleQueryChange} /> 

      {/* {locationNickanme ?<input type="text" placeholder="Search for a Location" value={query} onChange={handleQueryChange} /> :null} */}
      {/* {usrname777?<input type="text" placeholder="Search for a User" value={queryUser} onChange={handleQueryChangeUser} />:null} */}
      {/* {description777?<input type="text" placeholder="Search for a Description" value={handleQueryChangeDescription} onChange={handleQueryChangeDescription} />: null} */}



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
