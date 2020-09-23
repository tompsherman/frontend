import React, {useState, useEffect} from "react"

function CountryFacts (){
    const [country, setCountry] = useState([])

    const URL_GET = `https://restcountries.eu/rest/v2/name/${country}?fullText=true`

    const inputChange = () => {

    }

    const findCountry = () => {

    }

    return(
        <form onSubmit={findCountry}>
            <input name="country" type="text" value={formValue.country} onChange={inputChange} placeholder="enter a country to visit"></input>
        </form>
    )
}

export default CountryFacts