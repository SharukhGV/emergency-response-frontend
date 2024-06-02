import { useEffect, useState } from "react";
import axios from "axios";
import Individual from "./Individual";
// This component is imported into the actual "Index" component in the "pages" folder
export default function SearchPeople({ loginUsername, setMapMarkers, emergencyType, setLongitude, setLatitude, lat, lng }) {
  const [data, setData] = useState([])


  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_API}/userposts`)
      .then((response) => setData(response.data.data))
      .catch((e) => console.error("catch", e));
  }, []);

  sessionStorage.setItem('username', loginUsername);

  const [query, setQuery] = useState("");

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredPeople = data.filter((posts) => {
    return posts.full_name.toLowerCase().includes(query.toLowerCase());
  });
  const filteredNorthernLights = data.filter((person) => {
    return person.skybrightness.toLowerCase().includes("northern");
  });

  const filteredMeteor = data.filter((person) => {
    return person.skybrightness.toLowerCase().includes("fireball");
  });

  const filteredLow = data.filter((person) => {
    return person.skybrightness.toLowerCase().includes("low");
  });

  const filteredModerate = data.filter((person) => {
    return person.skybrightness.toLowerCase().includes("moderate");
  });

  const filteredHigh = data.filter((person) => {
    return person.skybrightness.toLowerCase().includes("high");
  });

  useEffect(() => {
    const markerArray = filteredPeople.map((person) => ({
      lat: person.latitude,
      lng: person.longitude,
    }));

    setMapMarkers(markerArray);
  }, [query]);

  const [allPosts, setAllPosts] = useState(false)
  const [northern, setNorthern] = useState(false)
  const [meteoric, setMeteoric] = useState(false)
  const [lowLight, setlowLight] = useState(false)

  function northernLights() {
    setAllPosts(false)
    setNorthern(true)
    setMeteoric(false)
    setlowLight(false)
  }

  function meteoricEvent() {
    setAllPosts(false)
    setNorthern(false)
    setMeteoric(true)
    setlowLight(false)
  }


  function allPostsSet() {
    setAllPosts(true)
    setNorthern(false)
    setMeteoric(false)
    setlowLight(false)
  }


  function lowLightPollution() {
    setAllPosts(false)
    setNorthern(false)
    setMeteoric(false)
    setlowLight(true)
  }


  return (
    <div>


      {allPosts ? <input type="text" placeholder="Search for a Post Title..." value={query} onChange={handleQueryChange} /> : null}
      <br></br>
      <br></br>
      <div>
        <button style={{ textShadow: "0 0 3px #000000, 0 0 5px #ffffff", borderRadius: "10px", border: "2px solid #373436", width: "70px", height: "70px", opacity: "0.8", backgroundColor: "black", fontSize: "10px" }} onClick={allPostsSet}>Every Post <div style={{ fontSize: "17px" }}>🟢</div></button>
        <span>     </span>
        <button className="northernLights" style={{ border: "2px solid #373436", textShadow: "0 0 3px #000000, 0 0 5px #ffffff", borderRadius: "10px", width: "70px", height: "70px", opacity: "0.8", backgroundColor: "black", fontSize: "10px" }} onClick={northernLights}>Auroras <div style={{ fontSize: "17px" }}>🌃</div></button>
        <span>     </span>

        <button className="fireBall" style={{ border: "2px solid #373436", textShadow: "0 0 3px #000000, 0 0 5px #ffffff", borderRadius: "10px", width: "70px", height: "70px", opacity: "0.8", backgroundColor: "black", fontSize: "10px" }} onClick={meteoricEvent}>Meteors <div style={{ fontSize: "17px" }}>☄️</div></button>
        <span>     </span>

        <button style={{ textShadow: "0 0 3px #000000, 0 0 5px #ffffff", borderRadius: "10px", border: "2px solid #373436", opacity: "0.8", width: "70px", height: "70px", backgroundColor: "black", fontSize: "10px" }} onClick={lowLightPollution}>Low LP <div style={{ fontSize: "17px" }}>🌆</div></button>
      </div>



      {allPosts ? <ul className="ultraelem">
        {filteredPeople.map((person) => (
          <li className="listelem" style={{ display: "flex", flexWrap: "wrap" }} key={person.id}>

            <Individual loginUsername={loginUsername} id={person.id} person={person} />
          </li>
        ))}
      </ul> : null}

      {northern ? <ul className="ultraelem">
        {filteredNorthernLights.map((person) => (
          <li className="listelem" style={{ display: "flex", flexWrap: "wrap" }} key={person.id}>

            <Individual loginUsername={loginUsername} id={person.id} person={person} />
          </li>
        ))}
      </ul> : null}


      {meteoric ? <ul className="ultraelem">
        {filteredMeteor.map((person) => (
          <li className="listelem" style={{ display: "flex", flexWrap: "wrap" }} key={person.id}>

            <Individual loginUsername={loginUsername} id={person.id} person={person} />
          </li>
        ))}
      </ul> : null}



      {lowLight ? <ul className="ultraelem">
        {filteredLow.map((person) => (
          <li className="listelem" style={{ display: "flex", flexWrap: "wrap" }} key={person.id}>

            <Individual loginUsername={loginUsername} id={person.id} person={person} />
          </li>
        ))}
      </ul> : null}


    </div>
  );
}
