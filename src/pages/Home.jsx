import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/Hero/Hero';
import OurService from '../components/OurServices/OurService';
import SpecialOffers from '../components/SpecialOffers/SpecialOffers';
import WhyUs from '../components/WhyUs/WhyUs';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <OurService />
      <SpecialOffers />
      <WhyUs />
    </Layout>
  );
};

export default Home;
