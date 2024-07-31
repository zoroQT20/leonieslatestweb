import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import WaveLogo from '../pictures/wave logo.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path: string) => location.pathname === path ? 'text-[#ffde59] after:block after:w-full after:h-0.5 after:bg-[#ffde59] after:absolute after:left-0 after:bottom-0' : 'text-white';

  return (
    <nav className="bg-gray-900 border-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={WaveLogo} className="h-8" alt="Leonidas Logo" />
          <span 
            className="self-center text-2xl font-semibold whitespace-nowrap" 
            style={{ color: '#ffde59', fontFamily: 'Isidora Soft, sans-serif' }}
          >
            Leonida's
          </span>
        </a>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-dropdown"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div className={`w-full md:block md:w-auto ${isOpen ? 'block' : 'hidden'}`} id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-900 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <a 
                href="/" 
                className={`block py-2 px-3 relative rounded hover:bg-[#ffde59] hover:text-gray-900 md:hover:bg-transparent md:border-0 md:hover:text-[#ffde59] md:p-0 ${isActive('/')}`}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="/about" 
                className={`block py-2 px-3 relative rounded hover:bg-[#ffde59] hover:text-gray-900 md:hover:bg-transparent md:border-0 md:hover:text-[#ffde59] md:p-0 ${isActive('/about')}`}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="/contact" 
                className={`block py-2 px-3 relative rounded hover:bg-[#ffde59] hover:text-gray-900 md:hover:bg-transparent md:border-0 md:hover:text-[#ffde59] md:p-0 ${isActive('/contact')}`}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
