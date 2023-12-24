// import { useState } from "react"
import { useNavigate } from "react-router-dom"
// import LocationButton from "../components/LocationCapture";

// import FindSpot from "./FindSpot.png"
import logo from "./logo.png"

export default function Home({setEmergencyType}){
    const navigate = useNavigate(); // Initialize the navigation function

    const emergencySETTER = (event) => {
      event.preventDefault();
      const emergencyType = event.target.value;
      setEmergencyType(emergencyType)
      navigate("/form");
    };
  
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <div></div>

        <img style={{maxWidth:"300px"}} src={logo} alt="Logo"></img>
<h2>Light Pollution or Dark Skies</h2>
<p>Report light-polluted areas or dark skies for others to enjoy</p>
<p>You will be Taken to a Form where you can post to a Public Bulletin</p>
{/* <button id='natural6' value="Food & Water Shortage" onClick={emergencySETTER}>
Food & Water Shortage
        </button> */}
        <button style={{backgroundColor:"black", color:"white"}} id='natural1' value=" 0-10% Light Pollution" onClick={emergencySETTER}>
        0-10% Light Pollution: ・:*˚:✧｡
                </button>
        <div></div>
        <button style={{backgroundColor:"black", color:"white"}} id='natural2' value="10-30% Light Pollution" onClick={emergencySETTER}>
        10-30% Light Pollution: *˚✧｡

</button>
        <div></div>
        <button style={{backgroundColor:"rgb(58, 55, 50)", color:"white"}} id='natural3' value="30-50% Light Pollution" onClick={emergencySETTER}>
        30-50% Light Pollution:✧｡
</button>
        <div></div>
        <button style={{backgroundColor:"rgb(85, 72, 43)", color:"white"}} id='natural4' value="50-70% Light Pollution" onClick={emergencySETTER}>
        50-70% Light Pollution:✧
</button>
        <div></div>
        <button style={{backgroundColor:"rgb(119, 85, 10)", color:"white", marginBottom:"20px"}} id='natural5' value="70-100% Light Pollution" onClick={emergencySETTER}>
        70-100% Light Pollution:
</button>

      </div>
    );
  }
  