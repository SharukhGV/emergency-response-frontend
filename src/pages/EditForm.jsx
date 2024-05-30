import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function EditForm({ accessToken, emergencyType, setLongitude, setLatitude, lat, lng, loginUsername }) {


  const { id } = useParams()

  const [person, setPerson] = useState({
    full_name: "",
    latitude: 0,
    longitude: 0,
    description: "",
    skybrightness: "",
    image_url: "",
    username: "",
  });

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_API}/userposts/${id}`)
      .then((response) => setPerson({
        full_name: response.data.data.full_name,
        latitude: response.data.data.latitude,
        longitude: response.data.data.longitude,
        description: response.data.data.description,
        skybrightness: response.data.data.skybrightness,
        image_url: response.data.data.image_url,
        username: response.data.data.username,
      }
      ))
      .catch((e) => console.error("catch", e));
  }, []);



  const navigate = useNavigate()



  const updateFindSpot = (newFindSpot) => {
    axios
      .put(`${import.meta.env.VITE_BACKEND_API}/userposts/${id}`, newFindSpot)
      .then((response) => {
        console.log(response.data.data);

        navigate(`/index/${id}`);
      })
      .catch((e) => console.error("catch", e));
  };





  const handleTextChange = (event) => {


    setPerson({ ...person, [event.target.id]: event.target.value });

  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateFindSpot(person);
    navigate(`/index`);

  }


  return (
    <div className="edit">
      <h2>Edit Form:</h2>
      <h4>Posting Will Be Public to Everyone</h4>
      <form onSubmit={handleSubmit}>
        <div></div>
        <label htmlFor="full_name">Location Nickname:</label>
        <div></div>
        <input
          style={{ width: "300px" }}
          id="full_name"
          value={person.full_name}
          type="text"
          onChange={handleTextChange}
          placeholder="Place Name..."
          required
        />


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
          placeholder="What is your case about..."
          onChange={handleTextChange}
        ></textarea>
        <div></div>

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

      <div><Link to={`/index/${id}`}><button>Back</button></Link></div>

    </div>
  );
};


export default EditForm;
