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
export default function App() {
  // const [count, setCount] = useState(0)
// const [location, setLocation] = useState(null);
const [emergencyType, setEmergencyType]=useState("")
const[mapMarkers, setMapMarkers]=useState([])
  return (
   <>

<Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home setEmergencyType={setEmergencyType}/>} />
        <Route path="/form" element={<NewForm emergencyType={emergencyType} />} />
<Route path="/index" element={<Index mapMarkers={mapMarkers} setMapMarkers={setMapMarkers} />}/>
        </Routes>
</Router>
    </>
  )
}

