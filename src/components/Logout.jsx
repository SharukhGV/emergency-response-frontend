import axios from "axios";

function Logout({ loginUsername,setLoginUsername }) {
  const logOut = () => {
    axios.get(`${import.meta.env.VITE_BACKEND_API}/logout`).then(res => {
      console.log(res);
      // Perform further actions after logging out if needed
      setLoginUsername(!loginUsername)
    }).catch(error => {
      console.error(error);
      // Handle errors if any
    });
  };

  return (
    <button style={{margin:"right", width:"30px"}} onClick={logOut}>Logout</button>
  );
}

export default Logout;
