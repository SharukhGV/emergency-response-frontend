
import axios from "axios"
import { useEffect, useState } from "react"
import Planet from "./Planet"
function PlanetsVisible() {

    const [planets, setPlanets] = useState([])
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);

    useEffect(() => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              // const latitude = position.coords.latitude;
              // const longitude = position.coords.longitude;
              // setLocation({ latitude, longitude });
              // setLocationFound(true);
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



    useEffect(() => {
        axios.get(`https://api.visibleplanets.dev/v3?latitude=${Math.round(latitude)}&longitude=${Math.round(longitude)}`).then(res => {
            // console.log(res.data.data)
            setPlanets(res.data.data)
        }
        )

    }, [latitude, longitude])

// console.log(planets)


    return (


        <div>

<h1 style={{color:"purple"}}>Current Visible Planets</h1>
<h3 style={{color:"yellowgreen"}}>Latitude: {latitude}</h3>
<h3 style={{color:"yellowgreen"}}>Longitude: {longitude}</h3>
             {planets.map((planet, index)=>{
            return(
            <Planet key={index} planet={planet} />
            )
            })} 
        </div>
    )



}
export default PlanetsVisible