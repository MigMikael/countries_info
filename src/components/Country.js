import React from 'react'
import {Link} from 'react-router-dom'

function Country(props) {
    console.log(props)
    return (
        <Link to={`/country/${props.data.cioc}`}>
            <div style={{border: "solid 1px", width: "300px"}}>
                <h2>{props.data.name}</h2>
                <img src={props.data.flag} style={{width: "100px"}}/>
            </div>
        </Link>
    )
}

export default Country