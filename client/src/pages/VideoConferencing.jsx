import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Video, 
  Users, 
  Radio, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Camera,
  Mic,
  Monitor
} from 'lucide-react';

import './VideoConferencing.css';

// Importing video assets from the project
import hybridClassroomVid from '../assets/hybrid classrooms.webm';
import vcHardwareVid from '../assets/microphone,camera,.webm';
import streamingVid from '../assets/live streaming &recording solutions.webm';

const subservices = [
  {
    id: 'hybrid',
    title: 'Hybrid Classrooms & Meetings',
    label: 'Versatile Collaboration',
    icon: <Users size={24} />,
    video: hybridClassroomVid,
    description: 'Bridge the gap between physical and digital presence. Our hybrid solutions enable seamless interaction for participants both in-room and remote.',
    detailedDescription: 'We create synchronous learning and meeting environments where distance is no longer a barrier. By integrating high-definition visual displays with intelligent spatial audio, we ensure every participant—whether sitting in the front row or joining from across the globe—enjoys an identical, high-quality experience. Our systems support instant screen sharing, digital whiteboarding, and real-time collaboration tools.',
    features: ['High-Def Dual Displays', 'Spatial Audio Processing', 'Auto-Framing AI Cameras', 'One-Touch Launch', 'Digital Whiteboarding', 'Cloud Integration']
  },
  {
    id: 'hardware',
    title: 'VC Cameras, Microphones & Controllers',
    label: 'Professional Hardware',
    icon: <Camera size={24} />,
    video: vcHardwareVid,
    description: 'State-of-the-art conferencing hardware for unmatched clarity. Experience crystal clear audio and studio-quality video.',
    detailedDescription: 'Elevate your communication with enterprise-grade peripherals. Our range includes PTZ (Pan-Tilt-Zoom) cameras with AI subject tracking, beamforming microphone arrays that eliminate background noise, and intuitive touch controllers that simplify complex meeting setups. We provide hardware that is certified for major platforms like Zoom, Microsoft Teams, and Google Meet.',
    features: ['4K PTZ Tracking Cameras', 'Beamforming Mic Arrays', 'Acoustic Echo Cancellation', 'Touch Control Interfaces', 'PoE Connectivity', 'USB Plug-and-Play']
  },
  {
    id: 'streaming',
    title: 'Live Streaming & Recording Solutions',
    label: 'Global Outreach',
    icon: <Radio size={24} />,
    video: streamingVid,
    description: 'Broadcast your message to the world or capture it for posterity. End-to-end solutions for high-quality streaming and automated recording.',
    detailedDescription: 'Transform your venue into a professional broadcasting studio. Our solutions enable one-click streaming to multiple social media platforms and secure internal servers simultaneously. We provide automated lecture capture and meeting highlights, ensuring that valuable content is preserved, indexed, and easily searchable for future reference.',
    features: ['Multi-Platform Streaming', 'Automated Lecture Capture', 'Real-time Video Encoding', 'VOD Content Management', 'CDN Integration', 'Secure Archiving']
  }
];

const VideoConferencing = () => {
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
    <div className="vc-page-container">
      {/* Hero Section */}
      <section className="vc-hero">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="vc-section-label">
            <Sparkles size={18} /> Connectivity Reimagined
          </div>
          <h1 className="vc-hero-title">Video Conferencing & <br />Collaboration</h1>
          <p className="vc-hero-subtitle">
            Empower your organization with world-class communication technology. 
            We provide the tools to connect, collaborate, and create from anywhere in the world.
          </p>
        </motion.div>
      </section>

      {/* Main Sections */}
      <motion.div 
        className="vc-sections-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {subservices.map((service, index) => (
          <motion.div 
            key={service.id} 
            className={`vc-section-item ${index % 2 !== 0 ? 'reversed' : ''}`}
            variants={itemVariants}
          >
            <div className="vc-text-content">
              <div className="vc-section-label">
                {service.icon} {service.label}
              </div>
              <h2 className="vc-section-title">{service.title}</h2>
              <p className="vc-section-description">
                <strong>{service.description}</strong>
              </p>
              <p className="vc-section-description">
                {service.detailedDescription}
              </p>
              
              <div className="vc-feature-list">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="vc-feature-item">
                    <CheckCircle2 size={16} className="vc-feature-bullet" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="vc-visual-content">
              <video 
                src={service.video} 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="vc-visual-video"
              />
              <div className="vc-visual-overlay"></div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer CTA */}
      <section className="vc-footer-cta">
        <motion.div 
          className="vc-cta-card"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="vc-cta-title">Ready to Transform Your Collaboration?</h2>
          <p className="vc-cta-text">
            Arthyme delivers custom-engineered Video Conferencing solutions that fit your scale and ambition. 
            Schedule a demonstration with our experts today.
          </p>
          <Link to="/contact" className="vc-btn">
            Connect With Our Experts <ArrowRight size={20} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default VideoConferencing;
