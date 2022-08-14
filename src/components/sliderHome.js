import React, {useEffect} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import imgSlider1 from '../assets/img/sliderHome.jpg'
import  '../assets/css/button-buy.css'
import { useAnimation, motion } from "framer-motion";


const toRigthVariants = {
  toRigth: { x: 0, transition: { duration: 2, type: 
  "spring", ease: 'easeInOut', delay: 1.7 }, opacity: 1 },
  hidden: {  opacity: 0 }
};


function SliderHome() {

  const toRigth = useAnimation();

  useEffect(() => {

      toRigth.start("toRigth");

  }, [toRigth]);



  return (
    <Carousel fade style={{marginTop:"72px"}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imgSlider1}
          alt="First slide"
        />
        <Carousel.Caption>
        <motion.div
   
          >
        <div className='container-button'>
          <a className='' href="#"><span>¡Go to Shop!</span></a>
          </div>
          </motion.div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SliderHome;