import React from 'react'
import {Link} from 'react-router-dom'
import { Card } from 'antd';
import './Country.css'

function Country(props) {
    return (
        <Link to={`/country/${props.data.name}`}>
            <Card style={{ width: 240 , height: "320px", margin: "3% 0 3% 0"}} bodyStyle={{ padding: 0 }}>
                <div className="custom-image">
                    <img alt={props.data.name} width="100%" src={props.data.flag} />
                </div>
                <div className="custom-card">
                    <h3>{props.data.name}</h3>
                    <p>{props.data.name}</p>
                </div>
            </Card>
        </Link>
    )
}

export default Country