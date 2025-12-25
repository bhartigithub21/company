import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, CircuitBoard } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/2025-10-04.jpg';

import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesDropdownOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { 
      name: 'Services', 
      path: '/services',
      subLinks: [
        { name: 'Software & Digital Solutions 💻', path: '/services/software-digital' },
        { name: 'IoT & Smart Solutions 🌐', path: '/services/iot-smart' },
        { name: 'Smart Infrastructure 🏫', path: '/services/smart-infrastructure' },
        { name: 'Video Conferencing 🎥', path: '/services/video-conferencing' },
        { name: 'IT Hardware & Networking 🖥️', path: '/services/it-hardware' }
      ]
    },
    { name: 'Technology & Innovation', path: '/technology-innovation' },
    { name: 'Industries', path: '/industries' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="nav-logo">
          <img src={logo} alt="Arthyme Logo" className="logo-icon" />
        </Link>

        {/* Desktop Menu */}
        <div className="nav-links desktop-only">
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              className="nav-item-container"
              onMouseEnter={() => link.subLinks && setServicesDropdownOpen(true)}
              onMouseLeave={() => link.subLinks && setServicesDropdownOpen(false)}
            >
              <Link to={link.path} className="nav-link">
                {link.name}
                {link.subLinks && <ChevronDown size={14} className={`dropdown-arrow ${servicesDropdownOpen ? 'open' : ''}`} />}
              </Link>
              
              {link.subLinks && (
                <AnimatePresence>
                  {servicesDropdownOpen && (
                    <motion.div
                      className="dropdown-menu"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.subLinks.map((subLink) => (
                        <Link key={subLink.name} to={subLink.path} className="dropdown-item">
                          {subLink.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        <div className="nav-actions desktop-only">
          <Link to="/contact" className="btn btn-primary">
            Contact Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="mobile-toggle" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          style={{ zIndex: 1001 }}
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              {navLinks.map((link) => (
                <div key={link.name} className="mobile-link-container">
                   <Link to={link.path} className="mobile-link">
                    {link.name}
                  </Link>
                  {link.subLinks && (
                    <div className="mobile-sublinks">
                       {link.subLinks.map(sub => (
                         <Link key={sub.name} to={sub.path} className="mobile-sublink">
                           {sub.name}
                         </Link>
                       ))}
                    </div>
                  )}
                </div>
              ))}
              <Link to="/contact" className="mobile-link highlight">
                Contact Us
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
