// import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
// import Locationdiv from "../components/LocationCapture";
import { useState } from "react";
// import FindSpot from "./FindSpot.png"
import logo from "./logo.png"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import hiveheavenLOGO from "./hiveheavenLOGO.png"
import constellationlogo from "./constellationlogo.png"
import constellationlogoCOLOR from "./constellationlogoCOLOR.png"
import hiveheavenLOGOWHITE from "./hiveheavenLOGOWHITE.png"
import hiveheavenLOGO2 from "./hiveheavenLOGO2.png"

import { auto } from "@cloudinary/url-gen/qualifiers/quality";                        
// import solarsystem from "./solarsystem.png"
import astronaut from "./astronaut.png"
import "./home.css"
import ControlledCarousel from "../components/ControlledCarousel";
export default function Home({ setEmergencyType, loginUsername, accessToken }) {
        const navigate = useNavigate(); // Initialize the navigation function
        const [toggle1, setToggle1] = useState(false);
        const [toggleConst, setToggleconst] = useState(true);
        const [toggleConst2, setToggleconst2] = useState(true);
        const [modal1, setModal1] = useState(false)
        const [modal2, setModal2] = useState(false)
        const [modal3, setModal3] = useState(false)
        const [modal4, setModal4] = useState(false)
        const [modal5, setModal5] = useState(false)


function modal1Click(){

        setModal1(!modal1)
}

function modal2Click(){

        setModal2(!modal2)
}

function modal3Click(){

        setModal3(!modal3)
}

function modal4Click(){

        setModal4(!modal4)
}

function modal5Click(){

        setModal5(!modal5)
}



        const emergencySETTER = (event) => {
                event.preventDefault();
                const emergencyType = event.target.value;
                setEmergencyType(emergencyType)
                navigate("/form");
        };

        function clickConstellation() {
                setToggleconst(!toggleConst)
        }
        function clickConstellation2() {
                setToggleconst2(!toggleConst2)
        }
        // const [toggle2, setToggle2] = useState(false);
        // const [toggle3, setToggle3] = useState(false);
        // const [toggle4, setToggle4] = useState(false);
        // const [toggle5, setToggle5] = useState(false);

        // function myFunction1() {
        //         setToggle1(true)
        //         setToggle2(false)
        //         setToggle3(false)
        //         setToggle4(false)
        //         setToggle5(false)
        // }
        // function myFunction2() {
        //         setToggle1(false)
        //         setToggle2(true)
        //         setToggle3(false)
        //         setToggle4(false)
        //         setToggle5(false)
        // }
        // function myFunction3() {
        //         setToggle1(false)
        //         setToggle2(false)
        //         setToggle3(true)
        //         setToggle4(false)
        //         setToggle5(false)
        // }
        // function myFunction4() {
        //         setToggle1(false)
        //         setToggle2(false)
        //         setToggle3(false)
        //         setToggle4(true)
        //         setToggle5(false)
        // }
        // function myFunction5() {
        //         setToggle1(false)
        //         setToggle2(false)
        //         setToggle3(false)
        //         setToggle4(false)
        //         setToggle5(true)
        // }

        // const navigate= useNavigate()

        // COMMENTED OUT VISIBLE PLANETS ROUTE FOR LATER USE
        // function planetsvis(){
        //   navigate("/visibleplanets")
        // }

        // return (
                // <div className="homepageContainer" style={{ width: '100%', height: '100%' }}>
//                         {/* <div></div> */}
                 
//                         {/* <p>TESTING: {!accessToken? <span>"no Token, not logged in"</span> : <span>`${accessToken}`</span>}</p> */}
// {/* CODE WILL DIRECT USER TO VISIBLE PLANETS ROUTE */}
// {/* <div>
//   <img onClick={planetsvis} style={{width:"200px"}} src={solarsystem}></img>
//   <div></div>
// </div> */}
//                        {/* {!loginUsername ?<p><Link to="/about"><img style={{width:"180px"}} src={astronaut}></img></Link></p>:null} */}
                //       {/* {toggleConst ? <img onClick={clickConstellation} style={{ width: "300px",paddingRight:"45px" }} src={hiveheavenLOGOWHITE} alt="Logo"></img> :toggleConst2 ?<img onClick={clickConstellation2} style={{ width: "300px",paddingRight:"45px" }} src={hiveheavenLOGOWHITE} alt="Logo"></img>: <img onClick={clickConstellation} style={{ width: "300px",paddingRight:"45px" }} src={hiveheavenLOGOWHITE} alt="Logo"></img>} */}
                //         {/* <h2 style={{color:"white"}}>Night Sky Finder</h2> */}
               return(     
                    <div  class="homecontainer">

  <div class="caro"><ControlledCarousel /></div>
  <div class="buttons">
<button style={{width:"350px",border: "2px solid #373436"}} onClick={modal1Click}>Low Light Pollution</button>
<button style={{width:"350px",border: "2px solid #373436"}} onClick={modal2Click}>Moderate Light Pollution</button>
<button style={{width:"350px",border: "2px solid #373436"}} onClick={modal3Click}>High Light Pollution</button>
<button style={{width:"350px",border: "2px solid #373436"}} className="northernLights" onClick={modal4Click}>Northern Lights</button>
<button style={{width:"350px",border: "2px solid #373436"}} className="fireBall" onClick={modal5Click}>Meteoric Events</button>
<br></br>
<br></br>
</div>


  <div style={{border:"2px solid #373436", background:"radial-gradient(circle, rgba(255,226,0,0.7707457983193278) 7%, rgba(75,73,62,0.8687850140056023) 68%)"}} class="welcome">
        <br></br>
        <br></br>
        <h3>{!!loginUsername ? "Welcome" : "Please Login to view all Features"}</h3>
                        <h3>{loginUsername}</h3>
                        
                        </div>


  <div  class="logoabout">


<img style={{maxWidth:"430px"}} className="hiveLOGO" src={hiveheavenLOGOWHITE}></img>
                        
  </div>







{modal1 ?
<div className="modal">
	<article className="modal-container">
		<header className="modal-container-header">
			<h1 className="modal-container-title">
                        🌌 No Light Pollution
			</h1>
			<button  onClick={modal1Click} className="icon-button">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
					<path fill="none" d="M0 0h24v24H0z" />
					<path fill="currentColor" d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
				</svg>
			</button>
		</header>
		<section className="modal-container-body rtf">
			<h2>0-20% Light Disturbances</h2>

			<h3>Sky Description</h3> 
                        
                        <p>In areas with minimal light pollution, the night sky remains profoundly dark and provides an optimal environment for stargazing. The Milky Way is a prominent feature, stretching across the celestial dome, and thousands of stars are visible in intricate detail. Fainter constellations and deep-sky objects reveal themselves against the cosmic canvas.</p>
<h3>Approximate Star Visibility</h3>

 <p>Around 2,000 to 3,000 stars are discernible to the naked eye, creating a breathtaking and immersive celestial panorama.</p>

<p>If your Sky appears this way, Click "Entry."</p>
		</section>
		<footer className="modal-container-footer">
			 <button  className="button is-ghost" style={{ backgroundColor: "Green", color: "white" }} id='natural2' value="Low Light Pollution" onClick={emergencySETTER}>Entry</button>
			<button onClick={modal1Click} className="button is-primary">Close</button>
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
			<button  onClick={modal2Click} className="icon-button">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
					<path fill="none" d="M0 0h24v24H0z" />
					<path fill="currentColor" d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
				</svg>
			</button>
		</header>
		<section className="modal-container-body rtf">
			<h2>20-50% Light Disturbances</h2>

			<h3>Sky Description</h3> 
                        
                        <p>Moderate light pollution becomes evident, affecting the visibility of fainter stars and slightly dimming the luminosity of the Milky Way. Despite this, major constellations and brighter stars remain clearly visible against a night sky that maintains a discernible depth. The overall ambiance is still conducive to stargazing, albeit with a noticeable reduction in the visibility of celestial details.</p>
<h3>Approximate Star Visibility</h3>

 <p>Roughly 500 to 2,000 stars are visible to the naked eye, offering a compromised but still engaging astronomical experience..</p>

<p>If your Sky appears this way, Click "Entry."</p>
		</section>
		<footer className="modal-container-footer">
			 <button  className="button is-ghost" style={{ backgroundColor: "Green", color: "white" }} id='natural2' value="Moderate Light Pollution" onClick={emergencySETTER}>Entry</button>
			<button onClick={modal2Click} className="button is-primary">Close</button>
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
			<button  onClick={modal3Click} className="icon-button">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
					<path fill="none" d="M0 0h24v24H0z" />
					<path fill="currentColor" d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
				</svg>
			</button>
		</header>
		<section className="modal-container-body rtf">
			<h2>50-100% Light Disturbances</h2>

			<h3>Sky Description</h3> 
                        
                        <p>Significant light pollution dominates the night sky, resulting in the substantial dimming of the Milky Way and fainter stars. The overall brightness of the sky is elevated, making it challenging to observe intricate celestial features. Only the brightest stars and celestial objects, such as planets, manage to pierce through the luminous veil. Stargazing is limited, and the night sky loses much of its natural splendor.</p>
<h3>Approximate Star Visibility</h3>

 <p>Less than 500 stars are visible to the naked eye, with the majority being the brightest and most prominent celestial bodies. The sky is noticeably brighter, and the cosmic landscape is significantly muted.</p>

<p>If your Sky appears this way, Click "Entry."</p>
		</section>
		<footer className="modal-container-footer">
			 <button  className="button is-ghost" style={{ backgroundColor: "Green", color: "white" }} id='natural2' value="High Light Pollution" onClick={emergencySETTER}>Entry</button>
			<button onClick={modal3Click} className="button is-primary">Close</button>
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
			<button  onClick={modal4Click} className="icon-button">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
					<path fill="none" d="M0 0h24v24H0z" />
					<path fill="currentColor" d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
				</svg>
			</button>
		</header>
		<section className="modal-container-body rtf">
			<h2>Aurora Borealis</h2>

			<h3>Sky Description</h3> 
                        
                        <p>During geomagnetic storms, the night sky transforms into a mesmerizing display of vibrant colors known as the Northern Lights. Wisps of green, pink, and violet dance across the heavens in undulating curtains, creating an ethereal atmosphere. The celestial light show is a result of charged particles from the sun interacting with Earth's magnetic field and atmosphere. In regions near the magnetic poles, such as the Arctic, the auroras can be a frequent and awe-inspiring phenomenon, casting an enchanting glow that stretches across the northern horizon.</p>
<h3>Observation Experience: </h3>

 <p>Viewing the Northern Lights is a surreal and otherworldly experience, providing a rare opportunity to witness the dynamic interaction between solar winds and Earth's magnetic field. The level of activity and intensity can vary, with some displays featuring rapid movement and vivid colors, while others unfold more gently, creating a tranquil celestial spectacle.</p>

<p>If you witnessed this event, Click "Entry."</p>
		</section>
		<footer className="modal-container-footer">
			 <button  className="button is-ghost" style={{ backgroundColor: "Green", color: "white" }} id='natural2' value="Northern Lights" onClick={emergencySETTER}>Entry</button>
			<button onClick={modal4Click} className="button is-primary">Close</button>
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
			<button  onClick={modal5Click} className="icon-button">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
					<path fill="none" d="M0 0h24v24H0z" />
					<path fill="currentColor" d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
				</svg>
			</button>
		</header>
		<section className="modal-container-body rtf">
			<h2>Fireballs</h2>

			<h3>Sky Description</h3> 
                        
                        <p>A sudden and brilliant streak of light across the night sky marks the passage of a fireball—a particularly bright meteor or meteoroid that burns intensely as it enters Earth's atmosphere. These celestial intruders illuminate the darkness with a dazzling blaze, often leaving behind a glowing trail in their wake. Fireballs are typically larger and more luminous than regular meteors, making them easily noticeable even in areas with some light pollution. The fleeting but intense brightness captures the attention of observers, creating a momentary celestial spectacle.</p>
<h3>Observation Experience: </h3>

 <p>Witnessing a fireball is a thrilling and unpredictable event. The rapid descent and fiery trail of these cosmic visitors add an element of excitement to night sky observation. Fireballs are fleeting, often lasting only a few seconds, but their dramatic appearance leaves a lasting impression on those fortunate enough to witness their celestial journey.</p>

<p>If you witnessed this event, Click "Entry."</p>
		</section>
		<footer className="modal-container-footer">
			 <button  className="button is-ghost" style={{ backgroundColor: "Green", color: "white" }} id='natural2' value="Fireball Meteoric Event" onClick={emergencySETTER}>Entry</button>
			<button onClick={modal5Click} className="button is-primary">Close</button>
		</footer>
	</article>
</div>
: null}
                      
</div>
        );
}
