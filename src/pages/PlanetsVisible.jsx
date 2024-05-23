
import axios from "axios"
import { useEffect, useState } from "react"
import Planet from "./Planet"
function PlanetsVisible() {

  const [planets, setPlanets] = useState([])
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [errorMsg, setErrorMsg] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // const latitude = position.coords.latitude;
          // const longitude = position.coords.longitude;
          // setLocation({ latitude, longitude });
          // setLocationFound(true);
          setLatitude(parseFloat(position.coords.latitude));
          setLongitude(parseFloat(position.coords.longitude));
          setErrorMsg("")
        },
        (error) => {
          console.error("Error getting location:", error);
          // setLocationFound(false);
          setErrorMsg(error.message)
          console.log(error.message)
          // window.alert("Please Enable Location and Refresh This Page");
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      // setLocationFound(false);

    }
  }, []); // Empty dependency array to run only once



  // useEffect(() => {
  //     axios.get(`https://api.visibleplanets.dev/v3?latitude=${Math.round(latitude)}&longitude=${Math.round(longitude)}`).then(res => {
  //         // console.log(res.data.data)
  //         setPlanets(res.data.data)
  //     }
  //     )

  // }, [latitude, longitude])

  useEffect(() => {
    async function fetchData() {
      try {
        // setErrorMsg("");
        setLoading(true);
        const response = await fetch(`https://api.visibleplanets.dev/v3?latitude=${Math.round(latitude)}&longitude=${Math.round(longitude)}`);
        if (response.ok) {
          // handle success
          const { data } = await response.json();
          setPlanets(data)
        } else {
          // 400, 404, 500, etc. will end up here
          // handle error response from server
          const { error } = await response.json();
          setErrorMsg(error.message);
        }
      } catch (err) {
        setErrorMsg(err.message);
      } finally {
        // whatever goes in finally is guaranteed to run
        // even if we go into catch
        setLoading(false);
      }
    }
    fetchData();
  }, [latitude, longitude]);

  // console.log(planets)

  function renderPlanets() {
    if (loading) return (
      <div id="loading-wrapper">
        <div id="loading-text">LOADING</div>
        <div id="loading-content"></div>
      </div>

    )
    else if (errorMsg !== "") {
      return <div>
        <br></br>
        <h1 style={{ color: "red" }}> OOPS! {errorMsg}</h1>

      </div>
    }
    else {
      return (
        <>
          <br></br>
          <div style={{ border: "dotted" }}>

            <h1 style={{ color: "darkred" }}>Visible Celestial Bodies</h1>
            <fieldset style={{ border: "solid", margin: "30px" }}>
              <legend style={{ backgroundColor: "darkred", color: "white" }}>Your Geolocation: Enabled</legend>
              <p style={{ color: "gray", fontSize: "13px" }}>Latitude: {latitude}</p>
              <p style={{ color: "gray", fontSize: "13px" }}>Longitude: {longitude}</p></fieldset>
            {planets.map((planet, index) => {
              return (<>
                <Planet key={index} planet={planet} />
              </>
              )
            })}
            <br></br>
          </div>

          <br></br>
          <br></br>      </>

      )
    }

  }

  return (
    <>
      <>{renderPlanets()}</>
    </>
  )



}
export default PlanetsVisible