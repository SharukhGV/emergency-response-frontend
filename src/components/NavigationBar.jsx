import { Link } from "react-router-dom";
import Logout from "./LoginRegister/Logout";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import telescopeHome from "./telescopeHome.png"
import moontoggle from "./moontoggle.png"
import suntoggle from "./suntoggle.png"
function NavigationBar({ theme,toggleTheme,loginUsername, toggleLOGIN, settoggleLOGIN, accessToken }) {


	function renderLOGO() {
		if (theme === "light") {

			return (<img onClick={toggleTheme} style={{ maxWidth: "50px", height: "50px" }} src={suntoggle}></img>)
		}
		if (theme === "dark") {
			return (
				<img onClick={toggleTheme} style={{ maxWidth: "50px", height: "50px" }} src={moontoggle}></img>

			)
		}
	}

  return (
    <Navbar expand="lg" className="navigationBAr" >
      <Container className="NavBarContainer" fluid>
        <Navbar.Brand ><Link to="/"><img style={{ width: "50px", height: "50px" }} src={telescopeHome}></img></Link></Navbar.Brand>


        {!!toggleLOGIN ? <NavDropdown  title="Profile" id="basic-nav-dropdown">
          <NavDropdown.Item ><Link to="/profile">👨🏼‍🚀 Profile</Link> </NavDropdown.Item>


          <NavDropdown.Item ><Logout toggleLOGIN={toggleLOGIN} settoggleLOGIN={settoggleLOGIN} loginUsername={loginUsername} /></NavDropdown.Item>


        </NavDropdown> : null}


        {!!toggleLOGIN ? <NavDropdown  title="Dreams" id="basic-nav-dropdown">
          <NavDropdown.Item ><Link to="/dreamnewform">Form</Link> </NavDropdown.Item>
          <NavDropdown.Item ><Link to="/dreams">All</Link> </NavDropdown.Item>




        </NavDropdown> : null}


     {/* <Nav.Link><Link to="/geoastroevents">☄️</Link></Nav.Link> */}
    
     <Nav.Link><Link to="/rssfeed">🍃</Link></Nav.Link>

        {/* {!!toggleLOGIN ? <Nav.Link>< Link to="/visibleplanets">🪐</Link></Nav.Link> : null} */}
        {!!toggleLOGIN ? <Nav.Link ><Link to="/index">🌍</Link></Nav.Link> : null}
        {!toggleLOGIN ? <Nav.Link><Link to="/login"><strong className="loginregisterwords">Login</strong></Link></Nav.Link> : null}
        {!toggleLOGIN ? <Nav.Link><Link to="/signup"><strong className="loginregisterwords">Register</strong></Link></Nav.Link> : null}
     
{renderLOGO()}
      </Container>
    </Navbar>
  );
}

export default NavigationBar