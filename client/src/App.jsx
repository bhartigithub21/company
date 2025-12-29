import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import TechnologyInnovation from "./pages/TechnologyInnovation";
import Industries from "./pages/Industries";
import Contact from "./pages/Contact";
import SmartInfrastructure from "./pages/SmartInfrastructure"; 
import VideoConferencing from "./pages/VideoConferencing";
import IThardwarenetworking from "./pages/IThardwarenetworking";
import Technology from "./pages/Technology";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import SoftwareDigital from "./pages/SoftwareDigital";
import IoTSmart from "./pages/IoTSmart";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

import AnimatedBackground from "./components/layout/AnimatedBackground";
import ScheduleMeeting from "./pages/ScheduleMeeting";

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
            <Route path="/services" element={<Services />} />
            <Route
              path="/technology-innovation"
              element={<TechnologyInnovation />}
            />
            <Route path="/industries" element={<Industries />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/smart-infrastructure" element={<SmartInfrastructure />} /> */}
            <Route
  path="/services/smart-infrastructure"
  element={<SmartInfrastructure />}
/>

            <Route path="/services/video-conferencing" element={<VideoConferencing />} />
            <Route
              path="/services/it-hardware"
              element={<IThardwarenetworking />}
            />
            <Route path="/technology" element={<Technology />} />
            <Route
              path="/services/software-digital"
              element={<SoftwareDigital />}
            />
            <Route path="/services/iot-smart" element={<IoTSmart />} />

            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/schedule" element={<ScheduleMeeting />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
