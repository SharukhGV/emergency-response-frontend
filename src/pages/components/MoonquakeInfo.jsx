import React from 'react';
// import { Link } from 'react-router-dom';
import smithsonianmoonimage from "../../assets/smithsonianmoonimage.jpg"
const MoonquakeInfo = () => {
  return (
    <>
      <div className="parentMOON">
        <div></div>
        <div></div>
  
        <h2>Moon's Shrinkage and Moonquakes</h2>
  
        <div
          className="div1MOON"
          style={{
            width: "100%",
            height: "auto",
            border: "solid",
            borderColor: "blue",
            padding: "15px",
            borderRadius: "10px",
          }}
        >
          <img className='moon-quake-img' src={smithsonianmoonimage} alt="Moon Thrust Faults" />
        </div>
  
        <div className="div2MOON">
          <em>
            Smithsonian Magazine: NASA’s Lunar Reconnaissance Orbiter found these
            thrust faults near the moon’s south pole. T. R. Watters et al., The
            Planetary Science Journal, 2024, under CC BY 4.0 DEED
          </em>
  
          <p>
            Though it might appear still and quiet, the moon is not an entirely
            peaceful world. Our natural satellite is slowly shrinking, and as it
            does, 'moonquakes' rock its surface. These regular rumbles in the
            regolith could become a problem for future crewed flights to the moon,
            such as NASA's planned Artemis 3 mission, according to a study
            published late last month in the Planetary Science Journal.
          </p>
  
          <div className="source">
            <strong>Source:</strong> Smithsonian Magazine, "The Moon is Shrinking,
            Causing Moonquakes at a Potential NASA Landing Site, Study Finds",
            accessed September 13th, 2024.
          </div>
        </div>
  
        <br />
      </div>
    </>
  );
  
};

export default MoonquakeInfo;