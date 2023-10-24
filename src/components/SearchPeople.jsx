import { useState } from "react";
import data from "../../data.json"

export default function SearchPeople(){

    const [query, setQuery] = useState("");


  
    const handleQueryChange = (event) => {
      setQuery(event.target.value);
    };
  
    const filteredPeople = data.data.filter((person) => {
        return (
          person.full_Name.toLowerCase().includes(query.toLowerCase())
        );
      });



return (
    <div>
      <div>
        <strong>Search for a Star</strong>
      </div>
      <input type="text" value={query} onChange={handleQueryChange} />
      <ul>
        {filteredPeople.map((person) => (
          <li>
            <p>
              <strong>{person.full_Name}</strong>
              <div>{person.latitude}</div>
              <div>{person.longitude}</div>
              <div>{person.description}</div>
              <div>{person.emergency}</div>



            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
