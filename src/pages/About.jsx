import "./about.css"
import sharukh from "./sharukhPro.png"
// import hiveheavenLOGO from "./hiveHeavenLOGO.png"
import loqationIQLOGO from "./loqationIQLOGO.png"
import VisiblePlanetsAPILOGO from "./VisiblePlanetsAPILOGO.png"
import googlemapsAPI from "./googlemapsAPI.png"

export default function About(){


return(

<div> 
<h1 style={{color:"orange"}}>Hive of Heaven</h1>
<h2 style={{color:"purple"}}>Community Night Sky Finder</h2>
{/* <div style={{backgroundColor:"#FFFDDF", padding:"30px", borderRadius:"20px"}}> */}
<h4 style={{margin:"50px"}}>A community powered app where users may create a post on light-polluted areas or dark skies with geolocation tags. This is so others can be better informed if travelling to see the beauty of the night sky. </h4>

<h4 style={{margin:"50px"}}>Almost 80% of the world's populations cannot see the Milky Way band, and such beauty being hidden is truly a catastrophe!</h4>

<h2 style={{color:"purple"}}>APIs Used</h2>
<div>
<a href="https://locationiq.com/"><img src={loqationIQLOGO}></img></a>
<a href="https://github.com/shavik/visible-planets-api/blob/master/README.md"><img  src={VisiblePlanetsAPILOGO}></img></a>
<a href="https://developers.google.com/maps/apis-by-platform"><img  src={googlemapsAPI}></img></a>
</div>

<br></br>
<br></br>
<br></br>
{/* <div className="card">
  
  <img style={{width:'100%'}} src={hiveheavenLOGO} alt="sharukh"></img>
  <h1>Hive of Heaven</h1>
  <p className="title">Community Night Sky Finder
</p>
  <p>PURSUIT Fellowship</p>

  <p><button className="buttonCard"></button></p>
</div> */}
{/* </div> */}




{/* <div style={{backgroundColor:"#EEDFFF", padding:"30px", borderRadius:"20px"}}> */}



<div className="card">
  
  <img style={{width:'100%'}} src={sharukh} alt="sharukh"></img>
  <h1>Sharukh Velupillai</h1>
  <p className="title">Full Stack Software Developer
</p>
  <p>PURSUIT Fellowship</p>

  <p><button className="buttonCard"></button></p>
</div>
{/* </div> */}
</div>
)



}

// export default About