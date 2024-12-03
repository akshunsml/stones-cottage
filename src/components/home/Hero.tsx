import React from 'react';

export function Hero() {
  return (
    <div className="relative h-[80vh] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1571935441005-7c8cd80f2951?auto=format&fit=crop&q=80"
        alt="Stones Cottage Farm"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center h-full text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Stones Cottage Farm
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            A Family-Friendly Escape in Bronte Country! Explore nature, relax in comfort, and make memories with our unique farm stay experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://airbnb.com"
              className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
            >
              Book Now on Airbnb
            </a>
            <a
              href="/contact"
              className="inline-flex justify-center items-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-gray-900"
            >
              Contact Us Directly
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}