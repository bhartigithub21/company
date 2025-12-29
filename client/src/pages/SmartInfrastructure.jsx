import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Monitor, 
  Users, 
  Tv, 
  Cpu, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

import './SmartInfrastructure.css';

// Using existing valid assets from the project
import smartClassroomVid from '../assets/smart classroom.webm';
import smartMeetingVid from '../assets/smartmeetingsroom.webm';
import auditoriumVid from '../assets/Auditoriums.webm';
import avAutomationVid from '../assets/digital podiums.webm';

const subservices = [
  {
    id: 'classroom',
    title: 'Smart Classrooms',
    label: 'Future of Education',
    icon: <Monitor size={24} />,
    video: smartClassroomVid,
    description: 'Elevate the learning experience with cutting-edge digital infrastructure. Our Smart Classrooms integrate interactive displays, immersive audio, and collaborative software to create a boundary-less learning environment.',
    detailedDescription: 'We transform traditional pedagogical spaces into intelligent hubs. By combining high-definition interactive panels with cloud-based content delivery, we ensure that both teachers and students have the most advanced tools at their fingertips. Our solutions include wireless screen sharing, automated lecture capture, and ergonomic digital podiums.',
    features: ['Interactive Flat Panels', 'Student Response Systems', 'Cloud Content Library', 'Wireless Collaboration', 'Digital Lecterns', 'Lecture Recording']
  },
  {
    id: 'meeting',
    title: 'Smart Meeting Rooms',
    label: 'Corporate Excellence',
    icon: <Users size={24} />,
    video: smartMeetingVid,
    description: 'Redefine corporate collaboration with seamless meeting room technology. Experience crystal-clear audio and video that bridges the gap between physical and remote teams.',
    detailedDescription: 'Our meeting room solutions are designed for the modern hybrid workforce. We implement AI-driven conferencing cameras, beamforming microphone arrays, and one-touch join capabilities. Integration with Microsoft Teams, Zoom, and Google Workspace ensures your meetings flow without technical interruptions.',
    features: ['4K Video Conferencing', 'Smart Booking Systems', 'Digital Signage', 'Cable Management', 'One-Touch Controls', 'Ambient Lighting']
  },
  {
    id: 'auditorium',
    title: 'Auditoriums & Command Centers',
    label: 'Scale & Precision',
    icon: <Tv size={24} />,
    video: auditoriumVid,
    description: 'High-impact visual experiences for large-scale venues and mission-critical operations. From massive LED walls to professional sound reinforcement.',
    detailedDescription: 'For spaces where the stakes are high, we deliver unparalleled reliability. Our Auditoriums feature theater-grade acoustics and projection, while our Command Centers provide real-time data visualization across multi-display video walls. We focus on low-latency switching and redundant systems for continuous operations.',
    features: ['LED Video Walls', 'Line Array Audio', 'Control Room consoles', 'Centralized Monitoring', 'Stage Lighting', 'Live Streaming Setup']
  },
  {
    id: 'av',
    title: 'AV Automation & Digital Podiums',
    label: 'Intelligent Control',
    icon: <Cpu size={24} />,
    video: avAutomationVid,
    description: 'Harness the power of complete environment control. Our AV automation simplifies complex setups into intuitive, user-friendly interfaces.',
    detailedDescription: 'Take command of your infrastructure with a single touch. Our automation systems orchestrate lighting, audio, video, and environmental controls. Our digital podiums serve as the brain of the presentation, integrating all devices into a sleek, touch-enabled interface that gives the speaker absolute control without the complexity.',
    features: ['Touch Panel Interfaces', 'Digital Voice Control', 'Scene Pre-sets', 'Hardware Integration', 'Remote Management', 'Power Scheduling']
  }
];

const SmartInfrastructure = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="sc-page-container">
      {/* Hero Section */}
      <section className="sc-hero">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="sc-section-label" style={{ justifyContent: 'center', marginBottom: '16px' }}>
            <Sparkles size={18} /> Experience the Future
          </div>
          <h1 className="sc-hero-title">Smart Class & <br />Smart Infrastructure</h1>
          <p className="sc-hero-subtitle">
            Pioneering digital transformation across educational centers and corporate environments. 
            We build the backbone of modern collaboration with precision-engineered AV solutions.
          </p>
        </motion.div>
      </section>

      {/* Main Sections */}
      <motion.div 
        className="sc-sections-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {subservices.map((service, index) => (
          <motion.div 
            key={service.id} 
            className={`sc-section-item ${index % 2 !== 0 ? 'reversed' : ''}`}
            variants={itemVariants}
          >
            <div className="sc-text-content">
              <div className="sc-section-label">
                {service.icon} {service.label}
              </div>
              <h2 className="sc-section-title">{service.title}</h2>
              <p className="sc-section-description">
                <strong>{service.description}</strong>
              </p>
              <p className="sc-section-description">
                {service.detailedDescription}
              </p>
              
              <div className="sc-feature-list">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="sc-feature-item">
                    <CheckCircle2 size={16} className="sc-feature-bullet" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="sc-visual-content">
              <video 
                src={service.video} 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="sc-visual-video"
              />
              <div className="sc-visual-overlay"></div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer CTA */}
      <section className="sc-footer-cta">
        <motion.div 
          className="sc-cta-card"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="sc-cta-title">Upgrade Your Infrastructure Today</h2>
          <p className="sc-cta-text">
            Join hundreds of institutions already benefiting from Arthyme's smart solutions. 
            Let's design a future-ready environment tailored to your specific needs.
          </p>
          <Link to="/contact" className="sc-btn">
            Get a Free Consultation <ArrowRight size={20} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default SmartInfrastructure;