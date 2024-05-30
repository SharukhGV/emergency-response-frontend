import comingSoon from "./comingSoon.png"
import milkyway from "./Galaxypics/milkyway.jpg"
import  andromeda from "./Galaxypics/andromeda.jpg"
import blackeye from "./Galaxypics/blackeye.png"
import bode from "./Galaxypics/bode.jpg"
import butterflies from "./Galaxypics/butterflies.png"
import catwheel from "./Galaxypics/catwheel.png"
import cigar from "./Galaxypics/cigar.jpg"
import CometGalaxy from "./Galaxypics/CometGalaxy.jpg"
import fireworks from "./Galaxypics/fireworks.jpg"
import Hoag from "./Galaxypics/Hoag.jpg"
import mouse from "./Galaxypics/mouse.jpg"
import needle from "./Galaxypics/needle.jpeg"
import pinwheel from "./Galaxypics/pinwheel.jpg"
import Silverdollar from "./Galaxypics/Silverdollar.jpg"
import sombrero from "./Galaxypics/sombrero.jpg"
import sunflower from "./Galaxypics/sunflower.jpg"
import Triangulum from "./Galaxypics/Triangulum.jpg"
import tadpole from "./Galaxypics/tadpole.jpg"
function CelestialCard({celestData}){

return(
 

<div> {celestData.name === "Andromeda Galaxy" ?


<div style={{ fontFamily: "Arial", backgroundColor:"rgba(255, 255, 255, 0)" }} className="card">
          <img src={celestData.image_url} className="card__image" alt="" />
          <div className="card__overlay">
            <div className="card__header">
              <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
              <img className="card__thumb" src={andromeda} alt="" />
              <div className="card__header-text">
              
                <h3 className="card__title">{celestData.name}</h3>
                {/* <span style={{ fontFamily: "Arial" }} className="card__status">{parseDATE(person.date)}</span> */}
              </div>
            </div>
            {/* <div style={{ fontFamily: "Arial", fontSize:"7px" }}><a href={celestData.website}>{celestData.website}</a></div> */}
            <div style={{ fontFamily: "Arial" }}>{celestData.description}</div>
            <div style={{ fontFamily: "Arial" }}>Hemisphere Visibility: {celestData.hemisphere}</div>
            <div style={{ fontFamily: "Arial" }}>Constellation: {celestData.constellation}</div>

            {/* <p style={{ fontFamily: "Arial", fontSize: "10px" }} className="card__description">{person.description}</p> */}
            {/* <Link style={{ fontSize: "15px" }} to={`/index/${id}`}>View Page</Link> */}
          </div>
        </div> :null}
        
        {celestData.name === "Milky Way" ?


<div style={{ fontFamily: "Arial", backgroundColor:"rgba(255, 255, 255, 0)" }} className="card">
          <img src={milkyway} className="card__image" alt="" />
          <div className="card__overlay">
            <div className="card__header">
              <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
              <img className="card__thumb" src={andromeda} alt="" />
              <div className="card__header-text">
              
                <h3 className="card__title">{celestData.name}</h3>
                {/* <span style={{ fontFamily: "Arial" }} className="card__status">{parseDATE(person.date)}</span> */}
              </div>
            </div>
            {/* <div style={{ fontFamily: "Arial", fontSize:"7px" }}><a href={celestData.website}>{celestData.website}</a></div> */}
            <div style={{ fontFamily: "Arial" }}>{celestData.description}</div>
            <div style={{ fontFamily: "Arial" }}>Hemisphere Visibility: {celestData.hemisphere}</div>
            <div style={{ fontFamily: "Arial" }}>Constellation: {celestData.constellation}</div>

            {/* <p style={{ fontFamily: "Arial", fontSize: "10px" }} className="card__description">{person.description}</p> */}
            {/* <Link style={{ fontSize: "15px" }} to={`/index/${id}`}>View Page</Link> */}
          </div>
        </div> :null}

        {celestData.name === "Whirlpool Galaxy" ?


<div style={{ fontFamily: "Arial", backgroundColor:"rgba(255, 255, 255, 0)" }} className="card">
          <img src={celestData.image_url} className="card__image" alt="" />
          <div className="card__overlay">
            <div className="card__header">
              <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
              <img className="card__thumb" src={andromeda} alt="" />
              <div className="card__header-text">
              
                <h3 className="card__title">{celestData.name}</h3>
                {/* <span style={{ fontFamily: "Arial" }} className="card__status">{parseDATE(person.date)}</span> */}
              </div>
            </div>
            {/* <div style={{ fontFamily: "Arial", fontSize:"7px" }}><a href={celestData.website}>{celestData.website}</a></div> */}
            <div style={{ fontFamily: "Arial" }}>{celestData.description}</div>
            <div style={{ fontFamily: "Arial" }}>Hemisphere Visibility: {celestData.hemisphere}</div>
            <div style={{ fontFamily: "Arial" }}>Constellation: {celestData.constellation}</div>

            {/* <p style={{ fontFamily: "Arial", fontSize: "10px" }} className="card__description">{person.description}</p> */}
            {/* <Link style={{ fontSize: "15px" }} to={`/index/${id}`}>View Page</Link> */}
          </div>
        </div> :null}

        {celestData.name === "Sombrero Galaxy" ?


<div style={{ fontFamily: "Arial", backgroundColor:"rgba(255, 255, 255, 0)" }} className="card">
          <img src={sombrero} className="card__image" alt="" />
          <div className="card__overlay">
            <div className="card__header">
              <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
              <img className="card__thumb" src={andromeda} alt="" />
              <div className="card__header-text">
              
                <h3 className="card__title">{celestData.name}</h3>
                {/* <span style={{ fontFamily: "Arial" }} className="card__status">{parseDATE(person.date)}</span> */}
              </div>
            </div>
            {/* <div style={{ fontFamily: "Arial", fontSize:"7px" }}><a href={celestData.website}>{celestData.website}</a></div> */}
            <div style={{ fontFamily: "Arial" }}>{celestData.description}</div>
            <div style={{ fontFamily: "Arial" }}>Hemisphere Visibility: {celestData.hemisphere}</div>
            <div style={{ fontFamily: "Arial" }}>Constellation: {celestData.constellation}</div>

            {/* <p style={{ fontFamily: "Arial", fontSize: "10px" }} className="card__description">{person.description}</p> */}
            {/* <Link style={{ fontSize: "15px" }} to={`/index/${id}`}>View Page</Link> */}
          </div>
        </div> :null}

        {celestData.name === "Triangulum Galaxy" ?


<div style={{ fontFamily: "Arial", backgroundColor:"rgba(255, 255, 255, 0)" }} className="card">
          <img src={Triangulum} className="card__image" alt="" />
          <div className="card__overlay">
            <div className="card__header">
              <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
              <img className="card__thumb" src={andromeda} alt="" />
              <div className="card__header-text">
              
                <h3 className="card__title">{celestData.name}</h3>
                {/* <span style={{ fontFamily: "Arial" }} className="card__status">{parseDATE(person.date)}</span> */}
              </div>
            </div>
            {/* <div style={{ fontFamily: "Arial", fontSize:"7px" }}><a href={celestData.website}>{celestData.website}</a></div> */}
            <div style={{ fontFamily: "Arial" }}>{celestData.description}</div>
            <div style={{ fontFamily: "Arial" }}>Hemisphere Visibility: {celestData.hemisphere}</div>
            <div style={{ fontFamily: "Arial" }}>Constellation: {celestData.constellation}</div>

            {/* <p style={{ fontFamily: "Arial", fontSize: "10px" }} className="card__description">{person.description}</p> */}
            {/* <Link style={{ fontSize: "15px" }} to={`/index/${id}`}>View Page</Link> */}
          </div>
        </div> :null}

        {celestData.name === "Pinwheel Galaxy" ?


<div style={{ fontFamily: "Arial", backgroundColor:"rgba(255, 255, 255, 0)" }} className="card">
          <img src={pinwheel} className="card__image" alt="" />
          <div className="card__overlay">
            <div className="card__header">
              <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
              <img className="card__thumb" src={andromeda} alt="" />
              <div className="card__header-text">
              
                <h3 className="card__title">{celestData.name}</h3>
                {/* <span style={{ fontFamily: "Arial" }} className="card__status">{parseDATE(person.date)}</span> */}
              </div>
            </div>
            {/* <div style={{ fontFamily: "Arial", fontSize:"7px" }}><a href={celestData.website}>{celestData.website}</a></div> */}
            <div style={{ fontFamily: "Arial" }}>{celestData.description}</div>
            <div style={{ fontFamily: "Arial" }}>Hemisphere Visibility: {celestData.hemisphere}</div>
            <div style={{ fontFamily: "Arial" }}>Constellation: {celestData.constellation}</div>

            {/* <p style={{ fontFamily: "Arial", fontSize: "10px" }} className="card__description">{person.description}</p> */}
            {/* <Link style={{ fontSize: "15px" }} to={`/index/${id}`}>View Page</Link> */}
          </div>
        </div> :null}

        {celestData.name === "Black Eye Galaxy" ?


<div style={{ fontFamily: "Arial", backgroundColor:"rgba(255, 255, 255, 0)" }} className="card">
          <img src={blackeye} className="card__image" alt="" />
          <div className="card__overlay">
            <div className="card__header">
              <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
              <img className="card__thumb" src={andromeda} alt="" />
              <div className="card__header-text">
              
                <h3 className="card__title">{celestData.name}</h3>
                {/* <span style={{ fontFamily: "Arial" }} className="card__status">{parseDATE(person.date)}</span> */}
              </div>
            </div>
            {/* <div style={{ fontFamily: "Arial", fontSize:"7px" }}><a href={celestData.website}>{celestData.website}</a></div> */}
            <div style={{ fontFamily: "Arial" }}>{celestData.description}</div>
            <div style={{ fontFamily: "Arial" }}>Hemisphere Visibility: {celestData.hemisphere}</div>
            <div style={{ fontFamily: "Arial" }}>Constellation: {celestData.constellation}</div>

            {/* <p style={{ fontFamily: "Arial", fontSize: "10px" }} className="card__description">{person.description}</p> */}
            {/* <Link style={{ fontSize: "15px" }} to={`/index/${id}`}>View Page</Link> */}
          </div>
        </div> :null}

        {celestData.name === "Cigar Galaxy" ?


<div style={{ fontFamily: "Arial", backgroundColor:"rgba(255, 255, 255, 0)" }} className="card">
          <img src={celestData.image_url} className="card__image" alt="" />
          <div className="card__overlay">
            <div className="card__header">
              <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
              <img className="card__thumb" src={andromeda} alt="" />
              <div className="card__header-text">
              
                <h3 className="card__title">{celestData.name}</h3>
                {/* <span style={{ fontFamily: "Arial" }} className="card__status">{parseDATE(person.date)}</span> */}
              </div>
            </div>
            {/* <div style={{ fontFamily: "Arial", fontSize:"7px" }}><a href={celestData.website}>{celestData.website}</a></div> */}
            <div style={{ fontFamily: "Arial" }}>{celestData.description}</div>
            <div style={{ fontFamily: "Arial" }}>Hemisphere Visibility: {celestData.hemisphere}</div>
            <div style={{ fontFamily: "Arial" }}>Constellation: {celestData.constellation}</div>

            {/* <p style={{ fontFamily: "Arial", fontSize: "10px" }} className="card__description">{person.description}</p> */}
            {/* <Link style={{ fontSize: "15px" }} to={`/index/${id}`}>View Page</Link> */}
          </div>
        </div> :null}

        {celestData.name === "Bode's Galaxy" ?


<div style={{ fontFamily: "Arial", backgroundColor:"rgba(255, 255, 255, 0)" }} className="card">
          <img src={bode} className="card__image" alt="" />
          <div className="card__overlay">
            <div className="card__header">
              <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
              <img className="card__thumb" src={andromeda} alt="" />
              <div className="card__header-text">
              
                <h3 className="card__title">{celestData.name}</h3>
                {/* <span style={{ fontFamily: "Arial" }} className="card__status">{parseDATE(person.date)}</span> */}
              </div>
            </div>
            {/* <div style={{ fontFamily: "Arial", fontSize:"7px" }}><a href={celestData.website}>{celestData.website}</a></div> */}
            <div style={{ fontFamily: "Arial" }}>{celestData.description}</div>
            <div style={{ fontFamily: "Arial" }}>Hemisphere Visibility: {celestData.hemisphere}</div>
            <div style={{ fontFamily: "Arial" }}>Constellation: {celestData.constellation}</div>

            {/* <p style={{ fontFamily: "Arial", fontSize: "10px" }} className="card__description">{person.description}</p> */}
            {/* <Link style={{ fontSize: "15px" }} to={`/index/${id}`}>View Page</Link> */}
          </div>
        </div> :null}

        {celestData.name === "Fireworks Galaxy" ?


<div style={{ fontFamily: "Arial", backgroundColor:"rgba(255, 255, 255, 0)" }} className="card">
          <img src={fireworks} className="card__image" alt="" />
          <div className="card__overlay">
            <div className="card__header">
              <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
              <img className="card__thumb" src={andromeda} alt="" />
              <div className="card__header-text">
              
                <h3 className="card__title">{celestData.name}</h3>
                {/* <span style={{ fontFamily: "Arial" }} className="card__status">{parseDATE(person.date)}</span> */}
              </div>
            </div>
            {/* <div style={{ fontFamily: "Arial", fontSize:"7px" }}><a href={celestData.website}>{celestData.website}</a></div> */}
            <div style={{ fontFamily: "Arial" }}>{celestData.description}</div>
            <div style={{ fontFamily: "Arial" }}>Hemisphere Visibility: {celestData.hemisphere}</div>
            <div style={{ fontFamily: "Arial" }}>Constellation: {celestData.constellation}</div>

            {/* <p style={{ fontFamily: "Arial", fontSize: "10px" }} className="card__description">{person.description}</p> */}
            {/* <Link style={{ fontSize: "15px" }} to={`/index/${id}`}>View Page</Link> */}
          </div>
        </div> :null}

        {celestData.name === "Silver Dollar Galaxy" ?


<div style={{ fontFamily: "Arial", backgroundColor:"rgba(255, 255, 255, 0)" }} className="card">
          <img src={Silverdollar} className="card__image" alt="" />
          <div className="card__overlay">
            <div className="card__header">
              <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
              <img className="card__thumb" src={andromeda} alt="" />
              <div className="card__header-text">
              
                <h3 className="card__title">{celestData.name}</h3>
                {/* <span style={{ fontFamily: "Arial" }} className="card__status">{parseDATE(person.date)}</span> */}
              </div>
            </div>
            {/* <div style={{ fontFamily: "Arial", fontSize:"7px" }}><a href={celestData.website}>{celestData.website}</a></div> */}
            <div style={{ fontFamily: "Arial" }}>{celestData.description}</div>
            <div style={{ fontFamily: "Arial" }}>Hemisphere Visibility: {celestData.hemisphere}</div>
            <div style={{ fontFamily: "Arial" }}>Constellation: {celestData.constellation}</div>

            {/* <p style={{ fontFamily: "Arial", fontSize: "10px" }} className="card__description">{person.description}</p> */}
            {/* <Link style={{ fontSize: "15px" }} to={`/index/${id}`}>View Page</Link> */}
          </div>
        </div> :null}

        {celestData.name === "Sunflower Galaxy" ?


<div style={{ fontFamily: "Arial", backgroundColor:"rgba(255, 255, 255, 0)" }} className="card">
          <img src={sunflower} className="card__image" alt="" />
          <div className="card__overlay">
            <div className="card__header">
              <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
              <img className="card__thumb" src={andromeda} alt="" />
              <div className="card__header-text">
              
                <h3 className="card__title">{celestData.name}</h3>
                {/* <span style={{ fontFamily: "Arial" }} className="card__status">{parseDATE(person.date)}</span> */}
              </div>
            </div>
            {/* <div style={{ fontFamily: "Arial", fontSize:"7px" }}><a href={celestData.website}>{celestData.website}</a></div> */}
            <div style={{ fontFamily: "Arial" }}>{celestData.description}</div>
            <div style={{ fontFamily: "Arial" }}>Hemisphere Visibility: {celestData.hemisphere}</div>
            <div style={{ fontFamily: "Arial" }}>Constellation: {celestData.constellation}</div>

            {/* <p style={{ fontFamily: "Arial", fontSize: "10px" }} className="card__description">{person.description}</p> */}
            {/* <Link style={{ fontSize: "15px" }} to={`/index/${id}`}>View Page</Link> */}
          </div>
        </div> :null}

        {celestData.name === "Tadpole Galaxy" ?


<div style={{ fontFamily: "Arial", backgroundColor:"rgba(255, 255, 255, 0)" }} className="card">
          <img src={tadpole} className="card__image" alt="" />
          <div className="card__overlay">
            <div className="card__header">
              <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
              <img className="card__thumb" src={andromeda} alt="" />
              <div className="card__header-text">
              
                <h3 className="card__title">{celestData.name}</h3>
                {/* <span style={{ fontFamily: "Arial" }} className="card__status">{parseDATE(person.date)}</span> */}
              </div>
            </div>
            {/* <div style={{ fontFamily: "Arial", fontSize:"7px" }}><a href={celestData.website}>{celestData.website}</a></div> */}
            <div style={{ fontFamily: "Arial" }}>{celestData.description}</div>
            <div style={{ fontFamily: "Arial" }}>Hemisphere Visibility: {celestData.hemisphere}</div>
            <div style={{ fontFamily: "Arial" }}>Constellation: {celestData.constellation}</div>

            {/* <p style={{ fontFamily: "Arial", fontSize: "10px" }} className="card__description">{person.description}</p> */}
            {/* <Link style={{ fontSize: "15px" }} to={`/index/${id}`}>View Page</Link> */}
          </div>
        </div> :null}

        {celestData.name === "Comet Galaxy" ?


<div style={{ fontFamily: "Arial", backgroundColor:"rgba(255, 255, 255, 0)" }} className="card">
          <img src={CometGalaxy} className="card__image" alt="" />
          <div className="card__overlay">
            <div className="card__header">
              <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
              <img className="card__thumb" src={andromeda} alt="" />
              <div className="card__header-text">
              
                <h3 className="card__title">{celestData.name}</h3>
                {/* <span style={{ fontFamily: "Arial" }} className="card__status">{parseDATE(person.date)}</span> */}
              </div>
            </div>
            {/* <div style={{ fontFamily: "Arial", fontSize:"7px" }}><a href={celestData.website}>{celestData.website}</a></div> */}
            <div style={{ fontFamily: "Arial" }}>{celestData.description}</div>
            <div style={{ fontFamily: "Arial" }}>Hemisphere Visibility: {celestData.hemisphere}</div>
            <div style={{ fontFamily: "Arial" }}>Constellation: {celestData.constellation}</div>

            {/* <p style={{ fontFamily: "Arial", fontSize: "10px" }} className="card__description">{person.description}</p> */}
            {/* <Link style={{ fontSize: "15px" }} to={`/index/${id}`}>View Page</Link> */}
          </div>
        </div> :null}

        {celestData.name === "Cartwheel Galaxy" ?


<div style={{ fontFamily: "Arial", backgroundColor:"rgba(255, 255, 255, 0)" }} className="card">
          <img src={catwheel} className="card__image" alt="" />
          <div className="card__overlay">
            <div className="card__header">
              <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
              <img className="card__thumb" src={andromeda} alt="" />
              <div className="card__header-text">
              
                <h3 className="card__title">{celestData.name}</h3>
                {/* <span style={{ fontFamily: "Arial" }} className="card__status">{parseDATE(person.date)}</span> */}
              </div>
            </div>
            {/* <div style={{ fontFamily: "Arial", fontSize:"7px" }}><a href={celestData.website}>{celestData.website}</a></div> */}
            <div style={{ fontFamily: "Arial" }}>{celestData.description}</div>
            <div style={{ fontFamily: "Arial" }}>Hemisphere Visibility: {celestData.hemisphere}</div>
            <div style={{ fontFamily: "Arial" }}>Constellation: {celestData.constellation}</div>

            {/* <p style={{ fontFamily: "Arial", fontSize: "10px" }} className="card__description">{person.description}</p> */}
            {/* <Link style={{ fontSize: "15px" }} to={`/index/${id}`}>View Page</Link> */}
          </div>
        </div> :null}

        {celestData.name === "Needle Galaxy" ?


<div style={{ fontFamily: "Arial", backgroundColor:"rgba(255, 255, 255, 0)" }} className="card">
          <img src={needle} className="card__image" alt="" />
          <div className="card__overlay">
            <div className="card__header">
              <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
              <img className="card__thumb" src={andromeda} alt="" />
              <div className="card__header-text">
              
                <h3 className="card__title">{celestData.name}</h3>
                {/* <span style={{ fontFamily: "Arial" }} className="card__status">{parseDATE(person.date)}</span> */}
              </div>
            </div>
            {/* <div style={{ fontFamily: "Arial", fontSize:"7px" }}><a href={celestData.website}>{celestData.website}</a></div> */}
            <div style={{ fontFamily: "Arial" }}>{celestData.description}</div>
            <div style={{ fontFamily: "Arial" }}>Hemisphere Visibility: {celestData.hemisphere}</div>
            <div style={{ fontFamily: "Arial" }}>Constellation: {celestData.constellation}</div>

            {/* <p style={{ fontFamily: "Arial", fontSize: "10px" }} className="card__description">{person.description}</p> */}
            {/* <Link style={{ fontSize: "15px" }} to={`/index/${id}`}>View Page</Link> */}
          </div>
        </div> :null}

        {celestData.name === "Butterfly Galaxies" ?


<div style={{ fontFamily: "Arial", backgroundColor:"rgba(255, 255, 255, 0)" }} className="card">
          <img src={butterflies} className="card__image" alt="" />
          <div className="card__overlay">
            <div className="card__header">
              <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
              <img className="card__thumb" src={andromeda} alt="" />
              <div className="card__header-text">
              
                <h3 className="card__title">{celestData.name}</h3>
                {/* <span style={{ fontFamily: "Arial" }} className="card__status">{parseDATE(person.date)}</span> */}
              </div>
            </div>
            {/* <div style={{ fontFamily: "Arial", fontSize:"7px" }}><a href={celestData.website}>{celestData.website}</a></div> */}
            <div style={{ fontFamily: "Arial" }}>{celestData.description}</div>
            <div style={{ fontFamily: "Arial" }}>Hemisphere Visibility: {celestData.hemisphere}</div>
            <div style={{ fontFamily: "Arial" }}>Constellation: {celestData.constellation}</div>

            {/* <p style={{ fontFamily: "Arial", fontSize: "10px" }} className="card__description">{person.description}</p> */}
            {/* <Link style={{ fontSize: "15px" }} to={`/index/${id}`}>View Page</Link> */}
          </div>
        </div> :null}

        {celestData.name === "Hoag's Object" ?


<div style={{ fontFamily: "Arial", backgroundColor:"rgba(255, 255, 255, 0)" }} className="card">
          <img src={Hoag} className="card__image" alt="" />
          <div className="card__overlay">
            <div className="card__header">
              <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
              <img className="card__thumb" src={andromeda} alt="" />
              <div className="card__header-text">
              
                <h3 className="card__title">{celestData.name}</h3>
                {/* <span style={{ fontFamily: "Arial" }} className="card__status">{parseDATE(person.date)}</span> */}
              </div>
            </div>
            {/* <div style={{ fontFamily: "Arial", fontSize:"7px" }}><a href={celestData.website}>{celestData.website}</a></div> */}
            <div style={{ fontFamily: "Arial" }}>{celestData.description}</div>
            <div style={{ fontFamily: "Arial" }}>Hemisphere Visibility: {celestData.hemisphere}</div>
            <div style={{ fontFamily: "Arial" }}>Constellation: {celestData.constellation}</div>

            {/* <p style={{ fontFamily: "Arial", fontSize: "10px" }} className="card__description">{person.description}</p> */}
            {/* <Link style={{ fontSize: "15px" }} to={`/index/${id}`}>View Page</Link> */}
          </div>
        </div> :null}

       
</div>

)

}

export default CelestialCard