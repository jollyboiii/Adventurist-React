import React from 'react';
import '../../assets/css/our_services/ourservices.css';
import ServicesImage from '../../assets/images/Our_Services-img.jpg';

const OurService = () => {
  return (
    <section className='services'>
      <div className='services__container .margin-container'>
        {/* <!-- Left side (Text Section) --> */}
        <div className='services__text'>
          <div className='service__text__container'>
            <p className='services__subtext'>Our Services</p>
            <h2 className='services__header'>
              Join The Adventure With Stories
            </h2>
            <p className='services__body'>
              We provide a wide range of services to meet your needs. Whether
              you're looking for adventure, relaxation, or exploration, our
              services are tailored to deliver an unforgettable experience.
            </p>

            {/* <!-- Grid of Services --> */}
            <div className='services__grid'>
              <div className='service__item'>
                <img
                  src='/assets/icons/Custom_destination.png'
                  alt='Service 1 Icon'
                  className='service__icon'
                />
                <h3 className='service__name'>Custom Destination</h3>
              </div>
              <div className='service__item'>
                <img
                  src='assets/icons/Unforgettable_moments.png'
                  alt='Service 2 Icon'
                  className='service__icon'
                />
                <h3 className='service__name'>Unforgettable Moments</h3>
              </div>
              <div className='service__item'>
                <img
                  src='assets/icons/Competitive_Pricing.png'
                  alt='Service 3 Icon'
                  className='service__icon'
                />
                <h3 className='service__name'>Competitive Pricing</h3>
              </div>
              <div className='service__item'>
                <img
                  src='assets/icons/Self_Guide.png'
                  alt='Service 4 Icon'
                  className='service__icon'
                />
                <h3 className='service__name'>Self Guide</h3>
              </div>
              <div className='service__item'>
                <img
                  src='assets/icons/24-7_Availability.png'
                  alt='Service 5 Icon'
                  className='service__icon'
                />
                <h3 className='service__name'>24/7 Availablility</h3>
              </div>
              <div className='service__item'>
                <img
                  src='assets/icons/Transportation.png'
                  alt='Service 6 Icon'
                  className='service__icon'
                />
                <h3 className='service__name'>Transportation</h3>
              </div>
            </div>

            {/* <!-- Button --> */}
            <a href='#services' className='services__button'>
              See All Services
            </a>
          </div>
        </div>

        {/* <!-- Right side (Image Section) --> */}
        <div className='services__image'>
          <img
            src={ServicesImage}
            alt='Services'
            className='service__img'
          />
        </div>
      </div>
    </section>
  );
};

export default OurService;
