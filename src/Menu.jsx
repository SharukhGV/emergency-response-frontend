// import("./App.css")
// import { Link } from "react-router-dom"
// function Menu({ toggleLOGIN }) {

//     return (// <!--    Made by Erik Terwan    -->
//         // <!--   24th of November 2015   -->
//         // <!--        MIT License        -->
//         // Tweaked by Sharukh Velupillai
//         <span style={{ margin: "0px", padding: "0px" }} role="navigation">
//             <span id="menuToggle">

//                 <input style={{width:"30px",height:"70px"}} type="checkbox" />

         
//                 {/* <span></span> */}
// <br></br>
//            <span style={{color:"orange"}}><strong>Menu</strong></span>
//                 {/* <span></span> */}

//                 <div className="ul" id="menu">
//                     <a ><div className="li"><Link to="/">🏡 Home</Link>
//                     </div></a>
//                     <a>< div className="li"><Link to="/index">🌍Community Page</Link>
//                     </div></a>
//                     <a >< div className="li"><Link to="/meteorshowers">☄️ Meteor Showers</Link> </div></a>

//                     <a >< div className="li">< Link to="/visibleplanets">🔭Visible Planets</Link></div></a>
//                     <a >< div className="li"><Link to="/about">🏢 About</Link></div></a>
//                     <a >< div className="li"><Link to="/profile">👨🏼‍🚀 Profile</Link> </div></a>

//                 </div>
//             </span>
//         </span>

//     )
// }

// export default 

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Menu() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link ><Link to="/">🏡 Home</Link></Nav.Link>
            {!!toggleLOGIN ?  <Nav.Link ><Link to="/index">🌍Community Page</Link></Nav.Link>:null}
            {!!toggleLOGIN ?  <NavDropdown title="Resources" id="basic-nav-dropdown">
              <NavDropdown.Item ><Link to="/meteorshowers">☄️ Meteor Showers</Link></NavDropdown.Item>
              <NavDropdown.Item >
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item >< Link to="/visibleplanets">🔭Visible Planets</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                Separated link
              </NavDropdown.Item>
            </NavDropdown> :null}
            {!!toggleLOGIN ? <Nav.Link><Link to="/profile">👨🏼‍🚀 Profile</Link> </Nav.Link>:null}
            <Nav.Link><span>{!!toggleLOGIN ? <Logout toggleLOGIN={toggleLOGIN} settoggleLOGIN={settoggleLOGIN} loginUsername={loginUsername}/> :null}</span></Nav.Link>

            {!toggleLOGIN ?  <Nav.Link><Link to="/login">💻</Link></Nav.Link>:null}
            {!toggleLOGIN ?<Nav.Link><Link to="/signup">📃</Link></Nav.Link>:null}


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;