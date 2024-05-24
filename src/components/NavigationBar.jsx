import { Link } from "react-router-dom";
import Logout from "./Logout";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import telescopeHome from "./telescopeHome.png"
function NavigationBar({ loginUsername, toggleLOGIN, settoggleLOGIN, accessToken }) {

  return (
    <Navbar expand="lg" className="navigationBAr" >
      <Container className="NavBarContainer" fluid>
        <Navbar.Brand ><Link to="/"><img style={{ width: "50px", height: "50px" }} src={telescopeHome}></img></Link></Navbar.Brand>


        {!!toggleLOGIN ? <NavDropdown style={{ color: "black" }} title="Profile" id="basic-nav-dropdown">
          <NavDropdown.Item ><Link to="/profile">👨🏼‍🚀 Profile</Link> </NavDropdown.Item>


          <NavDropdown.Item ><Logout toggleLOGIN={toggleLOGIN} settoggleLOGIN={settoggleLOGIN} loginUsername={loginUsername} /></NavDropdown.Item>


        </NavDropdown> : null}


        {!!toggleLOGIN ? <Nav.Link><Link to="/meteorshowers">☄️</Link></Nav.Link> : null}
        {!!toggleLOGIN ? <NavDropdown style={{ color: "black" }} title="🛍️" id="basic-nav-dropdown">
          <NavDropdown.Item ><Link to="/marketplace"><strong>Market</strong></Link> </NavDropdown.Item>


          <NavDropdown.Item ><Link to="/marketplace/newitem"><strong>New Item</strong></Link></NavDropdown.Item>
          <NavDropdown.Item ><Link to="/marketplace/index"><strong>All Items</strong></Link></NavDropdown.Item>


        </NavDropdown> : null}

        {!!toggleLOGIN ? <Nav.Link>< Link to="/visibleplanets">🪐</Link></Nav.Link> : null}
        {!!toggleLOGIN ? <Nav.Link ><Link to="/index">🌍</Link></Nav.Link> : null}
        {!toggleLOGIN ? <Nav.Link><Link to="/login">💻 <strong >Login</strong></Link></Nav.Link> : null}
        {!toggleLOGIN ? <Nav.Link><Link to="/signup">📃 <strong >Register</strong></Link></Nav.Link> : null}



      </Container>
    </Navbar>
  );
}

export default NavigationBar