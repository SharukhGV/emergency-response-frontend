import { Link } from "react-router-dom";
import { useState } from "react";
// import axios from "axios";
// import moment from "moment";
import LocationButton from "../components/LocationButton";

// const API = process.env.REACT_APP_API_URL;

function NewForm({location, setLocation, emergencyType }) {
  // const [userShow, setUserShow]=useState("")



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
    locationLat: location.latitude,
    locationLong:location.longitude,
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
        {/* {!!location ? "✅ Location Recorded" : null  } */}
         <LocationButton location={location} setLocation={setLocation}/>

      <form onSubmit={handleSubmit}>

      {/* <input type="hidden" id="user_id" name="user_id" value={userShow2}></input> */}
      <div></div>
        <label htmlFor="name">Your First Name:</label>
        <input
          id="first_Name"
          value={person.first_Name}
          type="text"
          onChange={handleTextChange}
          placeholder="Your Name..."

          required
        />
       <div></div>
       <label htmlFor="name">Your Last Name:</label>
        <input
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
          cols="50"
          placeholder="What is your case about..."

          onChange={handleTextChange}
        ></textarea>
<div></div>
        <input style={{width:"100%", padding:"0.6em 1.2em"}} type="submit" />
      </form>
  <div className="cardEmergency">
  <h3>{person.emergency}</h3>
  <div>Full Name: {person.first_Name} {person.last_Name}</div>
  <div>Latitude: <span style={{color:"red"}}>{person.locationLat}</span></div>
  <div>Longitude: <span style={{color:"red"}}>{person.locationLong}</span></div>
  <div>Description:</div>
  <p style={{color:"orange"}}>{person.description}</p>
</div>


    </div>
  );
}

export default NewForm;