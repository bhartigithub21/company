import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Server, 
  Monitor, 
  Network, 
  Zap, 
  Video, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Settings,
  Cpu
} from 'lucide-react';

import './IThardwarenetworking.css';

// Importing image assets
import hardwareImg from '../assets/desktop,laptop,server.jpg';
import networkingImg from '../assets/networking and structured.jpg';
import powerImg from '../assets/ups, powerbackups.jpg';
import cctvImg from '../assets/cctv.jpg';
import supportImg from '../assets/it support.jpg';

const subservices = [
  {
    id: 'hardware',
    title: 'Servers, Desktops, Laptops',
    label: 'Computing Power',
    icon: <Cpu size={24} />,
    image: hardwareImg,
    description: 'High-performance computing solutions tailored for enterprise needs.',
    detailedDescription: 'From robust rack-mounted servers for your data center to high-end workstations and portable laptops for your mobile workforce, we provide the hardware that drives productivity. Our solutions include high-speed processors, scalable storage, and high-performance graphics, all serviced by our technical experts.',
    features: ['Enterprise Rack Servers', 'Performance Workstations', 'Business-Grade Laptops', 'Scalable Storage Solutions', 'High-Speed Memory Upgrades', 'Hardware lifecycle management']
  },
  {
    id: 'networking',
    title: 'Networking & Structured Cabling',
    label: 'Seamless Connectivity',
    icon: <Network size={24} />,
    image: networkingImg,
    description: 'Build a rock-solid foundation for your digital communications.',
    detailedDescription: 'We design and implement comprehensive networking infrastructures that ensure seamless data flow. Our expertise covers everything from Cat6/Cat7 cabling and fiber optics to enterprise-grade routers, switches, and secure Wi-Fi 6 deployments. We ensure your network is fast, reliable, and future-ready.',
    features: ['Optical Fiber Backbone', 'Cat6/Cat7 Data Cabling', 'Core & Edge Switching', 'Enterprise Wi-Fi 6', 'SD-WAN Implementation', 'Network Audit & Mapping']
  },
  {
    id: 'power',
    title: 'UPS, Racks, Power Backup',
    label: 'Reliable Uptime',
    icon: <Zap size={24} />,
    image: powerImg,
    description: 'Protect your critical infrastructure from power fluctuations and outages.',
    detailedDescription: 'Uptime is critical for any business. We provide end-to-end power protection solutions, including Online UPS systems, industrial Racks, and smart PDU (Power Distribution Units). Our power backup strategies ensure that your servers and networking equipment remain operational during power failures, preventing data loss and downtime.',
    features: ['Double-Conversion Online UPS', 'Smart Server Racks', 'PDU & Power Monitoring', 'Modular Battery Banks', 'Surge Protection Systems', 'Automatic Transfer Switches']
  },
  {
    id: 'cctv',
    title: 'CCTV & Surveillance Systems',
    label: 'Smart Security',
    icon: <Video size={24} />,
    image: cctvImg,
    description: 'Advanced monitoring and security for your physical premises.',
    detailedDescription: 'Keep a watchful eye on your assets with our state-of-the-art surveillance solutions. We install high-definition IP cameras, NVRs (Network Video Recorders) with AI-powered analytics, and integrated access control systems. Our solutions offer remote monitoring via mobile devices, motion alerts, and thermal imaging capabilities.',
    features: ['4K IP Surveillance Cameras', 'AI Video Analytics', 'Cloud-Based Recording', 'Mobile Remote View', 'Integrated Access Control', 'Night Vision & Thermal Sensing']
  },
  {
    id: 'support',
    title: 'AMC & IT Support Services',
    label: 'Enterprise Support',
    icon: <Settings size={24} />,
    image: supportImg,
    description: 'Proactive maintenance and reliable support for your entire IT estate.',
    detailedDescription: 'Focus on your core business while we handle your IT maintenance. Our Annual Maintenance Contracts (AMC) provide regular health checks, priority support, and rapid incident response. We offer both on-site and remote technical support to resolve hardware issues, software glitches, and network bottlenecks.',
    features: ['Comprehensive & Non-Comp AMC', 'Dedicated On-site Engineers', 'Remote Helpdesk 24/7', 'Preventive Maintenance', 'Asset Management', 'SLA-Driven Resolution']
  }
];

const IThardwarenetworking = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <div className="it-hw-page-container">
      {/* Hero Section */}
      <section className="it-hw-hero">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="it-hw-section-label">
            <Sparkles size={18} /> Enterprise Infrastructure
          </div>
          <h1 className="it-hw-hero-title">IT Hardware & <br />Networking Solutions</h1>
          <p className="it-hw-hero-subtitle">
            Powering your business with robust hardware and resilient networking. 
            We provide end-to-end technology infrastructure that scales with your ambition.
          </p>
        </motion.div>
      </section>

      {/* Main Sections */}
      <motion.div 
        className="it-hw-sections-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {subservices.map((service, index) => (
          <motion.div 
            key={service.id} 
            className={`it-hw-section-item ${index % 2 !== 0 ? 'reversed' : ''}`}
            variants={itemVariants}
          >
            <div className="it-hw-text-content">
              <div className="it-hw-section-label">
                {service.icon} {service.label}
              </div>
              <h2 className="it-hw-section-title">{service.title}</h2>
              <p className="it-hw-section-description">
                <strong>{service.description}</strong>
              </p>
              <p className="it-hw-section-description">
                {service.detailedDescription}
              </p>
              
              <div className="it-hw-feature-list">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="it-hw-feature-item">
                    <CheckCircle2 size={16} className="it-hw-feature-bullet" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="it-hw-visual-content">
              <motion.img 
                src={service.image} 
                alt={service.title}
                className="it-hw-visual-image"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
              <div className="it-hw-visual-overlay"></div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer CTA */}
      <section className="it-hw-footer-cta">
        <motion.div 
          className="it-hw-cta-card"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="it-hw-cta-title">Upgrade Your Infrastructure Today</h2>
          <p className="it-hw-cta-text">
            Arthyme provides turnkey IT infrastructure solutions designed for performance, security, and scalability. 
            Consult with our infrastructure specialists for a custom architecture plan.
          </p>
          <Link to="/contact" className="it-hw-btn">
            Get Technical Consultation <ArrowRight size={20} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default IThardwarenetworking;
