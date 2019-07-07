import React, {useState, useEffect} from 'react'
import axios from 'axios'

function CountryDetail({ match }) {

    useEffect(() => {
        getCountry()
    }, [])

    const [country, setCountry] = useState([])

    const getCountry = async () => {
            const response = await axios.get(`https://restcountries.eu/rest/v2/alpha/${match.params.id}`)
            console.log(response.data)
            setCountry(response.data)
    }

    return (
        <div>
            <h1>{country.name}</h1>
            <img src={country.flag} style={{width: "500px"}} />
            <h2>
                Capital : {country.capital}
            </h2>
            
        </div>
    )
}

export default CountryDetail