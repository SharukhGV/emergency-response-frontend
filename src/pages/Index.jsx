import GoogleMaps from "../components/IndexPage/GoogleMaps";
import SearchPeople from "../components/IndexPage/SearchPeople";
import telescopeicon2 from "./telescopeicon2.png"
import markerImage from "./markerImage.png"
import { useState } from "react";
import SearchPreserves from "../components/IndexPage/SearchPreserves";
import SearchObservatories from "../components/IndexPage/SearchObservatories";
import observatoryMarker from "./observatoryMarker.png"

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
      <div>
        <GoogleMaps preserveMarkers={preserveMarkers} mapMarkers={mapMarkers} observatoryMarkers={observatoryMarkers} />
        <br></br>
        <button style={{ backgroundColor: " #00000000", color: "yellow" }} onClick={legendToggle}>🧭</button>
        <br></br>
        <div>
          <h1><strong>Astronomy Atlas</strong></h1>
          <h3>Points of Interest</h3>
          <br></br>
          {showLegend ? <div className="markerLegend">

            <img style={{ paddingRight: "10px" }} src={telescopeicon2}></img>
            <div>This Marker on the Map denotes a Dark Sky Preserve</div>

            <img src={observatoryMarker}></img>
            <div>This Marker on the Map denotes a public Observatory</div>

            <img src={markerImage}></img>
            <div>This Marker on the Map denotes a Point of Interest by a Community User</div>


          </div> : null}</div>
        <br></br>

        <button className="indexButtonsPRESERVECOMMUNITYOBSERVATORY" onClick={(darkSKIES)} style={{ width: "250px", borderRadius: "20px", color: "green" }}>Dark Sky Preserves 🌌</button>
        <br></br>
        <button className="indexButtonsPRESERVECOMMUNITYOBSERVATORY" onClick={(ObservatoryPosts)} style={{ width: "250px", borderRadius: "20px", color: "gray" }}>Public Observatories 🔭</button>
        <br></br>
        <button className="indexButtonsPRESERVECOMMUNITYOBSERVATORY" onClick={communityPosts} style={{ width: "250px", borderRadius: "20px", color: "orange" }}>Community Posts 🌐</button>
        <br></br>
        {darkPreserve === 1 ? <h3 style={{ fontSize: "15px" }}>Dark Sky Preserves</h3> : null}
        {darkPreserve === 2 ? <h3 style={{ fontSize: "15px" }}> Community Posts</h3> : null}
        {darkPreserve === 3 ? <h3 style={{ fontSize: "15px" }}>Public Observatories</h3> : null}
        <div className="cardCONTAIN">
          {darkPreserve === 1 ? <div><SearchPreserves preserveMarkers={preserveMarkers} setPreserveMarkers={setPreserveMarkers} /></div>
            : null}


          {darkPreserve === 2 ? <SearchPeople setAccessToken={setAccessToken} loginUsername={loginUsername} location={location} mapMarkers={mapMarkers} setMapMarkers={setMapMarkers} /> : null}

          {darkPreserve === 3 ? <div><SearchObservatories observatoryMarkers={observatoryMarkers} setObservatoryMarker={setObservatoryMarker} /></div>
            : null}
        </div>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </>
  );
}
export default Index