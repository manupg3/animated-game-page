import React from 'react';
import Page from '../components/pageScrolling';
import TituloPage from '../components/titlePages';
import Tabs from '../components/tabs';
import SubtitlePage from '../components/subtitlePage';
import {motion} from 'framer-motion';
import { BarChart } from '../components/charts';
import SliderThanosEffect from '../components/sliderThanosEffect'
import CardsPlatforms from '../components/cardsPagesPlatforms';
import '../assets/css/styleYoutubeIframe.css'
import YoutubeEmbed from '../components/youtubeEmbed';
import CardsHoverComplete from '../components/cardsHoverComplete';
import '../assets/css/sliderEfect.scss'
import ps5Logo from '../assets/img/ps5logo2.png'
import ps4Logo from '../assets/img/ps4logo.png'

const content = [
    {
		title: 'Vulputate Mollis Ultricies',
		description:
			'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.',
		button: 'Read More',
		image: 'https://i.imgur.com/ZXBtVw7.jpg',
		user: 'Daniel',
		userProfile: 'https://s7.postimg.cc/abavelo3v/1_3x.png',
	},
	{
		title: 'Tortor Dapibus',
		description:
			'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
		button: 'Discover',
		image: 'https://i.imgur.com/DCdBXcq.jpg',
		user: 'Samantha',
		userProfile: 'https://s7.postimg.cc/ujy8zz7vv/5_3x.png',
	}
]

const PlaystationPage = () => {

const subtitle = "Trailer In HD.";

              
    return (

      <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
      transition={{ duration: 1.5 }}

     >
        <Page>
             <section class="hero">
  <div class="overlay">
      <div class="content">
        <h1>Ultimate <br/>Graphics.</h1>
        <p>Live the whole experience in Playsation 4 or 5!!</p>
      </div>
  </div>
</section> 
            
                       <TituloPage titulo="PLAYSTATION.">
             </TituloPage> 
               <div className='text-center div-subtitle-page'>
              <CardsPlatforms logo1={ps4Logo} logo2={ps5Logo} title1="Adapted To PS4" title2="Created For PS5" description1="Try the experience with the best graphic quality adapted to PS4." description2="Get the next-gen graphics experience only on PS5."/>
         <SubtitlePage  subtitulo={subtitle} />       
      </div> 
               <div style={{paddingLeft:"4%", paddingRight:"4%", paddingBottom:"3%"}}>
              <YoutubeEmbed embedId="ruY1eT9bXiw" />
              </div> *
          
            </Page>
        </motion.div>
    );
};

export default PlaystationPage;