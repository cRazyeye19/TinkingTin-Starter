import React, { useState, useEffect } from 'react'
import Navigation from '../../components/LandingPage/Navigation'
import About from '../../components/LandingPage/About'
import Footer from '../../components/LandingPage/Footer'
import Features from '../../components/LandingPage/Features'
import Header from '../../components/LandingPage/Header'
import Team from '../../components/LandingPage/Team'
import JsonData from '../../data/landing.json'
import SmoothScroll from 'smooth-scroll'
import './Landing.css'

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const Landing = () => {

  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Team data={landingPageData.Team} />
      <Footer />
    </div>
  )
}

export default Landing;