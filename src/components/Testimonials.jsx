import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      rating: 5,
      image: "sarah.jpg",
      quote: "The Mediterranean flavors transported me straight to Greece! Every dish was authentically prepared and bursting with flavor.",
      date: "December 2024",
      visitType: "Dinner",
      recommended: "Greek Salad, Moussaka"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      rating: 5,
      image: "michael.jpg",
      quote: "Best authentic cuisine in Chicago. The atmosphere is cozy and welcoming, and the service is exceptional.",
      date: "November 2024",
      visitType: "Family Dinner",
      recommended: "Bruschetta, Lamb Chops"
    },
    {
      id: 3,
      name: "Emily Lawrence",
      rating: 5,
      image: "emily.jpg",
      quote: "The attention to detail in both food and service is remarkable. A perfect spot for special occasions!",
      date: "December 2024",
      visitType: "Date Night",
      recommended: "Sea Bass, Baklava"
    },
    {
      id: 4,
      name: "David Kim",
      rating: 5,
      image: "david.jpg",
      quote: "Their Greek salad and bruschetta are simply outstanding. The flavors are fresh and authentic.",
      date: "December 2024",
      visitType: "Business Lunch",
      recommended: "Greek Salad, Bruschetta"
    }
  ];

  const renderStars = (rating) => {
    return Array(5).fill(null).map((_, index) => (
      <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>
        {index < rating ? '★' : '☆'}
      </span>
    ));
  };

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <h2 className="title">What People Say About Us</h2>
          <span className="subtitle">Testimonials from our valued guests</span>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-header">
                <div className="author-image">
                  <img src={testimonial.image} alt={testimonial.name} loading="lazy" />
                </div>
                <div className="author-info">
                  <h3 className="author-name">{testimonial.name}</h3>
                  <span className="visit-type">{testimonial.visitType}</span>
                </div>
              </div>
              
              <div className="testimonial-content">
                <div className="rating-container">
                  <div className="stars">{renderStars(testimonial.rating)}</div>
                  <span className="review-date">{testimonial.date}</span>
                </div>
                <blockquote className="quote">
                  <p>{testimonial.quote}</p>
                </blockquote>
                <div className="recommended-dishes">
                  <span className="label">Recommended:</span>
                  <span className="dishes">{testimonial.recommended}</span>
                </div>
              </div>
              
              <div className="testimonial-footer">
                <button className="verify-button">
                  <span className="icon">✓</span>
                  Verified Visit
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials-cta">
          <p>Join our satisfied guests and experience the taste of Mediterranean cuisine</p>
          <button className="reserve-button">Reserve a Table</button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
