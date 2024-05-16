import "./login.css"
import { Link } from "react-router-dom"
// import { signup } from "../../signup"
import { useState } from "react";
import axios from "axios";
// import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Register() {
  const navigate = useNavigate();

  const [userfound, setUserFound]=useState(false)
  // const [username, setPassword]=useState()
  const [personUser, setPersonUser] = useState({
    username: "",
    hashed_password: ""
  });
  const [secPW, setSecPW] = useState("")

  
const existsUSer = (user) =>{axios
  .get(`${import.meta.env.VITE_BACKEND_API}/newusers`, user)
  .then((response) => {
    console.log(response.data);
    setUserFound(true)
 })
  .catch((e) =>{ console.error("catch", e);setUserFound(false)}

  );

}

const newUser = (user) =>{axios
  .post(`${import.meta.env.VITE_BACKEND_API}/newusers`, user)
  .then((response) => {
    console.log(response.data);

    setTimeout(() => {
      navigate("/pleaselogin");
    }, 1000);  })
  .catch((e) => console.error("catch", e)
  );

}

  const handleTextChange = (event) => {

    setPersonUser({ ...personUser, [event.target.id]: event.target.value });
  };


  const handleTextChange2 = (event) => {

    setSecPW(event.target.value);

  };

  console.log(personUser)
  console.log(secPW)

  const handleSubmit = (event) => {
    event.preventDefault();
  
    if (secPW === personUser.hashed_password) {
      const userData = {
        username: personUser.username,
        hashed_password: personUser.hashed_password
      };
  console.log(userData)
  existsUSer(userData.username)
if(userfound) newUser(userData);

    } else {
      window.alert("Passwords Do Not Match");
    }
  };
  
  return (
    <div className="registerCONTAIN"> <h1>Register</h1>
      <p>Please fill in this form to create an account.</p>
      {userfound ?<div style={{color:"red"}}>User Already Exists</div>:null}
      {userfound ?<div style={{color:"green"}}>You will Be Prompted to Login if you enter an existing User</div>:null}

      <form onSubmit={handleSubmit} style={{ margin: "auto", display:"justified" }}>
        <div className="container">


          <label htmlFor="username"><b>Email</b></label>

          <input type="email" value={personUser.username} onChange={handleTextChange}

            placeholder="Enter Email" name="username" id="username" required></input>

          <label htmlFor="hashed_password"><b>Password</b></label>
<input type="password" value={personUser.hashed_password} placeholder="Enter Password" name="hashed_password" id="hashed_password" minLength="7" onChange={handleTextChange}
            required></input>

          <label htmlFor="hashed_password-repeat"><b>Repeat Password</b></label>

          <input type="password" placeholder="Repeat Password" minLength="7" name="hashed_password-repeat" id="hashed_password-repeat" value={secPW.secpass} onChange={handleTextChange2} required></input>

          <p>By creating an account you agree to our  <Link to="/termsconditions">Terms & Privacy</Link>.</p>
<br></br>
          <div><button type="submit" className="registerbtn">Register</button></div>

          <div className="container-signin">
            <br></br>
           <div> <p>Already have an account? <Link to="/login">Login</Link>.</p></div>
          </div>
        </div>
      </form>
    </div>
  )
}
export default Register