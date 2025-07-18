import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation.jsx';
import Hero from './Hero.jsx';
import BrandLogo from '../BrandLogo.jsx';
import VideoContainer from '../VideoContainer.jsx'
import StatCard from '../StatCard.jsx'
import AnimatedBanner from '../AnimatedBanner.jsx'
import WhyChoose from '../WhyChoose.jsx'
import CompanyResearchBanner from '../CompanyResearchBanner.jsx'
import WorkOptions from '../WorkOptions.jsx'
import IndustriesServed from '../IndustriesServed.jsx'
import HowItWorks from '../HowItWorks.jsx'
import Team from '../Team.jsx'
import LatestNews from '../LatestNews.jsx'
import Newsletter from '../Newsletter.jsx'
import Footer from '../Footer.jsx'


const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cover bg-center">
      <Navigation />
      <Hero />
      <BrandLogo />
      <VideoContainer />
      <StatCard />
      <AnimatedBanner />
      <WhyChoose />
      {/* <CompanyResearchBanner /> */}
      <div className="-mt-16 relative z-10">
      {/* <WorkOptions /> */}
      </div>
      <IndustriesServed />
      <HowItWorks />
      <Team />
      <LatestNews />
      <Newsletter />
    
    </div>
  );
};

export default Home;