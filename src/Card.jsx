import React from 'react'
import './Card.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

function Card({src,place,desc,date,price,night}) {
  return (
    <div className='card'>
        <img src={src} alt="img" />
        <div className="card__info">
        <h2>{place}</h2>
        <h3>{desc}</h3>
        <h5>{date}</h5>
        <StarIcon className='card__star'/>
        <StarIcon className='card__star'/>
        <StarIcon className='card__star'/>
        <StarBorderIcon/>
        <StarBorderIcon/>
        <div className="fav">
        <h4><span className='night'>{price}</span> {night}</h4>
        <FavoriteIcon  className='color' />
        </div>
        </div>
    </div>
  )
}

export default Card
