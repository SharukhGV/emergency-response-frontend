import { Link } from "react-router-dom";
import Logout from "./Logout";
export default function Nav({loginUsername, toggleLOGIN,settoggleLOGIN, accessToken}) {
    return(
  <ul>
    <li>
      <Link to="/">🏡</Link>
    </li>
  


    <li>
      <Link to="/index">🌍</Link>
    </li>

    <li>
      <Link to="/skydata">🌃</Link>
    </li>

    <li>
    {!toggleLOGIN ? <Link to="/signup">Sign Up</Link>:null}
    </li>

    <li>
    {!toggleLOGIN ?  <Link to="/login">Login</Link>:null}
    </li>

    
    <li>
    {!!toggleLOGIN ? <Link to="/profile">👨🏼‍🚀</Link> : null}
    </li>

    {!!toggleLOGIN ? <Logout toggleLOGIN={toggleLOGIN} settoggleLOGIN={settoggleLOGIN} loginUsername={loginUsername}/> :null}

    {/* <li>
      <Link to="/about">👨🏼‍🚀</Link>
    </li> */}
  </ul>)
}
