import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0">
      <div className="w-full h-full bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800"></div>
      <div className="absolute inset-0 backdrop-blur-md"></div>
    </div>
  );
}

export default Background;
