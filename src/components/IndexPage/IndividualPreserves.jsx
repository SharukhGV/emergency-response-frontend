// This component is imported into the "SearchPreserves" component in this same folder
function IndividualPreserves({ preserve }) {

  return (

    <div className="card">
      <img src={preserve.image} className="card__image" alt="" />
      <div className="card__overlay">
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
          <img className="card__thumb" src={preserve.image} alt="" />
          <div className="card__header-text">

            <h3 className="card__title">{preserve.name}</h3>
          </div>
        </div>
        <div style={{ fontFamily: "Arial", fontSize: "12px" }}><strong>Best Time</strong> {preserve.besttime}</div>
        <div style={{ fontFamily: "Arial", fontSize: "12px" }}><strong>Best Locale</strong> {preserve.bestlocale[0]}</div>
        <br></br>

      </div>
    </div>
  );




}

export default IndividualPreserves