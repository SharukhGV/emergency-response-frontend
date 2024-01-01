import { useParams } from "react-router-dom"
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
function IndividualView(){
    const [data, setData] = useState([])

const {id} = useParams()

useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_API}/findspots/${id}`)
      .then((response) => setData(response.data))
      .catch((e) => console.error("catch", e));
  }, []);


return(

<div>
<div>{data.description}</div>
</div>

)


}

export default IndividualView