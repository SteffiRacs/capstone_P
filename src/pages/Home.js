import React from 'react';
import Banner from '../components/Banner';
import ThreeColumnSection from '../components/ThreeColumnSection';
import AboutSection from '../components/AboutSection';
import TestimonialSection from '../components/TestimonialSection';


const Home = () => {
  return (
    <div>
      <Banner />
      <ThreeColumnSection />
       <TestimonialSection />
      <AboutSection />
    </div>
   
  );
};

export default Home;