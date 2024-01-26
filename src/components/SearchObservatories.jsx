import IndividualObservatries from "./IndividualObservatries";
import { useState, useEffect } from "react";
// import observatories from "./observatories.json"
function SearchObservatories({ setObservatoryMarker }) {
    const observatories = [
        {
          "name": "Griffith Observatory",
          "location": "Los Angeles, California",
          "latitude": 34.1184,
          "longitude": -118.3004,
          "website": "https://www.griffithobservatory.org/"
        },
        {
          "name": "Mauna Kea Observatories",
          "location": "Mauna Kea, Hawaii",
          "latitude": 19.8236,
          "longitude": -155.4681,
          "website": "https://www.maunakeaobservatories.org/"
        },
        {
          "name": "Kitt Peak National Observatory",
          "location": "Tucson, Arizona",
          "latitude": 31.9584,
          "longitude": -111.5984,
          "website": "https://www.noao.edu/kpno/"
        },
        {
          "name": "Chabot Space & Science Center",
          "location": "Oakland, California",
          "latitude": 37.8183,
          "longitude": -122.1892,
          "website": "https://chabotspace.org/"
        },
        {
          "name": "Lick Observatory",
          "location": "San Jose, California",
          "latitude": 37.3415,
          "longitude": -121.6422,
          "website": "https://www.ucolick.org/"
        },
        {
          "name": "Lowell Observatory",
          "location": "Flagstaff, Arizona",
          "latitude": 35.2026,
          "longitude": -111.6602,
          "website": "https://lowell.edu/"
        },
        {
          "name": "Palomar Observatory",
          "location": "Palomar Mountain, California",
          "latitude": 33.3558,
          "longitude": -116.8589,
          "website": "https://www.astro.caltech.edu/palomar/"
        },
        {
          "name": "McDonald Observatory",
          "location": "Fort Davis, Texas",
          "latitude": 30.6715,
          "longitude": -104.0147,
          "website": "https://mcdonaldobservatory.org/"
        },
        {
          "name": "Green Bank Observatory",
          "location": "Green Bank, West Virginia",
          "latitude": 38.4329,
          "longitude": -79.8185,
          "website": "https://greenbankobservatory.org/"
        },
        {
          "name": "Hayden Planetarium",
          "location": "New York City, New York",
          "latitude": 40.7813,
          "longitude": -73.9733,
          "website": "https://www.amnh.org/"
        },
        {
          "name": "Yerkes Observatory",
          "location": "Williams Bay, Wisconsin",
          "latitude": 42.5762,
          "longitude": -88.5471,
          "website": "https://astro.uchicago.edu/yerkes/"
        },
        {
          "name": "National Radio Astronomy Observatory (NRAO)",
          "locations": [
            { "location": "Socorro, New Mexico", "latitude": 34.0621, "longitude": -106.8995 },
            { "location": "Charlottesville, Virginia", "latitude": 38.0336, "longitude": -78.5071 }
          ],
          "website": "https://public.nrao.edu/"
        },
        {
          "name": "Adler Planetarium",
          "location": "Chicago, Illinois",
          "latitude": 41.8663,
          "longitude": -87.6068,
          "website": "https://www.adlerplanetarium.org/"
        },
        {
          "name": "Goldendale Observatory State Park",
          "location": "Goldendale, Washington",
          "latitude": 45.9191,
          "longitude": -120.8315,
          "website": "https://parks.state.wa.us/"
        },
        {
          "name": "Frosty Drew Observatory",
          "location": "Charlestown, Rhode Island",
          "latitude": 41.3762,
          "longitude": -71.6406,
          "website": "https://frostydrew.org/"
        },
        {
          "name": "Kennedy Space Center Visitor Complex",
          "location": "Merritt Island, Florida",
          "latitude": 28.3922,
          "longitude": -80.6077,
          "website": "https://www.kennedyspacecenter.com/"
        },
        {
          "name": "Flandrau Science Center & Planetarium",
          "location": "Tucson, Arizona",
          "latitude": 32.2332,
          "longitude": -110.9511,
          "website": "https://flandrau.org/"
        },
        {
          "name": "Arizona Science Center - Dorrance Planetarium",
          "location": "Phoenix, Arizona",
          "latitude": 33.4484,
          "longitude": -112.0740,
          "website": "https://www.azscience.org/"
        },
        {
          "name": "Warner and Swasey Observatory",
          "location": "Cleveland, Ohio",
          "latitude": 41.5074,
          "longitude": -81.6084,
          "website": "https://astronomy.case.edu/"
        },
        {
          "name": "Buehler Planetarium & Observatory",
          "location": "Davie, Florida",
          "latitude": 26.0806,
          "longitude": -80.2422,
          "website": "https://www.broward.edu/academics/programs/astronomy/"
        }
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