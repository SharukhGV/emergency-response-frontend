// import { useState, useEffect } from "react";
// import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";
// import markerImage from "./markerImage.png";

// function MyMap({ mapMarkers }) {
//   const [markers, setMarkers] = useState(mapMarkers);

//   useEffect(() => {
//     setMarkers(mapMarkers);
//   }, [mapMarkers]);

//   const mapStyles = {
//     height: "400px",
//     width: "100%",
//   };

//   const defaultCenter = {
//     lat: 0, // Default latitude
//     lng: 0, // Default longitude
//   };

//   return (
//     <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
//       <GoogleMap
//         mapContainerStyle={mapStyles}
//         zoom={4}
//         center={defaultCenter}
//         markers={markers}
//       >
//         {/* {markers.map((marker, index) => (
//           <Marker
//             key={index}
//             position={{ lat: marker.lat, lng: marker.lng }}
//             icon={markerImage}
//           />
//         ))} */}
//       </GoogleMap>
//     </LoadScript>
//   );
// }

// export default MyMap;
