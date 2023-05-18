import React from 'react'
import Banner from './Banner'
import Input from './Input'
import Footer from './Footer'
import  './Home.css'
import Card from './Card'
import img1 from './imgs/img1.jpg'
import img2 from './imgs/img2.jpg'
import img3 from './imgs/img3.jpg'
import img4 from './imgs/img4.jpg'
import img5 from './imgs/img5.jpg'
import img6 from './imgs/img6.jpg'



function Home() {
  return (
    <div className='home'>
     <Banner/>
     <div className="home__section">
          <Card src={img1} title="Online Experiences" desc="3,768 kilometers away" date='7-10 March' price='$120 '  place="Bejing , China" night='night'/>

          <Card src={img2} title="Enjoy Time with family" desc="904 Kilometers away" date='7-10 June' price='$400 ' place="Toronto , Canada"  night='night'/>

          <Card src={img3} title="Best Cabins" desc="1,244 kilometers away" date='7-10 Febuary' price='$115 'place="Berlin , Germany"  night='night'/>

          <Card src={img6} title="Best Cabins" desc="1,244 kilometers away" date='7-10 Febuary' price='$115 'place="Berlin , Germany"  night='night'/>
          
        
        </div>

        {/* Section 2 */}
        <div className="home__section">
          <Card src={img4} title="Best places near you" desc="3,808 kilometers away" date='7-10 April' price='$320 ' place="London , Uk"  night='night'/>

          <Card src={img5} title="High Quality rental houses" desc="21,000 kilometers away" date='7-10 March' price='$201 ' place="Nyc , America"  night='night'/>

          <Card src={img1} title="Best Cabins" desc="1,244 kilometers away" date='7-10 Febuary' price='$115 'place="Berlin , Germany"  night='night'/>

          <Card src={img6} title="Luxury Houses" desc="800 kilometers away" date='7-10 December' price='$100'  place="Mumbai , India" night='night'/>
        </div>


    <Input/>
    <Footer/>
    </div>
  )
}

export default Home
