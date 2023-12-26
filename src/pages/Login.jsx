import "./login.css"
import { Link } from "react-router-dom"
import { useState } from "react";
function Login(){
    const [personUser, setPersonUser] = useState({
        username: "",
        hashed_password: ""
      });


    function validatePassword(user, inputPassword) {
        const inputHash = crypto
          .pbkdf2Sync(inputPassword, user.salt, 1000, 64, 'sha512')
          .toString('hex')
        const passwordsMatch = user.hash === inputHash
        return passwordsMatch
      }
      

      const loginUser = (logUser)=>{axios
      .get(`${import.meta.env.VITE_BACKEND_API}/newUser`, logUser)
      .then((response) => setData(response.data))
      .catch((e) => console.error("catch", e));
      }


const handleTextChange = (event) => {

    setPersonUser({ ...personUser, [event.target.id]: event.target.value });
    setSecPW({ ...secPW, [event.target.id]: [event.target.value] })
  };



  const handleSubmit = (event) => {
    event.preventDefault();
    loginUser(validatePassword(personUser.username, personUser.hashed_password));
  }


return(
<> <h1>Login</h1>
    <p>Please fill in this form to Login to an account.</p>
    <form style={{margin:"auto"}}> 
  <div className="container">
   
<div>
<div></div>
          <label onSubmit={handleSubmit} htmlFor="username"><b>Email</b></label>
          <input type="text" value={personUser.username} onChange={handleTextChange}

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