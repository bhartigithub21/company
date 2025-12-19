import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="page-container" style={{ paddingTop: '100px' }}>
      <div className="container">
        <motion.h1 
          className="text-gradient"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          About Arthyme
        </motion.h1>
        
        <div className="section">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="glass"
            style={{ padding: '2rem', borderRadius: '20px' }}
          >
            <h2>Our Vision</h2>
            <p>To be the global leader in institutional technology, bridging the gap between physical infrastructure and digital intelligence.</p>
            
            <h2 className="mt-4">Our Mission</h2>
            <p>Empowering organizations with secure, scalable, and smart solutions that drive efficiency and innovation.</p>
          </motion.div>
        </div>

        <div className="section">
          <h2>Our Journey</h2>
          <div className="timeline">
            {/* Timeline items would go here */}
            <div className="timeline-item">
              <h3>2020</h3>
              <p>Founded with a vision to transform campus technology.</p>
            </div>
            <div className="timeline-item">
              <h3>2022</h3>
              <p>Expanded to IoT and Smart Infrastructure solutions.</p>
            </div>
            <div className="timeline-item">
              <h3>2024</h3>
              <p>Partnered with major universities and government bodies.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
