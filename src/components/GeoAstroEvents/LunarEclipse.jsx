import solareclipse from "./solareclipse.json"
function SolarEclipse() {


  return (
    <div >

      <table className='userPostTable' >
        <thead >
          <tr>
            <th className="dateEarthQuake">Date</th>

            <th className="magnitudeEarthQuake">Type
            </th>

            <th>Major Effected Region
            </th>
          </tr>
        </thead>





        <>
          {solareclipse.solar_eclipses.map(eclipse => {


            return (

              <tr>                    <td className="dateEarthQuake">{`${eclipse.date}`}</td>

                <td className="magnitudeEarthQuake">{eclipse.type}</td>
                <td >{eclipse.regions_affected[0]}</td>
              </tr>
            )
          })}
        </>


      </table>

      <br></br>

    </div>
  )
}


export default SolarEclipse