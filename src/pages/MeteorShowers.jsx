
import meteorShowers from "./meteorShower.json"
import meteorpics from "./meteorpics.png"

import "./meteorshowers.css"
function MeteorShowers() {

console.log(meteorShowers.meteorShowers)

// {/* <div key={meteor.name} className="meteorMap" style={{ color:"orange", boarderRadius:"7%", padding:"3px"}}>
//                 <h2 style={{color:"yellow"}}> {meteor.name}</h2>
//                 <h3  style={{color:"gray"}}>{meteor.date}</h3>
//                 <h4  style={{color:"red"}}>{meteor.frequency}</h4>
//                 </div> */}

    return (
<>

<div class="homecontainerMeteors">
  <div class="youtube"><iframe width="100%" height="50%" src="https://www.youtube.com/embed/teKEkLNoYTk?si=zazlj1jeqN3Egojg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  <iframe width="100%" height="50%" src="https://www.youtube.com/embed/zkglsg0K1IY?si=S_ivIm88rzbQqmjR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

</div>
  <div  class="meteorInfo"><h1>Meteor Showers</h1>
{/* <img src={meteorpics} style={{width:"350px"}}></img> */}

        <div >{meteorShowers.meteorShowers.map(meteor => {
            return (


                <div style={{fontFamily:"Arial"}} className="card">
      <img style={{maxHeight:"250px"}} src={meteor.image} className="card__image" alt="" />
      <div className="card__overlay">
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img className="card__thumb" src={meteor.image} alt="" />
          <div className="card__header-text">
            <h5 style={{fontFamily:"Arial"}} >{meteor.name}</h5>
            <h3 className="card__title">{meteor.date}</h3>            
            <span style={{fontFamily:"Arial"}}  className="card__status"> </span>
          </div>
        </div>
        {/* <p style={{fontFamily:"Arial", fontSize:"10px"}}  className="card__description">{person.description}</p> */}
<p>{meteor.frequency}</p>
{/* <p>Above Horizon? {planet.aboveHorizon ? "Yes" : "No"}</p>        */}

        <div></div>

      </div>
    </div>    
            )
        })
        }</div></div>
</div>



     <br></br>   {/* </div> */}
        <br></br>
</>
    )





}

export default MeteorShowers