import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewForm from './pages/NewForm';
// import Nav from './components/Nav';
// import GoogleMaps from './components/GoogleMaps';
import NavigationBar from './components/NavigationBar';
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
import MeteorShowers from './pages/MeteorShowers';

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

// Testing WebHook Delete and add webhook

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

    let activityTimer;
  
    const reloadPage = () => {
      window.location.reload();
    };
  
    const resetActivityTimer = () => {
      clearTimeout(activityTimer);
      activityTimer = setTimeout(reloadPage, 600000); // 10 minutes
    };
  
    useEffect(() => {
      // Set up the initial timer
      resetActivityTimer();
  
      // Define user activities to listen for
      const activities = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
      
      // Add event listeners to reset the timer on user activity
      activities.forEach(event => {
        window.addEventListener(event, resetActivityTimer);
      });
  
      // Clean up
      return () => {
        clearTimeout(activityTimer);
        activities.forEach(event => {
          window.removeEventListener(event, resetActivityTimer);
        });
      };
    }, []);

  return (
    <>

      <Router>
        <NavigationBar settoggleLOGIN={settoggleLOGIN} toggleLOGIN={toggleLOGIN} accessToken={accessToken} setLoginUsername={setLoginUsername} loginUsername={loginUsername} />
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
          {!!accessToken ?    <Route path="/meteorshowers" element={<MeteorShowers accessToken={accessToken}/>} />:null}

          <Route path="/termsconditions" element={<TermsConditions />} />
{!!accessToken ?  <Route path="/profile" element={<Profile loginUsername={loginUsername} />} />:null}
{!!accessToken ?   <Route path="/index/:id" element={<IndividualView loginUsername={loginUsername} />}/>:null}
{!!accessToken ?   <Route path="/index/:id/edit" element={<EditForm />}/>:null}
{!!accessToken ?    <Route path="/visibleplanets" element={<PlanetsVisible latitude={lat} longitude={lng} />}/> : null}

          <Route path="/*" element={<NotFound />} />

        </Routes>
      </Router>
      
{/* <div id="space">
  <div className="stars"></div>
  <div className="stars"></div>
  <div className="stars"></div>
  <div className="stars"></div>
  <div className="stars"></div>
</div> */}

    </>
  )
}

