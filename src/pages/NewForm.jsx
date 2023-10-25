import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function NewForm({ emergencyType }) {
  const [location, setLocation] = useState(null);
  const [locationFound, setLocationFound] = useState(false);
  const [lat, setLatitude] = useState(null);
  const [lng, setLongitude] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setLocation({ latitude, longitude });
          setLocationFound(true);
        },
        (error) => {
          console.error('Error getting location:', error);
          setLocationFound(false);
          window.alert("Please Enable Location and Refresh This Page");
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      setLocationFound(false);
    }
  }, []); // Empty dependency array to run only once

  useEffect(() => {
    if (locationFound) {
      setLatitude(location.latitude);
      setLongitude(location.longitude);
    } else {
      setLatitude("no location found");
      setLongitude("no location found");
    }
  }, [locationFound]); // Include locationFound in the dependency array

  const [person, setPerson] = useState({
    full_Name: "",
    // last_Name: "",
    latitude: lat,
    longitude: lng,
    description: "",
    emergency: emergencyType,
  });

  const handleTextChange = (event) => {
    setPerson({ ...person, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // addperson(person); // You should implement this function
  };

  return (


    <div className="edit">
      <h2>Caution:</h2>
      <h4>Posting Will Be Public to Everyone</h4>
      <h5>Posts Cannot be Deleted</h5>
      <form onSubmit={handleSubmit}>

      {/* <input type="hidden" id="user_id" name="user_id" value={userShow2}></input> */}
      <div></div>
       <label htmlFor="full_Name">Name:</label>
         <div></div><input
          id="full_Name"
          value={person.full_Name}
          type="text"
          onChange={handleTextChange}
          placeholder="Your Name..."

          required
        />
       {/* <div></div>
       <label htmlFor="name">Your Last Name:</label>
       <div></div> <input
          id="last_Name"
          value={person.last_Name}
          type="text"
          onChange={handleTextChange}
          placeholder="Your Name..."

          required
        /> */}
       

    <div></div>

<div></div>
<div></div>
        <label htmlFor="description">Describe Your Problem:</label>
<div></div>
        <textarea
          id="description"
          name="description"
          value={person.description}
          rows="7" 
          cols="25"
          placeholder="What is your case about..."

          onChange={handleTextChange}
        ></textarea>
<div></div>


        <input style={{width:"30%", padding:"0.6em 1.2em"}} type="submit" />
      </form>
  <div style={{marginTop:"20px"}} className="cardEmergency">
  <h3>{person.emergency}</h3>
  <div>Full Name: <strong>{person.full_Name}</strong></div>
  <div>Latitude: <span style={{color:"beige"}}>{lat}</span></div>
  <div>Longitude: <span style={{color:"beige"}}>{lng}</span></div>
  <div>Description:</div>
  <p style={{color:"#373436"}}>{person.description}</p>
</div>


    </div>
  );
}

export default NewForm;