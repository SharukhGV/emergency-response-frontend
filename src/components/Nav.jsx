import { Link } from "react-router-dom";
import Logout from "./Logout";
export default function Nav({loginUsername}) {
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
    {!loginUsername ? <Link to="/signup">Sign Up</Link>:null}
    </li>

    <li>
    {!loginUsername ?  <Link to="/login">Login</Link>:null}
    </li>

    
    <li>
    {loginUsername ? <Link to="/profile">👨🏼‍🚀</Link> : null}
    </li>

    {loginUsername ? <Logout/> :null}

    {/* <li>
      <Link to="/about">👨🏼‍🚀</Link>
    </li> */}
  </ul>)
}
