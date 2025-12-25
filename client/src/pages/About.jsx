import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Eye, Target, Gem, History, Shield, Users, Globe, Building2 } from 'lucide-react';
import './About.css';

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const timelineData = [
    {
      year: "2020",
      title: "The Genesis",
      description: "Founded with a vision to revolutionize institutional technology through smart infrastructure.",
      icon: <Target className="w-6 h-6" />
    },
    {
      year: "2021",
      title: "First Milestone",
      description: "Successfully deployed our first large-scale campus automation system for a premier university.",
      icon: <Building2 className="w-6 h-6" />
    },
    {
      year: "2022",
      title: "Innovation Hub",
      description: "Established our R&D center focused on IoT and AI-driven institutional management.",
      icon: <Gem className="w-6 h-6" />
    },
    {
      year: "2023",
      title: "Global Reach",
      description: "Expanded operations to 5+ countries, partnering with government and corporate entities.",
      icon: <Globe className="w-6 h-6" />
    },
    {
      year: "2024",
      title: "Future Ready",
      description: "Launching next-gen smart city solutions for sustainable institutional development.",
      icon: <History className="w-6 h-6" />
    }
  ];

  const values = [
    {
      title: "Integrity",
      description: "We uphold the highest standards of integrity in all of our actions.",
      icon: <Shield className="text-primary" />
    },
    {
      title: "Innovation",
      description: "We are committed to continuous innovation and excellence.",
      icon: <Gem className="text-primary" />
    },
    {
      title: "Collaboration",
      description: "We believe in the power of working together to achieve greatness.",
      icon: <Users className="text-primary" />
    }
  ];

  const stats = [
    { number: "150+", label: "Projects Delivered" },
    { number: "50+", label: "Institutional Partners" },
    { number: "10+", label: "Global Awards" },
    { number: "5+", label: "Countries Present" }
  ];

  return (
    <div className="page-container" ref={containerRef}>
      {/* Hero Section */}
      <section className="section page-header">
        <div className="container">
          <motion.h1 
            className="text-gradient mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Pioneering Institutional Excellence
          </motion.h1>
          <motion.p 
            className="text-secondary max-w-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Arthyme Private Limited is a technology-driven IT solutions company delivering enterprise-grade software, smart infrastructure, and IoT solutions for institutions and large organizations across India. We focus on building secure, scalable, and future-ready digital ecosystems.
          </motion.p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section bg-card">
        <div className="container">
          <div className="grid-2">
            <motion.div 
              className="glass p-8 rounded-3xl hover-card"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-4 p-3 bg-primary/10 rounded-xl w-fit">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl mb-4">Our Vision</h2>
              <p>To be the global benchmark for institutional intelligence, creating environments where technology seamlessly enhances human potential and organizational efficiency.</p>
            </motion.div>

            <motion.div 
              className="glass p-8 rounded-3xl hover-card"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-4 p-3 bg-primary/10 rounded-xl w-fit">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl mb-4">Our Mission</h2>
              <p>To deliver innovative, secure, and sustainable technology solutions that transform how institutions operate, learn, and grow in a rapidly evolving digital world.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-gradient">Our Core Values</h2>
            <p className="text-secondary">The principles that guide every decision we make.</p>
          </div>
          <div className="grid-3">
            {values.map((v, i) => (
              <motion.div 
                key={i}
                className="glass p-8 rounded-3xl text-center hover-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-primary/10 rounded-2xl">
                    {React.cloneElement(v.icon, { size: 32 })}
                  </div>
                </div>
                <h3 className="text-2xl mb-4">{v.title}</h3>
                <p className="text-secondary text-sm">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Experience */}
      <section className="section glass">
        <div className="container">
          <div className="grid-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="/assets/hero-visual.png" 
                alt="Institutional Tech" 
                className="rounded-3xl shadow-2xl w-full object-cover"
                onError={(e) => e.target.src = 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200'}
              />
            </motion.div>
            <div>
              <h2 className="mb-6">Institutional Focus</h2>
              <p className="mb-6">With over a decade of collective experience, we specialize in high-stakes environments where reliability is non-negotiable. Our solutions are built to scale, serving thousands of users simultaneously across distributed infrastructures.</p>
              <ul className="space-y-4">
                {['Scalable Architecture', 'Military-Grade Security', 'Real-time Analytics', 'Cross-Platform Integration'].map((item, i) => (
                  <motion.li 
                    key={i}
                    className="flex items-center gap-3 text-secondary"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-gradient text-4xl">Our Journey</h2>
            <p className="text-secondary">Evolution of Arthyme through the years.</p>
          </div>
          
          <div className="timeline-container">
            <div className="timeline-line" />
            <motion.div 
              className="timeline-progress"
              style={{ scaleY: scaleX }}
            />
            
            {timelineData.map((item, index) => (
              <div key={index} className="timeline-item">
                <motion.div 
                  className="timeline-content glass hover-card"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <span className="text-primary font-bold text-lg">{item.year}</span>
                  <h3 className="text-2xl mt-2 mb-3">{item.title}</h3>
                  <p className="text-secondary text-sm">{item.description}</p>
                </motion.div>
                
                <motion.div 
                  className="timeline-dot"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.4 }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators / Stats */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-gradient">Trust Indicators</h2>
            <p className="text-secondary">Our impact in numbers across the globe.</p>
          </div>
          
          <div className="stats-grid">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                className="stat-card glass hover-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
