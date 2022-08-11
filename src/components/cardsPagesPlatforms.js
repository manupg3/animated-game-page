import React from 'react'
import '../assets/css/stylesCardsPlatforms.css'
import ps5Logo from '../assets/img/ps5logo2.png'
import ps4Logo from '../assets/img/ps4logo.png'
import '../assets/css/stylescontent.css'


export default function CardsPlatforms({title1,title2,description1,description2,logo1,logo2}) {
  return (
    <div>
  <div className="container-cards-platforms">
    <div className = "card-platforms">
      <div className = "image-card-platforms">
        <img href = "#"  src ={logo1} />
      </div>
      <div className = "content-card-platforms">
        <h3>{title1}</h3>
        <p style={{fontWeight:"600"}}>{description1}</p>
        <div className='container-button-body'>
                  <a className='' href="#"><span>I want it now!</span></a>
                </div> 
      </div>
    </div>    
    <div className = "card-platforms">
      <div className = "image-card-platforms">
        <img href = "#"  src ={logo2} />
      </div>
      <div className = "content-card-platforms">
        <h3>{title2}</h3>
        <p style={{fontWeight:"600"}}>{description2}</p>
        <div className='container-button-body'>
                  <a className='' href="#"><span>¡I want it now!</span></a>
                </div> 
      </div>
    </div>    

  </div>

    </div>
  )
}
