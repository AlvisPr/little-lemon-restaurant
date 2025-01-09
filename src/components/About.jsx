import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="about-text">
            <h2>Our Story</h2>
            <p>
              Little Lemon began as a humble dream shared by two friends, Maria and Alex, 
              who had a passion for Mediterranean cuisine. In 2010, they opened their first 
              small eatery in Chicago, offering homemade dishes inspired by their travels 
              and family recipes.
            </p>
            <p>
              Today, Little Lemon has grown into a beloved culinary destination, 
              where traditional Mediterranean flavors meet modern innovation. 
              Our commitment to quality ingredients and authentic recipes continues 
              to bring joy to our cherished customers.
            </p>
          </div>
          
          <div className="about-images">
            <motion.img 
              className="about-img main-img"
              src="https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg"
              alt="Authentic Mediterranean restaurant interior with traditional decor and warm ambiance"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
            <motion.img 
              className="about-img secondary-img"
              src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg"
              alt="Traditional Mediterranean mezze spread with hummus, falafel, and fresh pita"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            />
          </div>
        </motion.div>

        <motion.div 
          className="about-highlights"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="highlight-item">
            <span className="highlight-number">13+</span>
            <span className="highlight-text">Years of Excellence</span>
          </div>
          <div className="highlight-item">
            <span className="highlight-number">50+</span>
            <span className="highlight-text">Signature Dishes</span>
          </div>
          <div className="highlight-item">
            <span className="highlight-number">15k+</span>
            <span className="highlight-text">Happy Customers</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
