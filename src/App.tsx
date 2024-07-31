import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Background from './components/Background';
import Header from './components/Header';
import Cards from './components/Cards';
import About from './user/About';
import Contact from './user/Contact';
import ContactForm from './components/ContactForm';
import { SpeedInsights } from '@vercel/speed-insights/react';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Router>
      <div className="App flex flex-col min-h-screen relative">
        <Background />
        <Routes>
          <Route 
            path="/" 
            element={
              <div className="relative z-10 flex flex-col flex-grow">
                <Navbar />
                <Header />
                <main className="flex-grow">
                  <Cards />
                </main>
                <Footer />
              </div>
            } 
          />
          <Route 
            path="/about" 
            element={
              <div className="relative z-10 flex flex-col min-h-screen">
                <Navbar />
                <div className="flex-grow">
                  <About />
                </div>
                <Footer />
              </div>
            } 
          />
          <Route 
            path="/contact" 
            element={
              <div className="relative z-10 flex flex-col min-h-screen">
                <Navbar />
                <div className="flex-grow">
                  <Contact />
                </div>
                <Footer />
              </div>
            } 
          />
        </Routes>
        <button
          onClick={openModal}
          className="fixed bottom-4 right-4 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#ffde59] text-white shadow-lg hover:shadow-xl focus:outline-none"
        >
          <span className="text-2xl">💬</span>
        </button>
        {isModalOpen && <ContactForm closeModal={closeModal} />}
        <SpeedInsights />
      </div>
    </Router>
  );
}

export default App;
