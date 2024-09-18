import React from 'react';
import './ProfileCard.css';

function ProfileCard({dataProfile, loginUsername}){
  const latestPost = dataProfile
    .filter(prof => prof.my_username === loginUsername)
    .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))[0];

  if (latestPost) {
    return (
      <div className="profile-container">
        <div className="profile-image-container">
          <img src={latestPost.image_url} alt="profile icon" className="profilepicimage" />
        </div>
        <h1 className="welcome-text">Welcome Back</h1>
        <p className="username">{loginUsername}</p>
        <p className="user-type">Hive of Heaven User</p>
      </div>
    );
  } else {
    return <p className="upload-prompt">Upload a Profile Image that represents you</p>;
  }
}

export default ProfileCard;