import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Activity, Server, Smartphone, Users, Video, Wifi } from 'lucide-react';

const solutions = [
  { icon: <Monitor />, title: "College Management", desc: "End-to-end campus automation." },
  { icon: <Activity />, title: "Hospital Management", desc: "Digital healthcare records and operations." },
  { icon: <Server />, title: "ERP Solutions", desc: "Integrated resource planning." },
  { icon: <Smartphone />, title: "Mobile Apps", desc: "Custom iOS and Android applications." },
  { icon: <Users />, title: "Smart Classrooms", desc: "Interactive learning environments." },
  { icon: <Video />, title: "Video Conferencing", desc: "Hybrid meeting solutions." },
];

const Solutions = () => {
  return (
    <div className="page-container" style={{ paddingTop: '100px' }}>
      <div className="container">
        <motion.h1 
          className="text-gradient"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Our Solutions
        </motion.h1>
        <p className="hero-desc">Comprehensive digital tools for modern institutions.</p>

        <div className="services-grid section">
          {solutions.map((s, index) => (
            <motion.div 
              key={index}
              className="service-card glass hover-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="card-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;
