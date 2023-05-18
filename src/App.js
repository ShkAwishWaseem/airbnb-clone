import React from 'react'
import Header from './Header'
import Home from './Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Explore from './Explore'
import Search from './Search'



function App() {
  return (
    <div className='app'>
      <Router>
      <Header/>
      <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/explore' element={<Explore/>}/>
          <Route exact path='/search' element={<Search/>}/>
      </Routes>
      </Router>

      {/* Enable Dark Mode */}

      
    </div>
  )
}

export default App
