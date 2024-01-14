import "./login.css"
import { Link } from "react-router-dom"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import hiveLOGO from "./hiveLOGO.gif"
function Login({ setLoginUsername, loginUsername,toggleLOGIN,settoggleLOGIN, setAccessToken, accessToken }) {
    const [personUser, setPersonUser] = useState({
        username: "",
        hashed_password: ""
    });
    const navigate = useNavigate()
    const loginUser = (user) => {
        axios.post(`${import.meta.env.VITE_BACKEND_API}/newusers/login`, user)
            .then(response => {
                const token = response.data.accessToken;
                setAccessToken(token);
                token.length>20 ? setLoginUsername(user.username) : null
                token.length>20 ? settoggleLOGIN(!toggleLOGIN) : null
            })
            .catch(error => {
                console.error('There was a problem with the login operation:', error);
            });
    };

    const handleTextChange = (event) => {

        setPersonUser({ ...personUser, [event.target.id]: event.target.value });
    };



    const handleSubmit = (event) => {
        event.preventDefault();
        loginUser(personUser);
        navigate("/loading");

    }


    return (
        <> <h1>Login</h1>
            <p>Please fill in this form to Login to an account.</p>
{/* <div><img style={{width:"300px"}} src={hiveLOGO}></img></div> */}

            <form onSubmit={handleSubmit} method="post" style={{ margin: "auto" }}>
                <div className="container">

                    <div>
                        <div></div>
                        <label htmlFor="username"><b>Email</b></label>
                        <div></div>
                        <input type="email" value={personUser.username} onChange={handleTextChange}

                            placeholder="Enter Email" name="username" id="username" required></input>
<div></div>

                        <label htmlFor="hashed_password"><b>Password</b></label>
                        <div></div>
                        <input type="password" value={personUser.hashed_password} placeholder="Enter Password" name="hashed_password" id="hashed_password" onChange={handleTextChange}
                            required></input>

                        <p>By Logging in to an account you agree to our <Link to="/termsconditions">Terms & Privacy</Link>.</p>

                        <button type="submit" className="registerbtn">Login</button>

                        <div className="container signin">
                            <p>Don't have an account? <Link to="/signup">Sign Up</Link>.</p>
                        </div></div>
                </div>
            </form>
        </>
    )
}

export default Login