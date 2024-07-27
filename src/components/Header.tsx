import React from 'react';
import headerPic from '../pictures/headerPic.png'; // Ensure the path is correct

const Header: React.FC = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${headerPic})`,
        backgroundSize: 'cover', // or 'contain' based on your requirement
        backgroundPosition: 'center', // Adjusts position of the image
        height: '600px', // Adjust the height as needed
      }}
      className="bg-gray-700 bg-blend-multiply mt-32"
    >
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
      <h1
        className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl"
        style={{ color: '#ffde59', fontFamily: 'Isidora Soft, sans-serif' }}
      >
        Leonidas Private Pool
      </h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
        <button
          className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          style={{ color: '#ffde59' }}
        >
          Get started
          <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </button>

        <button
          className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
          style={{ color: '#ffde59' }}
        >
          Learn more
        </button>
        </div>
      </div>
    </section>
  );
}

export default Header;
