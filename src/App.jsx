import { useState, useEffect } from 'react'
import './App.css'
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewForm from './pages/NewForm';
import NavigationBar from './components/NavigationBar';
import Index from './pages/Index';
import Login from './components/LoginRegister/Login';
import TermsConditions from './pages/TermsConditions';
import Register from './components/LoginRegister/Register';
import Profile from './components/ProfilePage/Profile';
import NotFound from './pages/NotFound';
import IndividualView from './components/IndexPage/IndividualView';
import EditForm from './pages/EditForm';
import PlanetsVisible from './components/Planets/PlanetsVisible';
import Loading from './components/LoginRegister/Loading';
import PleaseLogin from './components/LoginRegister/PleaseLogin';
import MarketPlaceHome from './components/marketplace/MarketPlaceHome';
import AllProducts from './components/marketplace/AllProducts';
import NewItem from './components/marketplace/NewItem';
import GeoAstroEvents from './components/GeoAstroEvents/GeoAstroEvents';
export default function App() {

  const [lat, setLatitude] = useState(null);
  const [lng, setLongitude] = useState(null);
  const [emergencyType, setEmergencyType] = useState("")
  const [mapMarkers, setMapMarkers] = useState([])
  const [loginUsername, setLoginUsername] = useState("")
  const [toggleLOGIN, settoggleLOGIN] = useState(false)

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
    resetActivityTimer();

    const activities = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];

    activities.forEach(event => {
      window.addEventListener(event, resetActivityTimer);
    });

    return () => {
      clearTimeout(activityTimer);
      activities.forEach(event => {
        window.removeEventListener(event, resetActivityTimer);
      });
    };
  }, []);


  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>

      <Router>
        <NavigationBar toggleTheme={toggleTheme} theme={theme} setTheme={setTheme} set  settoggleLOGIN={settoggleLOGIN} toggleLOGIN={toggleLOGIN} accessToken={accessToken} setLoginUsername={setLoginUsername} loginUsername={loginUsername} />
        <Routes>
          <Route path="/" element={<Home toggleTheme={toggleTheme} theme={theme} accessToken={accessToken} setAccessToken={setAccessToken} loginUsername={loginUsername} setLoginUsername={setLoginUsername} setEmergencyType={setEmergencyType} />} />
          <Route path="/form" element={<NewForm settoggleLOGIN={settoggleLOGIN} toggleLOGIN={toggleLOGIN} accessToken={accessToken} setAccessToken={setAccessToken} loginUsername={loginUsername} setLoginUsername={setLoginUsername} lat={lat} lng={lng} setLongitude={setLongitude} setLatitude={setLatitude} emergencyType={emergencyType} />} />
          {!!accessToken ? <Route path="/index" element={<Index setAccessToken={setAccessToken} loginUsername={loginUsername} lat={lat} lng={lng} setLongitude={setLongitude} setLatitude={setLatitude} mapMarkers={mapMarkers} setMapMarkers={setMapMarkers} />} /> : null}
          {!accessToken ? <Route path="/signup" element={<Register />} /> : null}
          {!accessToken ? <Route path="/login" element={<Login settoggleLOGIN={settoggleLOGIN} toggleLOGIN={toggleLOGIN} accessToken={accessToken} setAccessToken={setAccessToken} loginUsername={loginUsername} setLoginUsername={setLoginUsername} />} /> : null}
          <Route path="/loading" element={<Loading accessToken={accessToken} />} />
          <Route path="/pleaselogin" element={<PleaseLogin accessToken={accessToken} />} />
          <Route path="/geoastroevents" element={<GeoAstroEvents accessToken={accessToken} />} />

          <Route path="/termsconditions" element={<TermsConditions />} />
          {!!accessToken ? <Route path="/profile" element={<Profile loginUsername={loginUsername} />} /> : null}
          {!!accessToken ? <Route path="/index/:id" element={<IndividualView loginUsername={loginUsername} />} /> : null}
          {!!accessToken ? <Route path="/index/:id/edit" element={<EditForm />} /> : null}
          {/* {!!accessToken ? <Route path="/visibleplanets" element={<PlanetsVisible latitude={lat} longitude={lng} />} /> : null} */}
          {!!accessToken ? <Route path="/marketplace" element={<MarketPlaceHome loginUsername={loginUsername} latitude={lat} longitude={lng} />} /> : null}
          {!!accessToken ? <Route path="/marketplace/index" element={<AllProducts latitude={lat} longitude={lng} />} /> : null}
          {!!accessToken ? <Route path="/marketplace/newitem" element={<NewItem latitude={lat} longitude={lng} />} /> : null}

          <Route path="/*" element={<NotFound />} />

        </Routes>
      </Router>

    </>
  )
}

