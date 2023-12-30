import profilePic from "./profilePic.png"
import { useState } from "react"

function Profile({ loginUsername }) {
    // const [data,setData] =useState([])




    // const apiUrl = import.meta.env.VITE_BACKEND_API; 
    //     const cookies = document.cookie.split(';').map(cookie => cookie.split('=')).reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
    //     return cookies[cookieName];
    //   }

    //   const token = getTokenFromCookie('token'); 


    //   axios
    //   .get(`${import.meta.env.VITE_BACKEND_API}/newusers/${}`, user, {
    //     // method: 'GET',
    //     headers: {
    //       'Authorization': `Bearer ${token}`, //  Bearer token in the Authorization header
    //       'Content-Type': 'application/json' // Content type if required by your API
    //     }
    //   })
    //   .then(response => {
    //     if (!response.ok) {
    //       throw new Error('Network response was not ok.');
    //     }
    //     return response.json();
    //   })
    //   .then(data => {
    //     // Handle the retrieved user information
    //     console.log('User Info:', data);
    //   })
    //   .catch(error => {
    //     // Handle errors
    //     console.error('There was a problem with the fetch operation:', error);
    //   });




    return (

        <div>
            <div className="card">
                <img src={profilePic} alt="profile icon" style={{ width: "100%" }}></img>
                <h1>Welcome Back</h1>
                <p className="title">{loginUsername}</p>
                <p>Hive of Heaven User</p>
            </div>

        </div>

    )



}


export default Profile