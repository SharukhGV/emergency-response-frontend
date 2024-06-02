import volcanic from "./volcanic.json"
function Volcanoes() {


      return (
        <div >

          <table className='userPostTable' >
            <thead >
              <tr>
                <th className="dateEarthQuake">Date</th>

                <th className="magnitudeEarthQuake">volcano
                </th>

                <th>Region
                </th>
              </tr>
            </thead>





            <>
              {volcanic.volcanic_eruptions.map(eclipse => {

             
                return (

                  <tr>                    <td className="dateEarthQuake">{`${eclipse.date}`}</td>

                    <td className="magnitudeEarthQuake">{eclipse.volcano}</td>
                    <td >{eclipse.location}</td>
                  </tr>
                )
              })}
            </>


          </table>

<br></br>

        </div>
      )
    }
  

export default Volcanoes