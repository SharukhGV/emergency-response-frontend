import IndividualPreserves from "./IndividualPreserves";
import { useState, useEffect } from "react";
// This component is imported into the actual "Index" component in the "pages" folder
function SearchPreserves({ preserveMarkers, setPreserveMarkers }) {


  const darkSkyPreserves = [
    { name: "Jasper National Park", besttime: "Clear nights throughout the year, with aurora borealis sightings more frequent in winter", bestlocale: ["Medicine Lake: Located 25 km outside Jasper, it offers clear skies and stunning views of twinkling stars.", "Pyramid Lake & Island: Just outside Jasper, Pyramid Lake provides an ideal spot for stargazing.", "Lake Annette: A few kilometers from Jasper, this glistening lake with sandy shorelines is perfect for stargazing."], lat: 52.8735, lng: -118.0814, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Athabasca_Glacier_on_the_Columbia_Icefield.jpg/800px-Athabasca_Glacier_on_the_Columbia_Icefield.jpg" },
    { name: "Aoraki Mackenzie Intl Dark Sky Reserve", besttime: "Any clear night, especially during spring and summer", bestlocale: ["ObservÉtoiles at Au Diable Vert: Located in the Eastern Townships, it offers pristine dark skies.", "Mont-Mégantic National Park: Stand atop Mont-Mégantic for breathtaking views of stars, including the Andromeda Galaxy."], lat: -43.7340, lng: 170.0966, image: "https://darksky.org/app/uploads/2015/01/Crux_and_Church_aoraki.jpg" },
    { name: "Brecon Beacons National Park", besttime: "Year-round, with guided stargazing tours available", bestlocale: ["Sugar Loaf Mountain: Offers panoramic views of the night sky.", "ObservÉtoiles at Au Diable Vert: Located in the Sutton outdoor center."], lat: 51.9479, lng: -3.3875, image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Brecon_beacons_arp.jpg" },
    { name: "Natural Bridges National Monument", besttime: "Any clear night; see up to 15,000 stars", bestlocale: ["Campground: Enjoy unbeatable night skies even during a full moon.", "ASTROLab: Explore multimedia presentations and guided telescope viewing."], lat: 37.6096, lng: -110.0122, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Night_sky_at_Owachomo_Bridge.jpg/800px-Night_sky_at_Owachomo_Bridge.jpg" },
    { name: "Mont-Mégantic Dark Sky Reserve", besttime: "Visit between April and October for stargazing. The ASTROLab at the base of the 3,615-foot mountain offers guided telescope viewing during French-language evening tours", bestlocale: ["Mont-Mégantic is in Québec, Canada. It’s part of the Eastern Townships and home to the Mont-Mégantic International Dark Sky Reserve."], lat: 45.4237, lng: -71.0916, image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fd9%2Fb3%2F32%2Fd9b332e27decb669f0aa2124b6ca4e60.jpg&f=1&nofb=1&ipt=d2f78eba24a3c6915fe041ffcfad3668bd64a176eceb35e50b924e0cbb79f9f8&ipo=images" },
    { name: "Exmoor National Park", besttime: "Clear nights away from light pollution", bestlocale: ["Dunkery Beacon: Highest point in Exmoor, great for stargazing.", "Holdstone Hill: Offers dark skies and stunning celestial views."], lat: 51.1304, lng: -3.5542, image: "https://www.tripsavvy.com/thmb/E7XIbEApKiR0i6Y492UIRuXNLAQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-126384073-072da1fe62a0486fa853f6c4b9b7571a.jpg" },
    { name: "NamibRand Nature Reserve", besttime: "Year-round, especially during the dry season", bestlocale: ["Desert Landscape: Vast, remote areas with minimal light pollution", "Sossusvlei Dunes: Unique stargazing experience in the desert."], lat: -25.0393, lng: 15.0956, image: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Malmsmead_Hill%2C_Exmoor_-_geograph.org.uk_-_80944.jpg" },
    { name: "Big Bend National Park", besttime: "Any clear night in this designated Dark Sky Park", bestlocale: ["Chisos Basin: High elevation and clear skies for stargazing.", "Santa Elena Canyon: Stunning views of stars over the Rio Grande."], lat: 29.2497, lng: -103.2500, image: "https://www.nps.gov/common/uploads/grid_builder/bibe/crop16_9/D2B28621-0C4B-2389-52529785F84AB51F.jpg?width=640&quality=90&mode=crop" },
    { name: "Grand Canyon-Parashant National Monument", besttime: "Clear nights away from city lights", bestlocale: ["Mount Logan: High elevation with minimal light pollution.", "Toroweap Overlook: Offers breathtaking views of the night sky."], lat: 36.9147, lng: -113.0289, image: "https://www.nps.gov/common/uploads/grid_builder/para/crop16_9/2969EAD9-1DD8-B71B-0B60C260DC394CF8.JPG?width=1300&quality=90&mode=crop" },
    { name: "Cherry Springs State Park", besttime: "Visit during warm summer months (June to August) to avoid crowds. New moon nights are ideal for stargazing. The park is known for its exceptionally dark skies, making it one of the best places for stargazing on the East Coast", bestlocale: ["Located in Potter County, Pennsylvania, USA."], lat: 41.6501, lng: -77.8165, image: "https://upload.wikimedia.org/wikipedia/commons/e/e4/CSSP_Sagittarius_Combine1C.jpg" },
  ];

  const [query, setQuery] = useState("");
  const [sortKey, setSortKey] = useState("name");
  const [toggle, setToggle] = useState(false);

  console.log(sortKey)
  const handleSortKeyChange = (e) => {
    setSortKey(e.target.value);
  };

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredPreserves = darkSkyPreserves.filter((preserve) => {
    if (sortKey === "bestlocale") {
      return (preserve[sortKey][0]).toLowerCase().includes(query.toLowerCase());

    }
    else {
      return (preserve[sortKey]).toLowerCase().includes(query.toLowerCase());
    }
  });


  useEffect(() => {
    const markerArray = filteredPreserves.map((preserve) => ({
      lat: preserve.lat,
      lng: preserve.lng,
    }));

    setPreserveMarkers(markerArray); 
  }, [query]); 


  filteredPreserves.sort((a, b) => {
    if (toggle) {
      if (sortKey === "bestlocale") {

        if (a[sortKey][0] < b[sortKey][0]) {
          return -1
        }
        else if (a[sortKey][0] > b[sortKey][0]) {
          return 1
        }
        else return 0
      }
      else {
        if (a[sortKey] < b[sortKey]) {
          return -1
        }
        else if (a[sortKey] > b[sortKey]) {
          return 1
        }
        else return 0
      }

    }
    else {

      if (sortKey === "bestlocale") {

        if (a[sortKey][0] < b[sortKey][0]) {
          return 1
        }
        else if (a[sortKey][0] > b[sortKey][0]) {
          return -1
        }
        else return 0
      }
      else {
        if (a[sortKey] < b[sortKey]) {
          return 1
        }
        else if (a[sortKey] > b[sortKey]) {
          return -1
        }
        else return 0
      }


    }

  }


  )
  console.log(filteredPreserves)




  function handleToggle() {
    setToggle(!toggle)
  }
  return (
    <div>
      <div className="toggledropdownsearchbarIndex">
      <input type="text" placeholder="Search for a Dark Sky Preserve" value={query} onChange={handleQueryChange} />
      <select style={{ textAlign: "center", width: "150px", backgroundColor: "#d8d8d8", borderRadius: "10px" }} value={sortKey} onChange={handleSortKeyChange}>
        <option value="name">name</option>
        <option value="besttime">best time</option>
        <option value="bestlocale">best location</option>
      </select>
      {toggle ? <button style={{borderRadius:"10px", maxWidth:"250px"}} onClick={handleToggle}>Normal Alphabetical</button> : <button  style={{borderRadius:"10px", maxWidth:"250px"}} onClick={handleToggle}>Reverse Alphabetical</button>}
</div>
      <ul className="ultraelem">
        {filteredPreserves.map((preserve) => (
          <li className="listelem" style={{ display: "flex", flexWrap: "wrap" }} key={preserve.lat + preserve.lng}>
            <IndividualPreserves preserve={preserve} />
          </li>
        ))}
      </ul>
    </div>
  );
}






export default SearchPreserves