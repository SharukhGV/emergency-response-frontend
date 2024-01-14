
import meteorShowers from "./meteorShower.json"

function MeteorShowers() {

console.log(meteorShowers.meteorShowers)

    return (
<>


<h1 style={{color:"black"}}>Meteor Showers</h1>
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
        
        {/* </div> */}
        
</>
    )





}

export default MeteorShowers