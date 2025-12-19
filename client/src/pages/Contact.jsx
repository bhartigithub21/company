import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = React.useState('idle'); // idle, loading, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  return (
    <div className="page-container contact-page">
      <div className="container">
        <motion.h1 
          className="text-gradient text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Get in Touch
        </motion.h1>
        <motion.p 
          className="text-center section-desc"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Have a project in mind? Let's build the future together.
        </motion.p>
        
        <div className="contact-grid">
          {/* Contact Info & Map */}
          <motion.div 
            className="contact-info-col"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="info-card glass">
                <h3>Contact Information</h3>
                <div className="contact-details">
                    <div className="contact-item">
                        <div className="icon-box"><MapPin size={24} /></div>
                        <div>
                            <h4>Our Office</h4>
                            <p>123 Tech Park, Innovation City<br />Bangalore, India - 560100</p>
                        </div>
                    </div>
                    <div className="contact-item">
                        <div className="icon-box"><Phone size={24} /></div>
                        <div>
                            <h4>Phone</h4>
                            <p>+91 98765 43210</p>
                        </div>
                    </div>
                    <div className="contact-item">
                        <div className="icon-box"><Mail size={24} /></div>
                        <div>
                            <h4>Email</h4>
                            <p>contact@arthyme.com</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Map Integration */}
            <div className="map-container glass">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.001691424683!2d77.61876587489374!3d12.971891487343467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1709230000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="contact-form-col"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <form className="contact-form glass" onSubmit={handleSubmit}>
              <h3>Send Message</h3>
              {status === 'success' && (
                <div className="alert-success" style={{ color: 'green', marginBottom: '1rem' }}>
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="alert-error" style={{ color: 'red', marginBottom: '1rem' }}>
                  Something went wrong. Please try again.
                </div>
              )}
              
              <div className="form-group">
                <label>Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe" 
                  required 
                />
                <div className="focus-border"></div>
              </div>
              <div className="form-group">
                <label>Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com" 
                  required 
                />
                <div className="focus-border"></div>
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry" 
                />
                <div className="focus-border"></div>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5" 
                  placeholder="Tell us about your project..." 
                  required
                ></textarea>
                <div className="focus-border"></div>
              </div>
              <button 
                type="submit" 
                className="btn btn-primary w-full"
                disabled={status === 'loading'}
              >
                <span>{status === 'loading' ? 'Sending...' : 'Send Message'}</span> <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
