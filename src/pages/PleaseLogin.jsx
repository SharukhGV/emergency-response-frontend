import { useEffect } from "react";
import "./loading.css"
import { useNavigate } from "react-router-dom"

function PleaseLogin({ accessToken }) {
  const navigate = useNavigate()
  useEffect(
    () => {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }, []
  )


  return (

    <div id="loading-wrapper">
      <div id="loading-text">Success!</div>
      {/* <div id="loading-text">Please Login</div> */}
      <div id="loading-content"></div>
    </div>


  )




}

export default PleaseLogin