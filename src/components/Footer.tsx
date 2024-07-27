import React from 'react';
import WaveLogo from '../pictures/wave logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white shadow dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src={WaveLogo} className="h-8" alt="Leonidas Logo" />
            <span 
              className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white" 
              style={{ color: '#ffde59', fontFamily: 'Isidora Soft, sans-serif' }}
            >
              Leonidas
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="/about" className="text-[#ffde59] hover:underline me-4 md:me-6">About</a>
            </li>
            <li>
            <a href="/contact" className="text-[#ffde59] hover:underline">Contact</a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          (2024) <a className="hover:underline">Malibong Matanda, Pandi, Bulacan</a>.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
