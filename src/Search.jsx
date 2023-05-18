import React from 'react'
import SearchItem from './SearchItem'
import img1 from './imgs/img1.jpg'
import img2 from './imgs/img2.jpg'
import img3 from './imgs/img3.jpg'
import img4 from './imgs/img4.jpg'
import img5 from './imgs/img5.jpg'
import img6 from './imgs/img6.jpg'
import img7 from './imgs/img7.jpg'

function Search() {
  return (
    <div className='search'>
      <SearchItem img={img1} place='Islamabad , Pakistan' desc=' Lorem ipsum dolor sit amet.' members='Only 2' price='120	&#163;' rating='5.0'/>
      <SearchItem img={img2} place='Toronto , Canada' desc=' Lorem ipsum dolor sit amet.' members='Only 2' price='120	$' rating='2.1'/>
      <SearchItem img={img3} place='Bombay , India' desc=' Lorem ipsum dolor sit amet.' members='Only 2' price='120	&#163;' rating='3.0'/>
      <SearchItem img={img4} place='Osaka , Tokyo' desc=' Lorem ipsum dolor sit amet.' members='Only 2' price='120	&#163;' rating='3.2'/>
      <SearchItem img={img5} place='Melborune , Australia' desc=' Lorem ipsum dolor sit amet.' members='Only 2' price='120 $' rating='4.1'/>
      <SearchItem img={img6} place='Nyc , USA' desc=' Lorem ipsum dolor sit amet.' members='Only 2' price='220 $'rating='1.0'/>
      <SearchItem img={img7} place='Tokyo , Japan' desc=' Lorem ipsum dolor sit amet.' members='Only 2' price='120	&#163;' rating='2.0'/>
    </div>
  )
}

export default Search
