import { Link } from "react-router-dom";
import dipperDefault from "./dipperDefault.png";
import axios from "axios";
import { useState, useEffect } from "react";
import "./individual.css";

function Individual({ loginUsername, id, person }) {
  const [data, setData] = useState({});
  const [dataProfile, setDataProfile] = useState([]);

  useEffect(() => {
    if (!!person.latitude) {
      axios
        .get(`https://us1.locationiq.com/v1/reverse?key=${import.meta.env.VITE_REVERSE_GEOCODING_API_KEY}&lat=${person.latitude}&lon=${person.longitude}&format=json`)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => console.error("Error:", error));
    }
  }, [person.latitude, person.longitude]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_API}/profile`)
      .then((response) => setDataProfile(response.data.data))
      .catch((e) => console.error("catch", e));
  }, []);

  const matchingProfile = dataProfile.find(prof => prof.my_username === person.username);

  function parseDATE(date) {
    return `${date.charAt(5)}${date.charAt(6)}/${date.charAt(8)}${date.charAt(9)}/${date.charAt(0)}${date.charAt(1)}${date.charAt(2)}${date.charAt(3)}`;
  }

  return (
    <div className="post-item" style={{
      padding: '15px',
      borderBottom: '1px solid #eee',
      marginBottom: '10px',
      display: 'flex',
      alignItems: 'center',
    }}>
      <div className="post-image" style={{ marginRight: '15px', flexShrink: 0 }}>
        {matchingProfile ? 
          <img src={matchingProfile.image_url} alt="" style={{ width: '50px', height: '50px', borderRadius: '50%' }} /> : 
          <img src={dipperDefault} alt="" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
        }
      </div>
      <div className="post-content" style={{ flex: 1 }}>
        <h2 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>
          <Link to={`/index/${id}`} style={{ color: '#3a3a85', textDecoration: 'none' }}>{person.full_name}</Link>
        </h2>
        <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '5px' }}>
          {parseDATE(person.date)} - {person.skybrightness}
        </p>
        <p style={{ fontSize: '1rem', color: '#333' }}>
          {person.description && person.description.substring(0, 100)}...
        </p>
      </div>
    </div>
  );
}

export default Individual;