
import meteorShowers from "./meteorShower.json"
import meteorpics from "./meteorpics.png"
import "./meteorshowers.css"
import { useState, useEffect } from "react";
function MeteorShowers() {
  const today = new Date();
  console.log(today.getMonth())
  const [stacking, setStacking] = useState([])
  const [meteorButton, setMeteorButton] = useState(false)

  let monthString = `${today.getMonth() + 1}`
  let monthString0 = "0" + (today.getMonth() + 1)
  let nextmonthString = `${today.getMonth() + 2}`
  let nextmonthString0 = "0" + (today.getMonth() + 2)
  let next2monthsString = `${today.getMonth() + 3}`
  let next2monthsString0 = "0" + (today.getMonth() + 3)
  const filterDateMeteors = meteorShowers.meteorShowers.filter(meteor => { return (Number((meteor.dateStart.charAt(0) + meteor.dateStart.charAt(1))) == ((monthString.length === 1 ? Number(monthString0) : Number(monthString)))) })


  const filterDateMeteorsNEXTMONTH = meteorShowers.meteorShowers.filter(meteor => { return (Number((meteor.dateStart.charAt(0) + meteor.dateStart.charAt(1))) == (nextmonthString.length === 1 ? Number(nextmonthString0) : Number(nextmonthString))) })


  const filterDateMeteorsInTwoMONTHs = meteorShowers.meteorShowers.filter(meteor => { return (Number((meteor.dateStart.charAt(0) + meteor.dateStart.charAt(1))) == (next2monthsString.length === 1 ? Number(next2monthsString0) : Number(next2monthsString))) })

  useEffect(() => {
    let stack = []
    for (const meteor of meteorShowers.meteorShowers) {
      console.log((meteor.dateStart.charAt(0) + meteor.dateStart.charAt(1)))
      console.log(monthString.length)
     

      if ((Number((meteor.dateStart.charAt(0) + meteor.dateStart.charAt(1))) == ((monthString.length === 1 ? Number(monthString0) : Number(monthString))))) stack.push(meteor.name)
        if ((Number((meteor.dateEnd.charAt(0) + meteor.dateEnd.charAt(1))) == ((monthString.length === 1 ? Number(monthString0) : Number(monthString)))) && meteor.name !== stack[stack.length-1]) stack.push(meteor.name)
     
    }
    console.log(stack)
    setStacking(stack)
  }, []
  )

  function handleOnClickMeteor() {
    setMeteorButton(!meteorButton)
  }

  console.log(filterDateMeteors)
  return (
    <div style={{ textAlign: "justify", paddingLeft: "30px", paddingRight: "30px" }}>

      <div className="homecontainerMeteors">
        <div className="youtube">


          <div>
            <br></br>
            <br></br>
            <h1 style={{ color: "darkblue" }}>Watcher's Guide</h1>
            <h3 style={{ color: "gray" }}>Meteor Showers</h3>
            <h4 style={{ color: "gray" }}>Example: Lyrid</h4>


            <br></br>
            <div>
              <h3 style={{ color: "purple" }}>When and Where to Watch:</h3>
              <p><strong>- The Lyrid meteor shower runs from April 15 to April 29.</strong></p>
              <p><strong>- The peak occurs on the evening of April 21 to the early morning hours of April 22.</strong></p>
              <p><strong>- Find a dark location away from city lights for the best view.</strong></p>
            </div>
            <br></br>
            <div >

              <h3 style={{ color: "purple" }}>Meteor Origins:</h3>
              <p><strong>   - The Lyrids are one of the oldest known meteor showers, observed for at least 2,700 years.</strong></p>
              <p><strong>- They occur when Earth passes through the debris field of comet C/1861 G1 Thatcher.</strong></p>
              <p><strong>- Lyrid meteors appear to originate near the constellation Lyra, specifically from the radiant point near the bright star Vega.</strong></p>
            </div>
            <br></br>
            <div>
              <h3 style={{ color: "purple" }}>Observation Tips:</h3>
              <p><strong>- Know the peak time: The best viewing time is during the peak hours.</strong></p>
              <p><strong>- Location: Choose a dark spot away from artificial lights.</strong></p>
              <p><strong>- Patience: Spend at least an hour observing to see more meteors.</strong></p>
              <p><strong>- Notice speeds and colors: Lyrid meteors move at 29 miles per second.</strong></p>
              <p><strong>- Meteor trains: Look for lingering trails after a meteor passes.</strong></p>
            </div>
            <br></br>
            <div>
              <h3 style={{ color: "purple" }}>Stellarium Software:</h3>
              <p><strong>- To track the Lyrids, use Stellarium, a free planetarium software.</strong></p>
              <p><strong>- Set your location and date to April 21-22.</strong></p>
              <p><strong>- Look toward the constellation Lyra to spot the radiant point.</strong></p>
              <p><strong>- Enjoy the show as you witness these "shooting stars" streak across the sky!</strong></p>
            </div>
            <br></br>
            <div>
              <p style={{ color: "gray" }}><strong>Remember, meteor showers are unpredictable, so patience and a sense of wonder are key. Happy stargazing!</strong></p>

            </div>
            <br></br>

          </div>

        </div>
        <div className="meteorInfo">


          {meteorButton ? <button onClick={handleOnClickMeteor}>Show Within a Month</button> : <button onClick={handleOnClickMeteor}>Show next three (3) Months</button>}

          {meteorButton ? <>    <br></br>
            <br></br>
            <h1 style={{ color: "darkblue" }}>Upcoming Showers</h1>
            <h3 style={{ color: "gray" }}>Current and Next Three Months</h3>

            <br></br> <div >{filterDateMeteors.length > 0 ? <div>{filterDateMeteors.map(meteor => {
              return (


                <div style={{ fontFamily: "Arial" }} className="card">
                  <img style={{ maxHeight: "250px" }} src={meteor.image} className="card__image" alt="" />
                  <div className="card__overlay">
                    <div className="card__header">
                      <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                      <img className="card__thumb" src={meteor.image} alt="" />
                      <div className="card__header-text">
                        <h5 style={{ fontFamily: "Arial" }} >{meteor.name}</h5>
                        <h3 className="card__title">Start: {meteor.dateStart}</h3>
                        <h3 className="card__title">End: {meteor.dateEnd}</h3>

                        <span style={{ fontFamily: "Arial" }} className="card__status"> </span>
                      </div>
                    </div>

                    <p><strong>{meteor.frequency}</strong></p>

                    <div></div>

                  </div>
                </div>
              )
            })
            }</div> : <p>No Meteor Showers <strong>start</strong> in this month</p>}</div>

            <div >{filterDateMeteorsNEXTMONTH.length > 0 ? <div>{filterDateMeteorsNEXTMONTH.map(meteor => {
              return (


                <div style={{ fontFamily: "Arial" }} className="card">
                  <img style={{ maxHeight: "250px" }} src={meteor.image} className="card__image" alt="" />
                  <div className="card__overlay">
                    <div className="card__header">
                      <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                      <img className="card__thumb" src={meteor.image} alt="" />
                      <div className="card__header-text">
                        <h5 style={{ fontFamily: "Arial" }} >{meteor.name}</h5>
                        <h3 className="card__title">Start: {meteor.dateStart}</h3>
                        <h3 className="card__title">End: {meteor.dateEnd}</h3>

                        <span style={{ fontFamily: "Arial" }} className="card__status"> </span>
                      </div>
                    </div>
                    {/* <p style={fontFamily:"Arial", fontSize:"10px"}}  className="card__description">{person.description}</strong></p> */}
                    <p><strong>{meteor.frequency}</strong></p>

                    <div></div>

                  </div>
                </div>
              )
            })
            }</div> : <p>No Meteor Showers <strong>start</strong>  next month</p>}</div>

            <div >{filterDateMeteorsInTwoMONTHs.length > 0 ? <div>{filterDateMeteorsInTwoMONTHs.map(meteor => {
              return (


                <div style={{ fontFamily: "Arial" }} className="card">
                  <img style={{ maxHeight: "250px" }} src={meteor.image} className="card__image" alt="" />
                  <div className="card__overlay">
                    <div className="card__header">
                      <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                      <img className="card__thumb" src={meteor.image} alt="" />
                      <div className="card__header-text">
                        <h5 style={{ fontFamily: "Arial" }} >{meteor.name}</h5>
                        <h3 className="card__title">Start: {meteor.dateStart}</h3>
                        <h3 className="card__title">End: {meteor.dateEnd}</h3>

                        <span style={{ fontFamily: "Arial" }} className="card__status"> </span>
                      </div>
                    </div>
                   
                    <p><strong>Get Ready, in Two Months!</strong></p>

                    <div></div>

                  </div>
                </div>
              )
            })
            }</div> : <p>No Meteor Showers <strong>start</strong>  in two months</p>}</div> </>

            :
            <>
              <br></br>
              <br></br>
              <h1 style={{ color: "darkblue" }}>Upcoming Showers</h1>
              <h3 style={{ color: "gray" }}>Starting and Ending Within a Month</h3>
              <div>{meteorShowers.meteorShowers.map(meteor => {

                let meteorNamesString = stacking.join(",")
                console.log(meteorNamesString)
               return(<> {
                  meteorNamesString.includes(meteor.name) ?

                  <div>

                    <div style={{ fontFamily: "Arial" }} className="card">
                      <img style={{ maxHeight: "250px" }} src={meteor.image} className="card__image" alt="" />
                      <div className="card__overlay">
                        <div className="card__header">
                          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                          <img className="card__thumb" src={meteor.image} alt="" />
                          <div className="card__header-text">
                            <h5 style={{ fontFamily: "Arial" }} >{meteor.name}</h5>
                            <h3 className="card__title">Start: {meteor.dateStart}</h3>
                            <h3 className="card__title">End: {meteor.dateEnd}</h3>

                            <span style={{ fontFamily: "Arial" }} className="card__status"> </span>
                          </div>
                        </div>
                        <p style={{ fontFamily: "Arial", fontSize: "10px" }} className="card__description"><strong>{meteor.description}</strong></p>

                        <div></div>

                      </div>
                    </div>

                  </div>

                  : null
                } </>)
              })}</div>
              <br></br>
            </>
          }



        </div>
      </div>

      <br></br>   {/* </div> */}
      <br></br>
    </div>
  )





}

export default MeteorShowers