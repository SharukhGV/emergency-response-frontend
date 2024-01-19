import IndividualPreserves from "./IndividualPreserves";
import { useState, useEffect } from "react";

function SearchPreserves({preserveMarkers, setPreserveMarkers}){


    const darkSkyPreserves = [
        { name: "Jasper National Park", lat: 52.8735, lng: -118.0814, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Athabasca_Glacier_on_the_Columbia_Icefield.jpg/800px-Athabasca_Glacier_on_the_Columbia_Icefield.jpg" },
        { name: "Aoraki Mackenzie Intl Dark Sky Reserve", lat: -43.7340, lng: 170.0966, image: "https://darksky.org/app/uploads/2015/01/Crux_and_Church_aoraki.jpg" },
        { name: "Brecon Beacons National Park", lat: 51.9479, lng: -3.3875, image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Brecon_beacons_arp.jpg" },
        { name: "Natural Bridges National Monument", lat: 37.6096, lng: -110.0122, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Night_sky_at_Owachomo_Bridge.jpg/800px-Night_sky_at_Owachomo_Bridge.jpg" },
        { name: "Mont-Mégantic Dark Sky Reserve", lat: 45.4237, lng: -71.0916, image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fd9%2Fb3%2F32%2Fd9b332e27decb669f0aa2124b6ca4e60.jpg&f=1&nofb=1&ipt=d2f78eba24a3c6915fe041ffcfad3668bd64a176eceb35e50b924e0cbb79f9f8&ipo=images" },
        { name: "Exmoor National Park", lat: 51.1304, lng: -3.5542, image: "https://www.tripsavvy.com/thmb/E7XIbEApKiR0i6Y492UIRuXNLAQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-126384073-072da1fe62a0486fa853f6c4b9b7571a.jpg" },
        { name: "NamibRand Nature Reserve", lat: -25.0393, lng: 15.0956, image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpanorama.solutions%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fx-large%2Fpublic%2Foryx%2520on%2520dune%25201.jpg%3Fitok%3DwtbYo-wM&f=1&nofb=1&ipt=0600bc2b363943f10550032b1a5f720073f555205334d16c51e8095d4d492f9c&ipo=images" },
        { name: "Big Bend National Park", lat: 29.2497, lng: -103.2500, image: "https://www.nps.gov/common/uploads/grid_builder/bibe/crop16_9/D2B28621-0C4B-2389-52529785F84AB51F.jpg?width=640&quality=90&mode=crop" },
        { name: "Grand Canyon-Parashant National Monument", lat: 36.9147, lng: -113.0289, image: "https://www.nps.gov/common/uploads/grid_builder/para/crop16_9/2969EAD9-1DD8-B71B-0B60C260DC394CF8.JPG?width=1300&quality=90&mode=crop" },
        { name: "Cherry Springs State Park", lat: 41.6501, lng: -77.8165, image: "https://upload.wikimedia.org/wikipedia/commons/e/e4/CSSP_Sagittarius_Combine1C.jpg" },
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