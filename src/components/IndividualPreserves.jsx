
function IndividualPreserves({preserve}){

return (
<div className="darkskypreserves">
<div>{preserve.name}</div>
<img  style={{width:"250px", height:"180px"}} src={preserve.image}></img>
</div>
)



}

export default IndividualPreserves