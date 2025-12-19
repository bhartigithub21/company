import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Monitor, Activity, Server, Smartphone, Cpu, Globe, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import InteractiveVisual from '../components/ui/InteractiveVisual';
import iotVisual from '../assets/iot-visual.png';
import './Home.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
          <motion.div 
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="hero-badge">
              Future-Ready Technology
            </motion.div>
            <motion.h1 variants={fadeInUp}>
              End-to-End IT, Smart <br />
              Infrastructure & <br />
              <span className="text-gradient">IoT Solutions</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="hero-desc">
              Empowering enterprises with future-ready technology, seamless connectivity, and intelligent automation.
            </motion.p>
            <motion.div variants={fadeInUp} className="hero-actions">
              <Link to="/contact" className="btn btn-primary">
                Contact Us
              </Link>
              <Link to="/demo" className="btn btn-outline">
                Request Demo
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <InteractiveVisual variant="globe" />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2>Software & Digital <span className="text-gradient">Solutions</span></h2>
            <p>Empowering institutions with tailored software for enhanced efficiency and growth.</p>
          </motion.div>

          <motion.div 
            className="services-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <ServiceCard 
              icon={<Monitor />} 
              title="College Management System" 
              desc="Streamline academic, administrative, and financial operations for educational institutions."
            />
            <ServiceCard 
              icon={<Activity />} 
              title="Hospital Management System" 
              desc="Optimizing patient care, records, and resource management in healthcare facilities."
            />
            <ServiceCard 
              icon={<Server />} 
              title="ERP Solutions" 
              desc="Integrated enterprise resource planning for seamless business process management."
            />
            <ServiceCard 
              icon={<Smartphone />} 
              title="Mobile Apps" 
              desc="Custom mobile application development for iOS and Android platforms."
            />
          </motion.div>
        </div>
      </section>

      {/* IoT Section */}
      <section className="section iot-section">
        <div className="container iot-container">
          <motion.div 
            className="iot-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2>IoT-based <span className="text-gradient">Smart Campus</span> Solutions</h2>
            <p className="iot-desc">
              Real-time monitoring, energy efficiency, and automated control for modern campuses.
            </p>
            <ul className="feature-list">
              <li><Globe className="feature-icon" /> Smart Attendance & Access Control</li>
              <li><Cpu className="feature-icon" /> Sensor-based Monitoring Systems</li>
              <li><Shield className="feature-icon" /> Energy Management & Asset Tracking</li>
            </ul>
            <Link to="/iot" className="btn btn-primary mt-4">Explore IoT Solutions <ArrowRight size={18} /></Link>
          </motion.div>

          <motion.div 
            className="iot-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src={iotVisual} alt="IoT Dashboard Interface" />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container cta-container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Transform Your Infrastructure?</h2>
            <p>Partner with Arthyme for cutting-edge IT and IoT solutions.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const ServiceCard = ({ icon, title, desc }) => (
  <motion.div className="service-card glass hover-card" variants={fadeInUp}>
    <div className="card-icon">{icon}</div>
    <h3>{title}</h3>
    <p>{desc}</p>
  </motion.div>
);

export default Home;
