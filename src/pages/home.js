import React, { useEffect } from 'react';
import Page from '../components/pageScrolling';
import '../assets/css/stylescontent.css';
import '../App.css';
import '../assets/css/styleYoutubeIframe.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SliderHome from '../components/sliderHome';
import { faMicrosoft, faPlaystation, faXbox } from '@fortawesome/free-brands-svg-icons';
import YoutubeEmbed from '../components/youtubeEmbed';
import MyGallery from '../components/ImageGallery';
import MyWrapper from '../components/MasonryGallery'
import CardsHoverComplete from '../components/cardsHoverComplete';

const now = 100;

const imagesGallerySliderHome = [
  {
    original: 'https://cdn.mos.cms.futurecdn.net/20a9480b6b93f89d2915d854d3a3e9e0.jpg',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://i.ytimg.com/vi/FxouQDOyz10/maxresdefault.jpg',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://cdn.cloudflare.steamstatic.com/steam/apps/474960/ss_a5501cff76671066df183949d96e4587a387fdf8.1920x1080.jpg?t=1580256966',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];


const toRigthVariants = {
  toRigth: { x: 0, transition: { duration: 2, type: "spring", ease: 'easeInOut', delay: 0.2 }, opacity: 1 },
  hidden: { x: -30, opacity: 0 }
};

const toLeftVariants = {
  toLeft: { x: 0, transition: { duration: 2, type: "spring", ease: 'easeInOut', delay: 0.2 }, opacity: 1 },
  hidden: { x: 30, opacity: 0 }
};
const opacitycard1Variants = {
  opacityC1: { transition: { duration: 5, type: "spring", ease: 'easeInOut', delay: 0.2 }, opacity: 1 },
  hidden: { opacity: 0 }
};

const opacitycard2Variants = {
  opacityC2: { transition: { duration: 5, type: "spring", ease: 'easeInOut', delay: 0.2 }, opacity: 1 },
  hidden: { opacity: 0 }
};

const opacitycard3Variants = {
  opacityC3: { transition: { duration: 5, type: "spring", ease: 'easeInOut', delay: 0.2 }, opacity: 1 },
  hidden: { opacity: 0 }
};
const opacityVariants = {
  visible: { transition: { duration: 5, type: "spring", ease: 'easeInOut', delay: 0.2 }, opacity: 1 },
  hidden: { opacity: 0 }
};

const opacityAndScaleVariants = {
  opacityAndScale: { opacity: 1, scale: 1, transition: { duration: 2, type: "spring", ease: 'easeInOut' } },
  hidden: { scale: 0.5, opacity: 0 }
}

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Profit', 'TI', 'Customers'],
  datasets: [
    {
      label: 'in porcentaje %',
      data: [70, 20, 10],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};




const History = () => {

  const toRigth = useAnimation();
  const Opacity = useAnimation();
  const toLeft = useAnimation();
  const opacityAndScale = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      toRigth.start("toRigth");
      Opacity.start("visible");
      toLeft.start("toLeft");
      opacityAndScale.start("opacityAndScale");
    }
  }, [toRigth, Opacity, toLeft, opacityAndScale, inView]);


  return (
    <div className='statistics'>
      <div className="content">
        <div className="row st-row">
          <div className="col-sm st-col" >
            <div className="st-col-first">
              <div className="wrapper-titles">
                <motion.h1
                  ref={ref}
                  animate={opacityAndScale}
                  initial="hidden"
                  variants={opacityAndScaleVariants}
                  className='st-title static-text'>A Unique</motion.h1>
                <motion.h1
                  ref={ref}
                  animate={opacityAndScale}
                  initial="hidden"
                  style={{ color: "orange", marginLeft: "13px" }}
                  variants={opacityAndScaleVariants}
                  className='st-title static-text' >History</motion.h1>
              </div>
              <motion.p
                ref={ref}
                animate={Opacity}
                initial="hidden"
                variants={opacityVariants}
                className='st-text'>We optimize all the processes of your business, leading to an intrinsic increase in all the value statistics of your business.</motion.p>
              <motion.div
                ref={ref}
                animate={Opacity}
                initial="hidden"
                variants={opacityVariants}
              >
                <div className='container-button-body'>
                  <a className='' href="#"><span>¡Go to Shop!</span></a>
                </div>
              </motion.div>
            </div>

          </div>
          <motion.div
            ref={ref}
            animate={toLeft}
            initial="hidden"
            variants={toLeftVariants}
            className="col-sm st-col">
            <YoutubeEmbed embedId="ruY1eT9bXiw" />
          </motion.div>

        </div>
      </div>
    </div>
  );
};

const Gameplay = () => {


  const toRigth = useAnimation();
  const Opacity = useAnimation();
  const toLeft = useAnimation();
  const opacityAndScale = useAnimation();
  const [ref, inView] = useInView();


  useEffect(() => {
    if (inView) {
      toRigth.start("toRigth");
      Opacity.start("visible");
      toLeft.start("toLeft");
      opacityAndScale.start("opacityAndScale");
    }
  }, [toRigth, Opacity, toLeft, opacityAndScale, inView]);



  return (
    <div className='statistics'>
      <div className="content">
        <div className="row row-other-way-to-play">
          <motion.div
            ref={ref}
            animate={toLeft}
            initial="hidden"
            variants={toLeftVariants}
            className="col-sm st-col">
            <YoutubeEmbed embedId="ruY1eT9bXiw" />
          </motion.div>
          <div className="col-sm st-col" >
            <div className="st-col-first" style={{ marginTop: "-20px" }}>
              <div className="wrapper-titles">
                <motion.h1
                  ref={ref}
                  animate={opacityAndScale}
                  initial="hidden"
                  variants={opacityAndScaleVariants}
                  className='st-title static-text'>Other Way To</motion.h1>
                <motion.h1
                  ref={ref}
                  animate={opacityAndScale}
                  initial="hidden"
                  style={{ color: "orange", marginLeft: "13px" }}
                  variants={opacityAndScaleVariants}
                  className='st-title static-text' >Play</motion.h1>
              </div>
              <motion.p
                ref={ref}
                animate={Opacity}
                initial="hidden"
                variants={opacityVariants}
                className='st-text'>We optimize all the processes of your business, leading to an intrinsic increase in all the value statistics of your business.</motion.p>
              <motion.div
                ref={ref}
                animate={Opacity}
                initial="hidden"
                variants={opacityVariants}
              >
                <div className='container-button-body'>
                  <a className='' href="#"><span>¡I wanna play now!</span></a>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
const CardsHome = () => {

  const toRigth = useAnimation();
  const Opacity = useAnimation();
  const toLeft = useAnimation();
  const opacityAndScale = useAnimation();
  const opacityC1 = useAnimation();
  const opacityC2 = useAnimation();
  const opacityC3 = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      toRigth.start("toRigth");
      Opacity.start("visible");
      toLeft.start("toLeft");
      opacityAndScale.start("opacityAndScale");
      opacityC1.start("opacityC1");
      opacityC2.start("opacityC2");
      opacityC3.start("opacityC3");
    }
  }, [toRigth, Opacity, toLeft, opacityAndScale, opacityC1, opacityC2, opacityC3, inView]);


  return(
    <motion.div className='container-cards-complete'
    style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}
    ref={ref}
    animate={opacityC1}
    initial="hidden"
    variants={opacitycard1Variants}
  >
    <CardsHoverComplete title="Xbox One Series S/X" description="An unforgettable experience, live with XBOX ONE Series S/X" linkCard="/xbox-one" />
    <CardsHoverComplete title="Playstation 4/5" description="Next Generation Graphics, Only in PLAYSTATION" linkCard="/playstation" />
    <CardsHoverComplete title="Windows 10/11" description="Get all the performance with your latest generation GAMER PC" linkCard="/windows" />
  </motion.div>
  
    )

}


const GalleryMassonry = () => {

  
  const toRigth = useAnimation();
  const Opacity = useAnimation();
  const toLeft = useAnimation();
  const opacityAndScale = useAnimation();
  const opacityC1 = useAnimation();
  const opacityC2 = useAnimation();
  const opacityC3 = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView ) {
      toRigth.start("toRigth");
      Opacity.start("visible");
      toLeft.start("toLeft");
      opacityAndScale.start("opacityAndScale");
      opacityC1.start("opacityC1");
      opacityC2.start("opacityC2");
      opacityC3.start("opacityC3");
    }
  }, [toRigth, Opacity, toLeft, opacityAndScale, opacityC1, opacityC2, opacityC3, inView]);
  return(
    <motion.div
     ref={ref}
     animate={opacityAndScale}
     initial="hidden"
     variants={opacityAndScaleVariants}
  >
    <MyWrapper/>
  </motion.div>
  
    )

}





const HomePage = () => {

  const toRigth = useAnimation();
  const Opacity = useAnimation();
  const toLeft = useAnimation();
  const opacityAndScale = useAnimation();
  const opacityC1 = useAnimation();
  const opacityC2 = useAnimation();
  const opacityC3 = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView ) {
      toRigth.start("toRigth");
      Opacity.start("visible");
      toLeft.start("toLeft");
      opacityAndScale.start("opacityAndScale");
      opacityC1.start("opacityC1");
      opacityC2.start("opacityC2");
      opacityC3.start("opacityC3");
    }
  }, [toRigth, Opacity, toLeft, opacityAndScale, opacityC1, opacityC2, opacityC3, inView]);



  const icon = <FontAwesomeIcon icon={faXbox} />
  const iconD = <FontAwesomeIcon icon={faPlaystation} />
  const iconM = <FontAwesomeIcon icon={faMicrosoft} />

  return (

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <Page>
        <SliderHome />
        <CardsHome /> 
        <div className="div-cards">
        </div>
        <History />
        <div className='sliding-text-infinite'>
          <div class="marquee">
            <span>FUTURE - TIME - DESTINY - CHOOSE - LIVE &nbsp;&nbsp;&nbsp;</span>
          </div>
          <div class="marquee marquee2">
            <span>This is an infinitely sliding text example&nbsp;&nbsp;&nbsp;</span>
          </div>
        </div>
        <div className='text-center' style={{ marginBottom: "40px" }}>
          <motion.h1
      
          
            className='st-title st-title-graphics'>Latest Generation Graphics
          </motion.h1>
        </div>
        < div style={{ marginBottom: "10%" }}>
          <MyGallery images={imagesGallerySliderHome} />
        </div>

        <Gameplay />

      </Page>
      <div className='sliding-text-infinite' style={{ marginBottom: "-50px" }}>
        <div class="marquee">
          <span>BEST RATED GAME OF 2020 &nbsp;&nbsp;&nbsp;</span>
        </div>
        <div class="marquee marquee2">
          <span>This is an infinitely sliding text example&nbsp;&nbsp;&nbsp;</span>
        </div>
      </div>
      <div style={{ padding: "4vw" }}>
        <div className='text-center' style={{ marginBottom: "40px" }}>
          <motion.h1
            className='st-title st-title-graphics'>A Game Of The Year
          </motion.h1>
        </div>
        <GalleryMassonry />
       </div>
      <motion.div 
      style={{ background: "orange", paddingTop: "45px", 
      display: "flex", justifyContent: "space-evenly", height: "150px", marginRight: "3%",
      marginLeft: "3%", marginBottom: "3%", borderRadius: "6px", boxShadow: "0px 0px 10px 1px orange" }}
      ref={ref}
      animate={opacityAndScale}
      initial="hidden"
      variants={opacityAndScaleVariants}

       >
        <h1 className='st-tittle-discount' style={{ color: "white" }}>¡Get a Unique Discount!</h1>
        <div className='container-button-discount' style={{ float: "right" }}>
          <a className='' href="#"><span>¡Get Discount Now!</span></a>
        </div>
      </motion.div>
    </motion.div>

  );
};

export default HomePage;