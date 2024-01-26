
import imageObservatory from "./imageObservatory.png"
function IndividualObservatries({facility}){

    return (
    
    
    
    
    <div style={{ fontFamily: "Arial", backgroundColor:"rgba(255, 255, 255, 0)" }} className="card">
          <img src={imageObservatory} className="card__image" alt="" />
          <div className="card__overlay">
            <div className="card__header">
              <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
              <img className="card__thumb" src={imageObservatory} alt="" />
              <div className="card__header-text">
              
                <h3 className="card__title">{facility.name}</h3>
                {/* <span style={{ fontFamily: "Arial" }} className="card__status">{parseDATE(person.date)}</span> */}
              </div>
            </div>
            <div style={{ fontFamily: "Arial" }}>{facility.latitude}</div>
            <div style={{ fontFamily: "Arial" }}>{facility.longitude}</div>
    
            {/* <p style={{ fontFamily: "Arial", fontSize: "10px" }} className="card__description">{person.description}</p> */}
            {/* <Link style={{ fontSize: "15px" }} to={`/index/${id}`}>View Page</Link> */}
          </div>
        </div>
      );
      
    
    
    
    }
    
    export default IndividualObservatries