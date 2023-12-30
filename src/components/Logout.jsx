import axios from "axios"
// import { useNavigate } from "react-router-dom"
function Logout({loginUsername}){
// const navigate=useNavigate()
    const logOut = ()=> {
        axios.get(`${import.meta.env.VITE_BACKEND_API}/${loginUsername}/logout)`).then(res =>{console.log(res)})
    }




return(

    <button onClick={logOut}>Logout</button>
)



}


export default Logout