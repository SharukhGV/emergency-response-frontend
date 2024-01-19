
function IndividualPreserves({preserve}){

return (




<div style={{ fontFamily: "Arial" }} className="card">
      <img src={preserve.image} className="card__image" alt="" />
      <div className="card__overlay">
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
          <img className="card__thumb" src={preserve.image} alt="" />
          <div className="card__header-text">
          
            <h3 className="card__title">{preserve.name}</h3>
            {/* <span style={{ fontFamily: "Arial" }} className="card__status">{parseDATE(person.date)}</span> */}
          </div>
        </div>
        <div style={{ fontFamily: "Arial" }}>{preserve.lat}</div>
        <div style={{ fontFamily: "Arial" }}>{preserve.lng}</div>

        {/* <p style={{ fontFamily: "Arial", fontSize: "10px" }} className="card__description">{person.description}</p> */}
        {/* <Link style={{ fontSize: "15px" }} to={`/index/${id}`}>View Page</Link> */}
      </div>
    </div>
  );
  



}

export default IndividualPreserves