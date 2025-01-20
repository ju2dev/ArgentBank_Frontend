import React from 'react';
import Navigation from '../../components/NavBar/Nav';
import Footer from '../../components/Footer/footer';
import Hero from '../../components/Hero/hero';
import Features from '../../components/Feature/features'; 

const HomePage = () => (
  <>
    <Navigation />
    <main>
      <Hero />
      <Features/> 
    </main>
    <Footer />
  </>
);

export default HomePage;