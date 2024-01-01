import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import {Cloudinary} from "@cloudinary/url-gen";

  // const cld = new Cloudinary({cloud: {cloudName: 'damkrnln2'}});

function NewForm({  accessToken, emergencyType, setLongitude, setLatitude, lat, lng, loginUsername }) {
  // const [location, setLocation] = useState(null);
  // const [locationFound, setLocationFound] = useState(false);
  // const [lat, setLatitude] = useState(0);
  // const [lng, setLongitude] = useState(0);
  // const [data, setData] = useState([])
    const navigate=useNavigate()
    const [person, setPerson] = useState({
      full_name: "",
      latitude: lat,
      longitude: lng,
      description: "",
      skybrightness: emergencyType,
      username: loginUsername,
    });
    
    useEffect(() => {
      setPerson((prevPerson) => ({
        ...prevPerson,
        latitude: lat,
        longitude: lng,
      }));
    }, [lat, lng]);
    
  const addFindSpot = (newFindSpot) => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_API}/findspots`, newFindSpot)
      .then((response) => {
        console.log(response.data);

        navigate("/index");
      })
      .catch((e) => console.error("catch", e));
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // const latitude = position.coords.latitude;
          // const longitude = position.coords.longitude;
          // setLocation({ latitude, longitude });
          // setLocationFound(true);
          setLatitude( parseFloat(position.coords.latitude));
          setLongitude( parseFloat(position.coords.longitude));
        },
        (error) => {
          console.error("Error getting location:", error);
          // setLocationFound(false);
          window.alert("Please Enable Location and Refresh This Page");
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      // setLocationFound(false);
    }
  }, []); // Empty dependency array to run only once

  // useEffect(() => {
  //   if (locationFound) {
  //     setLatitude(location.latitude);
  //     setLongitude(location.longitude);
  //   } else {
  //     setLatitude(0);
  //     setLongitude(0);
  //   }
  // }, [locationFound]);


  

  const handleTextChange = (event) => {
    // if (event.target.id === 'latitude') {
    //   setPerson({ ...person, latitude: lat });
    //   console.log(person)

    // } else if (event.target.id === 'longitude') {
    //   setPerson({ ...person, longitude: lng });
    //   console.log(person)

    // } else {

      setPerson({ ...person, [event.target.id]: event.target.value });
      // console.log(person)
// 
    // }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addFindSpot(person);
  }


    return (
      <div>{accessToken ?<div className="edit">
        <h2>New Post:</h2>
        <h4>Posting Will Be Public to Everyone</h4>
        <form onSubmit={handleSubmit}>
          {/* <input type="hidden" id="user_id" name="user_id" value={userShow2}></input> */}
          <div></div>
          <label htmlFor="full_name">Location Nickname:</label>
          <div></div>
          <input style={{width:"300px"}}
            id="full_name"
            value={person.full_name.replace(/[^a-z]/gi, ' ')}
            type="text"
            onChange={handleTextChange}
            placeholder="Your Name..."
            required
          />
              {/* <input
            id="latitude"
            value={lat}
            type="hidden"
            required
          />
             <input
            id="longitude"
            value={lng}
            type="hidden"
            required
          /> */}

          <div></div>

          <div></div>
          <div></div>
          <label htmlFor="description">Describe Your Environment:</label>
          <div></div>
          <textarea
            id="description"
            name="description"
            value={person.description}
            rows="7"
            cols="25"
            placeholder="Write about what you see..."
            onChange={handleTextChange}
          ></textarea>
          <div></div>
          {/* <input
            style={{ width: "30%", padding: "0.6em 1.2em" }}
            type="file" name="image"
          /> */}
          <div></div>
          <input
            style={{ width: "30%", padding: "0.6em 1.2em" }}
            type="submit"
          />
        </form>
        <div
          style={{ marginTop: "20px", marginBottom: "20px" }}
          className="cardEmergency"
        >
          <h3>{person.skybrightness}</h3>
          <div>
            Full Name: <strong>{person.full_name}</strong>
          </div>
          <div>
            Latitude: <span style={{ color: "beige" }}>{lat}</span>
          </div>
          <div>
            Longitude: <span style={{ color: "beige" }}>{lng}</span>
          </div>
          <div>Description:</div>
          <p style={{ color: "#373436" }}>{person.description}</p>
        </div>
      </div>:<p>Please Log In to Continue</p>}</div>
    );
  };


export default NewForm;
