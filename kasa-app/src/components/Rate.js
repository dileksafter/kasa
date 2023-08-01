import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import '../styles/Rate.sass'

const Rate = ({ rating }) => {
    const maxStars = 5;
    const coloredStars = Number(rating)
    const emptyStars = maxStars - coloredStars
    
    return (
        <div className='rating'>
            {Array.from({ length: coloredStars }, (_, index) => (
                <FontAwesomeIcon icon ={faStar} key={index} className="redStar"/>
            ))}
            {Array.from({ length: emptyStars }, (_, index) => (
                <FontAwesomeIcon icon ={faStar} key={coloredStars+index} className="greyStar"/>
            ))}
        </div>
    );
};

export default Rate;
