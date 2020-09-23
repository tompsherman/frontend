import React, {useState, useEffect} from "react"
import axios from "axios"
import styled from "styled-components"

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
        <StyledDiv>
            <br />
            <br />
            <p>
                <b>Country:</b> <span><i>{country.name}</i></span> •
                <b> Capital:</b> <span><i>{country.capital}</i></span> •
                <b> Region:</b> <span><i>{country.subregion}</i></span> •
                <b> Pop:</b> <span><i>{country.population}</i></span> 
            </p>
            <br />
            <button onClick={randomizedCountry}>Get Random Country</button>
        </StyledDiv>
    )
}

const StyledDiv = styled.div `
  * { 
    text-align: center;
    border-radius: 5px;
    color: black;
    background-color: #ED6A5A;
    margin: 0 auto;
    width: 75%;
    font-family: 'Nunito', sans-serif;
    height: 300%;
  }

p {
    font-family: 'Nunito', sans-serif;
    text-align: center;
    height: 10px;
    padding: 25px;
    border: 1px solid #5CA4A9
  }

  span {
    color: #5CA4A9;
  }

button {
   border-radius: 5px;
   color: #F4F1BB;
   background-color: #5CA4A9;
   text-align: center;
   font-family: 'Nunito', sans-serif;
   display: block;
   margin: 0 auto;
   padding: 10px 20px;
   width: 300px;
   &:hover{
    background-color: #F4F1BB;
    color: #5CA4A9;
    cursor: pointer;
   }
 }

`

export default RandomCountry