import React from 'react';
import '../../assets/css/hero/hero.css';
import '../../assets/css/hero/hero-responsive.css';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero__content .margin-container'>
        <h1 className='hero__title'>Our Adventure</h1>
        <p className='hero__subtitle'>
            Home <i style={{color: '#fd8c2f'}}>&</i> Services
        </p>
      </div>
    </section>
  );
};

export default Hero;
