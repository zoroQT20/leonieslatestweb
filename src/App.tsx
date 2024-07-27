import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Background from './components/Background';
import Header from './components/Header';
import Cards from './components/Cards';
import About from './user/About';
import Contact from './user/Contact';

const App: React.FC = () => {
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
      </div>
    </Router>
  );
}

export default App;
