import GoogleMaps from "../components/GoogleMaps";

export default function Index() {
  return (
    <div>
      <GoogleMaps />
      <div class="box">
        <form name="search">
            <div style={{fontFamily:"helvetica", color:"orangered"}}>Search Someone...</div>
          <input
            type="text"
            class="input"
            name="txt"
            onmouseout="this.value = ''; this.blur();"
          />
        </form>
 </div>
      <div className="container">
        <div className="item">
          <h3>Natural Disasters</h3>
          <p>Person Emergency Here</p>
          <p>Person Emergency Here</p>
          <p>Person Emergency Here</p>
          <p>Person Emergency Here</p>
          <p>Person Emergency Here</p>
        </div>
        <div className="item">
          <h3>Medical Emergencies</h3>
          <p>Person Emergency Here</p>
          <p>Person Emergency Here</p>
          <p>Person Emergency Here</p>
          <p>Person Emergency Here</p>
          <p>Person Emergency Here</p>
        </div>
        <div className="item">
          <h3> Fire and Structure Emergencies</h3>
          <p>Person Emergency Here</p>
          <p>Person Emergency Here</p>
          <p>Person Emergency Here</p>
          <p>Person Emergency Here</p>
          <p>Person Emergency Here</p>
        </div>
        <div className="item">
          <h3>Vehicle Emergencies</h3>
          <p>Person Emergency Here</p>
          <p>Person Emergency Here</p>
          <p>Person Emergency Here</p>
          <p>Person Emergency Here</p>
          <p>Person Emergency Here</p>
        </div>
        <div className="item">
          <h3>Security and Civil Unrest</h3>
          <p>Person Emergency Here</p>
          <p>Person Emergency Here</p>
          <p>Person Emergency Here</p>
          <p>Person Emergency Here</p>
          <p>Person Emergency Here</p>
          <p>Person Emergency Here</p>
        </div>
      </div>
    </div>
  );
}
