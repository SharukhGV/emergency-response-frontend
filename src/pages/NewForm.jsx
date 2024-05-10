import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import {Cloudinary} from "@cloudinary/url-gen";
import dipperDefault from "../components/dipperDefault.png"
import mountainsky from "../components/mountainsky.jpg"
  // const cld = new Cloudinary({cloud: {cloudName: 'damkrnln2'}});
  // import {AdvancedImage} from '@cloudinary/react';
  import {Cloudinary} from "@cloudinary/url-gen";
  import CloudinaryUploadWidget from "./CloudinaryUploadWidget";
import { color } from "@cloudinary/url-gen/qualifiers/background";
function NewForm({  accessToken, emergencyType, setLongitude, setLatitude, lat, lng, loginUsername }) {
  // Create a Cloudinary instance and set your cloud name.
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




    const navigate=useNavigate()
    const [file, setFile] = useState(null);
    // const [previewfile, previewFiles] = useState(null);
  
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
      // const myImage = cld.image(publicId);
     
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
// two useeffects to allow time processing of image
      useEffect(() => {
        if (imagePreview) {
          setPerson((prevPerson) => ({
            ...prevPerson,
            image_url: imagePreview,
          }));
        }
      }, [imagePreview]);
      
  //       const myImage = cld.image(publicId);

  //   setImagePreview(file)
  //   setPerson({ ...person, image_url: imagePreview });

  // },[file])
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
        console.log(response.data);

        navigate("/index");
      })
      .catch((e) => console.error("catch", e));
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
        
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
 



// cld.image returns a CloudinaryImage with the configuration set.
// const myImage = cld.image(file);



    return (
      <div style={{paddingTop:"30px"}}>{accessToken ?<div style={{backgroundColor:"#e6fff7",border:"solid", borderColor:"black", maxWidth:"500px", borderRadius:"10px", margin:"auto", paddingTop:"15px"}} className="edit">
        <h2>New Post:</h2>
        <h4>Posting Will Be Public to Everyone</h4>
        <form onSubmit={handleSubmit}>
          {/* <input type="hidden" id="user_id" name="user_id" value={userShow2}></input> */}
          <div></div>
          <label htmlFor="full_name">Post Title:</label>
          <div></div>
          <input style={{width:"300px"}}
            id="full_name"
            value={person.full_name.replace(/[^a-z]/gi, ' ')}
            type="text"
            onChange={handleTextChange}
            placeholder="Place Nickname or Post Title..."
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
          <textarea style={{width:"300px", borderRadius:"10px"}}
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
            type="file" name="image" onChange={handleFileChange}
          /> */}
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
{/* 
<h3>Card Preview</h3>
        <div style={{fontFamily:"Arial"}} className="card">
        <img className="card__image" alt="" src={mountainsky} />
      <div className="card__overlay">
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img className="card__thumb" src={dipperDefault} alt="" />
          <div className="card__header-text">
            <h5 style={{fontFamily:"Arial"}} >Location Nickname:</h5>
            <h3 className="card__title">{person.full_name}</h3>            
            <span style={{fontFamily:"Arial"}}  className="card__status">SOME DATE HERE</span>
          </div>
        </div><div style={{fontFamily:"Arial"}} >{person.skybrightness}</div>
        <p style={{fontFamily:"Arial", fontSize:"10px"}}  className="card__description">{person.description}</p>
        <div style={{fontSize:"15px", color:"blue"}} >View Page</div>
       
        <div></div>

      </div>
    </div>  */}



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
      </div>:<p>Please Log In to Continue</p>}</div>
    );
  };


export default NewForm;
