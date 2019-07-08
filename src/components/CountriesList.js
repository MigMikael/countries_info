import React, {useState, useEffect} from 'react'
import Country from './Country'
import axios from 'axios'
import { Row, Col } from 'antd';
import Spinner from './Spinner'

const CountriesList = () => {

    useEffect(() => { getCountries() }, [])

    const [countries, setCountries] = useState([])

    const getCountries = async () => {
        const response = await axios.get(`https://restcountries.eu/rest/v2/all`)
        setCountries(response.data)
    }

    return (
        <div style={{width: "100%", textAlign: "center"}}>
            <h1>All the countries on the world is here</h1>
            { 
                countries.map(country => (
                    <Col span={6}>
                        <Country key={country.name} data={country} />
                    </Col>
                )) 
            }
        </div>
    )
}

export default CountriesList