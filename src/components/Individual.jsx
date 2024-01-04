
// import axios from "axios"
import { Link } from "react-router-dom"
import dipperDefault from "./dipperDefault.png"
import mountainsky from "./mountainsky.jpg"
import axios from "axios"
import { useState, useEffect } from "react"

function Individual({ loginUsername, id, person }) {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!!person.latitude) {
      axios
        .get(`https://us1.locationiq.com/v1/reverse?key=${import.meta.env.VITE_REVERSE_GEOCODING_API_KEY}&lat=${person.latitude}&lon=${person.longitude}&format=json`)
        .then((response) => {
          setData(response.data);
          console.log(response.data); // Log data inside the .then() block
        })
        .catch((error) => console.error("Error:", error));
    }
  }, [person.latitude, person.longitude]); // Ensure useEffect runs when latitude or longitude changes


  const styleIndividual = {
    color: "white",
    backgroundColor: "rgba(152,160,255,50)"
  }
  // }
  function parseDATE(date) {
    return `${date.charAt(5)}${date.charAt(6)} / ${date.charAt(8)}${date.charAt(9)} / ${date.charAt(0)}${date.charAt(1)}${date.charAt(2)}${date.charAt(3)}`
  }return (
    <div style={{ fontFamily: "Arial" }} className="card">
      <img src={mountainsky} className="card__image" alt="" />
      <div className="card__overlay">
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
          <img className="card__thumb" src={dipperDefault} alt="" />
          <div className="card__header-text">
            <h5 style={{ fontFamily: "Arial" }}>
              {!!data && data.address && data.address.city ? data.address.city : <span>No Data</span>},
              {!!data && data.address && data.address.country ? data.address.country : <span>No Location</span>}
            </h5>
            <h3 className="card__title">{person.full_name}</h3>
            <span style={{ fontFamily: "Arial" }} className="card__status">{parseDATE(person.date)}</span>
          </div>
        </div>
        <div style={{ fontFamily: "Arial" }}>{person.skybrightness}</div>
        <p style={{ fontFamily: "Arial", fontSize: "10px" }} className="card__description">{person.description}</p>
        <Link style={{ fontSize: "15px" }} to={`/index/${id}`}>View Page</Link>
      </div>
    </div>
  );
  




    //   <div style={{color:"white"}}  id="individual">
    //   <strong>Location Nickname:{person.full_name}</strong>
    //   <div style={{fontSize:"10px"}}>Date: {parseDATE(person.date)}</div>
    //   <div>Latitude: {person.latitude}</div>
    //   <div>Longitude: {person.longitude}</div>
    //   <div> Description: {person.description}</div>
    //   <div> Light Pollution Level: {person.skybrightness}</div>
    //   <Link to={`/index/${id}`}>View Page</Link>
    //   {/* <button style={{width:'150px'}}>Archive Status: {!person.archived ? <div>❎</div>:<div>✅</div>}</button> */}
    // </div>
  // )


}

export default Individual