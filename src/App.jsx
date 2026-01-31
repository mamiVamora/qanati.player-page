import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Hero from './sections/Hero';
import Trust from './sections/Trust';
import WhyUs from './sections/WhyUs';
import Features from './sections/Features';
import Downloads from './sections/Downloads';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import IPPolicy from './pages/IPPolicy';
import './styles/global.css';

// الصفحة الرئيسية
const HomePage = () => (
  <>
    <Hero />
    <Trust />
    <WhyUs />
    <Features />
    <Downloads />
  </>
);

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/ip-policy" element={<IPPolicy />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
