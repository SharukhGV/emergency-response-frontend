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
export default function App() {
  // const [count, setCount] = useState(0)
// const [location, setLocation] = useState(0);
const [lat, setLatitude] = useState(null);
const [lng, setLongitude] = useState(null);
const [emergencyType, setEmergencyType]=useState("")
const[mapMarkers, setMapMarkers]=useState([])
  return (
   <>

<Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home setEmergencyType={setEmergencyType}/>} />
        <Route path="/form" element={<NewForm lat={lat} lng={lng} setLongitude={setLongitude} setLatitude={setLatitude} emergencyType={emergencyType} />} />
<Route path="/index" element={<Index lat={lat} lng={lng} setLongitude={setLongitude} setLatitude={setLatitude} mapMarkers={mapMarkers} setMapMarkers={setMapMarkers} />}/>
<Route path="/about" element={<About/>} />

        </Routes>
</Router>
    </>
  )
}

