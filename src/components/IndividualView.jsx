import { useParams } from "react-router-dom"
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function IndividualView({}){
    const [data, setData] = useState([])

const {id} = useParams()

useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_API}/findspots/${id}`)
      .then((response) => setData(response.data))
      .catch((e) => console.error("catch", e));
  }, []);

const storedValue = sessionStorage.getItem('username');

return(

<div className="viewsDIV">
<div>{data.username}</div>
<div>{data.skybrightness}</div>
<div>{data.description}</div>
<div>{data.date}</div>
<div>{data.latitude}</div>
<div>{data.longitude}</div>
<div>{!!data.image_url ? data.image_url : null}</div>
<div>{data.username === storedValue?<Link style={{fontSize:"15px"}} to={`/index/${id}/edit`}>Edit Page</Link>:null}</div>

</div>

)


}

export default IndividualView