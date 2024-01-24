
import meteorShowers from "./meteorShower.json"
import meteorpics from "./meteorpics.png"
function MeteorShowers() {

console.log(meteorShowers.meteorShowers)

    return (
<>


<h1 style={{color:"black"}}>Meteor Showers</h1>
<img src={meteorpics} style={{width:"350px"}}></img>
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
        
     <br></br>   {/* </div> */}
        <br></br>
</>
    )





}

export default MeteorShowers