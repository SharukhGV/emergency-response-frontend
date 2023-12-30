import "./login.css"
import { Link } from "react-router-dom"
import { useState } from "react";
import axios from "axios";
function Login({setLoginUsername, loginUsername}){
    const [personUser, setPersonUser] = useState({
        username: "",
        hashed_password: ""
      });


    // function validatePassword(user, inputPassword) {
    //     const inputHash = crypto
    //       .pbkdf2Sync(inputPassword, user.salt, 1000, 64, 'sha512')
    //       .toString('hex')
    //     const passwordsMatch = user.hash === inputHash
    //     return passwordsMatch
    //   }
      

    
// // const apiUrl = import.meta.env.VITE_BACKEND_API; 
// const cookies = document.cookie.split(';').map(cookie => cookie.split('=')).reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
// return cookies[cookieName];
    
function getTokenFromCookie(cookieName) {
    const cookies = document.cookie.split(';').map(cookie => cookie.split('=')).reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
    return cookies[cookieName];
  }
const token = getTokenFromCookie('token'); 


const loginUser = (user) => {axios
.post(`${import.meta.env.VITE_BACKEND_API}/newusers/${user.username}`, user, {
// method: 'POST',
headers: {
    method: "POST",
    headers: {"Authorization": `Bearer ${token}`}}
})
.then(response => {
if (!response.ok) {
  throw new Error('Network response was not ok.');
}
return response.json();
})
.then(data => {
// Handle the retrieved user information
// console.log('User Info:', data);
console.log(data)
setPersonUser(true)
console.log(loginUsername)
    navigate("/");
})
.catch(error => {
// Handle errors
console.error('There was a problem with the fetch operation:', error);
});
}

    //   const getOneUser = (logUser)=>{axios
    //   .get(`${import.meta.env.VITE_BACKEND_API}/newusers`, logUser)
    //   .then((response) => setData(response.data))
    //   .catch((e) => console.error("catch", e));
    //   }


const handleTextChange = (event) => {

    setPersonUser({ ...personUser, [event.target.id]: event.target.value });
  };



  const handleSubmit = (event) => {
    event.preventDefault();
    loginUser(personUser);
    setLoginUsername(personUser.username)
  }


return (
<> <h1>Login</h1>
    <p>Please fill in this form to Login to an account.</p>
    <form onSubmit={handleSubmit} method="post" style={{margin:"auto"}}> 
  <div className="container">
   
<div>
<div></div>
          <label htmlFor="username"><b>Email</b></label>
          <input type="email" value={personUser.username} onChange={handleTextChange}

            placeholder="Enter Email" name="username" id="username" required></input>

          <label htmlFor="hashed_password"><b>Password</b></label>
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