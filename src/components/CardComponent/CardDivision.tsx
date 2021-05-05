import React from 'react'
import './Card.scss'
import businessPerson from "../../asset/img/bussiness-person.jpg"


const CardDivision = () => {
    const src = businessPerson

    return (
        <div className="division-card">
            <div className="division-image">
                <img src={src}/>
                <div className="division-name">
                    <p>ROCK CLIMBING</p>
                </div>
            </div>
        </div>
    )
}

export default CardDivision