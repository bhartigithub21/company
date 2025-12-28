import React from "react";
import { Link } from "react-router-dom";
import {
  CircuitBoard,
  Twitter,
  Linkedin,
  Facebook,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-col">
          <Link to="/" className="footer-logo">
            <CircuitBoard className="logo-icon" />
            <span className="logo-text">Arthyme</span>
          </Link>
          <p className="footer-desc">
            Empowering institutions with future-ready technology, seamless
            connectivity, and intelligent automation for a smarter tomorrow.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="#" aria-label="Facebook">
              <Facebook size={20} />
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h3>Services</h3>
          <ul>
            <li>
              <Link to="/services">College Management</Link>
            </li>
            <li>
              <Link to="/services">Hospital Management</Link>
            </li>
            <li>
              <Link to="/technology-innovation">Technology & Innovation</Link>
            </li>
            <li>
              <Link to="/infrastructure">Smart Infrastructure</Link>
            </li>
            <li>
              <Link to="/networking">IT Networking</Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Company</h3>
          <ul>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/industries">Industries</Link>
            </li>
            <li>
              <Link to="/careers">Careers</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms">Terms of Service</Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Contact</h3>
          <ul className="contact-list">
            <li>
              <MapPin size={18} />
              <span>
                Address: HI 239, near STATE HOUSING BOARD, Harmu Housing Colony,
                Harmu, Ranchi, Jharkhand 834002
              </span>
            </li>
            <li>
              <Phone size={18} />
              <span>+91 98765 43210</span>
            </li>
            <li>
              <Mail size={18} />
              <span>contact@arthyme.com</span>
            </li>
          </ul>
        </div>
      </div>

      <Link to="/admin/login">Admin Login</Link>

      <div className="footer-bottom container">
        <p>
          &copy; {new Date().getFullYear()} Arthyme Private Limited. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
