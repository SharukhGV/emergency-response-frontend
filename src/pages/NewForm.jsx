import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
// import axios from "axios";
// import moment from "moment";
// import LocationCapture from "../components/LocationCapture";
// const API = process.env.REACT_APP_API_URL;

function NewForm( {emergencyType }) {
  const [location, setLocation]=useState(null)
//   let location = null,
 const [locationFound, setLocationFound]=useState(false)
useEffect(()=>{ 
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setLocation({ latitude, longitude });
          setLocationFound(true)
        //   this.onLocationUpdate(this.location);
        },
        (error) => {
          console.error('Error getting location:', error);
          setLocationFound(false)

          window.alert("Please Enable Location and Refresh This Page")
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      setLocationFound(false)

    }
  },[])

const [latitude, setLatitude]=useState(null)
const [longitude, setLongitude]=useState(null)

useEffect(()=>{

    locationFound ? setLatitude(person.location.latitude) : setLatitude("no location found")
    locationFound ? setLongitude(person.location.latitude) : setLongitude("no location found")

},[location])
// let userShow2 = userShow
//   let { id } = useParams();
  // console.log(person)
  //persons is the previous data populated into the form
//   const navigate = useNavigate();

//   const addperson = (newperson) => {

//   axios
//     .post(`${API}/persons`, newperson)
//     .then((response) => {
//       console.log(response.data)

//       // setperson(response.data); // set the entire `person` object
//       navigate('/persons');
//     })
//     .catch((e) => console.error("catch", e));
// };



  const [person, setperson] = useState({
    // user_id: userShow,
    first_Name: "",
    last_Name: "",
    latitude:latitude,
    longitude:longitude,
    description: "",
    emergency: emergencyType
  });
  
  console.log(person)






  const handleTextChange = (event) => {

    // if (event.target.id === "night") {
    //     setperson({ ...person, [event.target.id]: event.target.value === "true" });
    //   } else {
    //     setperson({ ...person, [event.target.id]: event.target.value });
    //   }
    setperson({ ...person, [event.target.id]: event.target.value });

  };


  
  
  const handleSubmit = (event) => {
    event.preventDefault();
    addperson(person);

  };

  return (
    <div className="edit">
      <h2>Caution:</h2>
      <h4>Posting Will Be Public to Everyone</h4>
      <form onSubmit={handleSubmit}>

      {/* <input type="hidden" id="user_id" name="user_id" value={userShow2}></input> */}
      <div></div>
       <label htmlFor="name">Your First Name:</label>
         <div></div><input
          id="first_Name"
          value={person.first_Name}
          type="text"
          onChange={handleTextChange}
          placeholder="Your Name..."

          required
        />
       <div></div>
       <label htmlFor="name">Your Last Name:</label>
       <div></div> <input
          id="last_Name"
          value={person.last_Name}
          type="text"
          onChange={handleTextChange}
          placeholder="Your Name..."

          required
        />
       

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

        {/* <input
          id="locationLat"
          value={location.latitude}
          type="text"
          onChange={handleTextChange}
          placeholder="Your Location..."

          required
        /> */}


        <input style={{width:"30%", padding:"0.6em 1.2em"}} type="submit" />
      </form>
  <div className="cardEmergency">
  <h3>{person.emergency}</h3>
  <div>Full Name: <strong>{person.first_Name} {person.last_Name}</strong></div>
  <div>Latitude: <span style={{color:"red"}}>{latitude}</span></div>
  <div>Longitude: <span style={{color:"red"}}>{longitude}</span></div>
  <div>Description:</div>
  <p style={{color:"orange"}}>{person.description}</p>
</div>


    </div>
  );
}

export default NewForm;