import React from 'react'
import './Card.scss'
import businessPerson from "../../asset/img/bussiness-person.jpg"


const CardArticle = () => {
    const src = businessPerson

    return (
        <div className="article-card">
            <div className="article-image">
                <img src={src}/>
                <div className="article-title">
                    <p>Siapa Stop Global Warming</p>
                </div>
                <a className="article-button">
                    Lebih Lanjut
                </a>
            </div>
        </div>
    )
}

export default CardArticle