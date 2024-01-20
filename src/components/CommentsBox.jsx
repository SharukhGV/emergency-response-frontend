function CommentsBox({ commentz, uuid, id, index }) {
    return (
      <div style={{backgroundColor:"gray", border:"solid"}} key={uuid}>
        {parseFloat(commentz.findspot_id) === parseFloat(id) ? (
            <div>
                <div>{commentz.date}</div>
                <div>{commentz.my_username}</div>
          <div>{commentz.description}</div></div>
        ) : null}
      </div>
    );
  }
  
  export default CommentsBox;
  