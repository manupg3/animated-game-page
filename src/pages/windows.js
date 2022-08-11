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
import logoWin10 from '../assets/img/logoWin10.png'
import logoWin11 from '../assets/img/logoWin11.png'


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

const WindowsPage = () => {

const subtitle = "Watch The Trailer In HD.";

    return (

        <>  <Page>
            <section class="hero-windows">
  <div class="overlay">
      <div class="content">
        <h1>All <br/>Performance.</h1>
        <p>Get all the graphic power with your PC GAMER!!</p>
      </div>
  </div>
</section>
            
                      <TituloPage titulo="WINDOWS.">
              </TituloPage>
              <div className='text-center div-subtitle-page'>
              <CardsPlatforms logo1={logoWin10} logo2={logoWin11} title1="Play It On Win 10" title2="Play It On Win 11" description1="Live the experience in windows 10 with graphics in HD 1080." description2="Get all the graphic power, experimental in 4K, the latest graphic generation." />
         <SubtitlePage  subtitulo={subtitle} />       
      </div>
              <div style={{paddingLeft:"4%", paddingRight:"4%", paddingBottom:"3%"}}>
              <YoutubeEmbed embedId="ruY1eT9bXiw" />
              </div>
              <div style={{display:"flex", justifyContent:"center"}}>
          
              </div>
            </Page>
        </>
    );
};

export default WindowsPage;