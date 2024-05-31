import { useState, useEffect } from 'react'
function Earthquake() {

  const [quake, setQuake] = useState([])
  const [count, setCount] = useState(10)
  const [errorMsg, setErrorMsg] = useState("")
  const [loading, setLoading] = useState(true)



  useEffect(() => {
    try {
      async function getEarthquakes() {
        const response = await fetch(`https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&eventtype=earthquake&orderby=time&limit=${count}`);
        const quakes = await response.json();
        setQuake(quakes.features)
        setLoading(false)

      }
      getEarthquakes()

    }
    catch (error) {
      setErrorMsg(error.message); setLoading(false)
    }


  }, [count])

  function increase() {
    setCount(count + 1)
  }
  function decrease() {
    if (count < 4) {
      setCount(count)
    }
    else { setCount(count - 1) }
  }
  function renderContents() {
    if (errorMsg) {
      return (<div>{errorMsg}</div>)
    }
    else if (loading) {
      return ( <div>
        <span class="span"></span>
        <span class="span"></span>
        <span class="span"></span>
        <span class="span"></span>
        <span class="span"></span></div>)
    }

    else {
      return (
        <div >

          <table className='userPostTable' >
            <thead >
              <tr>
                <th className="dateEarthQuake">Date</th>

                <th className="magnitudeEarthQuake"><span class="span"> </span>   
                </th>

                <th><><button className='buttonEarthQuake' onClick={increase}>➕</button> <span > Location </span><button  className='buttonEarthQuake' onClick={decrease}>➖</button> </>
                </th>
              </tr>
            </thead>





            <>
              {quake.map(earthshaking => {

                let time = (new Date(Number(earthshaking.properties.time)).getMonth() + 1) + "-" + (new Date(Number(earthshaking.properties.time)).getDate())
                console.log(time)
                return (

                  <tr>                    <td className="dateEarthQuake">{`${time}`}</td>

                    <td className="magnitudeEarthQuake">{earthshaking.properties.mag.toFixed(2)}</td>
                    <td >{earthshaking.properties.place}</td>
                  </tr>
                )
              })}
            </>


          </table>

<br></br>

        </div>
      )
    }
  }

  return (
    <>{renderContents()}</>

  )



}
export default Earthquake