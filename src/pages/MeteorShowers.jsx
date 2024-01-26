
import meteorShowers from "./meteorShower.json"
import meteorpics from "./meteorpics.png"

import "./meteorshowers.css"
function MeteorShowers() {

console.log(meteorShowers.meteorShowers)

    return (
<>

<div class="homecontainerMeteors">
  <div class="youtube"><iframe width="100%" height="50%" src="https://www.youtube.com/embed/teKEkLNoYTk?si=zazlj1jeqN3Egojg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  <iframe width="100%" height="50%" src="https://www.youtube.com/embed/zkglsg0K1IY?si=S_ivIm88rzbQqmjR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

</div>
  <div  class="meteorInfo"><h1 style={{background:"linear-gradient(90deg, rgba(255,248,0,0.3169642857142857) 36%, rgba(0,112,255,0.5942752100840336) 49%, rgba(255,0,0,0.4990371148459384) 63%)"}}>Meteor Showers</h1>
{/* <img src={meteorpics} style={{width:"350px"}}></img> */}

        <div >{meteorShowers.meteorShowers.map(meteor => {
            return (
<div key={meteor.name} className="meteorMap" style={{ color:"orange", boarderRadius:"7%", padding:"3px"}}>
                <h2 style={{color:"yellow"}}> {meteor.name}</h2>
                <h3  style={{color:"gray"}}>{meteor.date}</h3>
                <h4  style={{color:"red"}}>{meteor.frequency}</h4>
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