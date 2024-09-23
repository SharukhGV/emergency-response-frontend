import IndividualObservatries from "./IndividualObservatries";
import { useState, useEffect } from "react";
// This component is imported into the actual "Index" component in the "pages" folder
function SearchObservatories({ setObservatoryMarker }) {
    const observatories = [
        {
          "name": "Griffith Observatory",
          "location": "Los Angeles, California",
          "latitude": 34.1184,
          "longitude": -118.3004,
          "website": "https://www.griffithobservatory.org/",
          "image":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Griffith_observatory_2006.jpg/800px-Griffith_observatory_2006.jpg"
        },
        {
          "name": "Mauna Kea Observatories",
          "location": "Mauna Kea, Hawaii",
          "latitude": 19.8236,
          "longitude": -155.4681,
          "website": "https://www.maunakeaobservatories.org/",
          "image":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Mauna_Kea_at_Sunset.jpg/800px-Mauna_Kea_at_Sunset.jpg"
        },
        {
          "name": "Kitt Peak National Observatory",
          "location": "Tucson, Arizona",
          "latitude": 31.9584,
          "longitude": -111.5984,
          "website": "https://www.noao.edu/kpno/",
          "image":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Kitt_Peak_National_Observatory_in_the_Quinlan_Mountains%2C_2023.jpg/800px-Kitt_Peak_National_Observatory_in_the_Quinlan_Mountains%2C_2023.jpg"
        },
        {
          "name": "Chabot Space & Science Center",
          "location": "Oakland, California",
          "latitude": 37.8183,
          "longitude": -122.1892,
          "website": "https://chabotspace.org/",
          "image":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Chabot_SSC_entrance.jpg/800px-Chabot_SSC_entrance.jpg"
        },
        {
          "name": "Lick Observatory",
          "location": "San Jose, California",
          "latitude": 37.3415,
          "longitude": -121.6422,
          "website": "https://www.ucolick.org/",
          "image":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Lick_Observatory.JPG/800px-Lick_Observatory.JPG"
        },
        {
          "name": "Lowell Observatory",
          "location": "Flagstaff, Arizona",
          "latitude": 35.2026,
          "longitude": -111.6602,
          "website": "https://lowell.edu/",
          "image":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Clark_dome.jpg/800px-Clark_dome.jpg"
        },
        {
          "name": "Palomar Observatory",
          "location": "Palomar Mountain, California",
          "latitude": 33.3558,
          "longitude": -116.8589,
          "website": "https://www.astro.caltech.edu/palomar/",
          "image":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Pti_aerial_photo_B.jpg/800px-Pti_aerial_photo_B.jpg"
        },
        {
          "name": "McDonald Observatory",
          "location": "Fort Davis, Texas",
          "latitude": 30.6715,
          "longitude": -104.0147,
          "website": "https://mcdonaldobservatory.org/",
          "image":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/HET_Dome.jpg/800px-HET_Dome.jpg"
        },
        {
          "name": "Green Bank Observatory",
          "location": "Green Bank, West Virginia",
          "latitude": 38.4329,
          "longitude": -79.8185,
          "website": "https://greenbankobservatory.org/",
          "image":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Green_Bank_Telescope_NRAO_%28cropped%29.jpg/800px-Green_Bank_Telescope_NRAO_%28cropped%29.jpg"
        },
        {
          "name": "Hayden Planetarium",
          "location": "New York City, New York",
          "latitude": 40.7813,
          "longitude": -73.9733,
          "website": "https://www.amnh.org/",
          "image":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Rose_Center_for_Earth_and_Space.jpg/800px-Rose_Center_for_Earth_and_Space.jpg"
        },
        {
          "name": "Yerkes Observatory",
          "location": "Williams Bay, Wisconsin",
          "latitude": 42.5762,
          "longitude": -88.5471,
          "website": "https://astro.uchicago.edu/yerkes/",
          "image":"https://upload.wikimedia.org/wikipedia/commons/a/ac/Yerkesobservatoryfromair.jpg"
        },
        {
          "name": "National Radio Astronomy Observatory (NRAO)",
          "locations": [
            { "location": "Socorro, New Mexico", "latitude": 34.0621, "longitude": -106.8995 },
            { "location": "Charlottesville, Virginia", "latitude": 38.0336, "longitude": -78.5071 }
          ],
          "latitude": 34.0621, 
          "longitude": -106.8995,
          "website": "https://public.nrao.edu/",
          "image":"https://upload.wikimedia.org/wikipedia/commons/6/63/USA.NM.VeryLargeArray.02.jpg"
        },
        {
          "name": "Adler Planetarium",
          "location": "Chicago, Illinois",
          "latitude": 41.8663,
          "longitude": -87.6068,
          "website": "https://www.adlerplanetarium.org/",
          "image":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Adler_Planetarium_E.jpg/800px-Adler_Planetarium_E.jpg"
        },
        {
          "name": "Goldendale Observatory State Park",
          "location": "Goldendale, Washington",
          "latitude": 45.9191,
          "longitude": -120.8315,
          "website": "https://parks.state.wa.us/",
          "image":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/PSGoldendaleObservatory-0001crop.jpg/800px-PSGoldendaleObservatory-0001crop.jpg"
        },
        {
          "name": "Frosty Drew Observatory",
          "location": "Charlestown, Rhode Island",
          "latitude": 41.3762,
          "longitude": -71.6406,
          "website": "https://frostydrew.org/",
          "image":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Ninigret_National_Wildlife_Refuge_2.JPG/800px-Ninigret_National_Wildlife_Refuge_2.JPG"
        },
        {
          "name": "Kennedy Space Center Visitor Complex",
          "location": "Merritt Island, Florida",
          "latitude": 28.3922,
          "longitude": -80.6077,
          "website": "https://www.kennedyspacecenter.com/",
          "image":"https://upload.wikimedia.org/wikipedia/en/e/e7/Kennedy_Space_Center_Visitor_Complex_1998-08-06.jpg"
        },
        {
          "name": "Flandrau Science Center & Planetarium",
          "location": "Tucson, Arizona",
          "latitude": 32.2332,
          "longitude": -110.9511,
          "website": "https://flandrau.org/",
          "image":"https://upload.wikimedia.org/wikipedia/commons/4/44/Flandrau_Science_Center_%26_Planetarium_-_University_of_Arizona_-_Tucson%2C_AZ_-_DSC08584.jpg"
        },
      
        {
          "name": "Warner and Swasey Observatory",
          "location": "Cleveland, Ohio",
          "latitude": 41.5074,
          "longitude": -81.6084,
          "website": "https://astronomy.case.edu/",
          "image":"https://upload.wikimedia.org/wikipedia/commons/a/a2/The_Warner_%26_Swasey_Observatory_at_Kitt_Peak_National_Observatory.jpg"
        },
       
      ]
    const [query, setQuery] = useState("");


    const handleQueryChange = (event) => {
        setQuery(event.target.value);
    };


    const filteredObservatories = observatories.filter((facility) => {
        return facility.name.toLowerCase().includes(query.toLowerCase());
    });

    useEffect(() => {
        const markerArray = filteredObservatories.map((facility) => ({
            lat: facility.latitude,
            lng: facility.longitude,
        }));

        setObservatoryMarker(markerArray);
    }, [query]);


    return (
        <div>

            <input type="text" placeholder="Search for a Public Observatory" value={query} onChange={handleQueryChange} />




            <ul className="ultraelem">
                {filteredObservatories.map((facility) => (
                    <li className="listelem" style={{ display: "flex", flexWrap: "wrap" }} key={facility.latitude + facility.longitude}>
                        <IndividualObservatries facility={facility} />
                    </li>
                ))}
            </ul>
        </div>
    );
}






export default SearchObservatories