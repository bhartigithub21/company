import React from 'react';
import { motion } from 'framer-motion';
import InteractiveVisual from '../components/ui/InteractiveVisual';

const TechnologyInnovation = () => {
  return (
    <div className="page-container">
      <div className="container page-header">
        <motion.h1 
          className="text-gradient"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Technology & Innovation
        </motion.h1>
        
        <div className="section iot-container">
          <div>
            <h2>Connecting the Physical & Digital Worlds</h2>
            <p className="mt-4">
              Our technology services bring intelligence to your infrastructure. From smart energy management to automated access control, we enable data-driven decision making.
            </p>
            <ul className="feature-list mt-4">
              <li>Smart Energy Monitoring</li>
              <li>Occupancy Sensors</li>
              <li>Environmental Controls</li>
              <li>Asset Tracking</li>
            </ul>
          </div>
          <div>
            <InteractiveVisual variant="hud" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyInnovation;
