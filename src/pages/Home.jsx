// import { useState } from "react"
import { useNavigate } from "react-router-dom"
// import LocationButton from "../components/LocationCapture";

import FindSpot from "./FindSpot.png"
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

        <img style={{maxWidth:"300px"}} src={FindSpot} alt="Logo"></img>
<h2>In Need of Help?</h2>
<p>Click the Category Relevant to your Situation</p>
<p>You will be Taken to a Form where you can post to a Public Bulletin</p>
{/* <button id='natural6' value="Food & Water Shortage" onClick={emergencySETTER}>
Food & Water Shortage
        </button> */}
        <button id='natural1' value="Natural Disasters" onClick={emergencySETTER}>
          Natural Disasters
        </button>
        <div></div>
        <button id='natural2' value="Medical Emergencies" onClick={emergencySETTER}>
          Medical Emergencies
        </button>
        <div></div>
        <button id='natural3' value="Fire and Structure Emergencies" onClick={emergencySETTER}>
          Fire and Structure Emergencies
        </button>
        <div></div>
        <button id='natural4' value="Vehicle Emergencies" onClick={emergencySETTER}>
          Vehicle Emergencies
        </button>
        <div></div>
        <button style={{marginBottom:"20px"}} id='natural5' value="Security and Civil Unrest" onClick={emergencySETTER}>
          Security and Civil Unrest
        </button>

      </div>
    );
  }
  