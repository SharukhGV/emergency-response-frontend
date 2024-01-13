import { Link } from "react-router-dom";
import Logout from "./Logout";
import Menu from "../Menu";
export default function Nav({loginUsername, toggleLOGIN,settoggleLOGIN, accessToken}) {
    return(
  <div style={{backgroundColor:"black", paddingBottom:"15px",paddingTop:"10px"}}>
    {/* <span style={{backgroundColor:"black", paddingTop:"10px", paddingRight:"100%"}}></span> */}

      <span>{!!toggleLOGIN ? <Logout toggleLOGIN={toggleLOGIN} settoggleLOGIN={settoggleLOGIN} loginUsername={loginUsername}/> :null}</span>

  {!!toggleLOGIN ? <Menu />:null}
 
  {!toggleLOGIN ?<Link to="/">🏡</Link>:null}
  {!toggleLOGIN ? <span style={{paddingLeft:"7px",paddingRight:"7px"}}></span>:null}

     {!toggleLOGIN ? <span>
   <Link to="/signup">📃</Link>
    </span>:null}
    {!toggleLOGIN ?<span style={{paddingLeft:"7px",paddingRight:"7px"}}></span>:null}
   {!toggleLOGIN ?  <span>
     <Link to="/login">💻</Link>
    </span>:null}

  </div>)
}
