import("./App.css")
import { Link } from "react-router-dom"
function Menu({ toggleLOGIN }) {

    return (// <!--    Made by Erik Terwan    -->
        // <!--   24th of November 2015   -->
        // <!--        MIT License        -->
        // Tweaked by Sharukh Velupillai
        <span style={{ margin: "0px", padding: "0px" }} role="navigation">
            <span id="menuToggle">

                <input style={{width:"30px",height:"70px"}} type="checkbox" />

                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>

                <span></span>
                <span></span>

                <div className="ul" id="menu">
                    <a ><div className="li"><Link to="/">🏡 Home</Link>
                    </div></a>
                    <a>< div className="li"><Link to="/index">🌍Community Page</Link>
                    </div></a>
                    <a >< div className="li">< Link to="/visibleplanets">🔭Visible Planets</Link></div></a>
                    <a >< div className="li"><Link to="/about">🏢 About</Link></div></a>
                    <a >< div className="li"><Link to="/profile">👨🏼‍🚀 Profile</Link> </div></a>

                </div>
            </span>
        </span>

    )
}

export default Menu