import React, { useRef } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider";
import ContentGrids from "./components/ContentGrids";
import ImageWithTextSection from "./components/ImageWithTextSection";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Footer from "./components/Footer";
//import { InnerBanner, AboutBlock, TeamBlock, ProgressBlock, FeaturesBlock } from './components/ProgressBlock'; // Import components
import "./App.css";

function App() {
    const featuresRef = useRef(null);
    const servicesRef = useRef(null);
    const contactRef = useRef(null);
  return (
    <>
    <Router>
    <Header featuresRef={featuresRef} servicesRef={servicesRef} contactRef={contactRef} />
      <HeroSlider />
      <div ref={featuresRef}>
          <ContentGrids />
        </div>
        <div ref={servicesRef}>
        <ImageWithTextSection />
        </div>
      <Stats />
      <Testimonials />
      <ScrollToTopButton />
      <div ref={contactRef}>
      <Footer />
        </div>
      
      </Router>
    </>
  );
}

export default App;
