import { Link } from "react-router-dom";

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
      <Link to="/signup">Sign Up</Link>
    </li>

    <li>
      <Link to="/login">Login</Link>
    </li>

    
    <li>
    {loginUsername ? <Link to="/profile">👨🏼‍🚀</Link> : null}
    </li>

    {/* <li>
      <Link to="/about">👨🏼‍🚀</Link>
    </li> */}
  </ul>)
}
