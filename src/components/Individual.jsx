
// import axios from "axios"
import { Link } from "react-router-dom"
import dipperDefault from "./dipperDefault.png"
import mountainsky from "./mountainsky.jpg"

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

<div class="card">
      <img src={mountainsky} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img class="card__thumb" src={dipperDefault} alt="" />
          <div class="card__header-text">
            <h5>Location Nickname:</h5>
            <h3 class="card__title">{person.full_name}</h3>            
            <span class="card__status">{parseDATE(person.date)}</span>
          </div>
        </div><div>{person.skybrightness}</div>
        <p class="card__description">{person.description}</p>
        <Link style={{fontSize:"15px"}} to={`/index/${id}`}>View Page</Link>
        <div></div>

      </div>
    </div>    





      //   <div style={{color:"white"}}  id="individual">
      //   <strong>Location Nickname:{person.full_name}</strong>
      //   <div style={{fontSize:"10px"}}>Date: {parseDATE(person.date)}</div>
      //   <div>Latitude: {person.latitude}</div>
      //   <div>Longitude: {person.longitude}</div>
      //   <div> Description: {person.description}</div>
      //   <div> Light Pollution Level: {person.skybrightness}</div>
      //   <Link to={`/index/${id}`}>View Page</Link>
      //   {/* <button style={{width:'150px'}}>Archive Status: {!person.archived ? <div>❎</div>:<div>✅</div>}</button> */}
      // </div>
    )


}

export default Individual