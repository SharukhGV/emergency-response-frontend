
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
import markerImage from "./markerImage.png";
import telescopeicon from "./telescopeicon.png"
import { useEffect, useState } from "react";
import observatoryMarker from "./observatoryMarker.png"
// This component is imported into the actual Index page in the "pages" folder
export default function GoogleMaps({ mapMarkers, preserveMarkers, observatoryMarkers }) {
  const [markers, setMarkers] = useState([]);
  const [markersPreserves, setMarkersPreserves] = useState([]);
  const [markersObserv, setMarkersObserv] = useState([])

  useEffect(() => {
    setMarkers(mapMarkers);
    setMarkersPreserves(preserveMarkers)
    setMarkersObserv(observatoryMarkers)
  }, [mapMarkers, preserveMarkers, observatoryMarkers]);

  const mapStyles = {
    height: "400px",
    width: "100%",
  };

  let defaultCenter = {
    lat: 39.8097343,
    lng: -98.5556199,
  };

  if (markers.length === 1) {
    defaultCenter = {
      lat: markers[0].lat,
      lng: markers[0].lng
    }
  }

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={3}
        center={defaultCenter}

      >
        {/* {markersPreserves.map((marker, index) => (
          <Marker
            key={index + 1236545}
            position={{ lat: parseFloat(marker.lat), lng: parseFloat(marker.lng) }}
            icon={telescopeicon}
          />
        ))}

        {markersObserv.map((marker, index) => (
          <Marker
            key={index + 198986545}
            position={{ lat: parseFloat(marker.lat), lng: parseFloat(marker.lng) }}
            icon={observatoryMarker}
          />
        ))} */}

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