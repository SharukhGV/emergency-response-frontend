
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

    <div>
      <div class="backgroundCardTechy">
      <Link  to={`/index/${id}`}>{person.image_url ? <img className="imgCardTechy" src={person.image_url} alt="Avatar" /> : <img className="imgCardTechy" src={mountainsky} alt="Avatar" />}</Link>
        <div class="individualContainertechy">
          <span >{matchingProfile ? <img className="individualProfile" src={matchingProfile.image_url} alt="" /> : <img className="individualProfile" src={dipperDefault} alt="" />}</span>
          <span>     </span>
          <strong><Link style={{ fontSize: "15px" }} to={`/index/${id}`}><span className="individualdate">{parseDATE(person.date)}</span></Link></strong>
          <div>{person.full_name}</div>
        </div>
      </div>
    </div>

  )
}

export default Individual