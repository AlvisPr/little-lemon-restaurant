import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faYelp } from '@fortawesome/free-brands-svg-icons';
import Logo from './Logo.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-logo-section">
            <img src={Logo} alt="Little Lemon" className="footer-logo" />
            <div className="social-icons">
              <a href="https://facebook.com/littlelemon" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://instagram.com/littlelemon" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://twitter.com/littlelemon" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://yelp.com/littlelemon" target="_blank" rel="noopener noreferrer" aria-label="Yelp">
                <FontAwesomeIcon icon={faYelp} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Contact</h3>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-label">Address:</span>
                <p>123 Mediterranean Ave, Chicago, IL 60601</p>
              </div>
              <div className="contact-item">
                <span className="contact-label">Phone:</span>
                <p>(312) 555-0123</p>
              </div>
              <div className="contact-item">
                <span className="contact-label">Email:</span>
                <p>info@littlelemon.com</p>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h3>Opening Hours</h3>
            <div className="hours-info">
              <div className="hours-item">
                <span>Monday - Thursday</span>
                <span className="time">11:00 AM - 9:00 PM</span>
              </div>
              <div className="hours-item">
                <span>Friday - Saturday</span>
                <span className="time">11:00 AM - 10:00 PM</span>
              </div>
              <div className="hours-item">
                <span>Sunday</span>
                <span className="time">12:00 PM - 9:00 PM</span>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <nav className="quick-links">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#menu">Menu</a>
              <a href="#reservations">Reservations</a>
              <a href="#reviews">Reviews</a>
              <a href="#order">Order Online</a>
            </nav>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {new Date().getFullYear()} Little Lemon. All rights reserved.</p>
          <div className="legal-links">
            <a href="/privacy">Privacy Policy</a>
            <span className="separator">•</span>
            <a href="/terms">Terms of Service</a>
            <span className="separator">•</span>
            <a href="/accessibility">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;