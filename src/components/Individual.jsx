


function Individual({individual}){

    return(
        <div>
        <h3>{individual.emergency}</h3>
<p>{individual.first_Name} {individual.last_Name}</p>
<p>{individual.latitude}</p>
<p>{individual.longitude}</p>
<p>{individual.description}</p>
</div>
    )


}

export default Individual