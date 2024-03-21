// import { useEffect, useState } from 'react';
// import axios from 'axios';
// function RealEstate(){
// const [zipCode, setZipCode]=useState([])
// const [dataRealEstate, setDataRealEstate]=useState([])


//     useEffect(()=>{
//         const options = {
//             method: 'GET',
//             url: 'https://us-real-estate.p.rapidapi.com/v3/property-detail',
//             params: {
//               zipcode: zipCode // Use the zipCode variable here
//           },
//             headers: {
//               'X-RapidAPI-Key': 'REALESTATEAPIKEY',
//               'X-RapidAPI-Host': 'us-real-estate.p.rapidapi.com'
//             }
//           };
//         try {
//             const response = axios.request(options);
//             // console.log(response.data);
//             setDataRealEstate(response.data)
//         } catch (error) {
//             console.error(error);
    
//         }
//     },[zipCode])
   
// return(

//     <div>
//         <label for="site-search">Search the site:</label>
// <input type="search" id="site-search" name="q" />

// <button>Search</button>

//     </div>

// )


// }

// export default RealEstate