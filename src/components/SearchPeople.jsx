import { useEffect, useState } from "react";
import axios from "axios";
// import data from "../../data.json"
import { v4 as uuidv4 } from 'uuid';
import markerImage from "./markerImage.png"
export default function SearchPeople({ setMapMarkers, emergencyType, setLongitude, setLatitude, lat, lng }) {
  const [data, setData] = useState([])

useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_API}/findspots`)
      .then((response) => setData(response.data))
      .catch((e) => console.error("catch", e));
  }, []);

console.log(data)
  const [query, setQuery] = useState("");

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredPeople = data.filter((person) => {
    return person.full_name.toLowerCase().includes(query.toLowerCase());
  });

  useEffect(() => {
    const markerArray = filteredPeople.map((person) => ({
      lat: setLocation.latitude,
      lng: setLocation.longitude,
      name: person.full_name
    }));

    setMapMarkers(markerArray); // Update mapMarkers based on filtered data
  }, [query]); // Update markers when the query changes


  function parseDATE(date){
    // console.log(d.getUTCHours()); // Hours

    // console.log(d.getUTCSeconds());
return `${date.charAt(5)}${date.charAt(6)} / ${date.charAt(8)}${date.charAt(9)} / ${date.charAt(0)}${date.charAt(1)}${date.charAt(2)}${date.charAt(3)}`
  }
  return (
    <div>
      <div>
        <strong>Search for a Person</strong>
      </div>
      <input type="text" value={query} onChange={handleQueryChange} />
      <ul>
        {filteredPeople.map((person) => (
          <li key={person.id}>
            <div className="individual">
              <strong>Name:{person.full_name}</strong>
              <div style={{fontSize:"10px"}}>Date: {parseDATE(person.date)}</div>
              <div>Latitude: {person.latitude}</div>
              <div>Longitude:{person.longitude}</div>
              <div> Description:{person.description}</div>
              <div>Emergency Type:{person.emergency}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
