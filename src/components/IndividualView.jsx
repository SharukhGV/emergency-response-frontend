import { useParams } from "react-router-dom"
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CommentsBox from "./CommentsBox";
import { v4 as uuidv4 } from 'uuid';

function IndividualView({loginUsername}){
    const [data, setData] = useState([])
    const [locationIQ, setLocationIQ] = useState({})

const {id} = useParams()

const [comment, setComment] = useState({
  description: "",
  findspot_id: id,
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
  setComment({...comment,description:event.target.value})
};
// console.log(comment)


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
        console.log(response.data); // Log data inside the .then() block
      })
      .catch((error) => console.error("Error:", error));
  }
}, [data.latitude, data.longitude]); // Ensure useEffect runs when latitude or longitude changes

console.log(dataComments)
console.log(id)
const navigate= useNavigate()


useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_API}/findspots/${id}`)
      .then((response) => setData(response.data))
      .catch((e) => console.error("catch", e));
  }, []);


  const deleteItem = (identification) => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_API}/findspots/${identification}`,identification)
      .then((response) => navigate("/index"))
      .catch((e) => console.error("catch", e));
  };
  


  function deletePost() {
    deleteItem(id);
  }

const storedValue = sessionStorage.getItem('username');
function parseDATE(date){
  // console.log(d.getUTCHours()); // Hours

  // console.log(d.getUTCSeconds());


console.log(dataComments)



return `${date.charAt(5)}${date.charAt(6)} / ${date.charAt(8)}${date.charAt(9)} / ${date.charAt(0)}${date.charAt(1)}${date.charAt(2)}${date.charAt(3)}`
}
return(
    
    <div>
<h2>{data.full_name}</h2>

<p>Username: {data.username}</p>
    {/* <p>Date:<span>{parseDATE(data.date)}</span></p> */}

    <img src={data.image_url} style={{width:"300px"}}></img>

<table>
  <tr>
    <th>Category</th>
    <th>Values</th>
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
<div>{data.username === storedValue ?<Link style={{fontSize:"15px"}} to={`/index/${id}/edit`}><button style={{backgroundColor:"orange", width:"100px", height:"50px"}}>Edit Page</button></Link>:null}
{data.username === storedValue ? <button style={{backgroundColor:"red", width:"100px", height:"50px"}} onClick={deletePost}>Delete Post</button> : null}
<Link to="/index"><button style={{width:"100px", height:"50px"}}>Back</button></Link></div>
<br></br>
{/* <div>{!!data.image_url ? data.image_url : null}</div> */}

{/* 
// <div className="viewsDIV">
// <div>{data.username}</div>
// <div>{data.skybrightness}</div>
// <div>{data.description}</div>
// <div>{data.date}</div>
// <div>{data.latitude}</div>
// <div>{data.longitude}</div>
// <div>{!!data.image_url ? data.image_url : null}</div>
// <div>{data.username === storedValue?<Link style={{fontSize:"15px"}} to={`/index/${id}/edit`}>Edit Page</Link>:null}</div> */}


<div>Comments Section</div>
<form onSubmit={handleSubmit}>

<input onChange={handleTextChange} type="text"></input>
<input
            style={{ width: "30%", padding: "0.6em 1.2em" }}
            type="submit"
          />
</form>


<br></br>
<br></br>
<div>
  {dataComments.map((commentz, index) => {
    if(parseFloat(commentz.findspot_id) ===parseFloat(id)){
    return (
    
    <CommentsBox loginUsername={loginUsername} key={uuidv4()} commentz={commentz} id={id} index={index} />
    
    )
    }
  })}
</div>

<br></br>

</div>

)


}

export default IndividualView