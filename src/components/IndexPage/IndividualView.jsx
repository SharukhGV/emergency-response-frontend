import { useParams } from "react-router-dom"
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CommentsBox from "./CommentsBox";
import { v4 as uuidv4 } from 'uuid';
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import noMap from "./noMap.png"
import "./individualView.css"
import mountainsky from "./mountainsky.jpg"

// This component has origins in the "Individual" component 
// It is navigated here using Link and the post's id
function IndividualView({ loginUsername }) {
  const [data, setData] = useState([])
  const [locationIQ, setLocationIQ] = useState({})

  const { id } = useParams()

  const [comment, setComment] = useState({
    description: "",
    userpost_id: id,
    my_username: loginUsername,

  });

  const [dataComments, setDataComments] = useState([])


  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_API}/comments`)
      .then((response) => setDataComments(response.data))
      .catch((e) => console.error("catch", e));
  }, []);


  const handleTextChange = (event) => {
    setComment({ ...comment, description: event.target.value })
  };

  const addComment = (newComment) => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_API}/comments`, newComment)
      .then((response) => {
        console.log(response.data);

        navigate(`/index`);
      })
      .catch((e) => console.error("catch", e));
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    addComment(comment);
  }

  useEffect(() => {
    if (!!data.latitude) {
      axios
        .get(`https://us1.locationiq.com/v1/reverse?key=${import.meta.env.VITE_REVERSE_GEOCODING_API_KEY}&lat=${data.latitude}&lon=${data.longitude}&format=json`)
        .then((response) => {
          setLocationIQ(response.data);
          console.log(response.data);
        })
        .catch((error) => console.error("Error:", error));
    }
  }, [data.latitude, data.longitude]);

  console.log(dataComments)
  console.log(id)
  const navigate = useNavigate()


  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_API}/userposts/${id}`)
      .then((response) => setData(response.data.data))
      .catch((e) => console.error("catch", e));
  }, []);


  const deleteItem = (identification) => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_API}/userposts/${identification}`, identification)
      .then((response) => navigate("/index"))
      .catch((e) => console.error("catch", e));
  };

  function deletePost() {
    deleteItem(id);
  }

  const storedValue = sessionStorage.getItem('username');
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

  // const matchingProfile = dataProfile.find(prof => prof.my_username === data.username);

  const mapStyles = {
    height: "300px",
    width: "350px",
  };
  let defaultCenter = {
    lat: Math.trunc(data.latitude),
    lng: Math.trunc(data.longitude)
  };
  return (
    <div className="sci-fi-container">
      <div className="sci-fi-card">
        <h2 className="sci-fi-title">{data.full_name}</h2>
        <p className="sci-fi-username">Username: {data.username}</p>
        <div className="sci-fi-image-container">
          {data.image_url ? (
            <img className="sci-fi-image" src={data.image_url} alt="Post" />
          ) : (
            <img className="sci-fi-image" src={mountainsky} alt="Default" />
          )}
        </div>
      </div>

      <div className="sci-fi-map">
        {!!data.latitude ? (
          <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
            <GoogleMap
              mapContainerStyle={mapStyles}
              zoom={6}
              center={defaultCenter}
            />
          </LoadScript>
        ) : (
          <img className="sci-fi-no-map" src={noMap} alt="No Map Available" />
        )}
      </div>

      <div className="sci-fi-table-container">
        <table className="sci-fi-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Values</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Latitude</td>
              <td>{!!data.latitude ? data.latitude : "No Location Found"}</td>
            </tr>
            <tr>
              <td>Longitude</td>
              <td>{!!data.longitude ? data.longitude : "No Location Found"}</td>
            </tr>
            <tr>
              <td>Description</td>
              <td>{data.description}</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>{!!locationIQ.display_name ? locationIQ.display_name : "No Location Data"}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="sci-fi-buttons">
        {data.username === storedValue && (
          <>
            <Link to={`/index/${id}/edit`}>
              <button className="sci-fi-button edit">Edit Page</button>
            </Link>
            <button className="sci-fi-button delete" onClick={deletePost}>Delete Post</button>
          </>
        )}
        <Link to="/index">
          <button className="sci-fi-button back">Back</button>
        </Link>
      </div>

      <div className="sci-fi-comments">
        <h3 className="sci-fi-comments-title">Comments Section</h3>
        <form onSubmit={handleSubmit} className="sci-fi-comment-form">
          <input
            onChange={handleTextChange}
            placeholder="Type your comment here..."
            type="text"
            className="sci-fi-input"
          />
          <button type="submit" className="sci-fi-button submit">Submit</button>
        </form>

        <div className="sci-fi-comments-list">
          {dataComments.map((commentz, index) => {
            if (parseFloat(commentz.userpost_id) === parseFloat(id)) {
              return (
                <CommentsBox
                  key={uuidv4()}
                  loginUsername={loginUsername}
                  commentz={commentz}
                  id={id}
                  index={index}
                />
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
}

export default IndividualView;