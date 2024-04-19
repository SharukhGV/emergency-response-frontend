import axios from "axios";
import { useState, useEffect } from "react";
import CelestialCard from "./CelestialCard";
import visibleGalaxies from './visible_galaxies.json';

function CelestialObjects() {
  const [celestialData, setCelestialData] = useState(null);
  const [query, setQuery] = useState("");


  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  // Check celestialData is not null or undefined before filtering
  // Ensure your filtering logic matches the structure of the data you receive
  const filteredCelestial = visibleGalaxies.galaxies.filter((celestObj) => {
    // Adjusted to filter based on a property, assuming 'name' is a string property of each object
    // This assumes celestialData is an array and each object has a 'galaxies' object with a 'name' property
    return celestObj.name.toLowerCase().includes(query.toLowerCase());
  }) 

  return (
    <div>
      <div style={{maxWidth:"700px", margin:"auto"}}>

      <input 
        type="text" 
        placeholder="Search for a Celestial Object" 
        value={query} 
        onChange={handleQueryChange} 
      />

<ul className="ultraelem">

      {filteredCelestial.map((celestData, index) => (
        <li className="listelem" style={{ display: "flex", flexWrap: "wrap" }} key={index+349234}>        
        <CelestialCard key={index+2482349} celestData={celestData} /></li>
      ))}            </ul>
</div>
    </div>
  );
}

export default CelestialObjects;
