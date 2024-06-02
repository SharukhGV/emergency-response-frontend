
import meteorShowers from "./meteorShower.json"
import "./meteorshowers.css"
import { useState, useEffect } from "react";

function Meteorshowers(){
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
      if ((Number((meteor.dateEnd.charAt(0) + meteor.dateEnd.charAt(1))) == ((monthString.length === 1 ? Number(monthString0) : Number(monthString)))) && meteor.name !== stack[stack.length - 1]) stack.push(meteor.name)

    }
    console.log(stack)
    setStacking(stack)
  }, []
  )

  function handleOnClickMeteor() {
    setMeteorButton(!meteorButton)
  }

  console.log(filterDateMeteors)


return(
  <div style={{textAlign:"center"}} className="meteorInfo">


  {meteorButton ? <div style={{ textAlign: "center" }}><button style={{ borderRadius: "50%", width: "65px", height: "65px" }} onClick={handleOnClickMeteor}>Show</button><span style={{ display: "inline-block", width: "30px", height: "10px", backgroundColor: "gray", content: "" }}></span><button style={{ borderRadius: "50%", width: "65px", height: "65px" }} onClick={handleOnClickMeteor}>Single</button><span style={{ display: "inline-block", width: "30px", height: "10px", backgroundColor: "gray", content: "" }}></span><button style={{ borderRadius: "50%", width: "65px", height: "65px" }} onClick={handleOnClickMeteor}>Month</button></div> : <div style={{ textAlign: "center" }}><button style={{ borderRadius: "50%", width: "65px", height: "65px" }} onClick={handleOnClickMeteor}>Show</button><span style={{ display: "inline-block", width: "30px", height: "10px", backgroundColor: "gray", content: "" }}></span><button style={{ borderRadius: "50%", width: "65px", height: "65px" }} onClick={handleOnClickMeteor}>Three</button><span style={{ display: "inline-block", width: "30px", height: "10px", backgroundColor: "gray", content: "" }}></span><button style={{ borderRadius: "50%", width: "65px", height: "65px" }} onClick={handleOnClickMeteor}>Months</button></div>}

  {meteorButton ? <>    <br></br>
              {/* ON BUTTON CLICK, SHOW METEOR SHOWERS WITHIN THREE MONTHS */}

    <br></br>
    <h1 ><strong>Upcoming Showers</strong></h1>
    <h3 >Current and Next Two Months</h3>

    <br></br> <div >{filterDateMeteors.length > 0 ? <div>{filterDateMeteors.map(meteor => {
      return (
        <>
    {/* MONTH 1 */}

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

          <div style={{margin:"30px", padding:"3px", borderRadius:"10px",border:"solid" }}>{meteor.about}</div>

        </>
      )
    })
    }</div> : <p>No Meteor Showers <strong>start</strong> in this month</p>}</div>

    {/* MONTH 2 */}

    <div >{filterDateMeteorsNEXTMONTH.length > 0 ? <div>{filterDateMeteorsNEXTMONTH.map(meteor => {
      return (
        <>

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
          <div style={{margin:"30px", padding:"3px",  borderRadius:"10px", borderColor:"green",border:"solid" }}>{meteor.about}</div>
        </>
      )
    })
    }</div> : <p>No Meteor Showers <strong>start</strong>  next month</p>}</div>
    
    {/* MONTH 3 */}

    <div >{filterDateMeteorsInTwoMONTHs.length > 0 ? <div>{filterDateMeteorsInTwoMONTHs.map(meteor => {
      return (

        <>
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
          <div style={{margin:"30px", color:"purple",padding:"3px", borderRadius:"10px", borderColor:"green",border:"solid" }}>{meteor.about}</div>
        </>
      )
    })
    }</div> : <p>No Meteor Showers <strong>start</strong>  in two months</p>}</div> </>

    :
    <>
    {/* ON BUTTON CLICK, SHOW METEOR SHOWERS WITHIN A MONTH */}
    
      <br></br>
      <br></br>
      <h1><strong>Upcoming Showers</strong></h1>
      <h3>Starting and Ending Within a Month</h3>
      <div>{meteorShowers.meteorShowers.map(meteor => {

        let meteorNamesString = stacking.join(",")
        console.log(meteorNamesString)
        return (<> {
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
              <div style={{margin:"30px", color:"purple",padding:"3px", borderRadius:"10px", borderColor:"green",border:"solid" }}>{meteor.about}</div>
            </div>

            : null
        } </>)
      })}</div>
      <br></br>
    </>
  }



</div>
)

}

export default Meteorshowers