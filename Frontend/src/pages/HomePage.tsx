import React from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Features from '../components/Features/Features';
import Footer from '../components/Footer/Footer';
import GlobalStyles from '../styles/GlobalStyles';

const HomePage: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Hero />
      <Features />
      <Footer />
    </>
  );
};

export default HomePage;
