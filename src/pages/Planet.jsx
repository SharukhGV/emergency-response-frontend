import mercury from "./mercury.png"
import venus from "./venus.png"
import mars from "./mars.png"
import jupiter from "./jupiter.png"
import saturn from "./saturn.png"
import uranus from "./uranus.png"
import neptune from "./neptune.png"
// import pluto from "./pluto.png"
// import sun from "./sun.png"
import lagoon from "./lagoon.jpg"
function Planet({planet}){
console.log(planet)




return(

<div>
{/* <div>{planet.name === "Sun" ? <img class="planetimages" src={sun}></img> : null}</div> */}

<div>{planet.name === "Mercury" ? 

<div style={{fontFamily:"Arial"}} className="card">
      <img src={lagoon} className="card__image" alt="" />
      <div className="card__overlay">
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img className="card__thumb" src={mercury} alt="" />
          <div className="card__header-text">
            <h5 style={{fontFamily:"Arial"}} >{planet.constellation}</h5>
            <h3 className="card__title">{planet.name}</h3>            
            <span style={{fontFamily:"Arial"}}  className="card__status">Magnitude: {planet.magnitude}</span>
          </div>
        </div>
        {/* <p style={{fontFamily:"Arial", fontSize:"10px"}}  className="card__description">{person.description}</p> */}
<p>Need a Telescope? {!planet.nakedEyeObject? "Yes" : "No"}</p>
<p>Above Horizon? {planet.aboveHorizon ? "Yes" : "No"}</p>       

        <div></div>

      </div>
    </div>    
 : null}</div>

<div></div>
<div></div>
<div>{planet.name === "Venus" ? 

<div style={{fontFamily:"Arial"}} className="card">
      <img src={lagoon} className="card__image" alt="" />
      <div className="card__overlay">
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img className="card__thumb" src={venus} alt="" />
          <div className="card__header-text">
            <h5 style={{fontFamily:"Arial"}} >{planet.constellation}</h5>
            <h3 className="card__title">{planet.name}</h3>            
            <span style={{fontFamily:"Arial"}}  className="card__status">Magnitude: {planet.magnitude}</span>
          </div>
        </div>
        {/* <p style={{fontFamily:"Arial", fontSize:"10px"}}  className="card__description">{person.description}</p> */}
<p>Need a Telescope? {!planet.nakedEyeObject? "Yes" : "No"}</p>
<p>Above Horizon? {planet.aboveHorizon ? "Yes" : "No"}</p>       

        <div></div>

      </div>
    </div>    
 : null}</div>
<div>{planet.name === "Mars" ? 

<div style={{fontFamily:"Arial"}} className="card">
      <img src={lagoon} className="card__image" alt="" />
      <div className="card__overlay">
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img className="card__thumb" src={mars} alt="" />
          <div className="card__header-text">
            <h5 style={{fontFamily:"Arial"}} >{planet.constellation}</h5>
            <h3 className="card__title">{planet.name}</h3>            
            <span style={{fontFamily:"Arial"}}  className="card__status">Magnitude: {planet.magnitude}</span>
          </div>
        </div>
        {/* <p style={{fontFamily:"Arial", fontSize:"10px"}}  className="card__description">{person.description}</p> */}
<p>Need a Telescope? {!planet.nakedEyeObject? "Yes" : "No"}</p>
<p>Above Horizon? {planet.aboveHorizon ? "Yes" : "No"}</p>       

        <div></div>

      </div>
    </div>    
 : null}</div>
<div>{planet.name === "Jupiter" ? 

<div style={{fontFamily:"Arial"}} className="card">
      <img src={lagoon} className="card__image" alt="" />
      <div className="card__overlay">
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img className="card__thumb" src={jupiter} alt="" />
          <div className="card__header-text">
            <h5 style={{fontFamily:"Arial"}} >{planet.constellation}</h5>
            <h3 className="card__title">{planet.name}</h3>            
            <span style={{fontFamily:"Arial"}}  className="card__status">Magnitude: {planet.magnitude}</span>
          </div>
        </div>
        {/* <p style={{fontFamily:"Arial", fontSize:"10px"}}  className="card__description">{person.description}</p> */}
<p style={{color:"black"}}>Need a Telescope? {!planet.nakedEyeObject? "Yes" : "No"}</p>
<p style={{color:"black"}}>Above Horizon? {planet.aboveHorizon ? "Yes" : "No"}</p>       

        <div></div>

      </div>
    </div>    
 : null}</div>
<div>{planet.name === "Saturn" ? 

<div style={{fontFamily:"Arial"}} className="card">
      <img src={lagoon} className="card__image" alt="" />
      <div className="card__overlay">
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img className="card__thumb" src={saturn} alt="" />
          <div className="card__header-text">
            <h5 style={{fontFamily:"Arial"}} >{planet.constellation}</h5>
            <h3 className="card__title">{planet.name}</h3>            
            <span style={{fontFamily:"Arial"}}  className="card__status">Magnitude: {planet.magnitude}</span>
          </div>
        </div>
        {/* <p style={{fontFamily:"Arial", fontSize:"10px"}}  className="card__description">{person.description}</p> */}
<p>Need a Telescope? {!planet.nakedEyeObject? "Yes" : "No"}</p>
<p>Above Horizon? {planet.aboveHorizon ? "Yes" : "No"}</p>       

        <div></div>

      </div>
    </div>    
 : null}</div>
<div>{planet.name === "Uranus" ? 

<div style={{fontFamily:"Arial"}} className="card">
      <img src={lagoon} className="card__image" alt="" />
      <div className="card__overlay">
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img className="card__thumb" src={uranus} alt="" />
          <div className="card__header-text">
            <h5 style={{fontFamily:"Arial"}} >{planet.constellation}</h5>
            <h3 className="card__title">{planet.name}</h3>            
            <span style={{fontFamily:"Arial"}}  className="card__status">Magnitude: {planet.magnitude}</span>
          </div>
        </div>
        {/* <p style={{fontFamily:"Arial", fontSize:"10px"}}  className="card__description">{person.description}</p> */}
<p>Need a Telescope? {!planet.nakedEyeObject? "Yes" : "No"}</p>
<p>Above Horizon? {planet.aboveHorizon ? "Yes" : "No"}</p>       

        <div></div>

      </div>
    </div>    
: null}</div>
<div>{planet.name === "Neptune" ? 

<div style={{fontFamily:"Arial"}} className="card">
      <img src={lagoon} className="card__image" alt="" />
      <div className="card__overlay">
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img className="card__thumb" src={neptune} alt="" />
          <div className="card__header-text">
            <h5 style={{fontFamily:"Arial"}} >{planet.constellation}</h5>
            <h3 className="card__title">{planet.name}</h3>            
            <span style={{fontFamily:"Arial"}}  className="card__status">Magnitude: {planet.magnitude}</span>
          </div>
        </div>
        {/* <p style={{fontFamily:"Arial", fontSize:"10px"}}  className="card__description">{person.description}</p> */}
<p>Need a Telescope? {!planet.nakedEyeObject? "Yes" : "No"}</p>
<p>Above Horizon? {planet.aboveHorizon ? "Yes" : "No"}</p>       

        <div></div>

      </div>
    </div>    
 : null}</div>
{/* <div>{planet.name === "Pluto" ? <img class="planetimages" src={pluto}></img> : null}</div> */}








</div>

)


}

export default Planet