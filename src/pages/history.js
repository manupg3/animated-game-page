import React from 'react';
import Page from '../components/pageScrolling';
import '../assets/css/styleHistory.css'
import {motion} from 'framer-motion'

const HistoryPage = () => {

    return (
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        transition={{ duration: 1.5 }}

        >  <Page>
              <div className="about-section">
        <div className="inner-container">
            <h1>History</h1>
            <p className="text">
            Quantum Break is the new thing from Remedy Entertainment, creators of Max Payne and Alan Wake, for the Xbox One console. It will be an action and adventure game that will combine the action of the video game with what happens in the live action series of the same name , in a transmedia project. Slow motion action, mysteries and puzzles in a title that aspires to revolutionize adventure games.
            </p>
         
        </div>
    </div>
           

            </Page>
        </motion.div>
    );
};

export default HistoryPage;