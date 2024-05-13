import profilePic from "./profilePic.png"
import { useEffect, useState } from "react"
import { Cloudinary } from "@cloudinary/url-gen";
import CloudinaryUploadWidget from "./CloudinaryUploadWidget";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import ProfileCard from "./ProfileCard";
function Profile({ loginUsername }) {
    // const [data,setData] =useState([])
    const [publicId, setPublicId] = useState("");
    const [imagePreview, setImagePreview] = useState(null);
    const [file, setFile] = useState(null);

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

    useEffect(() => {
        // const myImage = cld.image(publicId);
       
            setImagePreview(file);
            
        
        }, [file]);
  


    const navigate = useNavigate()

    const [profilephoto, setProfilePhoto] = useState({
        image_url: "",
        about: "",
        occupation: "",
        my_username: loginUsername
    })

const [dataProfile, setDataProfile]=useState([])
    useEffect(() => {
        axios
          .get(`${import.meta.env.VITE_BACKEND_API}/profile`)
          .then((response) => setDataProfile(response.data.data))
          .catch((e) => console.error("catch", e));
      }, []);

useEffect(()=>{
    setProfilePhoto({...profilephoto, image_url:file})
},[file])

useEffect(()=>{
    setProfilePhoto({...profilephoto, image_url:imagePreview})
},[imagePreview])

    const addProfile = (newProfile) => {
        axios
            .post(`${import.meta.env.VITE_BACKEND_API}/profile`, newProfile)
            .then((response) => {
                console.log(response.data);

                navigate(`/`);
            })
            .catch((e) => console.error("catch", e));
    };


    function addImage() {
        addProfile(profilephoto)
    }


   
    const updateProfile = (updateProfile, ident) => {
        axios
          .put(`${import.meta.env.VITE_BACKEND_API}/profile/${ident}`, updateProfile)
          .then((response) => {
            console.log(response.data);
    
            navigate(`/`);
          })
          .catch((e) => console.error("catch", e));
      };
              const matchingProfile = dataProfile.find(prof => prof.my_username === loginUsername);

      function editProfile() {
      
        if (matchingProfile) {
          updateProfile(profilephoto, matchingProfile.id);
        } else {
          console.error('Profile not found for username:', loginUsername);
        }
      }
      

      
      
    return (
<>
    <br></br>
    <br></br>
<ProfileCard dataProfile={dataProfile} loginUsername={loginUsername}/>
<br></br>
<div><CloudinaryUploadWidget setFile={setFile} uwConfig={uwConfig} setPublicId={setPublicId} /></div>
{matchingProfile ? (
        <button style={{backgroundColor:"green", width:"300px"}} onClick={editProfile}>Submit</button>
      ) : (
        <button style={{backgroundColor:"green", width:"300px"}} onClick={addImage}>Submit</button>
      )}

<br></br>
<br></br>
</>

    )



}


export default Profile