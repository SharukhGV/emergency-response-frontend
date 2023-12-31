// import { useState } from "react"
import { useNavigate } from "react-router-dom"
// import Locationdiv from "../components/LocationCapture";
import { useState } from "react";
// import FindSpot from "./FindSpot.png"
import logo from "./logo.png"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


export default function Home({ setEmergencyType,loginUsername,accessToken }) {
        const navigate = useNavigate(); // Initialize the navigation function
        const [toggle1, setToggle1] = useState(false);

        const emergencySETTER = (event) => {
                event.preventDefault();
                const emergencyType = event.target.value;
                setEmergencyType(emergencyType)
                navigate("/form");
        };

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

                        <img style={{ maxWidth: "300px" }} src={logo} alt="Logo"></img>
                        <h2>Light Pollution & Dark Skies</h2>
                        <h3>Welcome {loginUsername} to Hive of Heaven</h3>
                        {/* <p>TESTING: {!accessToken? <span>"no Token, not logged in"</span> : <span>`${accessToken}`</span>}</p> */}
                        <p>A community driven app to report light-polluted areas or dark skies for others to be aware of for future enjoyment</p>
                        <p>You will be Taken to a Form where you can post to a Public Bulletin</p>
                        {/* <div id='natural6' value="Food & Water Shortage" onClick={emergencySETTER}>
Food & Water Shortage
        </div> */}
                      <div>
            <Popup trigger=
                {<button style={{ backgroundColor: "black", color: "white" }}><strong> ・｡✧:˚*:・ 0-10% Light Pollution ・:*˚:✧｡・</strong></button>} 
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div className='content'>
                         
<strong><div style={{backgroundColor:"black", color:"white"}} className="skydescription">0-10% Light Pollution:</div></strong>
<div style={{backgroundColor:"black", color:"white"}}><strong >Sky Description:</strong></div>

<div  style={{backgroundColor:"black", color:"white"}}  className="skydescription">In areas with minimal light pollution, the sky appears exceptionally dark. The Milky Way is vividly visible, and thousands of stars are discernible. There are around 2,500 to 3,000 stars visible to the naked eye.</div>
 <button style={{ backgroundColor: "Green", color: "white" }} id='natural2' value="0-10% Light Pollution" onClick={emergencySETTER}>Click to Go to Form</button></div>
                            <div>
                                <button style={{backgroundColor:"white", color:"black"}} onClick=
                                    {() => close()}>
                                        Close
                                </button>
                            </div>
                        </div>
                    )
                }
            </Popup>
        </div>



        <div>
            <Popup trigger=
                {<button style={{ backgroundColor: "black", color: "white" }}><strong> ｡✧˚* 10-30% Light Pollution *˚✧｡ </strong></button>} 
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div className='content'>
                         
<strong><div style={{backgroundColor:"black", color:"white"}} className="skydescription">10-30% Light Pollution:</div></strong>
<div style={{backgroundColor:"black", color:"white"}}><strong >Sky Description:</strong></div>

<div  style={{backgroundColor:"black", color:"white"}}  className="skydescription">Light pollution begins to affect the visibility of fainter stars, causing a visible glow near the horizon. However, major constellations and the Milky Way's core are still relatively clear.
Approximate Star Visibility: Roughly 1,000 to 2,000 stars visible to the naked eye.</div>
 <button style={{ backgroundColor: "Green", color: "white" }} id='natural2' value="10-30% Light Pollution" onClick={emergencySETTER}>Click to Go to Form</button></div>
                            <div>
                                <button style={{backgroundColor:"white", color:"black"}} onClick=
                                    {() => close()}>
                                        Close
                                </button>
                            </div>
                        </div>
                    )
                }
            </Popup>
        </div>






        <div>
            <Popup trigger=
                {<button style={{ backgroundColor: "rgb(58, 55, 50)", color: "white" }}><strong> ｡✧* 30-50% Light Pollution *✧｡</strong></button>} 
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div className='content'>
                         
<strong><div style={{ backgroundColor: "rgb(58, 55, 50)", color: "white" }} className="skydescription">30-50% Light Pollution:</div></strong>
<div style={{ backgroundColor: "rgb(58, 55, 50)", color: "white" }}><strong style={{ backgroundColor: "rgb(58, 55, 50)", color: "white" }}>Sky Description:</strong></div>

<div style={{ backgroundColor: "rgb(58, 55, 50)", color: "white" }}  className="skydescription"> Moderate light pollution dims the view of the Milky Way and fainter stars. Only the brightest stars and major constellations are easily identifiable.
Approximate Star Visibility: Around 500 to 1,000 stars visible to the naked eye.</div>
 <button style={{ backgroundColor: "Green", color: "white" }} id='natural2' value="30-50% Light Pollution" onClick={emergencySETTER}>Click to Go to Form</button></div>
                            <div>
                                <button style={{backgroundColor:"white", color:"black"}} onClick=
                                    {() => close()}>
                                        Close
                                </button>
                            </div>
                        </div>
                    )
                }
            </Popup>
        </div>





        
        <div>
            <Popup trigger=
                {<button style={{backgroundColor:"rgb(85, 72, 43)", color:"white"}}><strong>｡✧ 50-70% Light Pollution: ✧｡</strong></button>} 
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div className='content'>
                         
<strong><div style={{backgroundColor:"rgb(85, 72, 43)", color:"white"}} className="skydescription">50-70% Light Pollution:</div></strong>
<div style={{backgroundColor:"rgb(85, 72, 43)", color:"white"}}><strong >Sky Description:</strong></div>

<div  style={{backgroundColor:"rgb(85, 72, 43)", color:"white"}}  className="skydescription"> Substantial light pollution obscures most of the Milky Way and dimmer stars, leaving only the brightest stars and planets visible. The sky appears significantly brightened, even at night.
Approximate Star Visibility: Approximately 100 to 500 stars visible to the naked eye.</div>
 <button style={{ backgroundColor: "Green", color: "white" }} id='natural2' value="50-70% Light Pollution" onClick={emergencySETTER}>Click to Go to Form</button></div>
                            <div>
                                <button style={{backgroundColor:"white", color:"black"}} onClick=
                                    {() => close()}>
                                        Close
                                </button>
                            </div>
                        </div>
                    )
                }
            </Popup>
        </div>




        <div>
            <Popup trigger=
                {<button style={{backgroundColor:"rgb(119, 85, 10)", color:"white"}}><strong> 70-100% Light Pollution </strong></button>} 
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div className='content'>
                         
<strong><div  style={{backgroundColor:"rgb(119, 85, 10)", color:"white"}} className="skydescription">70-100% Light Pollution:</div></strong>
<div style={{backgroundColor:"rgb(119, 85, 10)", color:"white"}}><strong >Sky Description:</strong></div>

<div  style={{backgroundColor:"rgb(119, 85, 10)", color:"white"}}   className="skydescription">Heavily affected by light pollution, the sky is illuminated, making it challenging to distinguish individual stars or constellations. Only the very brightest celestial objects, such as the Moon, planets, and a few prominent stars, are visible.
Approximate Star Visibility: Less than 100 stars visible to the naked eye, often limited to the brightest stars and planets.</div>
 <button style={{ backgroundColor: "Green", color: "white" }} id='natural2' value="70-100% Light Pollution" onClick={emergencySETTER}>Click to Go to Form</button></div>
                            <div>
                                <button style={{backgroundColor:"white", color:"black"}} onClick=
                                    {() => close()}>
                                        Close
                                </button>
                            </div>
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
