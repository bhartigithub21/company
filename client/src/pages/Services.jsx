import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Services.css';

const serviceCategories = [
  {
    id: 'software',
    title: 'Software & Digital Solutions',
    items: [
      { name: 'College Management System 💻', path: '/services/software-digital' },
      { name: 'Hospital Management System 🏥', path: '/services/software-digital' },
      { name: 'ERP Solutions 📊', path: '/services/software-digital' },
      { name: 'Custom Mobile Apps 📱', path: '/services/software-digital' }
    ]
  },
  {
    id: 'iot',
    title: 'IoT & Smart Solutions',
    items: [
      { name: 'IoT-based Smart Campus Solutions 🏫', path: '/services/iot-smart' },
      { name: 'Smart Attendance & Access Control 🔑', path: '/services/iot-smart' },
      { name: 'Sensor-based Monitoring Systems �', path: '/services/iot-smart' },
      { name: 'Energy Management & Asset Tracking ⚡', path: '/services/iot-smart' },
      { name: 'IoT dashboards with infographic-style visuals �', path: '/services/iot-smart' }
    ]
  },
  {
    id: 'infrastructure',
    title: 'Smart Class & Smart Infrastructure',
    items: [
      { name: 'Smart Classrooms 🎓', path: '/services/smart-infrastructure' },
      { name: 'Smart Meeting Rooms 🤝', path: '/services/smart-infrastructure' },
      { name: 'Auditoriums & Command Centers �️', path: '/services/smart-infrastructure' },
      { name: 'Interactive panels, digital podiums, AV automation 🖥️', path: '/services/smart-infrastructure' }
    ]
  },
  {
    id: 'video',
    title: 'Video Conferencing & Collaboration',
    items: [
      { name: 'Hybrid classrooms & meetings 📹', path: '/services/video-conferencing' },
      { name: 'VC cameras, microphones, controllers 🎙️', path: '/services/video-conferencing' },
      { name: 'Live streaming & recording solutions �', path: '/services/video-conferencing' }
    ]
  },
  {
    id: 'hardware',
    title: 'IT Hardware & Networking',
    items: [
      { name: 'Servers, desktops, laptops 💻', path: '/services/it-hardware' },
      { name: 'Networking & structured cabling 🌐', path: '/services/it-hardware' },
      { name: 'UPS, racks, power backup �', path: '/services/it-hardware' },
      { name: 'CCTV & surveillance systems �', path: '/services/it-hardware' },
      { name: 'AMC & IT support services �️', path: '/services/it-hardware' }
    ]
  }
];

const Services = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleCategory = (id) => {
    setActiveCategory(activeCategory === id ? null : id);
  };

  return (
    <div className="page-container">
      <div className="container page-header">
        <motion.h1 
          className="text-gradient"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Our Expertise
        </motion.h1>
        <p className="max-w-2xl mx-auto">Navigate our comprehensive ecosystem of digital solutions.</p>

        <div className="services-nav-container section">
          {serviceCategories.map((category, index) => (
            <motion.div 
              key={category.id}
              className={`service-category ${activeCategory === category.id ? 'active' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setActiveCategory(category.id)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              <button 
                className="category-header"
                onClick={() => toggleCategory(category.id)}
                aria-expanded={activeCategory === category.id}
              >
                <span className="category-title">{category.title}</span>
                <ChevronDown 
                  className={`category-icon ${activeCategory === category.id ? 'rotate-180' : ''}`} 
                  size={24}
                  style={{ transform: activeCategory === category.id ? 'rotate(180deg)' : 'rotate(0deg)' }}
                />
              </button>

              <AnimatePresence>
                {activeCategory === category.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div className="sub-services-list">
                      {category.items.map((item, i) => (
                        <Link to={item.path} key={i} className="sub-service-link">
                          <ArrowRight size={16} style={{ marginRight: '8px' }} />
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
