import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import CommentsBox from "./CommentsBox";
import { v4 as uuidv4 } from 'uuid';
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import noMap from "./noMap.png"
import mountainsky from "./mountainsky.jpg"
import { border } from "@cloudinary/url-gen/qualifiers/background";

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

  const mapStyles = {
    height: "300px",
    maxWidth: "100%",
    borderRadius: "12px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const containerStyle = {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const headerStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
  };

  const profileImageStyle = {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    marginRight: "20px",
    objectFit: "cover",
    border: "3px solid #007bff",
  };

  const titleStyle = {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "5px",
  };

  const usernameStyle = {
    fontSize: "16px",
    color: "#666",
  };

  const imageContainerStyle = {
    marginBottom: "20px",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const imageStyle = {
    width: "100%",
    height: "auto",
    display: "block",
  };





  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "flex-start",
    gap: "10px",
    marginBottom: "20px",
  };

  const buttonStyle = {
    padding: "10px 20px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "all 0.3s ease",
  };

  return (
    <div style={containerStyle}>
      <div className="headingstyle">
        {/* <img
          style={profileImageStyle}
          src={data.image_url || mountainsky}
          alt={data.full_name}
        /> */}
        <div>
          <h2 className="titleStyle">{data.full_name}</h2>
          <p className="authorStyle">Author: {data.username}</p>
        </div>
      </div>

      <div style={imageContainerStyle}>
        <img
          style={imageStyle}
          src={data.image_url || mountainsky}
          alt={data.full_name}
        />
      </div>

      
<div style={mapStyles}>
  {!!data.latitude && !!data.longitude && !isNaN(data.latitude) && !isNaN(data.longitude) ? (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={6}
        center={{ lat: parseFloat(data.latitude), lng: parseFloat(data.longitude) }}
      />
    </LoadScript>
  ) : (
    <img style={imageStyle} src={noMap} alt="No Map Available" />
  )}
</div>

      <table className="tableStyle">
        <tbody className="tableStyle" >
          <tr>
            <td className="cellStyle"><strong>Latitude:</strong></td>
            <td  className="cellStyle">{data.latitude || "No Location Found"}</td>
          </tr>
          <tr>
            <td className="cellStyle"><strong>Longitude:</strong></td>
            <td  className="cellStyle">{data.longitude || "No Location Found"}</td>
          </tr>
          <tr>
            <td className="cellStyle"><strong>Description:</strong></td>
            <td  className="cellStyle">{data.description}</td>
          </tr>
          <tr>
            <td  className="cellStyle"><strong>Address:</strong></td>
            <td  className="cellStyle">{locationIQ.display_name || "No Location Data"}</td>
          </tr>
        </tbody>
      </table>

      <div style={buttonContainerStyle}>
        {data.username === loginUsername && (
          <>
            <Link to={`/index/${id}/edit`}>
              <button style={{...buttonStyle, backgroundColor: "#ffa500", color: "#fff"}}>Edit</button>
            </Link>
            <button style={{...buttonStyle, backgroundColor: "#ff4136", color: "#fff"}} onClick={deletePost}>Delete</button>
          </>
        )}
        <Link to="/index">
          <button style={{...buttonStyle, backgroundColor: "#2ecc40", color: "#fff"}}>Back</button>
        </Link>
      </div>

      <div>
        <h3 style={{fontSize: "24px", marginBottom: "15px"}}>Comments</h3>
        <form onSubmit={handleSubmit} style={{marginBottom: "20px"}}>
          <input
            onChange={handleTextChange}
            placeholder="Type your comment here..."
            type="text"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ddd",
              marginBottom: "10px",
            }}
          />
          <button type="submit" style={{...buttonStyle, backgroundColor: "#0074d9", color: "#fff"}}>Submit</button>
        </form>

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
  );
}

export default IndividualView;