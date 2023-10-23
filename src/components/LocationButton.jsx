import React, { useState } from 'react';

function LocationButton({setLocation, location}) {
//   const [location, setLocation] = useState(null);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setLocation({ latitude, longitude });
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  return (
      <button style={{backgroundColor:"blue", color:"white"}}  onClick={getLocation}>Enable and Get Location</button>
  );
}

export default LocationButton;
