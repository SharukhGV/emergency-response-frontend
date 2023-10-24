import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
import markerImage from "./markerImage.png"
import { useEffect, useState } from "react";
export default function GoogleMaps({setMapMarkers, mapMarkers}){

    const mapStyles = {
      height: "400px",
      width: "100%",
    };
  
    const defaultCenter = {
      lat: 0, // Default latitude
      lng: 0, // Default longitude
    };


const [markers, setMarkers] = useState([]);

useEffect(() => {
  setMarkers(mapMarkers);
}, []);

useEffect(() => {
  console.log(markers); // Log markers when it changes
}, [markers]);
    
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
              position={{ lat: marker.lat, lng: marker.lng }}
             
            />
          ))}
        </GoogleMap>
      </LoadScript>
    );
  };
  
  