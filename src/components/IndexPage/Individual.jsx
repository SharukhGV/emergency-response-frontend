
import { Link } from "react-router-dom"
import dipperDefault from "./dipperDefault.png"
import mountainsky from "./mountainsky.jpg"
import axios from "axios"
import { useState, useEffect } from "react"
// This component is imported into the "SearchPeople" component in this same folder

function Individual({ loginUsername, id, person }) {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!!person.latitude) {
      axios
        .get(`https://us1.locationiq.com/v1/reverse?key=${import.meta.env.VITE_REVERSE_GEOCODING_API_KEY}&lat=${person.latitude}&lon=${person.longitude}&format=json`)
        .then((response) => {
          setData(response.data);
          console.log(response.data);
        })
        .catch((error) => console.error("Error:", error));
    }
  }, [person.latitude, person.longitude]);

  function parseDATE(date) {
    return `${date.charAt(5)}${date.charAt(6)} / ${date.charAt(8)}${date.charAt(9)} / ${date.charAt(0)}${date.charAt(1)}${date.charAt(2)}${date.charAt(3)}`
  }

  const [dataProfile, setDataProfile] = useState([])
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_API}/profile`)
      .then((response) => setDataProfile(response.data.data))
      .catch((e) => console.error("catch", e));
  }, []);

  const matchingProfile = dataProfile.find(prof => prof.my_username === person.username);



  return (
    <div style={{ fontFamily: "Arial" }} className="card">
      {!!person.image_url ? <img src={person.image_url} className="card__image" alt="" />
        : <img src={mountainsky} className="card__image" alt="" />}
      <div className="card__overlay">
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
          {matchingProfile ? <img className="card__thumb" src={matchingProfile.image_url} alt="" /> : <img className="card__thumb" src={dipperDefault} alt="" />}
          <div className="card__header-text">
            <h5 style={{ fontFamily: "Arial" }}>

              <strong>{person.full_name}</strong>

            </h5>
            <span style={{ fontFamily: "Arial" }} className="card__status">{parseDATE(person.date)}</span>
          </div>
        </div>
        <div style={{ fontFamily: "Arial", color: "purple" }}><strong>{person.skybrightness}</strong></div>
        <Link style={{ fontSize: "15px" }} to={`/index/${id}`}>read more...</Link>
      </div>
    </div>
  );


}

export default Individual