import Carousel from 'react-bootstrap/Carousel';
import imgSlider1 from '../assets/img/sliderHome.jpg'
import  '../assets/css/button-buy.css'
function SliderHome() {
  return (
    <Carousel fade >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imgSlider1}
          alt="First slide"
        />
        <Carousel.Caption>
        <div className='container-button'>
          <a className='' href="#"><span>¡Go to Shop!</span></a>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SliderHome;