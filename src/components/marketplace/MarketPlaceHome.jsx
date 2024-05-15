import { Link } from "react-router-dom"
function MarketPlaceHome({loginUsername}){

    return(
        <>
        <h1>Astro Market Place</h1>
        <h3 style={{color:"gray"}}>Welcome {loginUsername}!</h3>
        <h4>Sell Your Astronomy Gear, Books, and More Here!</h4>
<Link to="/marketplace/newitem"><button style={{width:"250px", height:"250px"}}>New Item</button></Link>      <Link to="/marketplace/index"><button  style={{width:"250px", height:"250px"}}>View Items</button></Link>

<br></br>
<br></br>
        </>
    )


}


export default MarketPlaceHome