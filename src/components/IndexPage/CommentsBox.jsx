import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./commentsBox.css"
// This component is used in the "IndividualView" Component. 
// It is the comments for Individual user posts. All user post are found in the "Individual" component
// Single user posts are found in the "IndividualView" component
function CommentsBox({ commentz, uuid, loginUsername, id, index }) {
  const deleteComment = (identification) => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_API}/comments/${identification}`, identification)
      .then((response) => navigate("/index"))
      .catch((e) => console.error("catch", e));
  };

  const navigate = useNavigate();
  function deleteCommentNow() {

    deleteComment(commentz.id)
    navigate(`/index`)
  }


  const [dataProfile, setDataProfile] = useState([])
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_API}/profile`)
      .then((response) => setDataProfile(response.data.data))
      .catch((e) => console.error("catch", e));
  }, []);

  const matchingProfile = dataProfile.find(prof => prof.my_username === commentz.my_username);


  function parseDATE(date) {
    return `${date.charAt(5)}${date.charAt(6)} / ${date.charAt(8)}${date.charAt(9)} / ${date.charAt(0)}${date.charAt(1)}${date.charAt(2)}${date.charAt(3)}`
  }
  return (
    <div className="commentBox" style={{ border: "solid", padding: "30px", borderRadius: "10px" }} key={uuid}>
             <div className="commentsProfile">{matchingProfile ? <img style={{ width: "50px", height: "50px", borderRadius: "50%", left:"0" }} src={matchingProfile.image_url} /> : null}</div>

      <div>
        <div>{parseDATE(commentz.date)}</div>
        <div style={{ fontSize: "10px" }}><span>{commentz.my_username}</span><span>      
        </span></div>
        <div style={{ fontSize: "15px" }}>{commentz.description}</div></div>

        <div> {loginUsername === commentz.my_username ? <button onClick={deleteCommentNow}>delete</button> : null}</div>



    </div>
  );
}

export default CommentsBox;
