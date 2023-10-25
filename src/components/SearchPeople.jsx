import { useEffect, useState } from "react";
import data from "../../data.json"
import { v4 as uuidv4 } from 'uuid';
import markerImage from "./markerImage.png"
export default function SearchPeople({ setMapMarkers }) {
  const [query, setQuery] = useState("");

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredPeople = data.data.filter((person) => {
    return person.full_Name.toLowerCase().includes(query.toLowerCase());
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
      <div>
        <strong>Search for a Person</strong>
      </div>
      <input type="text" value={query} onChange={handleQueryChange} />
      <ul>
        {filteredPeople.map((person) => (
          <li key={person.id}>
            <div className="individual">
              <strong>Name:{person.full_Name}</strong>
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
