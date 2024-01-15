
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
import markerImage from "./markerImage.png";
import telescopeicon from "../pages/telescopeicon.png"
import { useEffect, useState } from "react";
import axios from "axios";
export default function GoogleMaps({ mapMarkers }) {
  const [markers, setMarkers] = useState([]);
  const [fireball, setFireball] = useState([]);

  useEffect(() => {
    setMarkers(mapMarkers);
  }, [mapMarkers]);

  const mapStyles = {
    height: "400px",
    width: "100%",
  };

  let defaultCenter = {
    lat: 0, // Default latitude
    lng: 0, // Default longitude
  };

  if(markers.length === 1){
    defaultCenter={
      lat:markers[0].lat,
      lng:markers[0].lng
    }
  }

// // FireBall  DATA https://ssd-api.jpl.nasa.gov/fireball.api
// useEffect(() => {
//   axios.get("https://ssd-api.jpl.nasa.gov/fireball.api?limit=10").then(res => {
//       // console.log(res.data.data)
//       setFireball(res.data[0])
//       console.log(fireball)
//   }
//   )

// }, [])


const darkSkyPreserves = [
  { name: "Jasper National Park", lat: 52.8735, lng: -118.0814 },
  { name: "Aoraki Mackenzie Intl Dark Sky Reserve", lat: -43.7340, lng: 170.0966 },
  { name: "Brecon Beacons National Park", lat: 51.9479, lng: -3.3875 },
  { name: "Natural Bridges National Monument", lat: 37.6096, lng: -110.0122 },
  { name: "Mont-Mégantic Dark Sky Reserve", lat: 45.4237, lng: -71.0916 },
  { name: "Exmoor National Park", lat: 51.1304, lng: -3.5542 },
  { name: "NamibRand Nature Reserve", lat: -25.0393, lng: 15.0956 },
  { name: "Big Bend National Park", lat: 29.2497, lng: -103.2500 },
  { name: "Grand Canyon-Parashant National Monument", lat: 36.9147, lng: -113.0289 },
  { name: "Cherry Springs State Park", lat: 41.6501, lng: -77.8165 },
];



  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={2}
        center={defaultCenter}
      >
{darkSkyPreserves.map((marker, index) => (
          <Marker
            key={index+12345}
            position={{ lat: parseFloat(marker.lat), lng: parseFloat(marker.lng) }}
            icon={telescopeicon}
          />
        ))}

        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={{ lat: parseFloat(marker.lat), lng: parseFloat(marker.lng) }}
            icon={markerImage}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}