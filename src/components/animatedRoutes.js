import React from 'react'
import {Route, Routes, useLocation} from 'react-router-dom';
import Page404 from "../pages/404page";
import HomePage from "../pages/home";
import PlaystationPage from "../pages/playstation";
import XboxOnePage from "../pages/xboxone";
import WindowsPage from "../pages/windows";
import ContactPage from "../pages/contact";
import HistoryPage from "../pages/history";
import HowItWorks from "../pages/how-it-works";
import {AnimatePresence} from 'framer-motion'

function AnimatedRoutes() {
    const location = useLocation();
  return (
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
           <Route exact path='/' element={<HomePage />} />
        <Route exact path='/history' element={<HistoryPage />} /> 
        <Route exact path='/playstation' element={<PlaystationPage />} />
        <Route exact path='/xbox-one' element={<XboxOnePage />} />
        <Route exact path='/windows' element={<WindowsPage />} />
        <Route exact path='/how-it-works' element={<HowItWorks />} />
        <Route element={<Page404 />} />
    </Routes>
      </AnimatePresence>
  )
}

export default AnimatedRoutes