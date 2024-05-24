

function ProfileCard({dataProfile, loginUsername}){




const latestPost = dataProfile
  .filter(prof => prof.my_username === loginUsername)
  .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))[0];

if (latestPost) {
  return (
    <div style={{ width: "350px", margin: "auto", border:"solid", borderRadius:"10px" }}>
      <br></br>
      <img src={latestPost.image_url} alt="profile icon" style={{ width: "300px", height: "300px", borderRadius: "50%", border:"solid" }} />
      <h1>Welcome Back</h1>
      <p style={{color:"purple"}} className="title">{loginUsername}</p>
      <p>Hive of Heaven User</p>
    </div>
  );
} else {
  return <p> Upload a Profile Image that represents you</p>;
}

}

export default ProfileCard