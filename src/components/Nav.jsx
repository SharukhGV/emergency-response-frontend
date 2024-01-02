import { Link } from "react-router-dom";
import Logout from "./Logout";
export default function Nav({loginUsername, toggleLOGIN,settoggleLOGIN, accessToken}) {
    return(
  <ul>
    <li>
      <Link to="/">🏡</Link>
    </li>
  


    <li>
    {!!toggleLOGIN ?  <Link to="/index">🌍</Link>:null}
    </li>

    {/* <li>
    {!toggleLOGIN ? <Link to="/skydata">🌃</Link>:null}
    </li> */}

    <li>
    {!toggleLOGIN ? <Link to="/signup">📃</Link>:null}
    </li>

    <li>
    {!toggleLOGIN ?  <Link to="/login">💻</Link>:null}
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
