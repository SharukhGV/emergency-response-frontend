import GoogleMaps from "../components/IndexPage/GoogleMaps";
import SearchPeople from "../components/IndexPage/SearchPeople";
import telescopeicon2 from "./telescopeicon2.png"
import markerImage from "./markerImage.png"
import { useState } from "react";
import SearchPreserves from "../components/IndexPage/SearchPreserves";
import SearchObservatories from "../components/IndexPage/SearchObservatories";
import observatoryMarker from "./observatoryMarker.png"
import "./index.css"
function Index({ setMapMarkers, mapMarkers, location, setAccessToken, loginUsername }) {

  const [observatoryMarkers, setObservatoryMarker] = useState([])

  const [preserveMarkers, setPreserveMarkers] = useState([])

  const [darkPreserve, setDarkPreserve] = useState(0)

  function darkSKIES() {
    setDarkPreserve(1)
  }

  function communityPosts() {
    setDarkPreserve(2)
  }


  function ObservatoryPosts() {
    setDarkPreserve(3)
  }



  const [showLegend, setShowLegend] = useState(false)
  function legendToggle() {
    setShowLegend(!showLegend)
  }
  return (
    <>
     <div className="sci-fi-container">
  <GoogleMaps preserveMarkers={preserveMarkers} mapMarkers={mapMarkers} observatoryMarkers={observatoryMarkers} />
  {/* <br />
  <button style={{border:"solid", borderColor:"whitesmoke"}} className="legend-button" onClick={legendToggle}>🧭</button>
  <br /> */}
  {/* <div>
    <h1>Astronomy Atlas</h1>
    <h3>Points of Interest</h3>
    <br />
    {showLegend && (
      <div className="marker-legend">
        <img src={telescopeicon2} alt="Dark Sky Preserve" />
        <div>This Marker on the Map denotes a Dark Sky Preserve</div>
        <img src={observatoryMarker} alt="Public Observatory" />
        <div>This Marker on the Map denotes a public Observatory</div>
        <img src={markerImage} alt="Community Point of Interest" />
        <div>This Marker on the Map denotes a Point of Interest by a Community User</div>
      </div>
    )}
  </div>
  <br />
  <button style={{border:"solid", borderColor:"whitesmoke"}} className="sci-fi-button" onClick={darkSKIES}>Dark Sky Preserves 🌌</button>
  <br />
  <button style={{border:"solid", borderColor:"whitesmoke"}} className="sci-fi-button" onClick={ObservatoryPosts}>Public Observatories 🔭</button>
  <br />
  <button style={{border:"solid", borderColor:"whitesmoke"}} className="sci-fi-button" onClick={communityPosts}>Community Posts 🌐</button>
  <br />
  {darkPreserve === 1 && <h3>Dark Sky Preserves</h3>}
  {darkPreserve === 2 && <h3>Community Posts</h3>}
  {darkPreserve === 3 && <h3>Public Observatories</h3>}
  <div className="card-container">
    {darkPreserve === 1 && <SearchPreserves preserveMarkers={preserveMarkers} setPreserveMarkers={setPreserveMarkers} />}
    {darkPreserve === 2 && <SearchPeople setAccessToken={setAccessToken} loginUsername={loginUsername} location={location} mapMarkers={mapMarkers} setMapMarkers={setMapMarkers} />}
    {darkPreserve === 3 && <SearchObservatories observatoryMarkers={observatoryMarkers} setObservatoryMarker={setObservatoryMarker} />}
  </div> */}
  <SearchPeople e setAccessToken={setAccessToken} loginUsername={loginUsername} location={location} mapMarkers={mapMarkers} setMapMarkers={setMapMarkers}/>
</div>
    </>
  );
}
export default Index