import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Cloudinary } from "@cloudinary/url-gen";
import CloudinaryUploadWidget from "./CloudinaryUploadWidget";
// This component is navigated-to from the "Home" component modals using useNavigate in the emergencySETTER function

function NewForm({ accessToken, emergencyType, setLongitude, setLatitude, lat, lng, loginUsername }) {
  const [publicId, setPublicId] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  const [uwConfig] = useState({
    cloudName: 'damkrnln2',
    uploadPreset: 'unsigned_upload',
  })
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'damkrnln2',
      uploadPreset: 'unsigned_upload',
      sources: ['local', 'url', 'camera'],
      multiple: false,
      resourceType: 'image',
      form: '#upload-form',
      fieldName: 'file',
      thumbnails: '.thumbnails',
      thumbnailTransformation: [{ width: 100, height: 100, crop: 'thumb' }],
    },
  })

  const [commInteractions, setcommInteractions] = useState({
    username: loginUsername,
    user_post_id: null
  });


  const navigate = useNavigate()
  const [file, setFile] = useState(null);

  const [person, setPerson] = useState({
    full_name: "",
    latitude: lat,
    longitude: lng,
    description: "",
    skybrightness: emergencyType,
    image_url: "",
    username: loginUsername,
  });


  useEffect(() => {

    setImagePreview(file);


  }, [file]);

  useEffect(() => {
    if (file) {
      setPerson((prevPerson) => ({
        ...prevPerson,
        image_url: file,
      }));
    }
  }, [file]);
  useEffect(() => {
    if (imagePreview) {
      setPerson((prevPerson) => ({
        ...prevPerson,
        image_url: imagePreview,
      }));
    }
  }, [imagePreview]);


  useEffect(() => {
    setPerson((prevPerson) => ({
      ...prevPerson,
      latitude: lat,
      longitude: lng,
    }));
  }, [lat, lng]);

  const addFindSpot = (newFindSpot) => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_API}/userposts`, newFindSpot)
      .then((response) => {
       console.log(response.data) 

        navigate("/index");
      })
      .catch((e) => console.error("catch", e));
  };



  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {

          setLatitude(parseFloat(position.coords.latitude));
          setLongitude(parseFloat(position.coords.longitude));
        },
        (error) => {
          console.error("Error getting location:", error);
          window.alert("Please Enable Location and Refresh This Page");
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);


  const handleTextChange = (event) => {
    const { id, value } = event.target;
    setPerson((prevPerson) => ({
      ...prevPerson,
      [id]: value,
    }));
  };





  const handleSubmit = (event) => {
    event.preventDefault();
    addFindSpot(person);
  }


  return (
    <div style={{ paddingTop: "30px" }}>{accessToken ? <div style={{ maxWidth: "500px", margin: "auto", paddingTop: "15px" }} className="edit">
      <h2>New Post:</h2>
      <h4>Posting Will Be Public to Everyone</h4>
      <form onSubmit={handleSubmit}>
        <div></div>
        <label htmlFor="full_name">Post Title:</label>
        <div></div>
        <input style={{ width: "300px" }}
          id="full_name"
          value={person.full_name.replace(/[^a-z]/gi, ' ')}
          type="text"
          onChange={handleTextChange}
          placeholder="Place Nickname or Post Title..."
          required
        />

        <div></div>

        <div></div>
        <div></div>
        <label htmlFor="description">Describe Your Environment:</label>
        <div></div>
        <textarea style={{ width: "300px", borderRadius: "10px" }}
          id="description"
          name="description"
          value={person.description}
          rows="7"
          cols="25"
          placeholder="Write about what you see..."
          onChange={handleTextChange}
        ></textarea>
        <div></div>

        <CloudinaryUploadWidget setFile={setFile} uwConfig={uwConfig} setPublicId={setPublicId} />
        <div></div>
        <input
          style={{ maxWidth: "300px", padding: "0.6em 1.2em" }}
          type="submit"
        />
      </form>


      {imagePreview && (
        <img
          src={imagePreview}
          alt="Preview"
          style={{ maxWidth: "100%", maxHeight: "200px", marginTop: "10px" }}
        />
      )}

      <div
        style={{ marginTop: "20px", marginBottom: "20px" }}
        className="cardEmergency"
      >

        <div>
          Latitude: <span style={{ color: "beige" }}>{lat}</span>
        </div>
        <div>
          Longitude: <span style={{ color: "beige" }}>{lng}</span>
        </div>
      </div>
    </div> : <p>Please Log In to Continue</p>}</div>
  );
};


export default NewForm;
