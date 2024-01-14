import "./login.css"
import { Link } from "react-router-dom"
// import { signup } from "../../signup"
import { useState } from "react";
import axios from "axios";
// import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Register() {
  const navigate = useNavigate();

  // const [username, setUserName]=useState()
  // const [username, setPassword]=useState()
  const [personUser, setPersonUser] = useState({
    username: "",
    hashed_password: ""
  });
  const [secPW, setSecPW] = useState("")

// function createUser({ username, password }) {
//   // Here you should create the user and save the salt and hashed password (some dbs may have
//   // authentication methods that will do it for you so you don't have to worry about it):
//   const salt = crypto.randomBytes(16).toString('hex')
//   const hash = crypto
//     .pbkdf2Sync(password, salt, 1000, 64, 'sha512')
//     .toString('hex')
//   const user = {
//     id: uuidv4(),
//     createdAt: Date.now(),
//     username,
//     hash,
//     salt,
//   };
  // const userProfile={username:user.username, hashed_password:user.hash};
const newUser = (user) =>{axios
  .post(`${import.meta.env.VITE_BACKEND_API}/newusers`, user)
  .then((response) => {
    console.log(response.data);

    setTimeout(() => {
      navigate("/pleaselogin");
    }, 1000);  })
  .catch((e) => console.error("catch", e));

}

  // const newUser = (newuser) => {
  //   axios
  //     .post(`${import.meta.env.VITE_BACKEND_API}/findspots`, signup)
  //     .then((response) => {
  //       console.log(response.data);

  //       navigate("/index");
  //     })
  //     .catch((e) => console.error("catch", e));
  // };


  const handleTextChange = (event) => {

    setPersonUser({ ...personUser, [event.target.id]: event.target.value });
    // console.log(personUser)
  };


  const handleTextChange2 = (event) => {

    setSecPW(event.target.value);
    // console.log(secPW)

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
      newUser(userData);
    } else {
      window.alert("Passwords Do Not Match");
    }
  };
  // createUser
  return (
    <> <h1>Register</h1>
      <p>Please fill in this form to create an account.</p>
      <form onSubmit={handleSubmit} style={{ margin: "auto" }}>
        <div className="container">

          <div></div>
          <br></br>
          <label htmlFor="username"><b>Email</b></label>
          <br></br>
          <input type="email" value={personUser.username} onChange={handleTextChange}

            placeholder="Enter Email" name="username" id="username" required></input>
<br></br>
          <label htmlFor="hashed_password"><b>Password</b></label>
          <br></br>
          <input type="password" value={personUser.hashed_password} placeholder="Enter Password" name="hashed_password" id="hashed_password" minLength="7" onChange={handleTextChange}
            required></input>

          <label htmlFor="hashed_password-repeat"><b>Repeat Password</b></label>
          <input type="password" placeholder="Repeat Password" minLength="7" name="hashed_password-repeat" id="hashed_password-repeat" value={secPW.secpass} onChange={handleTextChange2} required></input>

          <p>By creating an account you agree to our  <Link to="/termsconditions">Terms & Privacy</Link>.</p>

          <div><button type="submit" className="registerbtn">Register</button></div>

          <div className="container signin">
            <p>Already have an account? <Link to="/login">Login</Link>.</p>
          </div>
        </div>
      </form>
    </>
  )
}
export default Register