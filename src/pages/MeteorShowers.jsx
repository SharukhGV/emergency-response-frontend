
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
  <div class="youtube">

  {/* <div class="card">
  <img src={"https://upload.wikimedia.org/wikipedia/commons/f/fc/Leonids-1833.jpg"} alt="Avatar" style="width:100%"></img>
  <div class="container"></div>
    <h4><b>John Doe</b></h4>
    <p>Architect & Engineer</p>
  </div> */}



{/* <div class="card">
  <img src={"https://upload.wikimedia.org/wikipedia/commons/f/fc/Leonids-1833.jpg"} alt="Avatar" style="width:100%"></img>
  <div class="container"></div>
    <h4><b>John Doe</b></h4>
    <p>Architect & Engineer</p>
  </div> */}
<br></br>

<img style={{height:"350px", width:"auto",borderRadius:"5px"}} src={"https://upload.wikimedia.org/wikipedia/commons/f/fc/Leonids-1833.jpg"} alt="Avatar" ></img>
    <h4><b>1833 Meteor Storm</b></h4>
    <p>Image Credit: Bible Readings for the Home Circle</p>




    {/* <img style={{width:"300px", height:"auto"}} src={"https://upload.wikimedia.org/wikipedia/commons/f/fc/Leonids-1833.jpg"}></img>  <img style={{width:"300px", height:"auto"}} src={"https://upload.wikimedia.org/wikipedia/commons/d/da/Leonids-Pickering.jpg"}></img> */}
<div style={{margin:"50px"}}>

<div>The Leonid meteor storm of 1833 was one of the most spectacular meteor showers in recorded history. It occurred during the early morning hours of November 13, 1833, and was particularly intense over North America. The event was characterized by an incredibly high number of meteors, with estimates ranging from tens of thousands to over 100,000 meteors per hour at its peak.</div>
<br></br>
<div>The meteors appeared to radiate from the constellation Leo, hence the name "Leonid." Observers reported that the sky was filled with streaks of light as if stars were falling or raining down. The meteors were so numerous that they resembled a storm rather than a typical meteor shower.</div>
<br></br>
<div>The 1833 Leonid meteor storm is often considered a benchmark event in the study of meteor showers. It played a crucial role in the development of our understanding of these celestial phenomena and contributed to the realization that meteor showers are associated with the debris left behind by comets.</div>
<br></br>
<div>The source of the 1833 Leonid meteor storm was later identified as the comet Tempel-Tuttle, which orbits the Sun and periodically sheds debris. When the Earth passes through this debris trail, the particles burn up in the atmosphere, creating the visible streaks of light known as meteors. The Leonid meteor shower occurs annually when the Earth intersects the orbit of Comet Tempel-Tuttle, but the intensity of the storm observed in 1833 was exceptional and has not been matched in recent history.</div>
<br></br>
<div>Subsequent Leonid meteor showers have occurred with varying intensity, with periodic outbursts when the Earth encounters denser portions of the comet's debris trail. However, the 1833 event remains a legendary and unique occurrence in the history of meteor showers.</div>


</div>


</div>
  <div  class="meteorInfo">
    <br></br>
    <h1>Annual Meteor Showers</h1>
{/* <img src={meteorpics} style={{width:"350px"}}></img> */}
<br></br>
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