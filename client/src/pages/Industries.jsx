import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Activity, Landmark, Building2, Newspaper, ChevronRight, X, CheckCircle2 } from 'lucide-react';
import './Industries.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const industries = [
  {
    id: 'education',
    title: 'Education',
    icon: <GraduationCap size={32} />,
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop',
    desc: 'Empowering institutions with smart campus solutions, attendance systems, and digital learning platforms.',
    features: ['Smart Attendance', 'E-Learning Integration', 'Campus Management'],
    detailedContent: {
      overview: 'We transform traditional educational institutions into smart, digital-first campuses. Our solutions focus on automating administrative tasks while enhancing the learning experience for students and educators alike.',
      solutions: [
        { title: 'Smart Campus IoT', desc: 'Integrated sensor networks for automated lighting, climate control, and security optimization.' },
        { title: 'Digital LMS', desc: 'Comprehensive learning management system with real-time progress tracking and Al-driven insights.' },
        { title: 'Biometric Attendance', desc: 'Secure and touchless attendance systems for students and faculty using facial recognition.' },
        { title: 'Digital Library', desc: 'Cloud-based repository for educational resources with advanced search and indexing.' },
        { title: 'AI Proctoring', desc: 'Automated exam monitoring solutions to ensure academic integrity in remote learning.' },
        { title: 'Campus Navigation', desc: 'AR-based indoor navigation systems to help students find classrooms and facilities.' },
        { title: 'Virtual Classrooms', desc: 'High-definition video integrated learning environments with collaborative whiteboards.' },
        { title: 'Parent Portal', desc: 'Real-time communication bridge between educational institutions and parents.' }
      ]
    }
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    icon: <Activity size={32} />,
    image: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=1000&auto=format&fit=crop',
    desc: 'Advanced hospital management systems and IoT-based patient monitoring for modern medical facilities.',
    features: ['Patient Records Management', 'Resource Optimization', 'Real-time Monitoring'],
    detailedContent: {
      overview: 'Our healthcare technologies bridge the gap between patient care and operational efficiency. We provide secure, data-driven platforms that empower medical professionals to deliver better outcomes.',
      solutions: [
        { title: 'Telemedicine Suite', desc: 'Secure video consultation and remote diagnostic tools for high-quality virtual care.' },
        { title: 'Smart HMS', desc: 'End-to-end hospital management from registration to AI-assisted billing and pharmacy.' },
        { title: 'Remote Patient Monitoring', desc: 'Wearable IoT devices for continuous tracking of vital signs with instant alerts.' },
        { title: 'Secure EHR', desc: 'Next-gen Electronic Health Records with high-level encryption and seamless interoperability.' },
        { title: 'Pharmacy Automation', desc: 'Robotic dispensing and inventory management systems to reduce medication errors.' },
        { title: 'Lab Information Systems', desc: 'Automated laboratory workflow from sample collection to digital report delivery.' },
        { title: 'Asset Tracking', desc: 'Real-time tracking of critical medical equipment using BLE and RFID technology.' },
        { title: 'Patient Engagement App', desc: 'Mobile solutions for appointment scheduling, reminders, and lab result access.' }
      ]
    }
  },
  {
    id: 'government',
    title: 'Government',
    icon: <Landmark size={32} />,
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2959c92?q=80&w=1000&auto=format&fit=crop',
    desc: 'Secure and efficient digital infrastructure for public services and administrative automation.',
    features: ['E-Governance', 'Public Infrastructure', 'Secure Data Systems'],
    detailedContent: {
      overview: 'We support public sector agencies in their digital transformation journey, focusing on transparency, security, and accessibility. Our e-governance solutions streamline service delivery to citizens.',
      solutions: [
        { title: 'Digital Service Portals', desc: 'One-stop platforms for citizen services, permits, and documentation tracking.' },
        { title: 'Secure DMS', desc: 'Tamper-proof Document Management Systems for secure government digital archives.' },
        { title: 'Smart City Infrastructure', desc: 'Data Analytics and IoT for urban planning, traffic control and resource management.' },
        { title: 'E-Procurement', desc: 'Transparent and automated bidding systems for government contracts and tenders.' },
        { title: 'Public Safety Analytics', desc: 'Al-powered systems for incident prediction and emergency response optimization.' },
        { title: 'Cybersecurity Framework', desc: 'Advanced threat protection for critical government data and digital assets.' },
        { title: 'Digital Identity', desc: 'Secure biometric-based digital identity for seamless access to public services.' },
        { title: 'G2C Communication', desc: 'Multi-channel citizen engagement platforms for feedback and information delivery.' }
      ]
    }
  },
  {
    id: 'corporate',
    title: 'Corporate',
    icon: <Building2 size={32} />,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop',
    desc: 'Comprehensive ERP solutions and smart office infrastructure for streamlined business operations.',
    features: ['Workflow Automation', 'Asset Tracking', 'Employee Management'],
    detailedContent: {
      overview: 'Helping modern enterprises scale through intelligent automation and data-driven insights. Our corporate solutions optimize internal workflows and enhance employee productivity.',
      solutions: [
        { title: 'Specialized ERP', desc: 'Custom enterprise resource planning modules for finance, HR, and project units.' },
        { title: 'Smart Workspace IoT', desc: 'Automated office environments for better resource utilization and energy saving.' },
        { title: 'Blockchain Supply Chain', desc: 'Transparent and traceable supply chain management systems for global operations.' },
        { title: 'Next-Gen HRMS', desc: 'Integrated payroll, performance tracking, and automated talent acquisition.' },
        { title: 'Business Intelligence', desc: 'Advanced data visualization and predictive analytics for strategic decision making.' },
        { title: 'Hybrid Work Solutions', desc: 'Secure remote access and collaboration tools for modern distributed workforces.' },
        { title: 'Cyber Security Operations', desc: '24/7 managed security services to protect corporate intellectual property.' },
        { title: 'Customer Experience Al', desc: 'Intelligent chatbots and CRM automation to enhance customer satisfaction.' }
      ]
    }
  },
  {
    id: 'media',
    title: 'Media & News',
    icon: <Newspaper size={32} />,
    image: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=1000&auto=format&fit=crop',
    desc: 'Scalable digital platforms and content management systems for modern media enterprises.',
    features: ['Content Distribution', 'Digital Archiving', 'Real-time News Feeds'],
    detailedContent: {
      overview: 'Empowering media houses with the tools to deliver content faster and more effectively. Our platforms are built for high scalability and real-time audience engagement.',
      solutions: [
        { title: 'Dynamic News CMS', desc: 'Low-latency content management for breaking news and rich multimedia.' },
        { title: 'Cloud Broadcasting', desc: 'Remote production and distribution infrastructure for modern media.' },
        { title: 'AI Audience Insights', desc: 'Real-time analytics to understand viewer behavior and content trends.' },
        { title: 'Asset Management', desc: 'Smart digital archiving with AI-powered search, tagging, and retrieval.' },
        { title: 'Ad-Tech Integration', desc: 'Automated ad placement and revenue optimization for digital platforms.' },
        { title: 'OTT Streaming', desc: 'High-performance video streaming solutions with multi-device compatibility.' },
        { title: 'Automated Reporting', desc: 'Al-driven news crawling and automated drafting for standard news reports.' },
        { title: 'Live Interaction', desc: 'Real-time polling and community engagement tools for live broadcasts.' }
      ]
    }
  }
];

const Industries = () => {
  const [selectedIndustry, setSelectedIndustry] = React.useState(null);

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="container">
          <motion.div 
            className="section-header text-center mb-12 max-w-3xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h1 className="text-gradient">Industries We Serve</h1>
            <p className="max-w-2xl mx-auto">
              Arthyme provides specialized technology services tailored to the unique requirements of diverse sectors, 
              driving digital transformation and operational excellence.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container pb-20">
        <motion.div 
          className="industries-grid"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {industries.map((industry) => (
            <IndustryCard 
              key={industry.id} 
              {...industry} 
              onLearnMore={() => setSelectedIndustry(industry)}
            />
          ))}
        </motion.div>
      </div>

      {selectedIndustry && (
        <IndustryModal 
          industry={selectedIndustry} 
          onClose={() => setSelectedIndustry(null)} 
        />
      )}
    </div>
  );
};

const IndustryCard = ({ icon, title, desc, features, onLearnMore }) => (
  <motion.div 
    className="industry-card glass hover-card" 
    variants={fadeInUp}
    whileHover={{ scale: 1.02 }}
  >
    <div className="industry-icon-wrapper">
      {icon}
    </div>
    <h3>{title}</h3>
    <p>{desc}</p>
    <ul className="industry-features">
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
    <div className="mt-auto pt-6">
      <button 
        className="btn-text flex items-center gap-2 text-primary"
        onClick={onLearnMore}
      >
        Learn More <ChevronRight size={16} />
      </button>
    </div>
  </motion.div>
);

const IndustryModal = ({ industry, onClose }) => {
  if (!industry) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <motion.div 
        className="industry-modal glass"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>
        
        <div className="modal-header">
          <div className="industry-icon-wrapper modal-icon">
            {industry.icon}
          </div>
          <div className="modal-title-area">
            <h2>{industry.title} Services</h2>
            <p className="text-primary">Driving Digital Excellence</p>
          </div>
        </div>

        <div className="modal-body custom-scrollbar">
          <div className="modal-hero-image">
            <img src={industry.image} alt={industry.title} />
          </div>

          <section className="modal-section">
            <h4>Industry Overview</h4>
            <p>{industry.detailedContent.overview}</p>
          </section>

          <section className="modal-section">
            <h4>Key Solutions & Services</h4>
            <div className="solutions-grid expanded">
              {industry.detailedContent.solutions.map((sol, index) => (
                <div key={index} className="solution-item">
                  <div className="solution-head">
                    <CheckCircle2 size={18} className="text-primary" />
                    <h5>{sol.title}</h5>
                  </div>
                  <p>{sol.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="modal-footer">
          <button className="btn btn-primary" onClick={onClose}>Close Overview</button>
        </div>
      </motion.div>
    </div>
  );
};

export default Industries;

