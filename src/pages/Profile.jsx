import profilePic from "./profilePic.png"
import { useEffect, useState } from "react"
import { Cloudinary } from "@cloudinary/url-gen";
import CloudinaryUploadWidget from "./CloudinaryUploadWidget";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
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
          .then((response) => setDataProfile(response.data))
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

                navigate(`/profile/`);
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
    
            navigate(`/profile`);
          })
          .catch((e) => console.error("catch", e));
      };
      function editProfile() {
        const matchingProfile = dataProfile.find(prof => prof.my_username === loginUsername);
      
        if (matchingProfile) {
          updateProfile(profilephoto, matchingProfile.id);
        } else {
          console.error('Profile not found for username:', loginUsername);
        }
      }

      
      
    return (
<>
    
{dataProfile.map(prof =>{
if(prof.my_username===loginUsername){
    return(
<div style={{width:"350px", margin:"auto"}}>
    <img src={prof.image_url} alt="profile icon" style={{ width: "100%" }}></img> 
                <h1>Welcome Back</h1>
                <p className="title">{loginUsername}</p>
                <p>Hive of Heaven User</p>
</div>
    )
}
})}
<div><CloudinaryUploadWidget setFile={setFile} uwConfig={uwConfig} setPublicId={setPublicId} /></div>
{
  dataProfile.length > 0 && dataProfile[0].my_username === loginUsername ? (
    <button onClick={editProfile}>Edit Profile Image</button>
  ) : (
    <button onClick={addImage}>Upload Profile Image</button>
  )
}


</>

    )



}


export default Profile