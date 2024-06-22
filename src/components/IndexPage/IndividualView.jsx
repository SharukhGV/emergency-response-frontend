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

  const matchingProfile = dataProfile.find(prof => prof.my_username === data.username);

  const mapStyles = {
    height: "300px",
    width: "350px",
  };
  let defaultCenter = {
    lat: Math.trunc(data.latitude),
    lng: Math.trunc(data.longitude)
  };

  return (
    <div style={{ maxWidth: "700px", margin: "auto" }}>
      <br></br>
      <div className="parentView">
        <div className="viewCard">
          <h2>{data.full_name}</h2>

          <p>Username: {data.username}</p>

          {data.image_url ? <img className="imageIndView" src={data.image_url} style={{ width: "300px", height: "195px" }}></img> : <img className="imageIndView" style={{ width: "300px", height: "195px" }} src={mountainsky} />
          }        <br></br>
          <br></br></div>

        <div className="viewMaps">
          <div style={{ border: "solid black", width: "355px" }}>
            {!!data.latitude ? <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
              <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={6}
                center={defaultCenter}

              /></LoadScript> : <img style={{ width: "350px", height: "250px" }} src={noMap} />}</div>
        </div>
      </div>

      <div className="viewTable">
        <div className="tableContain">
          <table className="userPostTable">
            <tr>
              <th style={{ textAlign: "center" }}>Category</th>
              <th style={{ textAlign: "center" }}>Values</th>
            </tr>
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
              <td>{!!locationIQ.display_name ? <span>{locationIQ.display_name}</span> : "No Location Data"}</td>
            </tr>

          </table>
          <br></br>
          <div >{data.username === storedValue ? <Link style={{ fontSize: "15px" }} to={`/index/${id}/edit`}><button style={{ backgroundColor: "orange", width: "100px", height: "50px" }}>Edit Page</button></Link> : null}
            <span> </span>
            {data.username === storedValue ? <button style={{ backgroundColor: "red", width: "100px", height: "50px" }} onClick={deletePost}>Delete Post</button> : null}
            <span> </span>

            <Link to="/index"><button style={{ border: "solid darkred", color: "beige", width: "100px", height: "50px", fontSize: "15px" }}>Back</button></Link></div>

        </div></div>

      <br></br>


      <div style={{ backgroundColor: "#0483a330", padding: "15px", borderRadius: "10px" }} className="viewComments">
        <div className="comments">
          <br></br>
          <h3><strong>Comments Section</strong></h3>
          <form onSubmit={handleSubmit}>

            <input onChange={handleTextChange} placeholder="type your comment here..." type="text"></input>
            <br></br>
            <input
              style={{ width: "30%" }}
              type="submit"
            />
          </form>


          <br></br>
          <br></br>
          <div>
            {dataComments.map((commentz, index) => {
              if (parseFloat(commentz.userpost_id) === parseFloat(id)) {
                return (
                  <>                    <CommentsBox loginUsername={loginUsername} key={uuidv4()} commentz={commentz} id={id} index={index} />
                    <br></br>
                  </>
                )
              }
            })}
          </div>
        </div>
        <br></br>
      </div>

    </div>
  )


}

export default IndividualView