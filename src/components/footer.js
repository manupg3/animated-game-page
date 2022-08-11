import React from 'react'
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram,faFacebook } from '@fortawesome/free-brands-svg-icons'

const logo='https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Quantum_Break_%E2%80%93_Game_logo.svg/2560px-Quantum_Break_%E2%80%93_Game_logo.svg.png'

export default function footer

() {
  return (
    <div>
     <div className='pre-footer'>
     <img width="200px" src={logo} alt="ad" /> 
     </div>
     <div className='principal-footer'>
     <div className=''>
            <div className="">
          
  <div className="row principal">
    <div className="col-sm" >
       <ul className='ul-footer'>
          <li className='li-footer'>Xbox One</li>
          <li className='li-footer'>Playstation</li>
          <li className='li-footer'>Windows</li>
      </ul>   
    </div>
    <div className="col-sm">
    <ul className='ul-footer'>
          <li className='li-footer'>Contact</li>
          <li className='li-footer'>The Company</li>
          <li className='li-footer'>Values</li>
      </ul>  
    </div>
    <div className="col-sm">
    <div className='buttons-footer'>
    <div className='container-button-body'>
                  <a className='' href="#"><span>¡Talk With Us!</span></a>
                </div>
    </div>
   </div>
  </div>
  <div className="row footer-bottom">
  <div className="col-sm">
       <div className="copyrigth-footer" style={{marginLeft:"20px"}}>  
         <h5 className="copy-text">Copirigth@2022 - Manuel Peña Ramos</h5>  
      </div>   
  </div>
  <div className="col-sm">
    <div className="social-footer">
    <FontAwesomeIcon icon={faInstagram} />
    <FontAwesomeIcon icon={faFacebook} />
    </div>   
   </div>
 
  </div>

</div>
        </div>
     </div>
      

    </div>
  )
}
