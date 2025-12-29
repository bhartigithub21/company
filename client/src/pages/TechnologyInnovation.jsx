import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cloud, Cpu, Shield, Zap, Layers, Code, Globe, Terminal } from 'lucide-react';
import './TechnologyInnovation.css';

// Import Video Assets
import aiVideo from '../assets/ai.webm';
import cloudVideo from '../assets/cloud.webm';
import secureVideo from '../assets/secure.webm';

const TechnologyInnovation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const stackItems = [
    { name: 'Cloud Architecture', icon: <Cloud />, level: 'AWS / Azure / GCP' },
    { name: 'Intelligence', icon: <Cpu />, level: 'AI & Machine Learning' },
    { name: 'Scalability', icon: <Layers />, level: 'Microservices & K8s' },
    { name: 'Security', icon: <Shield />, level: 'Enterprise Grade' }
  ];

  return (
    <div className="tech-page-container">
      {/* Hero Section */}
      <section className="tech-hero">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="tech-hero-title">Technology & Innovation</h1>
          <p className="tech-hero-subtitle">
            Pioneering the next generation of digital infrastructure. We harness the power of AI, Cloud, and IoT to build resilient gateways for modern enterprises.
          </p>
        </motion.div>
      </section>

      {/* Cloud & AI Section */}
      <section className="tech-section">
        <motion.div className="tech-content" {...fadeIn}>
          <span className="tech-tag">Next-Gen Intelligence</span>
          <h2 className="tech-title">Cloud, AI & IoT Automation</h2>
          <p className="tech-description">
            Integrating advanced AI models with robust cloud environments to create self-optimizing ecosystems. Our IoT automation framework connects legacy systems with modern intelligence, enabling real-time responsiveness and predictive maintenance.
          </p>
          <div className="tech-features">
            <div className="tech-feature-item"><Zap size={20} /> Intelligent Automation</div>
            <div className="tech-feature-item"><Globe size={20} /> Edge Computing</div>
            <div className="tech-feature-item"><Cpu size={20} /> Neural Networks</div>
            <div className="tech-feature-item"><Cloud size={20} /> Hybrid Cloud Sync</div>
          </div>
        </motion.div>
        <motion.div 
          className="tech-visual"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <video 
            src={cloudVideo} 
            className="tech-video" 
            autoPlay loop muted playsInline 
          />
        </motion.div>
      </section>

      {/* Security Section */}
      <section className="tech-section">
        <motion.div className="tech-content" {...fadeIn}>
          <span className="tech-tag">Fortified Infrastructure</span>
          <h2 className="tech-title">Secure & Scalable Architecture</h2>
          <p className="tech-description">
            Security is at the core of our blueprint. We design scalable architectures that protect your data while growing with your ambitions. From zero-trust protocols to high-availability clusters, we ensure your business never stops.
          </p>
          <div className="tech-features">
            <div className="tech-feature-item"><Shield size={20} /> Zero-Trust Security</div>
            <div className="tech-feature-item"><Layers size={20} /> Load Balancing</div>
            <div className="tech-feature-item"><Terminal size={20} /> Data Encryption</div>
            <div className="tech-feature-item"><Code size={20} /> Audited Compliance</div>
          </div>
        </motion.div>
        <motion.div 
          className="tech-visual"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <video 
            src={secureVideo} 
            className="tech-video" 
            autoPlay loop muted playsInline 
          />
        </motion.div>
      </section>

      {/* AI Visual Section */}
      <section className="tech-section">
        <motion.div className="tech-content" {...fadeIn}>
          <span className="tech-tag">Deep Learning</span>
          <h2 className="tech-title">The Future of Automation</h2>
          <p className="tech-description">
            Our AI-driven solutions empower businesses to analyze complex datasets and automate decision-making processes. By leveraging machine learning at the edge, we reduce latency and maximize efficiency in every operation.
          </p>
        </motion.div>
        <motion.div 
          className="tech-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <video 
            src={aiVideo} 
            className="tech-video" 
            autoPlay loop muted playsInline 
          />
        </motion.div>
      </section>

      {/* Tech Stack Visual Diagrams Section */}
      <section className="tech-stack-section">
        <motion.h2 className="tech-title" {...fadeIn}>Our High-Performance Tech Stack</motion.h2>
        <div className="tech-stack-grid">
          {stackItems.map((item, index) => (
            <motion.div 
              key={index}
              className="stack-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="stack-icon-box">
                {item.icon}
              </div>
              <h3 className="stack-name">{item.name}</h3>
              <p className="stack-level">{item.level}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TechnologyInnovation;
