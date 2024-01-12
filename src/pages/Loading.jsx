import "./loading.css"
import { useNavigate } from "react-router-dom"

function Loading({accessToken}){
const navigate=useNavigate()
if(accessToken){navigate("/")}

return (

    <div id="loading-wrapper">
  <div id="loading-text">LOADING</div>
  <div id="loading-content"></div>
</div>


)




}

export default Loading