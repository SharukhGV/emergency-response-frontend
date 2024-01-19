import IndividualPreserves from "./IndividualPreserves";
import { useState, useEffect } from "react";

function SearchPreserves({preserveMarkers, setPreserveMarkers}){


    const darkSkyPreserves = [
        { name: "Jasper National Park", lat: 52.8735, lng: -118.0814 },
        { name: "Aoraki Mackenzie Intl Dark Sky Reserve", lat: -43.7340, lng: 170.0966 },
        { name: "Brecon Beacons National Park", lat: 51.9479, lng: -3.3875 },
        { name: "Natural Bridges National Monument", lat: 37.6096, lng: -110.0122 },
        { name: "Mont-Mégantic Dark Sky Reserve", lat: 45.4237, lng: -71.0916 },
        { name: "Exmoor National Park", lat: 51.1304, lng: -3.5542 },
        { name: "NamibRand Nature Reserve", lat: -25.0393, lng: 15.0956 },
        { name: "Big Bend National Park", lat: 29.2497, lng: -103.2500 },
        { name: "Grand Canyon-Parashant National Monument", lat: 36.9147, lng: -113.0289 },
        { name: "Cherry Springs State Park", lat: 41.6501, lng: -77.8165 },
      ];
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
      const filteredPreserves = darkSkyPreserves.filter((preserve) => {
        return preserve.name.toLowerCase().includes(query.toLowerCase());
      });
    
      // const filteredusers = data.filter((person) => {
      //   return person.username.toLowerCase().includes(queryUser.toLowerCase());
      // });
    
      // const filteredDescription = data.filter((person) => {
      //   return person.description.toLowerCase().includes(queryDescription.toLowerCase());
      // });
    
    // FOR LOCCATION NICKNAME
      useEffect(() => {
        const markerArray = filteredPreserves.map((preserve) => ({
          lat: preserve.lat,
          lng: preserve.lng,
        }));
    
        setPreserveMarkers(markerArray); // Update mapMarkers based on filtered data
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
    <input type="text" placeholder="Search for a Dark Sky Preserve" value={query} onChange={handleQueryChange} /> 
    
          {/* {locationNickanme ?<input type="text" placeholder="Search for a Location" value={query} onChange={handleQueryChange} /> :null} */}
          {/* {usrname777?<input type="text" placeholder="Search for a User" value={queryUser} onChange={handleQueryChangeUser} />:null} */}
          {/* {description777?<input type="text" placeholder="Search for a Description" value={handleQueryChangeDescription} onChange={handleQueryChangeDescription} />: null} */}
    
    
    
          <ul className="ultraelem"> 
            {filteredPreserves.map((preserve) => (
              <li className="listelem" style={{display:"flex",flexWrap:"wrap"}} key={preserve.lat + preserve.lng}>
                <IndividualPreserves  preserve={preserve} />
              </li>
            ))}
          </ul>
        </div>
      );
    }
    





export default SearchPreserves