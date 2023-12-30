import { Link } from "react-router-dom";
import Logout from "./Logout";
export default function Nav({loginUsername, accessToken}) {
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
    {!accessToken ? <Link to="/signup">Sign Up</Link>:null}
    </li>

    <li>
    {!accessToken ?  <Link to="/login">Login</Link>:null}
    </li>

    
    <li>
    {!!accessToken ? <Link to="/profile">👨🏼‍🚀</Link> : null}
    </li>

    {!!accessToken ? <Logout loginUsername={loginUsername}/> :null}

    {/* <li>
      <Link to="/about">👨🏼‍🚀</Link>
    </li> */}
  </ul>)
}
