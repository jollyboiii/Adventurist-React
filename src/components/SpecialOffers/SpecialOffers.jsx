import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../assets/css/special_offer/specialoffers.css';

const SpecialOffers = () => {
  return (
    <section className='special-offers'>
      <div className='offer'>
        <div className='offer__content offer__content_1'>
          <h2 className='offer__title'>Special Offer For Couples</h2>
          <p className='offer__description'>
            Lorem ipsum bvo bevjb iabs ijbb sof eojbs ias bij fb ijba sbo jvb
            saj bo bwe ibasf oihoasjf qer fgrg4 g4gr gff hth gg lorem ipsum bvo
            bevjb iabs ijbb sof eojbs ias bij fb jbja sbo jvb saj bo bwe ibasf
            oihoasjf qer fgrg4 g4gr gff hth gg
          </p>
        </div>
        <div className='img-container'>
          <img
            src='/assets/images/Special_Offer-1-img.jpg'
            alt='Beach for Couples'
            className='offer__image offer__image_1'
          />
        </div>
      </div>

      <div className='offer'>
        <div className='img-container'>
          <img
            src='/assets/images/Special_Offer-2-img.jpg'
            alt='Adventure Tours'
            className='offer__image offer__image_2'
          />
        </div>
        <div className='offer__content offer__content_2'>
          <h2 className='offer__title'>Special Offer On Adventure Tours</h2>

          <p className='offer__description'>
            Lorem ipsum bvo bevjb iabs ijbb sof eojbs ias bij fb ijba sbo jvb
            saj bo bwe ibasf oihoasjf qer fgrg4 g4gr gff hth gg lorem ipsum bvo
            bevjb iabs ijbb sof eojbs ias bij fb jbja sbo jvb saj bo bwe ibasf
            oihoasjf qer fgrg4 g4gr gff hth gg
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
