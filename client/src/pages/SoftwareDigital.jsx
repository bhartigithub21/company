import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Activity, Server, Smartphone, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { sections } from './softwarepagesections';

const SoftwareDigital = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

 

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="relative pt-[160px] pb-20">





    <div className="container relative z-10 text-center">
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
  >
    <div className="flex flex-col items-center h-[20vh]">
      <h1 className="text-5xl md:text-7xl font-bold mb-6">
        <span className="text-gradient">Software & Digital</span>
        <br />
        <span className="text-white">Solutions</span>
      </h1>
    </div>
  </motion.div>


          
          <motion.p 
            className="text-xl text-slate-300 max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Empowering modern institutions with next-generation digital tools. 
            From campus automation to smart healthcare, we build the infrastructure for a connected future.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link to="/contact" className="btn btn-primary">
              Get Started <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
        
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] -z-10" />
      </section>

      {/* Detailed Sections */}
      <div className="container pb-24 space-y-32">
        {sections.map((section, index) => (
          <motion.div 
            key={section.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
          >
            {/* Content Side */}
            <div className="flex-1 space-y-6">
              <div 
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 mb-4 text-[#00f0ff]"
                style={{ color: section.color }}
              >
                {section.icon}
              </div>
              
              <h2 className="text-4xl font-bold">{section.title}</h2>
              <p className="text-lg text-slate-400 leading-relaxed">
                {section.desc}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {section.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-[#00f0ff] mt-1 shrink-0" />
                    <span className="text-slate-300 text-sm md:text-base">{feature}</span>
                  </div>
                ))}
              </div>

              {/* <div className="pt-6">
                 <Link to="/contact" className="btn btn-outline text-sm">
                   Request Demo
                 </Link>
              </div> */}
            </div>

            {/* Visual Side */}
            <div className="flex-1 w-full">
              <div className="relative aspect-video md:aspect-square bg-gradient-to-br from-white/5 to-transparent rounded-3xl border border-white/10 p-8 flex items-center justify-center overflow-hidden group">
                <div className="absolute inset-0 bg-[#00f0ff]/5 group-hover:bg-[#00f0ff]/10 transition-colors duration-500" />
                
                {/* Abstract UI Mockup */}
                <div className="relative z-10 w-3/4 h-3/4 bg-slate-900/90 rounded-xl border border-white/10 shadow-2xl p-6 transform group-hover:scale-105 transition-transform duration-500">
                  <div className="w-1/3 h-2 bg-slate-700 rounded-full mb-6" />
                  <div className="space-y-3">
                    <div className="w-full h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg" />
                    <div className="w-full h-16 bg-white/5 rounded-lg" />
                    <div className="w-2/3 h-16 bg-white/5 rounded-lg" />
                  </div>
                  
                  
                  
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SoftwareDigital;
