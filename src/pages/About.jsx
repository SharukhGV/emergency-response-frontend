import "./about.css"
import sharukh from "./sharukhPro.png"
export default function About(){


return(

<div> 

<div className="card">
  <img style={{width:'100%'}} src={sharukh} alt="sharukh"></img>
  <h1>Sharukh GV</h1>
  <p className="title">Full Stack Software Developer</p>
  <p>PURSUIT Fellowship</p>

  <p>Developing Emergency Relief Applications</p>
  <p><button className="buttonCard"></button></p>
</div>

<div style={{width:"300px", padding:"30px", margin:"auto", backgroundColor:"#3b3640", color:"beige", borderRadius:"10px", marginBottom:"30px"}}>"This application is a starting point for something big.
With proper funding, this application can consititute the foundation to a full scale emergency relief operations organization. Drone deployment to survey locations and robotic automated vehicles can deliver care packages to the needy in difficult to reach areas.
In addition, group operations to help those in distress such as earthquakes and other calamities can be of use with further development, funding, and organization."
<p>- Sharukh GV</p>
<p>"If you save one life, it is as if you saved the whole of humanity."</p>
<p> مُحَمَّدﷺ</p>


</div>


</div>

)



}

// export default About