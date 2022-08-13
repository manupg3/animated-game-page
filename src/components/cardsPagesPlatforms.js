import React from 'react'
import '../assets/css/stylesCardsPlatforms.css'
import ps5Logo from '../assets/img/ps5logo2.png'
import ps4Logo from '../assets/img/ps4logo.png'


export default function CardsPlatforms({title1,title2,description1,description2,logo1,logo2}) {
  return (
    <div>
     	<section className='section-cards-platforms'>
		<div className="container-card-platforms">
			<div className="card-platforms">
				<div className="content-platforms">
					<div className="imgBx">
						<img src={logo1} />
					</div>
					<div className="contentBx">
						<h3>{title1}<br /><span >{description1}</span></h3>
					</div>
				</div>
				<ul className="sci">
					<li>
          <div className='container-button-cards-platforms'>
                  <a className='' href="#"><span>¡I wanna play now!</span></a>
                </div>
					</li>
				</ul>
			</div>
			<div className="card-platforms">
				<div className="content-platforms">
					<div className="imgBx">
						<img src={logo2} />
					</div>
					<div className="contentBx">
						<h3>{title2} <br/><span>{description2} </span></h3>
					</div>
				</div>
				<ul className="sci">
					<li>
          <div className='container-button-cards-platforms'>
                  <a className='' href="#"><span>¡I wanna play now!</span></a>
                </div>					</li>
			
				</ul>
			</div>
	
		</div>
	</section>

    </div>
  )
}
