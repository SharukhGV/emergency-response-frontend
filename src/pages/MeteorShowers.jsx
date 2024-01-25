
import meteorShowers from "./meteorShower.json"
import meteorpics from "./meteorpics.png"
function MeteorShowers() {

console.log(meteorShowers.meteorShowers)

    return (
<>

<h1>Meteor Showers</h1>
{/* <img src={meteorpics} style={{width:"350px"}}></img> */}
<iframe width="560" height="315" src="https://www.youtube.com/embed/teKEkLNoYTk?si=zazlj1jeqN3Egojg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        <div>{meteorShowers.meteorShowers.map(meteor => {
            return (
<div key={meteor.name} style={{ color:"green", boarderRadius:"7%", padding:"3px"}}>
                <h2 style={{color:"gray"}}> {meteor.name}</h2>
                <h3>{meteor.date}</h3>
                <h4>{meteor.frequency}</h4>
                </div>
            )
        })
        }</div>
<iframe width="560" height="315" src="https://www.youtube.com/embed/zkglsg0K1IY?si=S_ivIm88rzbQqmjR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

     <br></br>   {/* </div> */}
        <br></br>
</>
    )





}

export default MeteorShowers