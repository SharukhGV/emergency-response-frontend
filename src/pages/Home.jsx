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
				<button className="lowlight" onClick={modal1Click}>Low Light Pollution</button>        <br></br>

				<button className="moderatelight" onClick={modal2Click}>Moderate Light Pollution</button>        <br></br>

				<button className="highlight" onClick={modal3Click}>High Light Pollution</button>        <br></br>

				<button className="northernLights" onClick={modal4Click}>Northern Lights</button>        <br></br>

				<button className="fireBall" onClick={modal5Click}>Meteoric Events</button>

				<button className="otherCategory" value="Anything Else" onClick={emergencySETTER}>Anything Else</button>

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
				<div className="milkyBand"><div>An informational application powered by astronomy and geology data</div>
					<div >From USGS, NASA, and user input...</div>
					<br></br></div>
				<br></br>

				{modalButtons ? <button onClick={boolModalSet}>Report Celestial Sightings</button> : <button onClick={boolModalSet}>Toggle Celestial Report Buttons</button>}

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
								🌌 No Light Pollution
							</h1>

						</header>
						<section className="modal-container-body rtf">
							<h2>0-20% Light Disturbances</h2>

							<h3>Sky Description</h3>

							<p>In areas with minimal light pollution, the night sky remains profoundly dark and provides an optimal environment for stargazing. The Milky Way is a prominent feature, stretching across the celestial dome, and thousands of stars are visible in intricate detail. Fainter constellations and deep-sky objects reveal themselves against the cosmic canvas.</p>
							<h3>Approximate Star Visibility</h3>

							<p>Around 2,000 to 3,000 stars are discernible to the naked eye, creating a breathtaking and immersive celestial panorama.</p>

							<p>If your Sky appears this way, Click "Create Entry."</p>
						</section>
						<footer className="modal-container-footer">
							<button className="button is-ghost" style={{ backgroundColor: "Green", color: "white", fontSize: "10px" }} id='natural2' value="Low Light Pollution" onClick={emergencySETTER}>Create Entry</button>
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
								🏡 Moderate Light Pollution
							</h1>

						</header>
						<section className="modal-container-body rtf">
							<h2>20-50% Light Disturbances</h2>

							<h3>Sky Description</h3>

							<p>Moderate light pollution becomes evident, affecting the visibility of fainter stars and slightly dimming the luminosity of the Milky Way. Despite this, major constellations and brighter stars remain clearly visible against a night sky that maintains a discernible depth. The overall ambiance is still conducive to stargazing, albeit with a noticeable reduction in the visibility of celestial details.</p>
							<h3>Approximate Star Visibility</h3>

							<p>Roughly 500 to 2,000 stars are visible to the naked eye, offering a compromised but still engaging astronomical experience..</p>

							<p>If your Sky appears this way, Click "Create Entry."</p>
						</section>
						<footer className="modal-container-footer">
							<button className="button is-ghost" style={{ backgroundColor: "Green", color: "white", fontSize: "10px" }} id='natural2' value="Moderate Light Pollution" onClick={emergencySETTER}>Create Entry</button>
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
								🌆 High Light Pollution
							</h1>

						</header>
						<section className="modal-container-body rtf">
							<h2>50-100% Light Disturbances</h2>

							<h3>Sky Description</h3>

							<p>Significant light pollution dominates the night sky, resulting in the substantial dimming of the Milky Way and fainter stars. The overall brightness of the sky is elevated, making it challenging to observe intricate celestial features. Only the brightest stars and celestial objects, such as planets, manage to pierce through the luminous veil. Stargazing is limited, and the night sky loses much of its natural splendor.</p>
							<h3>Approximate Star Visibility</h3>

							<p>Less than 500 stars are visible to the naked eye, with the majority being the brightest and most prominent celestial bodies. The sky is noticeably brighter, and the cosmic landscape is significantly muted.</p>

							<p>If your Sky appears this way, Click "Create Entry."</p>
						</section>
						<footer className="modal-container-footer">
							<button className="button is-ghost" style={{ backgroundColor: "Green", color: "white", fontSize: "10px" }} id='natural2' value="High Light Pollution" onClick={emergencySETTER}>Create Entry</button>
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
								✨  Northern Lights
							</h1>

						</header>
						<section className="modal-container-body rtf">
							<h2>Aurora Borealis</h2>

							<h3>Sky Description</h3>

							<p>During geomagnetic storms, the night sky transforms into a mesmerizing display of vibrant colors known as the Northern Lights. Wisps of green, pink, and violet dance across the heavens in undulating curtains, creating an ethereal atmosphere. The celestial light show is a result of charged particles from the sun interacting with Earth's magnetic field and atmosphere. In regions near the magnetic poles, such as the Arctic, the auroras can be a frequent and awe-inspiring phenomenon, casting an enchanting glow that stretches across the northern horizon.</p>
							<h3>Observation Experience: </h3>

							<p>Viewing the Northern Lights is a surreal and otherworldly experience, providing a rare opportunity to witness the dynamic interaction between solar winds and Earth's magnetic field. The level of activity and intensity can vary, with some displays featuring rapid movement and vivid colors, while others unfold more gently, creating a tranquil celestial spectacle.</p>

							<p>If you witnessed this event, Click "Create Entry."</p>
						</section>
						<footer className="modal-container-footer">
							<button className="button is-ghost" style={{ backgroundColor: "Green", color: "white", fontSize: "10px" }} id='natural2' value="Northern Lights" onClick={emergencySETTER}>Create Entry</button>
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
								☄️ Fireballs (Meteoric Events)
							</h1>

						</header>
						<section className="modal-container-body rtf">
							<h2>Fireballs</h2>

							<h3>Sky Description</h3>

							<p>A sudden and brilliant streak of light across the night sky marks the passage of a fireball—a particularly bright meteor or meteoroid that burns intensely as it enters Earth's atmosphere. These celestial intruders illuminate the darkness with a dazzling blaze, often leaving behind a glowing trail in their wake. Fireballs are typically larger and more luminous than regular meteors, making them easily noticeable even in areas with some light pollution. The fleeting but intense brightness captures the attention of observers, creating a momentary celestial spectacle.</p>
							<h3>Observation Experience: </h3>

							<p>Witnessing a fireball is a thrilling and unpredictable event. The rapid descent and fiery trail of these cosmic visitors add an element of excitement to night sky observation. Fireballs are fleeting, often lasting only a few seconds, but their dramatic appearance leaves a lasting impression on those fortunate enough to witness their celestial journey.</p>

							<p>If you witnessed this event, Click "Create Entry."</p>
						</section>
						<footer className="modal-container-footer">
							<button className="button is-ghost" style={{ backgroundColor: "Green", color: "white", fontSize: "10px" }} id='natural2' value="Fireball Meteoric Event" onClick={emergencySETTER}>Create Entry</button>
							<button style={{ fontSize: "10px" }} onClick={modal5Click} className="button is-primary">Close</button>
						</footer>
					</article>
				</div>
				: null}

		</div>
	);
}
