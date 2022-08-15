import React, { useEffect } from 'react';
import '../assets/css/stylescontent.css';
import { motion } from 'framer-motion';


const subtitlePage = ({ subtitulo }) => {


    return (

        <div className="">
            <motion.p className="subtitle-page"

            >{subtitulo}</motion.p>
        </div>

    );
};

export default subtitlePage;