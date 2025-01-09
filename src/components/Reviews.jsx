import React from 'react';
import './Reviews.css';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'Sarah M.',
      rating: 5,
      date: 'December 2024',
      comment: 'The authentic Mediterranean flavors transported me straight to Greece! The service was impeccable, and the atmosphere was perfect for our anniversary dinner.',
      recommended: 'Greek Salad, Grilled Sea Bass',
    },
    {
      id: 2,
      name: 'Michael R.',
      rating: 5,
      date: 'November 2024',
      comment: 'Best Mediterranean restaurant in Chicago! The attention to detail in every dish is remarkable. Their lemon herb chicken is absolutely divine.',
      recommended: 'Lemon Herb Chicken, Baklava',
    },
    {
      id: 3,
      name: 'Emily L.',
      rating: 5,
      date: 'December 2024',
      comment: 'Such a warm and inviting atmosphere! The food is consistently excellent, and the staff makes you feel like family. A true Chicago gem.',
      recommended: 'Bruschetta, Grilled Sea Bass',
    },
  ];

  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <section className="reviews-section" id="reviews">
      <div className="reviews-container">
        <div className="reviews-header">
          <h2>Guest Reviews</h2>
          <p className="reviews-subtitle">What our guests say about their experience</p>
        </div>

        <div className="reviews-grid">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                <div className="review-rating">
                  <span className="stars">{renderStars(review.rating)}</span>
                  <span className="date">{review.date}</span>
                </div>
                <h3 className="reviewer-name">{review.name}</h3>
              </div>
              
              <div className="review-content">
                <p className="review-text">{review.comment}</p>
                <div className="recommended-dishes">
                  <span className="recommended-label">Recommended:</span>
                  <span className="dishes">{review.recommended}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reviews-cta">
          <p>Join our satisfied guests and experience the taste of the Mediterranean</p>
          <button className="reserve-button">Reserve a Table</button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
