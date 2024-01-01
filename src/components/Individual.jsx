
// import axios from "axios"
import { Link } from "react-router-dom"

function Individual({id, person}){


const styleIndividual = {
  color:"white",
  backgroundColor:"rgba(152,160,255,50)"
}
// }
    function parseDATE(date){
        // console.log(d.getUTCHours()); // Hours
    
        // console.log(d.getUTCSeconds());
    return `${date.charAt(5)}${date.charAt(6)} / ${date.charAt(8)}${date.charAt(9)} / ${date.charAt(0)}${date.charAt(1)}${date.charAt(2)}${date.charAt(3)}`
      }
    return(
        <div style={{color:"white"}}  id="individual">
        <strong>Name:{person.full_name}</strong>
        <div style={{fontSize:"10px"}}>Date: {parseDATE(person.date)}</div>
        <div>Latitude: {person.latitude}</div>
        <div>Longitude: {person.longitude}</div>
        <div> Description: {person.description}</div>
        <div> Light Pollution Level: {person.skybrightness}</div>
        <Link to={`/index/${id}`}>View Page</Link>
        {/* <button style={{width:'150px'}}>Archive Status: {!person.archived ? <div>❎</div>:<div>✅</div>}</button> */}
      </div>
    )


}

export default Individual