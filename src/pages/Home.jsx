import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import 'reactjs-popup/dist/index.css';
import hiveheavenLOGO from "./images/hiveheavenLOGO.png"
import hiveheavenLOGOWHITE from "./images/hiveheavenLOGOWHITE.png"
import "./home.css"
import HomeAnomaly from "./HomeAnomaly"
export default function Home({ setEmergencyType, loginUsername, accessToken, toggleTheme, theme }) {
	const navigate = useNavigate();

	const [modal1, setModal1] = useState(false)
	const [modal2, setModal2] = useState(false)
	const [modal3, setModal3] = useState(false)
	const [modal4, setModal4] = useState(false)
	const [modal5, setModal5] = useState(false)
	const [modal6, setModal6] = useState(false)

	const [modalButtons, setModalButtons] = useState(false)


	function modal1Click() {

		setModal1(!modal1)
	}

	function modal2Click() {

		setModal2(!modal2)
	}

	function modal3Click() {

		setModal3(!modal3)
	}

	function modal4Click() {

		setModal4(!modal4)
	}

	function modal5Click() {

		setModal5(!modal5)
	}
	function modal6Click() {
		setModal6(!modal6)
	  }


	const emergencySETTER = (event) => {
		event.preventDefault();
		const emergencyType = event.target.value;
		setEmergencyType(emergencyType)
		navigate("/form");
	};

	function renderLOGO() {
		if (theme === "light") {

			return (<img onClick={toggleTheme} style={{ maxWidth: "300px", height: "auto" }} src={hiveheavenLOGO}></img>)
		}
		if (theme === "dark") {
			return (
				<img onClick={toggleTheme} style={{ maxWidth: "300px", height: "auto" }} src={hiveheavenLOGOWHITE}></img>

			)
		}
	}

	function renderModalButtons() {
		return (
			<div className="buttonPollCont">
			<button style={{height:"50px", borderRadius:"20px", width:"350px", backgroundColor:"brown", color:"white"}} className="earthTremors" onClick={modal1Click}>Earth Tremors</button>        <br></br>
			<button style={{height:"50px", borderRadius:"20px", width:"350px", backgroundColor:"gray", color:"white"}} className="migratoryPatterns" onClick={modal2Click}>Migratory Pattern Shifts</button>        <br></br>
			<button style={{height:"50px", borderRadius:"20px", width:"350px", backgroundColor:"darkorange", color:"white"}} className="invasiveSpecies" onClick={modal3Click}>Invasive Species Sightings</button>        <br></br>
			<button style={{height:"50px", borderRadius:"20px", width:"350px", backgroundColor:"darkblue", color:"white"}} className="unusualWeather" onClick={modal4Click}>Unusual Weather</button>        <br></br>
			<button style={{height:"50px",width:"350px",borderRadius:"20px", backgroundColor:"darkgreen", color:"white"}} className="wildlifeAnomalies" onClick={modal5Click}>Wildlife Anomalies</button>
			<button style={{height:"50px",width:"350px",borderRadius:"20px", backgroundColor:"blue", color:"white"}} className="waterLevelChanges" value="Water Level Changes" onClick={modal6Click}>Water Level Changes</button>
		<button style={{height:"50px",width:"350px",borderRadius:"20px", backgroundColor:"#000000", color:"white"}} className="otherCategory" value="Anything Else" onClick={emergencySETTER}>Anything Else</button>

				<br></br></div>
		)
	}
	function boolModalSet() {
		setModalButtons(!modalButtons)
	}
	return (
		<div  >
			{renderLOGO()}
			<h3>{!!loginUsername ? "Welcome" : "Login to view all Features"}</h3>
			<h3 style={{fontSize:"13px"}}>{loginUsername}</h3>
			<div >
				<br></br>
				<div className="milkyBand">This application aims to address the problem of environmental destruction and societal ignorance by raising awareness through symbolic representations of astronomical, biological, and geologic anomalies in dreams, encouraging users to reflect on human behaviors that contribute to these issues and inspiring action to prevent or prepare for potential apocalyptic scenarios.
					<br></br></div>
				<br></br>

				{modalButtons ? <button style={{border:"solid", borderColor:"whitesmoke"}} onClick={boolModalSet}>Report Anomaly Sightings</button> : <button style={{border:"solid", borderColor:"whitesmoke"}} onClick={boolModalSet}>Toggle Celestial Report Buttons</button>}

				<br></br>
				<br></br>
				{modalButtons ? renderModalButtons() : null}

				<br></br>
			</div>
<HomeAnomaly/>

{modal1 ?
  <div className="modal">
    <article className="modal-container">
      <header className="modal-container-header">
        <h1 className="modal-container-title">
          🌋 Earth Tremors
        </h1>
      </header>
      <section className="modal-container-body rtf">
        <h2>Seismic Activity</h2>
        <h3>Description</h3>
        <p>Earth tremors are minor seismic events that can be felt as vibrations or shaking of the ground. They may range from barely noticeable to more pronounced movements, depending on their intensity and proximity. These tremors can be caused by various factors, including tectonic plate movements, volcanic activity, or human-induced activities like mining or fracking.</p>
        <h3>What to Look For</h3>
        <p>Pay attention to subtle vibrations, rattling of objects, or swaying of hanging items. In stronger tremors, you might experience difficulty standing or see visible movement in structures.</p>
        <p>If you've experienced earth tremors, click "Create Entry" to report your observation.</p>
      </section>
      <footer className="modal-container-footer">
        <button className="button is-ghost" style={{ backgroundColor: "Green", color: "white", fontSize: "10px" }} id='natural2' value="Earth Tremors" onClick={emergencySETTER}>Create Entry</button>
        <button style={{ fontSize: "10px" }} onClick={modal1Click} className="button is-primary">Close</button>
      </footer>
    </article>
  </div>
: null}

{modal2 ?
  <div className="modal">
    <article className="modal-container">
      <header className="modal-container-header">
        <h1 className="modal-container-title">
          🐦 Migratory Pattern Shifts
        </h1>
      </header>
      <section className="modal-container-body rtf">
        <h2>Changes in Animal Migration</h2>
        <h3>Description</h3>
        <p>Migratory pattern shifts occur when animals change their usual migration routes, timing, or destinations. These shifts can be indicators of environmental changes, including climate change, habitat loss, or alterations in food availability. Observing these changes can provide valuable data on ecosystem health and global environmental trends.</p>
        <h3>What to Look For</h3>
        <p>Notice unusual presence or absence of migratory species in your area, changes in arrival or departure times of seasonal visitors, or unexpected species appearing in your region.</p>
        <p>If you've observed changes in migratory patterns, click "Create Entry" to report your observation.</p>
      </section>
      <footer className="modal-container-footer">
        <button className="button is-ghost" style={{ backgroundColor: "Green", color: "white", fontSize: "10px" }} id='natural2' value="Migratory Pattern Shifts" onClick={emergencySETTER}>Create Entry</button>
        <button style={{ fontSize: "10px" }} onClick={modal2Click} className="button is-primary">Close</button>
      </footer>
    </article>
  </div>
: null}

{modal3 ?
  <div className="modal">
    <article className="modal-container">
      <header className="modal-container-header">
        <h1 className="modal-container-title">
          🌱 Invasive Species Sightings
        </h1>
      </header>
      <section className="modal-container-body rtf">
        <h2>Non-Native Species Observations</h2>
        <h3>Description</h3>
        <p>Invasive species are plants, animals, or other organisms that are not native to an ecosystem and can cause harm to the environment, economy, or human health. These species can disrupt local ecosystems, outcompete native species, and alter habitats. Early detection of invasive species is crucial for effective management and control.</p>
        <h3>What to Look For</h3>
        <p>Watch for unfamiliar plants or animals in your area, especially those that seem to be spreading rapidly or outcompeting native species. Pay attention to changes in local flora and fauna.</p>
        <p>If you've spotted a potential invasive species, click "Create Entry" to report your sighting.</p>
      </section>
      <footer className="modal-container-footer">
        <button className="button is-ghost" style={{ backgroundColor: "Green", color: "white", fontSize: "10px" }} id='natural2' value="Invasive Species Sightings" onClick={emergencySETTER}>Create Entry</button>
        <button style={{ fontSize: "10px" }} onClick={modal3Click} className="button is-primary">Close</button>
      </footer>
    </article>
  </div>
: null}

{modal4 ?
  <div className="modal">
    <article className="modal-container">
      <header className="modal-container-header">
        <h1 className="modal-container-title">
          🌪️ Unusual Weather
        </h1>
      </header>
      <section className="modal-container-body rtf">
        <h2>Atypical Weather Phenomena</h2>
        <h3>Description</h3>
        <p>Unusual weather events are meteorological phenomena that deviate significantly from the typical patterns in a given area. These can include extreme temperatures, unseasonable precipitation, severe storms, or other weather anomalies. Tracking unusual weather can help identify climate trends and potential impacts on ecosystems and human activities.</p>
        <h3>What to Look For</h3>
        <p>Observe weather conditions that seem out of place for your region or season, such as unexpected snowfall, heatwaves, prolonged droughts, or intense storms. Pay attention to the frequency and intensity of these events.</p>
        <p>If you've experienced unusual weather, click "Create Entry" to report your observation.</p>
      </section>
      <footer className="modal-container-footer">
        <button className="button is-ghost" style={{ backgroundColor: "Green", color: "white", fontSize: "10px" }} id='natural2' value="Unusual Weather" onClick={emergencySETTER}>Create Entry</button>
        <button style={{ fontSize: "10px" }} onClick={modal4Click} className="button is-primary">Close</button>
      </footer>
    </article>
  </div>
: null}

{modal5 ?
  <div className="modal">
    <article className="modal-container">
      <header className="modal-container-header">
        <h1 className="modal-container-title">
          🦋 Wildlife Anomalies
        </h1>
      </header>
      <section className="modal-container-body rtf">
        <h2>Unusual Animal Behavior or Appearances</h2>
        <h3>Description</h3>
        <p>Wildlife anomalies refer to unusual behaviors, physical characteristics, or population changes in animal species. These can include unexpected animal sightings, strange behaviors, or physical abnormalities. Observing and reporting these anomalies can provide valuable data for wildlife researchers and conservationists.</p>
        <h3>What to Look For</h3>
        <p>Watch for animals exhibiting unusual behaviors, appearances in unexpected locations, noticeable changes in local wildlife populations, or physical abnormalities in individual animals.</p>
        <p>If you've observed any wildlife anomalies, click "Create Entry" to report your sighting.</p>
      </section>
      <footer className="modal-container-footer">
        <button className="button is-ghost" style={{ backgroundColor: "Green", color: "white", fontSize: "10px" }} id='natural2' value="Wildlife Anomalies" onClick={emergencySETTER}>Create Entry</button>
        <button style={{ fontSize: "10px" }} onClick={modal5Click} className="button is-primary">Close</button>
      </footer>
    </article>
  </div>
: null}

{modal6 ?
  <div className="modal">
    <article className="modal-container">
      <header className="modal-container-header">
        <h1 className="modal-container-title">
          💧 Water Level Changes
        </h1>
      </header>
      <section className="modal-container-body rtf">
        <h2>Fluctuations in Water Bodies</h2>
        <h3>Description</h3>
        <p>Water level changes refer to significant fluctuations in the depth or extent of water bodies such as rivers, lakes, reservoirs, and coastal areas. These changes can be caused by various factors including climate change, precipitation patterns, human activities, or geological events. Monitoring water level changes is crucial for understanding hydrological cycles, managing water resources, and assessing flood or drought risks.</p>
        <h3>What to Look For</h3>
        <p>Observe noticeable increases or decreases in water levels of local water bodies. Look for signs of flooding, receding shorelines, exposed riverbeds, or unusually high or low water marks. Pay attention to changes that persist over time or occur outside of normal seasonal variations.</p>
        <p>If you've noticed significant water level changes, click "Create Entry" to report your observation.</p>
      </section>
      <footer className="modal-container-footer">
        <button className="button is-ghost" style={{ backgroundColor: "Green", color: "white", fontSize: "10px" }} id='natural2' value="Water Level Changes" onClick={emergencySETTER}>Create Entry</button>
        <button style={{ fontSize: "10px" }} onClick={modal6Click} className="button is-primary">Close</button>
      </footer>
    </article>
  </div>
: null}

		</div>
	);
}
