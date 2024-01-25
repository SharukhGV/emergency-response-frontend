import axios from "axios"
import { useState,useEffect } from "react"
function NewMoonNext(){

const[newmoon,setNewMoon]=useState([])
const [latitude, setLatitude] = useState(null);
const [longitude, setLongitude] = useState(null);

useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
  
          setLatitude( parseFloat(position.coords.latitude));
          setLongitude( parseFloat(position.coords.longitude));
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

 
    const params = { lat: latitude, lon: longitude };
    
    const headers = {
      'X-RapidAPI-Host': 'moon-phase.p.rapidapi.com',
      'X-RapidAPI-Key': import.meta.env.VITE_RAPID_MOON,
    };
  useEffect(()=>{
   
  axios.get("https://moon-phase.p.rapidapi.com/basic", { params, headers })
    .then(response => {
      const data = response.data;
      const daysUntilNextNewMoon = data.days_until_next_new_moon;
      console.log(`Days until next new moon: ${daysUntilNextNewMoon}`);
      setNewMoon(daysUntilNextNewMoon)
    })
    .catch(error => {
      console.error(`Error: ${error.response.status}, ${error.response.data}`);
    });
  },[])

return(

<div>{newmoon}🌑</div>

)

}

export default NewMoonNext