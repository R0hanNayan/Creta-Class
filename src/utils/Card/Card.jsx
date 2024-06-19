import React from 'react';
import './card.css';

const Card = ({title, points, img, bgColor}) => {
  return (
    <div className='card-container' style={{backgroundColor:bgColor}}>
        <div className='card-title'>
            <img src={img} alt="title" />
            <h1 className='card-header'>{title}</h1>
        </div>
        <ul className='card-points'>
            {
                points.map((point) => {
                    return(
                        <li>{point}</li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default Card