import React from "react";
import StarIcon from '@mui/icons-material/Star';
import './SearchItem.css'
import StarBorderIcon from '@mui/icons-material/StarBorder';

function SearchItem({img,title,place,members,desc,price, rating}){
    return(
        <div className="search__item">
            <img src={img} alt="img" />
            <div className="search__info">
            <h4>{place}</h4>
            <h2>{title}</h2>
            <h3>{desc}</h3>
            <h4>{price}</h4>
            <h4 className="ratings">Ratings {rating}</h4>
            <h5>Note : {members} are members allowed</h5>
            <StarIcon className="stars"/>
            <StarIcon className="stars"/>
            <StarIcon className="stars"/>
            <StarIcon className="stars"/>
            <StarBorderIcon/>
            <button>Book now</button>
        </div>
        </div>
    )
}

export default SearchItem