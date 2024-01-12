import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewForm from './pages/NewForm';
import Nav from './components/Nav';
// import GoogleMaps from './components/GoogleMaps';
import Index from './pages/Index';
import About from './pages/About';
import SkyBrightness from "./pages/SkyBrightness";
import Login from './pages/Login';
import TermsConditions from './pages/TermsConditions';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import IndividualView from './components/IndividualView';
import EditForm from './pages/EditForm';
import PlanetsVisible from './pages/PlanetsVisible';
import Loading from './pages/Loading';
import PleaseLogin from './pages/PleaseLogin';

// import Iron from '@hapi/iron'
// import { MAX_AGE, setTokenCookie, getTokenCookie } from './auth-cookies'

// const TOKEN_SECRET = process.env.TOKEN_SECRET

// export async function setLoginSession(res, session) {
//   const createdAt = Date.now()
//   // Create a session object with a max age that we can validate later
//   const obj = { ...session, createdAt, maxAge: MAX_AGE }
//   const token = await Iron.seal(obj, TOKEN_SECRET, Iron.defaults)

//   setTokenCookie(res, token)
// }

// Testing WebHook with just push event

export default function App() {
  // const [count, setCount] = useState(0)
  // const [location, setLocation] = useState(0);
  const [lat, setLatitude] = useState(null);
  const [lng, setLongitude] = useState(null);
  const [emergencyType, setEmergencyType] = useState("")
  const [mapMarkers, setMapMarkers] = useState([])
  const [loginUsername, setLoginUsername] = useState("")
  const [toggleLOGIN, settoggleLOGIN] = useState(false)

  // sessionStorage.setItem("username", loginUsername);
  const [accessToken, setAccessToken] = useState('');



  return (
    <>

      <Router>
        <Nav settoggleLOGIN={settoggleLOGIN} toggleLOGIN={toggleLOGIN} accessToken={accessToken} setLoginUsername={setLoginUsername} loginUsername={loginUsername} />
        <Routes>
          <Route path="/" element={<Home accessToken={accessToken} setAccessToken={setAccessToken} loginUsername={loginUsername} setLoginUsername={setLoginUsername} setEmergencyType={setEmergencyType} />} />
          <Route path="/form" element={<NewForm settoggleLOGIN={settoggleLOGIN} toggleLOGIN={toggleLOGIN} accessToken={accessToken} setAccessToken={setAccessToken} loginUsername={loginUsername} setLoginUsername={setLoginUsername} lat={lat} lng={lng} setLongitude={setLongitude} setLatitude={setLatitude} emergencyType={emergencyType} />} />
          {!!accessToken ?  <Route path="/index" element={<Index setAccessToken={setAccessToken} loginUsername={loginUsername} lat={lat} lng={lng} setLongitude={setLongitude} setLatitude={setLatitude} mapMarkers={mapMarkers} setMapMarkers={setMapMarkers} />} />:null}
          <Route path="/skydata" element={<SkyBrightness />} />
          {!accessToken ?  <Route path="/signup" element={<Register />} />:null}
          {!accessToken ?  <Route path="/login" element={<Login settoggleLOGIN={settoggleLOGIN} toggleLOGIN={toggleLOGIN} accessToken={accessToken} setAccessToken={setAccessToken} loginUsername={loginUsername} setLoginUsername={setLoginUsername} />} />:null}
          <Route path="/about" element={<About />} />
          <Route path="/loading" element={<Loading accessToken={accessToken}/>} />
          <Route path="/pleaselogin" element={<PleaseLogin accessToken={accessToken}/>} />

          <Route path="/termsconditions" element={<TermsConditions />} />
{!!accessToken ?  <Route path="/profile" element={<Profile loginUsername={loginUsername} />} />:null}
{!!accessToken ?   <Route path="/index/:id" element={<IndividualView />}/>:null}
{!!accessToken ?   <Route path="/index/:id/edit" element={<EditForm />}/>:null}
<Route path="/visibleplanets" element={<PlanetsVisible latitude={lat} longitude={lng} />}/>

          <Route path="/*" element={<NotFound />} />

        </Routes>
      </Router>
    </>
  )
}

