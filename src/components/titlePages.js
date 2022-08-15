import React, {useEffect} from 'react';
import '../assets/css/stylescontent.css';
import {motion} from 'framer-motion';


const TitlePage = ({titulo}) => {

    
    return (

        <div className="div-titles">
           <motion.h1 className="title-pages"
            style={{fontWeight:"900", marginTop:"-40px", zIndex:"100"}}
            initial={
            {  opacity: 0,
            scale: 0.8}
            }
             animate={{
                 opacity: 1,
                 scale:1,
                  
             }}
             transition={{ duration: 3,type: "spring" ,ease:'easeInOut', delay: 1.8}}
               
           >{titulo}</motion.h1>
        </div>

    );
};

export default TitlePage;