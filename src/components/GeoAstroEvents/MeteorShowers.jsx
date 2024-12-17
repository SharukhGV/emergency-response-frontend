
// import PlanetsVisible from "../Planets/PlanetsVisible";
import meteorShowers from "./meteorShower.json"
import "./meteorshowers.css"
import { useState, useEffect } from "react";

function MeteorShowers() {
  const today = new Date();
  console.log(today.getMonth())
  const [stacking, setStacking] = useState([])

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

  console.log(filterDateMeteors)


  return (
    <div style={{ textAlign: "center", marginLeft:"30px", marginRight:"30px" }} className="meteorInfo">

      <>
        {/* ON BUTTON CLICK, SHOW METEOR SHOWERS WITHIN THREE MONTHS */}

        <br></br>
        <h1 ><strong>Upcoming Showers</strong></h1>
        <h3 >Current and Next Two Months</h3>

        <br></br> <div >{filterDateMeteors.length > 0 ? <div>{filterDateMeteors.map(meteor => {
          return (
            <>
              {/* MONTH 1 */}

              <div style={{ fontFamily: "Arial" }} className="meteorabout">
                <div className="meteorabout__content">
                  <img
                    className="meteorabout__image"
                    src={meteor.image}
                    alt={meteor.name}
                  />
                  <div className="meteorabout__details">
                    <h5 className="meteorabout__name">{meteor.name}</h5>
                    <h3>Start: {meteor.dateStart}</h3>
                    <h3>End: {meteor.dateEnd}</h3>
                    <p>
                      <strong>{meteor.frequency}</strong>
                    </p>
                    <p>{meteor.about}</p>
                  </div>
                </div>
              </div>

<br></br>

            </>
          )
        })
        }</div> : <p className="nometeor">No Meteor Showers <strong>start</strong> in this month</p>}</div>

        {/* MONTH 2 */}

        <div >{filterDateMeteorsNEXTMONTH.length > 0 ? <div>{filterDateMeteorsNEXTMONTH.map(meteor => {
          return (
            <>

              <div style={{ fontFamily: "Arial" }} className="meteorabout">
                <div className="meteorabout__content">
                  <img
                    className="meteorabout__image"
                    src={meteor.image}
                    alt={meteor.name}
                  />
                  <div className="meteorabout__details">
                    <h5 className="meteorabout__name">{meteor.name}</h5>
                    <h3>Start: {meteor.dateStart}</h3>
                    <h3>End: {meteor.dateEnd}</h3>
                    <p>
                      <strong>{meteor.frequency}</strong>
                    </p>
                    <p>{meteor.about}</p>
                  </div>
                </div>
              </div>
<br></br>

            </>
          )
        })
        }</div> : <p className="nometeor">No Meteor Showers <strong>start</strong>  next month</p>}</div>

        {/* MONTH 3 */}

        <div >{filterDateMeteorsInTwoMONTHs.length > 0 ? <div>{filterDateMeteorsInTwoMONTHs.map(meteor => {
          return (

            <>
              <div style={{ fontFamily: "Arial" }} className="meteorabout">
                <div className="meteorabout__content">
                  <img
                    className="meteorabout__image"
                    src={meteor.image}
                    alt={meteor.name}
                  />
                  <div className="meteorabout__details">
                    <h5 className="meteorabout__name">{meteor.name}</h5>
                    <h3>Start: {meteor.dateStart}</h3>
                    <h3>End: {meteor.dateEnd}</h3>
                    <p>
                      <strong>{meteor.frequency}</strong>
                    </p>
                    <p>{meteor.about}</p>
                  </div>
                </div>
              </div>

<br></br>
            </>
          )
        })
        }</div> : <p className="nometeor">No Meteor Showers <strong>start</strong>  in two months</p>}</div> </>


      <>

        {/* <PlanetsVisible/> */}
      </>




    </div>
  )

}

export default MeteorShowers