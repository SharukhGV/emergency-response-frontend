
import meteorShowers from "./meteorShower.json"
import meteorpics from "./meteorpics.png"

import "./meteorshowers.css"
function MeteorShowers() {
const today = new Date();
console.log(today.getMonth())
// console.log(Number((meteorShowers.meteorShowers.dateStart.charAt(0)+meteorShowers.meteorShowers.dateStart.charAt(1))))

// meteorShowers.meteorShowers.map(x=>{console.log(x.dateStart.charAt(0)+x.dateStart.charAt(1))})
// console.log(today.getMonth())
// {/* <div key={meteor.name} className="meteorMap" style={{ color:"orange", boarderRadius:"7%", padding:"3px"}}>
//                 <h2 style={{color:"yellow"}}> {meteor.name}</h2>
//                 <h3  style={{color:"gray"}}>{meteor.date}</h3>
//                 <h3  style={{color:"red"}}>{meteor.frequency}</h3>
//                 </div> */}
let monthString = `${today.getMonth()}`
let monthString0 = "0" + (today.getMonth())
const filterDateMeteors = meteorShowers.meteorShowers.filter(meteor =>{return (Number((meteor.dateStart.charAt(0)+meteor.dateStart.charAt(1))) == (monthString.length===1 ? Number("0"+monthString) : Number(monthString0)))})
console.log(monthString0)
    return (
<div className="two">

<div className="homecontainerMeteors">
  <div className="youtube">

  {/* <div className="card">
  <img src={"https://upload.wikimedia.org/wikipedia/commons/f/fc/Leonids-1833.jpg"} alt="Avatar" style="width:100%"></img>
  <div className="container"></div>
    <h3><b>John Doe</b></h3>
    <p><strong>Architect & Engineer</strong></p>
  </div> */}



{/* <div className="card">
  <img src={"https://upload.wikimedia.org/wikipedia/commons/f/fc/Leonids-1833.jpg"} alt="Avatar" style="width:100%"></img>
  <div className="container"></div>
    <h3><b>John Doe</b></h3>
    <p><strong>Architect & Engineer</strong></p>
  </div> */}
<br></br>

{/* <img style={{height:"350px", width:"auto",borderRadius:"5px"}} src={"https://upload.wikimedia.org/wikipedia/commons/f/fc/Leonids-1833.jpg"} alt="Avatar" ></img>
    <h3><b>1833 Meteor Storm</b></h3>
    <p><strong>Image Credit: Bible Readings for the Home Circle</strong></p>
 */}



    {/* <img style={{width:"300px", height:"auto"}} src={"https://upload.wikimedia.org/wikipedia/commons/f/fc/Leonids-1833.jpg"}></img>  <img style={{width:"300px", height:"auto"}} src={"https://upload.wikimedia.org/wikipedia/commons/d/da/Leonids-Pickering.jpg"}></img> */}
{/* <div style={{margin:"50px"}}>

<div>The Leonid meteor storm of 1833 was one of the most spectacular meteor showers in recorded history. It occurred during the early morning hours of November 13, 1833, and was particularly intense over North America. The event was characterized by an incredibly high number of meteors, with estimates ranging from tens of thousands to over 100,000 meteors per hour at its peak.</div>
<br></br>
<div>The meteors appeared to radiate from the constellation Leo, hence the name "Leonid." Observers reported that the sky was filled with streaks of light as if stars were falling or raining down. The meteors were so numerous that they resembled a storm rather than a typical meteor shower.</div>
<br></br>
<div>The 1833 Leonid meteor storm is often considered a benchmark event in the study of meteor showers. It played a crucial role in the development of our understanding of these celestial phenomena and contributed to the realization that meteor showers are associated with the debris left behind by comets.</div>
<br></br>
<div>The source of the 1833 Leonid meteor storm was later identified as the comet Tempel-Tuttle, which orbits the Sun and periodically sheds debris. When the Earth passes through this debris trail, the particles burn up in the atmosphere, creating the visible streaks of light known as meteors. The Leonid meteor shower occurs annually when the Earth intersects the orbit of Comet Tempel-Tuttle, but the intensity of the storm observed in 1833 was exceptional and has not been matched in recent history.</div>
<br></br>
<div>Subsequent Leonid meteor showers have occurred with varying intensity, with periodic outbursts when the Earth encounters denser portions of the comet's debris trail. However, the 1833 event remains a legendary and unique occurrence in the history of meteor showers.</div>


</div> */}
{/* <div> {
  meteorShowers.meteorShowers.map(meteor => {




    
  }
}
</div> */}

</div>
  <div  className="meteorInfo">
    <br></br>
    <h1 style={{color:"darkblue"}}>Upcoming Meteor Showers</h1>
{/* <img src={meteorpics} style={{width:"350px"}}></img> */}
<br></br>
        <div >{filterDateMeteors.map(meteor => {
            return (


                <div style={{fontFamily:"Arial"}} className="card">
      <img style={{maxHeight:"250px"}} src={meteor.image} className="card__image" alt="" />
      <div className="card__overlay">
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img className="card__thumb" src={meteor.image} alt="" />
          <div className="card__header-text">
            <h5 style={{fontFamily:"Arial"}} >{meteor.name}</h5>
            <h3 className="card__title">Start: {meteor.dateStart}</h3>  
            <h3 className="card__title">End: {meteor.dateEnd}</h3>            
          
            <span style={{fontFamily:"Arial"}}  className="card__status"> </span>
          </div>
        </div>
        {/* <p style={fontFamily:"Arial", fontSize:"10px"}}  className="card__description">{person.description}</strong></p> */}
<p><strong>{meteor.frequency}</strong></p>

        <div></div>

      </div>
    </div>    
            )
        })
        }</div></div>
</div>

<div style={{textAlign:"left", marginLeft:"100px",marginRight:"100px"}}>
  <br></br>
  <br></br>
<h1 style={{color:"darkblue"}}>Guide to Watching the Meteor Showers</h1>
<br></br>
<div>
<h3 style={{color:"purple"}}>When and Where to Watch:</h3>
   <p><strong>- The Lyrid meteor shower runs from April 15 to April 29.</strong></p>
   <p><strong>- The peak occurs on the evening of April 21 to the early morning hours of April 22.</strong></p>
   <p><strong>- Find a dark location away from city lights for the best view.</strong></p>
</div>
<br></br>
<div >

   <h3 style={{color:"purple"}}>Meteor Origins:</h3>
   <p><strong>   - The Lyrids are one of the oldest known meteor showers, observed for at least 2,700 years.</strong></p>
   <p><strong>- They occur when Earth passes through the debris field of comet C/1861 G1 Thatcher.</strong></p>
   <p><strong>- Lyrid meteors appear to originate near the constellation Lyra, specifically from the radiant point near the bright star Vega.</strong></p>
   </div>
<br></br>
<div>
   <h3 style={{color:"purple"}}>Observation Tips:</h3>
   <p><strong>- Know the peak time: The best viewing time is during the peak hours.</strong></p>
   <p><strong>- Location: Choose a dark spot away from artificial lights.</strong></p>
   <p><strong>- Patience: Spend at least an hour observing to see more meteors.</strong></p>
   <p><strong>- Notice speeds and colors: Lyrid meteors move at 29 miles per second.</strong></p>
   <p><strong>- Meteor trains: Look for lingering trails after a meteor passes.</strong></p>
   </div>
<br></br>
<div>
   <h3 style={{color:"purple"}}>Stellarium Software:</h3>
   <p><strong>- To track the Lyrids, use Stellarium, a free planetarium software.</strong></p>
   <p><strong>- Set your location and date to April 21-22.</strong></p>
   <p><strong>- Look toward the constellation Lyra to spot the radiant point.</strong></p>
   <p><strong>- Enjoy the show as you witness these "shooting stars" streak across the sky!</strong></p>
   </div>
<br></br>
<div>
   <p style={{color:"gray"}}><strong>Remember, meteor showers are unpredictable, so patience and a sense of wonder are key. Happy stargazing!</strong></p>

   </div>
<br></br>

</div>

     <br></br>   {/* </div> */}
        <br></br>
</div>
    )





}

export default MeteorShowers