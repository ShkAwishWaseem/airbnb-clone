import React from 'react'
import './Items.css'

function Items({src,title,desc,price}) {
    let data = JSON.parse(localStorage.getItem('data'))
    const Done = () => {
        window.confirm("Your Hotel is Booked")
    }
  return (
    <div className='items'>
        <img src={src} alt="img" />
        <div className="items__info">
            <h2>{title}</h2>
            <h3>{desc}</h3>
            <h2> {data.place}, {data.country}</h2>
            <h4>{price} for {data.members} members</h4>
            <button onClick={Done}>Book now</button>
        </div>
    </div>
  )
}

export default Items
