import React from 'react';
import { useNavigate } from 'react-router-dom';
import barber1 from '../assets/assets_frontend/barber1.jpg';
import barber2 from '../assets/assets_frontend/barber2.jpg';;
import barber3 from '../assets/assets_frontend/barber3.jpg';;

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-[70vh]" style={{ backgroundImage: `url(${barber1})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative flex flex-col items-center justify-center text-center text-white h-full">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Your Perfect Barber Awaits</h1>
          <p className="text-lg sm:text-xl max-w-lg">
            Discover top barbers near you for premium grooming services tailored to your needs.
          </p>
          <button
            onClick={() => navigate('/barbers')}
            className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Find Your Barber
          </button>
        </div>
      </div>

      {/* Featured Services */}
      <div className="py-12 px-6 sm:px-12 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="flex flex-col items-center bg-gray-100 p-6 rounded-md shadow">
            <img src={barber2} alt="Men's Haircut" className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold">Men's Haircuts</h3>
            <p className="text-sm text-gray-600 mt-2 text-center">
              Classic and modern styles tailored to enhance your look.
            </p>
          </div>
          <div className="flex flex-col items-center bg-gray-100 p-6 rounded-md shadow">
            <img src={barber3} alt="Beard Trimming" className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold">Beard Trimming</h3>
            <p className="text-sm text-gray-600 mt-2 text-center">
              Precision grooming to keep your beard looking sharp.
            </p>
          </div>
          <div className="flex flex-col items-center bg-gray-100 p-6 rounded-md shadow">
            <img src={barber1} alt="Styling for Women" className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold">Styling for Women</h3>
            <p className="text-sm text-gray-600 mt-2 text-center">
              Expert hairstyling for all occasions and preferences.
            </p>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default Home;
