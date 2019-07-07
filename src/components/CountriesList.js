import React, {useState, useEffect} from 'react'
import Country from './Country'
import axios from 'axios'

const CountriesList = () => {

    useEffect(() => {
        getCountries()
    }, [])

    const [countries, setCountries] = useState([])

    const getCountries = async () => {
            const response = await axios.get(`https://restcountries.eu/rest/v2/all`)
            setCountries(response.data)
    }

    return (
        <div>
            <h1>All the countries on the world is here</h1>
            { countries.map(country => (
                <Country key={country.name} data={country} />
            )) }
        </div>
    )
}

export default CountriesList