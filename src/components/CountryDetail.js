import React, {useState, useEffect} from 'react'
import axios from 'axios'

function CountryDetail({ match }) {

    useEffect(() => {
        getCountry()
    }, [])

    const [country, setCountry] = useState([])
    let isLoading = true

    const getCountry = async () => {
            const response = await axios.get(`https://restcountries.eu/rest/v2/name/${match.params.name}`)
            console.log(response.data[0])
            setCountry(response.data[0])
            isLoading = false
    }

    return (
        <div>
            <h1>{country.name}</h1>
            {isLoading ? <h1></h1> : <h1>{country.altSpellings[1]}</h1>}
            <img src={country.flag} style={{width: "500px"}} />
            <br/><br/>
            <h2>
                Capital : {country.capital}                
            </h2>
            <h2>
                Population : {parseInt(country.population).toLocaleString()}                
            </h2>
            <h2>
                Area: {parseInt(country.area).toLocaleString()}
            </h2>
        </div>
    )
}

export default CountryDetail