import GoogleMaps from "../components/GoogleMaps";
import data from "../../data.json"
import Individual from "../components/Individual";
import { useState } from "react";
import SearchPeople from "../components/SearchPeople";
// import axios from "axios";
// import { useState, useEffect } from "react";
// const dataJSON = require("../../data.json")

export default function Index() {

// const [data7, setData7] = useState([])
// useEffect(() => {
//     axios
//       .get(data)
//       .then((response) => setData7(response.data))
//       .catch((e) => console.error("catch", e));
//   }, []);
// console.log(data.data)
// function filterByName(data, filterText) {
//     if (!data || !Array.isArray(data)) {
//       return [];
//     }
  
//     return data.filter((item) => {
//         return item.first_Name.toLowerCase().includes(filterText.toLowerCase()) || item.last_Name.toLowerCase().includes(filterText.toLowerCase());
//       })
    
//   }

  return (
<div>  <div><GoogleMaps /></div>

      {/* <div className="box">
        <form name="search">
            <div style={{fontFamily:"helvetica", color:"orangered"}}>Search Someone...</div>
          <input
            type="text"
            className="input"
            name="txt"
            value={searchQuery}
            // onMouseOut="this.value = ''; this.blur();"
            onChange={onChange}
          />
        </form></div>
<div>
    {!!filteredName ? {filteredName} : "Name Not Found"}
</div> */}
        
<SearchPeople/>

{/* {data.data.map((individual, index) =>{

return(
<Individual individual={individual}/>
)
})} */}

</div>)}