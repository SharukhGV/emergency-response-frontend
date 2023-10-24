import { Link } from "react-router-dom";

export default function Nav() {
    return(
  <ul>
    <span>
      <Link to="/">🏡</Link>
    </span>
  


    <span>
      <Link to="/maps">🌐</Link>
    </span>
  </ul>)
}
