import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Globe, Cpu, Server, Shield, Activity, Wifi } from 'lucide-react';
import './InteractiveVisual.css';

const InteractiveVisual = ({ variant = 'globe' }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 20]);

  if (variant === 'globe') {
    return (
      <motion.div ref={containerRef} className="visual-container globe-visual" style={{ y, rotateX: rotate }}>
        <div className="hologram-base"></div>
        <motion.div 
          className="globe-core"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Globe size={300} strokeWidth={0.5} className="globe-icon" />
          <div className="orbital-ring ring-1"></div>
          <div className="orbital-ring ring-2"></div>
          <div className="orbital-ring ring-3"></div>
        </motion.div>
        
        {/* Floating Elements */}
        <FloatingIcon icon={<Server />} cx={-120} cy={-50} delay={0} />
        <FloatingIcon icon={<Shield />} cx={120} cy={-80} delay={1} />
        <FloatingIcon icon={<Wifi />} cx={0} cy={140} delay={2} />
      </motion.div>
    );
  }

  if (variant === 'hud') {
    return (
      <motion.div ref={containerRef} className="visual-container hud-visual" style={{ y }}>
        <div className="hud-frame">
          <div className="hud-header">
             <span className="hud-title">SYSTEM STATUS: ONLINE</span>
             <Activity className="blink-icon" />
          </div>
          <div className="hud-grid">
             <div className="hud-panel panel-1">
                <h4>Energy Usage</h4>
                <div className="bar-chart">
                  {[60, 80, 45, 90, 70].map((h, i) => (
                    <motion.div 
                      key={i} 
                      className="bar" 
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 1, delay: i * 0.1, repeat: Infinity, repeatType: "reverse" }}
                    />
                  ))}
                </div>
             </div>
             <div className="hud-panel panel-2">
                <h4>Network Traffic</h4>
                <motion.div 
                  className="radar-scan"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
             </div>
             <div className="hud-panel panel-3">
               <h4>Active Nodes</h4>
               <div className="node-grid">
                 {[...Array(9)].map((_, i) => (
                   <motion.div 
                     key={i} 
                     className="node-dot"
                     animate={{ opacity: [0.3, 1, 0.3] }}
                     transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                   />
                 ))}
               </div>
             </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return null;
};

const FloatingIcon = ({ icon, cx, cy, delay }) => (
  <motion.div 
    className="floating-icon"
    initial={{ x: cx, y: cy }}
    animate={{ 
      y: [cy, cy - 20, cy],
      opacity: [0.6, 1, 0.6] 
    }}
    transition={{ 
      duration: 4, 
      delay: delay, 
      repeat: Infinity, 
      ease: "easeInOut" 
    }}
  >
    {icon}
  </motion.div>
);

export default InteractiveVisual;
