import { useParams } from "react-router-dom"
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function IndividualView({}){
    const [data, setData] = useState([])
    const [locationIQ, setLocationIQ] = useState({})

const {id} = useParams()




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






useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_API}/findspots/${id}`)
      .then((response) => setData(response.data))
      .catch((e) => console.error("catch", e));
  }, []);

const storedValue = sessionStorage.getItem('username');
function parseDATE(date){
  // console.log(d.getUTCHours()); // Hours

  // console.log(d.getUTCSeconds());
return `${date.charAt(5)}${date.charAt(6)} / ${date.charAt(8)}${date.charAt(9)} / ${date.charAt(0)}${date.charAt(1)}${date.charAt(2)}${date.charAt(3)}`
}
return(
    
    <div>

<h2>{data.full_name}</h2>

<p>Username: {data.username}</p>
    {/* <p>Date:<span>{parseDATE(data.date)}</span></p> */}


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
<div>{data.username === storedValue?<Link style={{fontSize:"15px"}} to={`/index/${id}/edit`}>Edit Page</Link>:null}</div>


<div>{!!data.image_url ? data.image_url : null}</div>

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

</div>

)


}

export default IndividualView