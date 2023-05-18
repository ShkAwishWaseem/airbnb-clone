import React, {useState } from 'react'
import './Input.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Input() {

    const [place,setPlace] = useState('')
    const [country,setCountry] = useState('')
    const [members,setMembers] = useState('')
    // const [error,setError] = useState(false) 
    const navigate = useNavigate()

          

    const CollectData = () => {
        if(!place || !members || !country){
            alert('Please fill your fields...>>>')
            navigate('/')
        }
        if(place && members && country){
          let userData = JSON.stringify({country,members,place})
          localStorage.setItem('data', userData)
          if(!userData){
            navigate('/')
          }
        }
    }

  return (
    <div className='input'>
            
            <input type="text"  placeholder='Enter Country' value={country} onChange={(e)=> setCountry(e.target.value)}/>
            <input type="text"  placeholder='Enter City' value={place} onChange={(e)=> setPlace(e.target.value)}/>
            <input type="number" className='input__members' placeholder='Choose your members count'value={members} onChange={(e) => setMembers(e.target.value)}/>
           <Link to='/explore' onClick={CollectData}><button>Search Airbnb</button></Link>
    </div>
  )
}

export default Input
