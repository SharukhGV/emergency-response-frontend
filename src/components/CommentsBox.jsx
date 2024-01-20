function CommentsBox({ commentz, uuid, id, index }) {

    function parseDATE(date) {
        return `${date.charAt(5)}${date.charAt(6)} / ${date.charAt(8)}${date.charAt(9)} / ${date.charAt(0)}${date.charAt(1)}${date.charAt(2)}${date.charAt(3)}`
      }
    return (
      <div style={{backgroundColor:"black", color:"yellow",border:"solid", padding:"30px", margin:"10px", borderRadius:"30px"}} key={uuid}>
        {/* {parseFloat(commentz.findspot_id) === parseFloat(id) ? ( */}
            <div>
                <div>{parseDATE(commentz.date)}</div>
                <div style={{fontSize:"10px"}}>{commentz.my_username}</div>
          <div style={{fontSize:"15px"}}>{commentz.description}</div></div>
        {/* ) : null} */}
      </div>
    );
  }
  
  export default CommentsBox;
  