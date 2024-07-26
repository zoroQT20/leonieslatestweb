import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Background from './components/Background';
import Header from './components/Header';
import Cards from './components/Cards';

const App: React.FC = () => {
  return (
    <div className="App flex flex-col min-h-screen relative">
      <Background />
      <div className="relative z-10 flex flex-col flex-grow">
        <Navbar />
        <Header />
        <div className="flex-grow">
          <Cards />
        </div>
        <Footer />
      </div>
      
    </div>
  );
}

export default App;
