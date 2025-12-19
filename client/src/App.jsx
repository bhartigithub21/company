import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Solutions from './pages/Solutions';
import IoT from './pages/IoT';
import Industries from './pages/Industries';
import Contact from './pages/Contact';
import SmartClass from './pages/SmartClass';
import VideoConferencing from './pages/VideoConferencing';
import Infrastructure from './pages/Infrastructure';
import Technology from './pages/Technology';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

import AnimatedBackground from './components/layout/AnimatedBackground';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AnimatedBackground />
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/iot" element={<IoT />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/smart-class" element={<SmartClass />} />
            <Route path="/video-conferencing" element={<VideoConferencing />} />
            <Route path="/infrastructure" element={<Infrastructure />} />
            <Route path="/technology" element={<Technology />} />
            
            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
