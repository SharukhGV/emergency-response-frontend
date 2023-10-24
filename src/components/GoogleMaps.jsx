import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

export default function GoogleMaps(){
    const mapStyles = {
      height: "400px",
      width: "100%",
    };
  
    const defaultCenter = {
      lat: 40.7128, // Default latitude
      lng: -74.0060, // Default longitude
    };
  
    const markers = [
      {
        lat: 40.7128, // Latitude for marker 1
        lng: -74.0060, // Longitude for marker 1
      },
      {
        lat: 34.0522, // Latitude for marker 2
        lng: -118.2437, // Longitude for marker 2
      },
      // Add more markers as needed
    ];
  
    return (
      <LoadScript googleMapsApiKey={import.meta.env.GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={8}
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
  
  