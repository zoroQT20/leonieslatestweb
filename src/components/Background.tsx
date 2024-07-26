import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-900 opacity-90"></div>
      <div className="absolute inset-0 backdrop-blur-md"></div>
    </div>
  );
}

export default Background;
