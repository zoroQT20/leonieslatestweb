import React, { useEffect, useState } from 'react';
import image1 from '../pictures/1.jpg';
import image2 from '../pictures/2.jpg';
import image3 from '../pictures/3.jpg';
import image4 from '../pictures/4.jpg';
import image5 from '../pictures/5.jpg';
import image6 from '../pictures/6.jpg';

const Cards: React.FC = () => {
  const cardData = [
    { image: image1, title: "Swimming Pool Area Picture 1" },
    { image: image2, title: "Swimming Pool Area Picture 2" },
    { image: image3, title: "Bed Room Picture 1" },
    { image: image4, title: "Bed Room Picture 2" },
    { image: image5, title: "Smart TV with YouTube" },
    { image: image6, title: "Bed Room Picture 3" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex >= cardData.length - 2 ? 0 : prevIndex + 2
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [cardData.length]);

  return (
    <div className="my-4 mb-4"> {/* Adjust top and bottom margin */}
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="relative h-80">
          <div className="flex justify-center space-x-4">
            {cardData.slice(currentIndex, currentIndex + 2).map((card, index) => (
              <div key={index} className="flex-none w-1/2 transition-opacity duration-500 ease-in-out">
                <div className="rounded overflow-hidden shadow-lg flex flex-col h-full">
                  <div className="relative h-full">
                    <a href="#">
                      <img 
                        className="w-full h-80 object-cover" // Fixed height for all images
                        src={card.image} 
                        alt={card.title} 
                      />
                      <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                    </a>
                  </div>
                  <div className="px-6 py-4 mb-auto">
                    <a href="#" className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out mb-2">
                      {card.title}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
