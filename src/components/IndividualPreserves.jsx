
function IndividualPreserves({preserve}){

return (
<div>
<div>{preserve.name}</div>
<img  style={{width:"300px", height:"200px"}} src={preserve.image}></img>
</div>
)



}

export default IndividualPreserves