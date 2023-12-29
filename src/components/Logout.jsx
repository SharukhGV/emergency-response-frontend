import axios from "axios"
import { useNavigate } from "react-router-dom"
function Logout(){
const navigate=useNavigate()
    const logOut = ()=> {axios.get(`${import.meta.env.VITE_BACKEND_API}/logout)`).then(navigate("/login"))
    }




return(

    <button onClick={logOut}>Logout</button>
)



}


export default Logout