
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

          setLatitude(parseFloat(position.coords.latitude));
          setLongitude(parseFloat(position.coords.longitude));
          setErrorMsg("")
        },
        (error) => {
          console.error("Error getting location:", error);
          setErrorMsg(error.message)
          console.log(error.message)
        }
      );
    } else {
      setErrorMsg(error.message)
      console.error("Geolocation is not supported by this browser.");

    }
  }, []);



  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(`https://api.visibleplanets.dev/v3?latitude=${Math.round(latitude)}&longitude=${Math.round(longitude)}`);
        if (response.ok) {
          const { data } = await response.json();
          setPlanets(data)
        } else {

          const { error } = await response.json();
          setErrorMsg(error.message);
        }
      } catch (err) {
        setErrorMsg(err.message);
      } finally {

        setLoading(false);
      }
    }
    fetchData();
  }, [latitude, longitude]);


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
        <><br></br>
        <br></br>
          <div className="visiblePlanets">

            <h4><strong>Visible Celestial Bodies</strong></h4>
            <div style={{maxWidth:"500px",margin:"auto"}}>
            <fieldset style={{ border: "solid", margin: "30px", borderRadius:"10px" }}>
              <legend style={{ backgroundColor: "darkred", color: "white" }}>Your Geolocation: Enabled</legend>
              <p style={{ color: "gray", fontSize: "13px" }}>Latitude: {latitude}</p>
              <p style={{ color: "gray", fontSize: "13px" }}>Longitude: {longitude}</p></fieldset>
              </div>
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