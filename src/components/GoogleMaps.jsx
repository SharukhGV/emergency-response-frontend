
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
import markerImage from "./markerImage.png";
import telescopeicon from "../pages/telescopeicon.png"
import collegeMarker from "./collegeMarker.png"
    import AstronomyColleges from "./AstronomyColleges.json"
import { useEffect, useState } from "react";
import axios from "axios";
import observatoryMarker from "./observatoryMarker.png"
import ee from '@google/earthengine';

export default function GoogleMaps({ mapMarkers,preserveMarkers,observatoryMarkers }) {
  const [markers, setMarkers] = useState([]);
  const [markersPreserves, setMarkersPreserves] = useState([]);
const [markersObserv,setMarkersObserv]=useState([])
  const [fireball, setFireball] = useState([]);

  useEffect(() => {
    setMarkers(mapMarkers);
    setMarkersPreserves(preserveMarkers)
    setMarkersObserv(observatoryMarkers)
  }, [mapMarkers,preserveMarkers,observatoryMarkers]);

  const mapStyles = {
    height: "400px",
    width: "100%",
  };

  let defaultCenter = {
    lat: 39.8097343, // Default latitude
    lng: -98.5556199, // Default longitude
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


// const darkSkyPreserves = [
//   { name: "Jasper National Park", lat: 52.8735, lng: -118.0814 },
//   { name: "Aoraki Mackenzie Intl Dark Sky Reserve", lat: -43.7340, lng: 170.0966 },
//   { name: "Brecon Beacons National Park", lat: 51.9479, lng: -3.3875 },
//   { name: "Natural Bridges National Monument", lat: 37.6096, lng: -110.0122 },
//   { name: "Mont-Mégantic Dark Sky Reserve", lat: 45.4237, lng: -71.0916 },
//   { name: "Exmoor National Park", lat: 51.1304, lng: -3.5542 },
//   { name: "NamibRand Nature Reserve", lat: -25.0393, lng: 15.0956 },
//   { name: "Big Bend National Park", lat: 29.2497, lng: -103.2500 },
//   { name: "Grand Canyon-Parashant National Monument", lat: 36.9147, lng: -113.0289 },
//   { name: "Cherry Springs State Park", lat: 41.6501, lng: -77.8165 },
// ];

// useEffect(()=>{
// ee.initialize({
//   apiKey: 'GOOGLEAPIKEYHERE'
// });

// },[])

// var dataset = ee.ImageCollection('NOAA/DMSP-OLS/NIGHTTIME_LIGHTS')
//                   .filter(ee.Filter.date('2010-01-01', '2010-12-31'));
// var nighttimeLights = dataset.select('avg_vis');

// var nighttimeLightsVis = {
//   min: 3.0,
//   max: 60.0,
// };

// Map.setCenter(39.8097343,-98.5556199, 3);
// Map.addLayer(nighttimeLights, nighttimeLightsVis, 'Nighttime Lights');

// Initialize Earth Engine with your API key
// ee.initialize({
//   apiKey: 'YOUR_EARTH_ENGINE_API_KEY'
// });

// function MapComponent() {
//   const mapStyles = {
//     height: "100vh",
//     width: "100%"
//   };

  // const defaultCenter = { lat: 39.8097343, lng: -98.5556199 };

  // const [overlay, setOverlay] = useState(null);

  // const onLoad = (overlayView) => {
  //   setOverlay(overlayView);
  // }

  // const onUnmount = () => {
  //   setOverlay(null);
  // }

  // const addEarthEngineLayer = () => {
  //   if (overlay) {
  //     var dataset = ee.ImageCollection('NOAA/DMSP-OLS/NIGHTTIME_LIGHTS')
  //       .filter(ee.Filter.date('2010-01-01', '2010-12-31'));
  //     var nighttimeLights = dataset.select('avg_vis');

  //     var nighttimeLightsVis = {
  //       min: 3.0,
  //       max: 60.0,
  //     };
    
  //     overlay.setMap(null); // Clear existing overlay
  //     overlay.setMap(overlay.getMap()); // Trigger re-render
  //     overlay.draw = () => {
  //       overlay.getPanes().overlayLayer.appendChild(overlay.getPanes().overlayLayer.firstChild);
  //       var div = overlay.getPanes().overlayMouseTarget;
  //       var mapProjection = overlay.getProjection();
  //       var bounds = overlay.getBounds();
  //       nighttimeLights.getRegion(bounds, 1000).evaluate((values) => {
  //         // Process and render Earth Engine imagery here
  //       });
  //     };
  //   }
  // };


  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={3}
        center={defaultCenter}
        // overlay={{nighttimeLights, nighttimeLightsVis, 'Nighttime Lights'}}
        // onLoad={addEarthEngineLayer}
        // onUnmount={onUnmount}
      >
{markersPreserves.map((marker, index) => (
          <Marker
            key={index+1236545}
            position={{ lat: parseFloat(marker.lat), lng: parseFloat(marker.lng) }}
            icon={telescopeicon}
          />
        ))}

{markersObserv.map((marker, index) => (
          <Marker
            key={index+198986545}
            position={{ lat: parseFloat(marker.lat), lng: parseFloat(marker.lng) }}
            icon={observatoryMarker}
          />
        ))}

{AstronomyColleges.colleges.map((marker, index) => (
          <Marker
            key={index+17779745}
            position={{ lat: parseFloat(marker.coordinates.latitude), lng: parseFloat(marker.coordinates.longitude) }}
            icon={collegeMarker}
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