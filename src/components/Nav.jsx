import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import "./Nav.css";
import Logo from "./Logo.svg"
import ShoppingBasketRoundedIcon from '@mui/icons-material/ShoppingBasketRounded';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const scrollThreshold = 50;
      
      if (currentScrollPos < scrollThreshold) {
        setIsScrolled(false);
      } else if (Math.abs(prevScrollPos - currentScrollPos) > 5) {
        setIsScrolled(prevScrollPos < currentScrollPos);
      }
      setPrevScrollPos(currentScrollPos);
    };

    const throttledScroll = () => {
      if (!window.requestAnimationFrame) {
        setTimeout(handleScroll, 16);
        return;
      }
      window.requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', throttledScroll);
    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, [prevScrollPos]);

  const handleLinkClick = (section) => {
    window.history.pushState(null, '', `/${section}`);
  };

  const goToStart = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <img onClick={goToStart} src={Logo} alt="Little Lemon Logo" />
      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li><Link role="button" onClick={() => handleLinkClick('reserve_table')} to="reserve" smooth={true} duration={1000}>Reserve</Link></li>
        <li><Link role="button" onClick={() => handleLinkClick('about')} to="about" smooth={true} duration={1000}>About</Link></li>
        <li><Link role="button" onClick={() => handleLinkClick('menu')} to="menu" smooth={true} duration={1000}>Menu</Link></li>
        <li><Link role="button" onClick={() => handleLinkClick('reviews')} to="reviews" smooth={true} duration={1000}>Reviews</Link></li>
        <li><a><ShoppingBasketRoundedIcon fontSize='large'/></a></li>
      </ul>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
};

export default Nav;
