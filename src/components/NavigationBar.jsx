import { Link } from "react-router-dom";
import Logout from "./Logout";
// import Menu from "../Menu";
import hivelogoClear from "./hivelogoClear.png"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavigationBar({loginUsername, toggleLOGIN,settoggleLOGIN, accessToken}) {
//     return(
//   <div style={{backgroundColor:"black", paddingBottom:"15px",paddingTop:"10px"}}>
//     {/* <span style={{backgroundColor:"black", paddingTop:"10px", paddingRight:"100%"}}></span> */}

//       <span>{!!toggleLOGIN ? <Logout toggleLOGIN={toggleLOGIN} settoggleLOGIN={settoggleLOGIN} loginUsername={loginUsername}/> :null}</span>

//   {!!toggleLOGIN ? <Menu />:null}
 
//   {!toggleLOGIN ?<Link to="/">🏡</Link>:null}
//   {!toggleLOGIN ? <span style={{paddingLeft:"7px",paddingRight:"7px"}}></span>:null}

//      {!toggleLOGIN ? <span>
//    <Link to="/signup">📃</Link>
//     </span>:null}
//     {!toggleLOGIN ?<span style={{paddingLeft:"7px",paddingRight:"7px"}}></span>:null}
//    {!toggleLOGIN ?  <span>
//      <Link to="/login">💻</Link>
//     </span>:null}

//   </div>)
// }
return (
  <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand ><Link to="/"><img style={{width:"57px", height:"35px"}} src={hivelogoClear}></img></Link></Navbar.Brand>
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav"> */}
        {/* <Nav className="me-auto"> */}
          {/* <Nav.Link ><Link to="/">🏡 Home</Link></Nav.Link> */}
         


          {!!toggleLOGIN ?  <NavDropdown style={{color:"yellow"}} title="Profile" id="basic-nav-dropdown">
            <NavDropdown.Item ><Link to="/profile">👨🏼‍🚀 Profile</Link> </NavDropdown.Item>

    
            <NavDropdown.Item ><Logout toggleLOGIN={toggleLOGIN} settoggleLOGIN={settoggleLOGIN} loginUsername={loginUsername}/></NavDropdown.Item>

            {/* <NavDropdown.Divider />
            <NavDropdown.Item>
              Separated link
            </NavDropdown.Item> */}
          </NavDropdown> :null}


          {!!toggleLOGIN ? <Nav.Link><Link to="/meteorshowers">☄️</Link></Nav.Link>:null}

     {!!toggleLOGIN ?     <Nav.Link>< Link to="/visibleplanets">🔭</Link></Nav.Link> :null}
 {!!toggleLOGIN ?  <Nav.Link ><Link to="/index">🌍</Link></Nav.Link>:null}
          {!toggleLOGIN ?  <Nav.Link><Link to="/login">💻 <strong style={{color:"yellow"}}>Login</strong></Link></Nav.Link>:null}
          {!toggleLOGIN ?<Nav.Link><Link to="/signup">📃 <strong style={{color:"yellow"}}>Register</strong></Link></Nav.Link>:null}


        {/* </Nav> */}
      {/* </Navbar.Collapse> */}
    </Container>
  </Navbar>
);
}

export default NavigationBar