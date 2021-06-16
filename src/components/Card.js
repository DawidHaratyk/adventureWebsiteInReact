import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

function Card({ src, data, image, text }) {
    return (
        <li className="epic-card">
            <Link to={src}>
                <div className="image-container" data-text={data}>
                    <img src={image} alt="car" className="epic-card-img"/>
                </div>
                <div className="epic-card-headline-container">
                    <h4 className="epic-card-headline">{text}</h4>
                </div>
            </Link>
        </li>
    )
}

export default Card;