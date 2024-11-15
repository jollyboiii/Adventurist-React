import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../assets/css/footer.css';

const Footer = () => {
  return (
    <footer className='text-light pt-5 pb-3 footer'>
      <div className='container-xxl footer-container'>
        <div className=' text-left gx- footer-content'>
          {/* Quick Links */}
          <div className='col-md-3 mb-4 footer-subsections footer-quick-links'>
            <h5 className='mb-4 link-titles footer-quick-links-title'>
              Quick Links
            </h5>
            <ul className='list-unstyled footer-quick-links-list'>
              <li className='mb-3 footer-quick-link-item'>
                <a href='#' className='quick-links footer-link'>
                  Home
                </a>
              </li>
              <li className='mb-3 footer-quick-link-item'>
                <a href='#' className='quick-links footer-link'>
                  About us
                </a>
              </li>
              <li className='mb-3 footer-quick-link-item'>
                <a href='#' className='quick-links footer-link'>
                  Destination
                </a>
              </li>
              <li className='mb-3 footer-quick-link-item'>
                <a href='#' className='quick-links footer-link'>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className='col-md-4 mb-4 footer-subsections footer-contact-info'>
            <h5 className='mb-4 link-titles footer-contact-title'>
              Contact Info
            </h5>
            <p className='mb-3 footer-contact-address'>
              Plaza X, XY Floor, Street, XYZ
            </p>
            <p className='mb-3 footer-contact-email'>examplemail@email.com</p>
            <p className='mb-3 footer-contact-phone'>+123 456 7890</p>
            <p className='mt-5 footer-contact-website'>
              <a href='google.com' className='footer-url footer-link'>
                www.examplewebsitelink.com
              </a>
            </p>
          </div>

          {/* Make a Reservation */}
          <div className='col-md-4 mb-4 footer-subsections footer-reservation'>
            <h5 className='mb-4 link-titles footer-reservation-title'>
              Make A Reservation
            </h5>
            <p className='mb-4 link-body footer-reservation-text'>
              Lorem ipsum text for reservation details or intro. Lorem ipsum
              text for reservation details or intro Lorem ipsum text for
              reservation details or intro Lorem ipsum text for reservation
              details or intro
            </p>
            <button className='btn px-5 py-2 footer-reservation-button'>
              Book Now
            </button>
          </div>
        </div>

        <hr className='border-top border-light my-4 footer-divider' />

        {/* Bottom section with logo and copyright */}
        <div className='d-flex flex-column flex-md-row justify-content-between align-items-center text-center footer-bottom'>
          <div className='d-flex align-items-center mb-2 mb-md-0 footer-logo-section'>
            <img
              src='/assets/images/logo/logo.png'
              alt='Logo'
              className='me-2 footer-logo-image'
              style={{ width: '2rem' }}
            />
            <span className='footer-creds-company'>Adventourist</span>
          </div>
          <p className='mb-0 footer-bot-copyright'>
            ©2024 Adventurist by Jollymedia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
