import React,{useEffect} from 'react'
import Items from './Items'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import './Explore.css'
import img1 from './imgs/img1.jpg'
import img2 from './imgs/img2.jpg'
import img3 from './imgs/img3.jpg'
import img4 from './imgs/img4.jpg'
import img5 from './imgs/img5.jpg'
import img6 from './imgs/img6.jpg'

function Explore() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const ScrollToTop = () => {
    window.scrollTo(0, 0)
  }
  return (
    <div className='explore'>

        <Items src={img1} title='Best house in your town.' desc='Lorem ipsum, dolor sit amet consectetur .' price='200$ per night'/>
        <hr />


        <Items src={img2} title='Best house in your town.' desc='Lorem ipsum, dolor sit amet consectetur .' price='100$ per night'/>
        <hr />


        <Items src={img3} title='Best house in your town.' desc='Lorem ipsum, dolor sit amet consectetur .' price='70$ per night'/>
        <hr />
        
    
        <Items src={img4} title='Best house in your town.' desc='Lorem ipsum, dolor sit amet consectetur .' price='140$ per night'/>
        <hr />


        <Items src={img5} title='Best house in your town.' desc='Lorem ipsum, dolor sit amet consectetur .' price='210$ per night'/>
        <hr />


        <Items src={img6} title='Best house in your town.' desc='Lorem ipsum, dolor sit amet consectetur .' price='270$ per night'/>
        <hr />
    <div className="arrow" onClick={ScrollToTop}>
    <ArrowUpwardIcon className='explore__arrow' />
    </div>
    </div>  
  )
}

export default Explore
