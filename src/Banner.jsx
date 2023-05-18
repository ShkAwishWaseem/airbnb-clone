import React from 'react'
import './Banner.css'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

function Banner() {
  return (
    <div className='banner'>
    <div className="banner__info">
      <h2>Find the magician hotels near by you</h2>
      <h3>We provide our customer the best service we can provide. You can easily enjoy with your family and friends you can also work in our cabinets.</h3>
      <Link to='/search'><Button>Search Airbnb</Button></Link>
    </div>

    </div>
  )
}

export default Banner
