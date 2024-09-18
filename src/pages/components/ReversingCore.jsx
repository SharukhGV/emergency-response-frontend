import React from 'react';
// import { Link } from 'react-router-dom';
import innerearth from "../../assets/innerearth.png"
const ReversingCore = () => {
  return (
    <div>

      <h2>Earth's Inner Core Movement</h2>
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif',backgroundColor:"white", borderRadius:"10px", borderColor:"orange",border:"solid" }}>

      <img style={{maxWidth:"450px"}} src={innerearth}></img>
      <br></br>
      <em>The inner core began to decrease its speed around 2010, moving slower than the Earth’s surface. <a href="https://today.usc.edu/usc-study-confirms-the-rotation-of-earths-inner-core-has-slowed/">(USC Graphic/Edward Sotelo)</a></em>
      <br></br>
      <br></br>
      <div>
      <p>
        The inner core is considered to be reversing and backtracking relative to the planet’s surface due to moving
        slightly slower instead of faster than the Earth’s mantle for the first time in approximately 40 years. Relative
        to its speed in previous decades, the inner core is slowing down.
      </p>
      <p>
        The inner core is a solid iron-nickel sphere surrounded by the liquid iron-nickel outer core. Roughly the size
        of the moon, the inner core sits more than 3,000 miles under our feet and presents a challenge to researchers: It
        can’t be visited or viewed. Scientists must use the seismic waves of earthquakes to create renderings of the
        inner core’s movement.
      </p>
      
    </div></div><p>
        Source: <em><a href="https://today.usc.edu/usc-study-confirms-the-rotation-of-earths-inner-core-has-slowed/">
          USC News, 
        </a>"USC Study Confirms the Rotation of Earth’s Inner Core Has Slowed." 
        , accessed September 13th, 2024.</em>
      </p></div>
  );
};

export default ReversingCore;
