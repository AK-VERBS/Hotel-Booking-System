
'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('bookings');

  const bookings = [
    {
      id: 1,
      hotel: 'Grand Plaza Hotel',
      location: 'New York, NY',
      checkIn: '2024-03-15',
      checkOut: '2024-03-18',
      status: 'confirmed',
      total: 897,
      image: 'https://readdy.ai/api/search-image?query=Luxury%20modern%20hotel%20exterior%20with%20glass%20facade%20and%20elegant%20entrance%2C%20upscale%20architectural%20design%2C%20professional%20photography%20with%20warm%20lighting%2C%20contemporary%20building%20with%20sophisticated%20details%2C%20urban%20setting%20with%20landscaped%20surroundings%2C%20high-end%20hospitality%20venue%20with%20welcoming%20atmosphere&width=300&height=200&seq=dash-hotel1&orientation=landscape'
    },
    {
      id: 2,
      hotel: 'Seaside Resort',
      location: 'Miami, FL',
      checkIn: '2024-04-10',
      checkOut: '2024-04-14',
      status: 'pending',
      total: 796,
      image: 'https://readdy.ai/api/search-image?query=Beautiful%20beachfront%20resort%20hotel%20with%20palm%20trees%20and%20ocean%20view%2C%20tropical%20paradise%20setting%2C%20white%20sand%20beach%2C%20luxury%20resort%20architecture%20with%20modern%20amenities%2C%20sunset%20lighting%2C%20relaxing%20vacation%20atmosphere%2C%20coastal%20luxury%20hospitality&width=300&height=200&seq=dash-hotel2&orientation=landscape'
    }
  ];

  const favorites = [
    {
      id: 1,
      name: 'Mountain Lodge',
      location: 'Aspen, CO',
      price: 399,
      rating: 4.9,
      image: 'https://readdy.ai/api/search-image?query=Cozy%20mountain%20lodge%20hotel%20surrounded%20by%20snow-capped%20peaks%2C%20rustic%20wooden%20architecture%2C%20alpine%20setting%2C%20warm%20interior%20lighting%2C%20ski%20resort%20atmosphere%2C%20luxury%20cabin%20style%20accommodation%2C%20winter%20wonderland%20backdrop&width=300&height=200&seq=dash-fav1&orientation=landscape'
    },
    {
      id: 2,
      name: 'City Center Hotel',
      location: 'Chicago, IL',
      price: 179,
      rating: 4.5,
      image: 'https://readdy.ai/api/search-image?query=Modern%20downtown%20hotel%20building%20with%20city%20skyline%20backdrop%2C%20urban%20architecture%2C%20glass%20and%20steel%20construction%2C%20busy%20metropolitan%20area%2C%20professional%20business%20hotel%2C%20contemporary%20design%2C%20evening%20city%20lights&width=300&height=200&seq=dash-fav2&orientation=landscape'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-2 text-gray-600">Welcome back, John! Manage your bookings and preferences.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full">
                <i className="ri-hotel-line text-xl text-blue-600"></i>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Bookings</p>
                <p className="text-2xl font-bold text-gray-900">12</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-full">
                <i className="ri-check-line text-xl text-green-600"></i>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Confirmed</p>
                <p className="text-2xl font-bold text-gray-900">8</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 flex items-center justify-center bg-yellow-100 rounded-full">
                <i className="ri-time-line text-xl text-yellow-600"></i>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Pending</p>
                <p className="text-2xl font-bold text-gray-900">3</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 flex items-center justify-center bg-red-100 rounded-full">
                <i className="ri-money-dollar-circle-line text-xl text-red-600"></i>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Spent</p>
                <p className="text-2xl font-bold text-gray-900">$4,320</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('bookings')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'bookings'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                My Bookings
              </button>
              <button
                onClick={() => setActiveTab('favorites')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'favorites'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Favorites
              </button>
              <button
                onClick={() => setActiveTab('profile')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'profile'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Profile
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'bookings' && (
              <div className="space-y-4">
                {bookings.map((booking) => (
                  <div key={booking.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center space-x-4">
                      <img 
                        src={booking.image} 
                        alt={booking.hotel}
                        className="w-24 h-16 object-cover object-top rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{booking.hotel}</h3>
                        <p className="text-gray-600 flex items-center">
                          <div className="w-4 h-4 flex items-center justify-center mr-1">
                            <i className="ri-map-pin-line text-sm"></i>
                          </div>
                          {booking.location}
                        </p>
                        <p className="text-sm text-gray-500">
                          {booking.checkIn} - {booking.checkOut}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(booking.status)}`}>
                          {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                        </span>
                        <p className="text-lg font-bold text-gray-900 mt-1">${booking.total}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'favorites' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {favorites.map((hotel) => (
                  <div key={hotel.id} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                    <img 
                      src={hotel.image} 
                      alt={hotel.name}
                      className="w-full h-48 object-cover object-top"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-2">{hotel.name}</h3>
                      <p className="text-gray-600 mb-2 flex items-center">
                        <div className="w-4 h-4 flex items-center justify-center mr-1">
                          <i className="ri-map-pin-line text-sm"></i>
                        </div>
                        {hotel.location}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-4 h-4 flex items-center justify-center mr-1">
                            <i className="ri-star-fill text-yellow-400 text-sm"></i>
                          </div>
                          <span className="text-sm font-medium">{hotel.rating}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-xl font-bold text-blue-600">${hotel.price}</span>
                          <span className="text-gray-500 text-sm">/night</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'profile' && (
              <div className="max-w-2xl">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        defaultValue="John"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        defaultValue="Doe"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      defaultValue="john.doe@example.com"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      defaultValue="+1 (555) 123-4567"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
                    >
                      Update Profile
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
