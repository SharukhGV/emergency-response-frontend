// import React, { useState, useEffect } from 'react';

// function LocationCapture({location, setLocation}) {
//   // const [location, setLocation] = useState(null);

//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const latitude = position.coords.latitude;
//           const longitude = position.coords.longitude;
//           setLocation({ latitude, longitude });
//         },
//         (error) => {
//           console.error('Error getting location:', error);
//         }
//       );
//     } else {
//       console.error('Geolocation is not supported by this browser.');
//     }
//   }, []); // Empty dependency array to ensure the effect runs only once

//   return (
//     <div>
//       {location ? (
//         <div>
//           <p>Latitude: {location.latitude}</p>
//           <p>Longitude: {location.longitude}</p>
//         </div>
//       ) : (
//         <p>Waiting for location permission...</p>
//       )}
//     </div>
//   );
// }

// export default LocationCapture;
