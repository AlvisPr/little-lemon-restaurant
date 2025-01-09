import React, { useEffect } from 'react';
import "./Main.css";
import { Element } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import About from './About';

function Main() {
  const navigate = useNavigate();

  const onReserveClick = () => {
    navigate('/reserve');
  };

  const onButtonClick = () => {
    const pdfUrl = "/Menu.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Menu.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Element name="reserve">
        <section className="first__container__wrapper">
          <motion.article 
            className="textblock"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>Welcome to Little Lemon, where Mediterranean flavors meet modern cuisine. Our chef-crafted menu features fresh, locally-sourced ingredients transformed into unforgettable dishes. From our signature lemon-infused specialties to traditional favorites with a contemporary twist, every bite tells a story of passion and creativity.</p>
            <button aria-label="Reserve table" onClick={onReserveClick}>
              Reserve Your Table
            </button>
          </motion.article>
          <motion.img 
            src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2670&auto=format&fit=crop"
            alt="Luxurious Mediterranean restaurant interior with rustic stone archways, warm lighting, and elegant table settings draped in fine linens" 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          />
        </section>
      </Element>

      <Element name="menu">
        <section className="second__container__wrapper">
          <div className="specials-header">
            <h3>Featured Menu</h3>
            <button className="desktop-only" onClick={onButtonClick}>Online Menu</button>
          </div>
          <div className="content__wrapper__two">
            <motion.article 
              className="card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1503767849114-976b67568b02?q=80&w=2670&auto=format&fit=crop" 
                alt="Artfully plated Greek salad with premium feta, Kalamata olives, and micro herbs" 
              />
              <div className='card__content'>
                <header className='card__title'>
                  <h3>Greek Salad</h3>
                  <h3>$13</h3>
                </header>
                <p>Our signature Greek salad combines crisp romaine, vine-ripened tomatoes, Kalamata olives, and premium feta cheese, dressed in our house-made Mediterranean vinaigrette.</p>
                <button className="order-button" aria-label="Add Greek Salad to cart">
                  Add to Cart
                </button>
              </div>
            </motion.article>

            <motion.article 
              className="card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1608897013039-887f21d8c804?q=80&w=2672&auto=format&fit=crop" 
                alt="Handmade pasta with San Marzano tomato sauce and fresh basil" 
              />
              <div className='card__content'>
                <header className='card__title'>
                  <h3>Pomodoro</h3>
                  <h3>$25</h3>
                </header>
                <p>Hand-crafted pasta tossed in our slow-simmered tomato sauce, finished with fresh basil, extra virgin olive oil, and aged Parmigiano-Reggiano.</p>
                <button className="order-button" aria-label="Add Pomodoro to cart">
                  Add to Cart
                </button>
              </div>
            </motion.article>

            <motion.article 
              className="card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?q=80&w=2674&auto=format&fit=crop" 
                alt="Artisanal bruschetta with heirloom tomatoes and fresh herbs" 
              />
              <div className='card__content'>
                <header className='card__title'>
                  <h3>Bruschetta</h3>
                  <h3>$17</h3>
                </header>
                <p>Grilled artisanal bread topped with marinated tomatoes, fresh basil, garlic, and a drizzle of premium extra virgin olive oil from the Mediterranean coast.</p>
                <button className="order-button" aria-label="Add Bruschetta to cart">
                  Add to Cart
                </button>
              </div>
            </motion.article>
          </div>
        </section>
      </Element>

      <Element name="reviews">
        <section className="third__container__wrapper">
        <div className="reviews-header">
              <h3>Customer Reviews</h3>
            </div>
          <div className="testimonials_card_wrapper">
            <article className="testimonials__card">
              <div className="card__name">
                <img 
                  src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1000&auto=format&fit=crop" 
                  alt="Sophia, a regular customer" 
                />
                <h3>Sophia</h3>
                <div className='star__stack'>
                  <StarRoundedIcon className='my__custom__star'/>
                  <StarRoundedIcon className='my__custom__star'/>
                  <StarRoundedIcon className='my__custom__star'/>
                  <StarRoundedIcon className='my__custom__star'/>
                  <StarRoundedIcon className='my__custom__star'/>
                </div>
                <p>5/5 stars. Amazing food and service! The atmosphere is cozy and inviting. Highly recommend!</p>
              </div>
            </article>
          

            <article className="testimonials__card">
              <div className="card__name">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
                  alt="David, a food enthusiast" 
                />
                <h3>David</h3>
                <div className='star__stack'>
                  <StarRoundedIcon className='my__custom__star'/>
                  <StarRoundedIcon className='my__custom__star'/>
                  <StarRoundedIcon className='my__custom__star'/>
                  <StarRoundedIcon className='my__custom__star'/>
                  <StarRoundedIcon className='my__custom__star'/>
                </div>
                <p>5/5 stars. Everything was fresh and delicious! The decor added charm. Highly recommend this spot!</p>
              </div>
            </article>

            <article className="testimonials__card">
              <div className="card__name">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop" 
                  alt="Isabella, a regular diner" 
                />
                <h3>Isabella</h3>
                <div className='star__stack'>
                  <StarRoundedIcon className='my__custom__star'/>
                  <StarRoundedIcon className='my__custom__star'/>
                  <StarRoundedIcon className='my__custom__star'/>
                  <StarRoundedIcon className='my__custom__star'/>
                  <StarRoundedIcon className='my__custom__star'/>
                </div>
                <p>5/5 stars. Perfect for a family dinner! Great service and ambiance. Will definitely return soon!</p>
              </div>
            </article>

            <article className="testimonials__card">
              <div className="card__name">
                <img 
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop" 
                  alt="Alex, a food lover" 
                />
                <h3>Alex</h3>
                <div className='star__stack'>
                  <StarRoundedIcon className='my__custom__star'/>
                  <StarRoundedIcon className='my__custom__star'/>
                  <StarRoundedIcon className='my__custom__star'/>
                  <StarRoundedIcon className='my__custom__star'/>
                </div>
                <p>5/5 stars. Best Mediterranean food around! Loved the pita and hummus. Absolutely worth visiting!</p>
              </div>
            </article>

          </div>
        </section>
      </Element>

      <Element name="about">
        <About />
      </Element>
    </main>
  );
}

export default Main;