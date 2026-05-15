import React from 'react';
import FleetCard from './FleetCard';

const Home = () => {
  const cars = [
    { image: 'https://via.placeholder.com/300', make: 'Toyota', model: 'Camry', description: 'Sedan' },
    { image: 'https://via.placeholder.com/300', make: 'Honda', model: 'Civic', description: 'Sedan' },
    { image: 'https://via.placeholder.com/300', make: 'Ford', model: 'Mustang', description: 'Sports Car' }
  ];

  return (
    <div className="container mx-auto my-4 p-4">
      <h1 className="text-3xl font-bold">Our Fleet</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cars.map((car, index) => (
          <FleetCard key={index} image={car.image} make={car.make} model={car.model} description={car.description} />
        ))}
      </div>
    </div>
  );
};

export default Home;