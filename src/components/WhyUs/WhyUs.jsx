import React from 'react';
import '../../assets/css/whyus.css';

const WhyUs = () => {
  return (
    <section className='why-choose-us-section'>
      <div className='why-choose-us'>
        <div className='why-choose-us__content'>
          <h3 className='subtext'>Why Choose Us</h3>
          <h1 className='main-title'>
            Let Us Show You the Beauty of the World
          </h1>
          <button className='cta-button'>Book Now</button>
          <div className='why-choose-us-services'>
          <div className='service-card'>
            <div className='icon'>
              <img
                src='/assets/icons/Why_us-icons/1_Travel_n_tour-icon.png'
                alt='Travel_n_tour-icon'
              ></img>
            </div>
            <h3 className='service-title'>Tour And Travel</h3>
            <p className='service-description'>
              Lorem ipsum bvo bevjb iabs ijbb sof eojbs ias bij fb ijba sbo jvb
              saj bo bwe ibasf oihoasjf Lorem ipsum bvo bevjb iabs ijbb sof
              eojbs ias bij fb ijba sbo jvb saj bo bwe ibasf oihoasjf
            </p>
          </div>

          <div className='service-card'>
            <div className='icon'>
              <img
                src='/assets/icons/Why_us-icons/2_Camping-icon.png'
                alt='Camping-icon'
              />
            </div>
            <h3 className='service-title'>Camping</h3>
            <p className='service-description'>
              Lorem ipsum bvo bevjb iabs ijbb sof eojbs ias bij fb ijba sbo jvb
              saj bo bwe ibasf oihoasjf Lorem ipsum bvo bevjb iabs ijbb sof
              eojbs ias bij fb ijba sbo jvb saj bo bwe ibasf oihoasjf
            </p>
          </div>

          <div className='service-card'>
            <div className='icon'>
              <img
                src='/assets/icons/Why_us-icons/3_Adventure_tour-icon.png'
                alt='Adventure_tour-icon'
              />
            </div>
            <h3 className='service-title'>Adventure Tour</h3>
            <p className='service-description'>
              Lorem ipsum m bvo bevjb iabs ijbb sof eojbs ias bij fb ijba sbo
              jvb saj bo bwe ibasf Lorem ipsum m bvo bevjb iabs ijbb sof eojbs
              ias bij fb ijba sbo jvb saj bo bwe ibasf oihoasjf oihoasjf
            </p>
          </div>

          <div className='service-card'>
            <div className='icon'>
              <img
                src='/assets/icons/Why_us-icons/4-Outbound_Activities-icon.png'
                alt='Outbound_Activities-icon'
              />
            </div>
            <h3 className='service-title'>Outbound Activities</h3>
            <p className='service-description'>
              Lorem ipsum m bvo bevjb iabs ijbb sof eojbs ias bij fb ijba sbo
              jvb saj bo bwe ibasf oihoasjf Lorem ipsum m bvo bevjb iabs ijbb
              sof eojbs ias bij fb ijba sbo jvb saj bo bwe ibasf oihoasjf
            </p>
          </div>
        </div>
        </div>

        
      </div>
    </section>
    // <div className='why-us'>
    //   why us
    //   <div className='card-section gap-4 '>
    //     <div className='card-container'>1</div>
    //     <div className='card-container'>2</div>
    //     <div className='card-container'>3</div>
    //     <div className='card-container'>4</div>
    //   </div>
    // </div>
  );
};

export default WhyUs;
