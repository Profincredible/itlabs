import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ServiceDetail from './pages/ServiceDetail';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Services />
              <About />
              <Contact />
            </>
          } />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;