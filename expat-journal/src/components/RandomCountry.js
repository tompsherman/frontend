import React, {useState, useEffect} from "react"
import axios from "axios"

function RandomCountry() {
    const [countryArray, setCountryArray] = useState([])
    const [country, setCountry] = useState({name: "USA", capital: "Washington D.C.", subregion: "North America", population: "323947000"})

    const api_url = "https://restcountries.eu/rest/v2/all"

    useEffect(()=>{
        axios
            .get(api_url)
            .then((response)=> {
                console.log(response.data)
                setCountryArray (response.data)
                })
            .catch(err=> console.log("ERROR IN RANDOM COUNTRY"))
    }, [])

    const randomizedCountry = () => {
        let random = Math.floor(Math.random()* 248)
        let result= countryArray[random]
        setCountry(result)
        return (result)
    }
  
    

    return (
        <>
        <button onClick={randomizedCountry}>randomize country</button>
        <p>
        Country: {country.name} •
 
        Capital: {country.capital} •

        Region: {country.subregion} •

        Pop:{country.population}</p>
        </>
    )
}

export default RandomCountry