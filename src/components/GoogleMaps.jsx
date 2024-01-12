
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
import markerImage from "./markerImage.png";
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






  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={2}
        center={defaultCenter}
      >
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