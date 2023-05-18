import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
import logo from './imgs/logo.png'
import SearchIcon from '@mui/icons-material/Search';
// import LanguageIcon from '@mui/icons-material/Language';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// For Dark Mode
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Avatar } from '@mui/material';


function Header() {
  const dark = () => {
    document.body.style.backgroundColor = '#000'
    document.body.style.color = '#fff'
    document.getElementById('head').style.backgroundColor = '#000'
    document.getElementById('head').style.color = '#fff'
    document.getElementById('text').style.color = '#fff'
  }
  const light = () => {
    document.body.style.backgroundColor = '#fff'
    document.body.style.color = '#000'
    document.getElementById('head').style.backgroundColor = '#fff'
    document.getElementById('head').style.color = '#000'
    document.getElementById('text').style.color = '#000'

  }
  return (
    <div className='header' id='head'>
       {/* <img src={logo} alt="bg"><Link to='/'></Link></img> */}
       <Link to='/'><img src={logo} alt="bg"/></Link>

        <div className="center">
            <input type="text" placeholder='Search Places' id='text' />
            <Link to='/search'><SearchIcon className='SearchIcon'/></Link>
        </div>

        <div className="right">
          <div className="dark " onClick={() => dark()}>
        <DarkModeIcon className='icons icon icon-dark' />
          </div>
          <div className="light" onClick={()=> light()}>
        <LightModeIcon className='icons icon'/>
          </div>
        <Avatar className='icons avatar' src='https://randomuser.me/api/portraits/men/57.jpg'/>
        </div>
    </div>
  )
}

export default Header
