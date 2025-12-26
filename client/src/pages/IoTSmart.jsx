import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Network, ShieldCheck, Activity, Zap, ArrowRight } from 'lucide-react';

import './IoTSmart.css';

// Importing assets
import smartCampusImg from '../assets/gen-smart-campus.png';
import smartAccessImg from '../assets/gen-smart-access.png';
import smartSensorImg from '../assets/smart-sensor.png';
import smartEnergyImg from '../assets/smart-energy.png';

const sections = [
  {
    title: 'Smart Campus Solutions',
    icon: <Network size={32} />,
    image: smartCampusImg,
    desc: 'Transform educational institutions into interconnected hubs of innovation. Our Smart Campus framework integrates academic management, facility operations, and student engagement into a single cohesive ecosystem. From automated lecture halls to intelligent library systems, we enable seamless campus experiences that foster learning and operational excellence.'
  },
  {
    title: 'Smart Attendance & Access Control',
    icon: <ShieldCheck size={32} />,
    image: smartAccessImg,
    desc: 'Enhance security and operational efficiency with next-gen biometrics. Our solutions utilize facial recognition, RFID, and AI-driven analytics to manage access in real-time. Say goodbye to manual logs and unauthorized entries—ensure safety with a system that never sleeps, providing a secure environment for staff and students alike.'
  },
  {
    title: 'Sensor-Based Monitoring',
    icon: <Activity size={32} />,
    image: smartSensorImg,
    desc: 'Unlock the power of real-time data with our advanced sensor networks. Monitor equipment health, environmental conditions, and production metrics with precision. Our IoT sensors provide actionable insights that prevent downtime, optimize performance, and ensure regulatory compliance across your entire infrastructure.'
  },
  {
    title: 'Energy Management & Asset Tracking',
    icon: <Zap size={32} />,
    image: smartEnergyImg,
    desc: 'Drive sustainability and reduce costs with intelligent energy oversight. Our dashboards visualize power consumption patterns, identify inefficiencies, and track high-value assets across your infrastructure. Empower your organization to make greener, smarter decisions that positively impact operational costs and the environment.'
  }
];

const IoTSmart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="iot-page-container">
      
      {/* Header Section */}
      <section className="iot-hero-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="iot-hero-title">
            IoT & Smart Solutions
          </h1>
          <p className="iot-hero-subtitle">
            Pioneering the future with intelligent ecosystems. We deliver integrated IoT solutions that transform campuses, enterprises, and infrastructure into smart, responsive environments.
          </p>
        </motion.div>
      </section>

      {/* Solutions Grid */}
      <section className="iot-solutions-grid">
        {sections.map((item, i) => (
          <motion.div
            key={i}
            className="iot-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <div className="iot-card-image-wrapper">
              <img 
                src={item.image} 
                alt={item.title} 
                className="iot-card-image"
              />
            </div>
            
            <div className="iot-card-content">
              <div className="iot-card-header">
                <div className="iot-card-icon">
                  {item.icon}
                </div>
                <h3 className="iot-card-title">{item.title}</h3>
              </div>
              
              <p className="iot-card-desc">
                {item.desc}
              </p>
{/* 
              <Link to="/contact" className="iot-cta-button">
                Learn More <ArrowRight size={18} />
              </Link> */}
            </div>
          </motion.div>
        ))}
      </section>

      {/* Footer CTA */}
      <section className="iot-footer-section">
        <motion.div 
          className="iot-footer-card"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '16px', color: '#fff' }}>
            Ready to Upgrade Your Infrastructure?
          </h2>
          <p style={{ color: '#94a3b8', maxWidth: '600px', margin: '0 auto 32px' }}>
            Join the revolution of smart connectivity. Partner with Arthyme to build a smarter, safer, and more efficient future today.
          </p>
        </motion.div>
      </section>

    </div>
  );
};

export default IoTSmart;
