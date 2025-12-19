import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, CircuitBoard } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'IoT', path: '/iot' },
    { name: 'Industries', path: '/industries' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="nav-logo">
          <CircuitBoard className="logo-icon" />
          <span className="logo-text">Arthyme</span>
        </Link>

        {/* Desktop Menu */}
        <div className="nav-links desktop-only">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className="nav-link">
              {link.name}
            </Link>
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
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="mobile-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              {navLinks.map((link) => (
                <Link key={link.name} to={link.path} className="mobile-link">
                  {link.name}
                </Link>
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
