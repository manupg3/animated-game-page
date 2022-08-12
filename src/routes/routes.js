import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Page404 from "../pages/404page";
import HomePage from "../pages/home";
import PlaystationPage from "../pages/playstation";
import XboxOnePage from "../pages/xboxone";
import WindowsPage from "../pages/windows";
import ContactPage from "../pages/contact";
import AboutPage from "../pages/about";
import HowItWorks from "../pages/how-it-works";





const RoutesApp = () => (
    <Routes>

        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/about' element={<AboutPage />} /> 
        <Route exact path='/playstation' element={<PlaystationPage />} />
        <Route exact path='/xbox-one' element={<XboxOnePage />} />
        <Route exact path='/windows' element={<WindowsPage />} />
        <Route exact path='/how-it-works' element={<HowItWorks />} />

        <Route element={<Page404 />} />
    </Routes>
);

export default RoutesApp;