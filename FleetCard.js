import React from 'react';

const FleetCard = ({ image, make, model, description }) => {
  return (
    <div className="max-w-sm mx-auto my-4 p-4 bg-white rounded-lg shadow-md">
      <img src={image} alt="Fleet Car" className="w-full h-48 object-cover"/>
      <div className="mt-4">
        <h2 className="text-lg font-bold'>{make} {model}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default FleetCard;