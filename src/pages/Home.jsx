// import { useState } from "react"
import { useNavigate } from "react-router-dom"
// import Locationdiv from "../components/LocationCapture";
import { useState } from "react";
// import FindSpot from "./FindSpot.png"
import logo from "./logo.png"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import hiveheavenLOGO from "./hiveheavenLOGO.png"
import constellationlogo from "./constellationlogo.png"
import constellationlogoCOLOR from "./constellationlogoCOLOR.png"
import { auto } from "@cloudinary/url-gen/qualifiers/quality";
export default function Home({ setEmergencyType, loginUsername, accessToken }) {
        const navigate = useNavigate(); // Initialize the navigation function
        const [toggle1, setToggle1] = useState(false);
        const [toggleConst, setToggleconst] = useState(true);
        const [toggleConst2, setToggleconst2] = useState(true);

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



        return (
                <div style={{ width: '100%', height: '100%' }}>
                        <div></div>
                        {toggleConst ? <img onClick={clickConstellation} style={{ maxWidth: "300px" }} src={hiveheavenLOGO} alt="Logo"></img> :toggleConst2 ?<img onClick={clickConstellation2} style={{ maxWidth: "300px" }} src={constellationlogo} alt="Logo"></img>: <img onClick={clickConstellation} style={{ maxWidth: "300px" }} src={constellationlogoCOLOR} alt="Logo"></img>}
                        <h2>Night Sky Finder</h2>
                        <h3>{!!loginUsername ? "Welcome" : null}</h3>
                        <h3>{loginUsername}</h3>
                        {/* <p>TESTING: {!accessToken? <span>"no Token, not logged in"</span> : <span>`${accessToken}`</span>}</p> */}
                        <p>A community driven app to report dark skies for others to be aware of for future enjoyment</p>
                        <p>Click one of the Buttons Below to Create a Post.</p>
                        {/* <div id='natural6' value="Food & Water Shortage" onClick={emergencySETTER}>
Food & Water Shortage
        </div> */}
                        <div>
                                <Popup trigger=
                                        {<button style={{ backgroundColor: "black", color: "white" }}><strong>No Light Pollution</strong></button>}
                                        modal nested>
                                        {
                                                close => (
                                                        <div className='modal'>
                                                                <div className='content'>
                                                                        <div style={{overflow:"auto", height: "50%", width: "70%", top: "0", left: "0", bottom: "0", right: "0",margin:"auto", border:"solid 7px", backgroundColor:"whitesmoke"}} className="background-container">
                                                                               

                                                                                <strong><div     className="skydescription">0-10% Light Pollution:</div></strong>
                                                                                <div className="skydescription"><strong >Sky Description:</strong></div>

                                                                                <div className="skydescription">Click here if there is minimal light pollution and the sky appears exceptionally dark where the Milky Way is vividly visible, and thousands of stars are discernible. Click here if There are around 2,500 to 3,000 stars visible to the naked eye.</div>


                                                                                <button style={{ backgroundColor: "Green", color: "white" }} id='natural2' value="0-10% Light Pollution" onClick={emergencySETTER}>Click to Go to Form</button>
                                                                                <div>
                                                                                        <button style={{ backgroundColor: "white", color: "black" }} onClick=
                                                                                                {() => close()}>
                                                                                                Close
                                                                                        </button>
                                                                                        <div  className="skydescription">Create a Posting to help others know whether the place you visited has a beautiful night sky or not. Describe your experience, the weather, etc.</div>

                                                                                </div>
                                                                        </div>
                                                                </div></div>
                                                )
                                        }
                                </Popup>
                        </div>



                        <div>
                                <Popup trigger=
                                        {<button style={{ backgroundColor: "black", color: "white" }}><strong>Some Light Pollution</strong></button>}
                                        modal nested>
                                        {
                                                close => (
                                                        <div className='modal'>
                                                                <div className='content'>
                                                                <div style={{overflow:"auto", height: "50%", width: "70%", top: "0", left: "0", bottom: "0", right: "0",margin:"auto", border:"solid 7px"}} className="background-container">
                                                                               
                                                                                <strong><div className="skydescription">10-30% Light Pollution:</div></strong>
                                                                                <div className="skydescription" ><strong >Sky Description:</strong></div>

                                                                                <div className="skydescription">Click here if light pollution affects the visibility of fainter stars, causing a visible glow near the horizon but major constellations and the Milky Way's core are still relatively clear.
                                                                                        Click here if There are around roughly 1,000 to 2,000 stars visible to the naked eye.</div>
                                                                                <button style={{ backgroundColor: "Green", color: "white" }} id='natural2' value="10-30% Light Pollution" onClick={emergencySETTER}>Click to Go to Form</button>
                                                                                <div>
                                                                                        <button style={{ backgroundColor: "white", color: "black" }} onClick=
                                                                                                {() => close()}>
                                                                                                Close
                                                                                        </button>
                                                                                        <div className="skydescription">Create a Posting to help others know whether the place you visited has a beautiful night sky or not. Describe your experience, the weather, etc.</div>

                                                                                </div>
                                                                        </div></div></div>
                                                )
                                        }
                                </Popup>
                        </div>






                        <div>
                                <Popup style={{ backgroundColor: "rgb(58, 55, 50, 0.70)", color: "white" }} trigger=
                                        {<button style={{ backgroundColor: "rgb(58, 55, 50)", color: "white" }}><strong>Moderate Light Pollution</strong></button>}
                                        modal nested>
                                        {
                                                close => (
                                                        <div className='modal'>
                                                                <div className='content'>
                                                                <div style={{overflow:"auto", height: "50%", width: "70%", top: "0", left: "0", bottom: "0", right: "0",margin:"auto", border:"solid 7px"}} className="background-container">
                                                                               

                                                                                <strong><div className="skydescription">30-50% Light Pollution:</div></strong>
                                                                                <div className="skydescription"><strong  >Sky Description:</strong></div>

                                                                                <div  className="skydescription">Click here if moderate light pollution dims the view of the Milky Way and fainter stars. Click here if only the brightest stars and major constellations are easily identifiable.
                                                                                        <div>Click here if There are around roughly 500 to 1,000 stars visible to the naked eye.</div></div>
                                                                                <button style={{ backgroundColor: "Green", color: "white" }} id='natural2' value="30-50% Light Pollution" onClick={emergencySETTER}>Click to Go to Form</button>
                                                                                <div>
                                                                                        <button style={{ backgroundColor: "white", color: "black" }} onClick=
                                                                                                {() => close()}>
                                                                                                Close
                                                                                        </button>

                                                                                        <div className="skydescription">Create a Posting to help others know whether the place you visited has a beautiful night sky or not. Describe your experience, the weather, etc.</div>
                                                                                </div></div>
                                                                </div></div>
                                                )
                                        }
                                </Popup>
                        </div>






                        <div>
                                <Popup style={{ backgroundColor: "rgb(85, 72, 43, 0.70)", color: "white" }} trigger=
                                        {<button style={{ backgroundColor: "rgb(85, 72, 43)", color: "white" }}><strong>Substantial Light Pollution </strong></button>}
                                        modal nested>
                                        {
                                                close => (
                                                        <div className='modal'>
                                                                <div className='content'>
                                                                <div style={{overflow:"auto", height: "50%", width: "70%", top: "0", left: "0", bottom: "0", right: "0",margin:"auto", border:"solid 7px"}} className="background-container">
                                                                               

                                                                                <strong><div className="skydescription">50-70% Light Pollution:</div></strong>
                                                                                <div className="skydescription"><strong >Sky Description:</strong></div>

                                                                                <div  className="skydescription">Click here if Substantial light pollution obscures most of the Milky Way and dimmer stars, leaving only the brightest stars and planets visible. The sky appears significantly brightened, even at night.
                                                                                        Click here if there are 100 to 500 stars visible to the naked eye.</div>
                                                                                <button style={{ backgroundColor: "Green", color: "white" }} id='natural2' value="50-70% Light Pollution" onClick={emergencySETTER}>Click to Go to Form</button>
                                                                                <div>
                                                                                        <button style={{ backgroundColor: "white", color: "black" }} onClick=
                                                                                                {() => close()}>
                                                                                                Close
                                                                                        </button><div className="skydescription">Create a Posting to help others know whether the place you visited has a beautiful night sky or not. Describe your experience, the weather, etc.</div></div>
                                                                        </div></div>
                                                        </div>
                                                )
                                        }
                                </Popup>
                        </div>




                        <div>
                                <Popup style={{ backgroundColor: "rgb(119, 85, 10, 0.70)" }} trigger=
                                        {<button style={{ backgroundColor: "rgb(119, 85, 10)", color: "white" }}><strong> Heavy Light Pollution </strong></button>}
                                        modal nested>
                                        {
                                                close => (
                                                        <div className='modal'>
                                                                <div className='content'>
                                                                <div style={{overflow:"auto", height: "50%", width: "70%", top: "0", left: "0", bottom: "0", right: "0",margin:"auto", border:"solid 7px"}} className="background-container">
                                                                               
                                                                         
                                                                                <strong><div className="skydescription">70-100% Light Pollution:</div></strong><div></div>
                                                                             
                                                                                <div className="skydescription"><strong >Sky Description:</strong></div>

                                                                                <div className="skydescription">Click here if the sky is heavily affected by light pollution, the sky is illuminated, making it challenging to distinguish individual stars or constellations. Click here if only the very brightest celestial objects, such as the Moon, planets, and a few prominent stars, are visible.
                                                                                        <div>If there are less than 100 stars visible to the naked eye or you are limited to seeing the brightest stars and planets, click here.</div></div>
                                                                                <button style={{ backgroundColor: "Green", color: "white" }} id='natural2' value="70-100% Light Pollution" onClick={emergencySETTER}>Click to Go to Form</button>
                                                                                <div>
                                                                                        <button style={{ backgroundColor: "white", color: "black" }} onClick=
                                                                                                {() => close()}>
                                                                                                Close
                                                                                        </button><div className="skydescription">Create a Posting to help others know whether the place you visited has a beautiful night sky or not. Describe your experience, the weather, etc.</div>
                                                                                </div></div></div>
                                                        </div>
                                                )
                                        }
                                </Popup>
                        </div>

                        {/* 
                        <div></div>
                        <div style={{ backgroundColor: "black", color: "white" }} id='natural2' value="10-30% Light Pollution" onClick={emergencySETTER}>
                                10-30% Light Pollution: *˚✧｡
                                <span className="popup" onClick={myFunction2}>⭐
                                        <span className="popuptext" id="myPopup">A Simple Popup!</span>
                                </span>
                        </div>
                        <div></div>
                        <div style={{ backgroundColor: "rgb(58, 55, 50)", color: "white" }} id='natural3' value="30-50% Light Pollution" onClick={emergencySETTER}>
                                30-50% Light Pollution:✧｡         <span className="popup" onClick={myFunction3}>⭐
                                        <span className="popuptext" id="myPopup">A Simple Popup!</span>
                                </span>
                        </div>
                        <div></div>
                        <div style={{ backgroundColor: "rgb(85, 72, 43)", color: "white" }} id='natural4' value="50-70% Light Pollution" onClick={emergencySETTER}>
                                50-70% Light Pollution:✧       <span className="popup" onClick={myFunction4}>⭐
                                        <span className="popuptext" id="myPopup">A Simple Popup!</span>
                                </span>
                        </div>
                        <div></div>
                        <div style={{ backgroundColor: "rgb(119, 85, 10)", color: "white", marginBottom: "20px" }} id='natural5' value="70-100% Light Pollution" onClick={emergencySETTER}>
                                70-100% Light Pollution:  <span className="popup" onClick={myFunction5}>⭐
                                        <span className="popuptext" id="myPopup">A Simple Popup!</span>
                                </span>
                        </div> */}

                </div>
        );
}
