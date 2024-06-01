import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import ContentGrids from './components/ContentGrids';
import ImageWithTextSection from './components/ImageWithTextSection';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import ScrollToTopButton from './components/ScrollToTopButton';
import Footer from './components/Footer';
//import { InnerBanner, AboutBlock, TeamBlock, ProgressBlock, FeaturesBlock } from './components/ProgressBlock'; // Import components
import './App.css';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={
                    <>
                        <HeroSlider />
                        <ContentGrids />
                        <ImageWithTextSection />
                        <Stats />
                        {/* <Projects /> */}
                        <Testimonials />
                        <ScrollToTopButton />
                        <Footer />
                    </>
                } />
                {/* <Route path="/about" element={
                    <>
                     <InnerBanner />
                        <AboutBlock />
                        <TeamBlock />
                        <ScrollToTopButton />
                        <Footer />
                    </>
                } /> */}
                {/* <Route path="/progress" element={<ProgressBlock />} />
                <Route path="/features" element={<FeaturesBlock />} /> */}
                {/* Add other routes here if needed */}
            </Routes>
        </Router>
    );
}

export default App;
