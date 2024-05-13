import axios from "axios";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { useParams,useNavigate } from "react-router-dom";

function CommentsBox({ commentz, uuid, loginUsername, id, index }) {
    const deleteComment = (identification) => {
        axios
          .delete(`${import.meta.env.VITE_BACKEND_API}/comments/${identification}`,identification)
          .then((response) => navigate("/index"))
          .catch((e) => console.error("catch", e));
      };

      // const { id } = useParams();
      const navigate = useNavigate();
function deleteCommentNow(){
  
    deleteComment(commentz.id)
    navigate(`/index`)
}


const [dataProfile, setDataProfile]=useState([])
    useEffect(() => {
        axios
          .get(`${import.meta.env.VITE_BACKEND_API}/profile`)
          .then((response) => setDataProfile(response.data.data))
          .catch((e) => console.error("catch", e));
      }, []);

      const matchingProfile = dataProfile.find(prof => prof.my_username===commentz.my_username);


    function parseDATE(date) {
        return `${date.charAt(5)}${date.charAt(6)} / ${date.charAt(8)}${date.charAt(9)} / ${date.charAt(0)}${date.charAt(1)}${date.charAt(2)}${date.charAt(3)}`
      }
    return (
      <div style={{backgroundColor:"#e6fff7", color:"black",border:"solid", padding:"30px", margin:"10px", borderRadius:"30px"}} key={uuid}>
        {/* {parseFloat(commentz.findspot_id) === parseFloat(id) ? ( */}
            <div>
               {matchingProfile ?<img style={{width:"50px", height:"50px", borderRadius:"50%"}} src={matchingProfile.image_url}></img> :null}
                <div>{parseDATE(commentz.date)}</div>
                <div style={{fontSize:"10px"}}>{commentz.my_username}</div>
          <div style={{fontSize:"15px"}}>{commentz.description}</div></div>
        {/* ) : null} */}
       {loginUsername === commentz.my_username ? <button onClick={deleteCommentNow}>delete</button> :null}
      </div>
    );
  }
  
  export default CommentsBox;
  