
'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

interface HotelDetailsProps {
  hotelId: string;
}

export default function HotelDetails({ hotelId }: HotelDetailsProps) {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  const hotel = {
    id: hotelId,
    name: 'Grand Plaza Hotel',
    location: 'New York, NY',
    address: '123 Broadway, New York, NY 10001',
    rating: 4.8,
    reviews: 1234,
    description: 'Experience luxury at its finest in the heart of Manhattan. Our elegant hotel offers world-class amenities, exceptional service, and stunning city views.',
    amenities: ['Free WiFi', 'Pool', 'Fitness Center', 'Restaurant', 'Bar', 'Concierge', 'Room Service', 'Business Center'],
    images: [
      'https://readdy.ai/api/search-image?query=Luxury%20hotel%20lobby%20interior%20with%20marble%20floors%20and%20elegant%20chandeliers%2C%20sophisticated%20hospitality%20design%2C%20warm%20ambient%20lighting%2C%20grand%20reception%20area%2C%20upscale%20accommodation%20atmosphere%2C%20professional%20hotel%20photography%2C%20modern%20luxury%20interior%20architecture&width=800&height=600&seq=hotel-detail1&orientation=landscape',
      'https://readdy.ai/api/search-image?query=Elegant%20hotel%20room%20with%20king%20size%20bed%20and%20city%20view%2C%20modern%20interior%20design%2C%20comfortable%20accommodation%2C%20premium%20bedding%2C%20warm%20lighting%2C%20contemporary%20furniture%2C%20luxury%20hospitality%20experience&width=800&height=600&seq=hotel-detail2&orientation=landscape',
      'https://readdy.ai/api/search-image?query=Hotel%20restaurant%20with%20fine%20dining%20atmosphere%2C%20elegant%20table%20settings%2C%20professional%20kitchen%2C%20gourmet%20cuisine%2C%20upscale%20dining%20experience%2C%20warm%20ambient%20lighting%2C%20sophisticated%20interior%20design&width=800&height=600&seq=hotel-detail3&orientation=landscape'
    ]
  };

  const rooms = [
    {
      id: 1,
      name: 'Standard Room',
      size: '25 sqm',
      beds: '1 King Bed',
      guests: 2,
      price: 199,
      amenities: ['Free WiFi', 'Air Conditioning', 'TV', 'Mini Bar'],
      image: 'https://readdy.ai/api/search-image?query=Standard%20hotel%20room%20with%20comfortable%20king%20bed%2C%20modern%20amenities%2C%20clean%20interior%20design%2C%20warm%20lighting%2C%20contemporary%20furniture%2C%20professional%20hospitality%20photography&width=400&height=300&seq=room1&orientation=landscape'
    },
    {
      id: 2,
      name: 'Deluxe Room',
      size: '35 sqm',
      beds: '1 King Bed',
      guests: 2,
      price: 299,
      amenities: ['Free WiFi', 'Air Conditioning', 'TV', 'Mini Bar', 'City View', 'Balcony'],
      image: 'https://readdy.ai/api/search-image?query=Deluxe%20hotel%20room%20with%20city%20view%20and%20balcony%2C%20premium%20interior%20design%2C%20comfortable%20seating%20area%2C%20modern%20amenities%2C%20elegant%20furniture%2C%20sophisticated%20hospitality%20experience&width=400&height=300&seq=room2&orientation=landscape'
    },
    {
      id: 3,
      name: 'Suite',
      size: '60 sqm',
      beds: '1 King Bed + Sofa',
      guests: 4,
      price: 499,
      amenities: ['Free WiFi', 'Air Conditioning', 'TV', 'Mini Bar', 'City View', 'Balcony', 'Living Area', 'Kitchenette'],
      image: 'https://readdy.ai/api/search-image?query=Luxury%20hotel%20suite%20with%20separate%20living%20area%2C%20premium%20furniture%2C%20modern%20kitchen%2C%20elegant%20bedroom%2C%20sophisticated%20interior%20design%2C%20upscale%20accommodation%20experience&width=400&height=300&seq=room3&orientation=landscape'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        <div className="relative">
          <img 
            src={hotel.images[0]} 
            alt={hotel.name}
            className="w-full h-64 sm:h-96 object-cover object-top"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-2xl sm:text-4xl font-bold text-white mb-2">{hotel.name}</h1>
              <p className="text-white text-sm sm:text-base flex items-center">
                <div className="w-4 h-4 flex items-center justify-center mr-2">
                  <i className="ri-map-pin-line"></i>
                </div>
                {hotel.address}
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-8">
                <div className="flex items-center mb-4">
                  <div className="flex items-center mr-4">
                    <div className="w-5 h-5 flex items-center justify-center mr-1">
                      <i className="ri-star-fill text-yellow-400"></i>
                    </div>
                    <span className="font-semibold text-lg">{hotel.rating}</span>
                  </div>
                  <span className="text-gray-600">({hotel.reviews} reviews)</span>
                </div>
                
                <div className="border-b mb-6">
                  <nav className="flex space-x-8">
                    <button
                      onClick={() => setActiveTab('overview')}
                      className={`py-2 px-1 border-b-2 font-medium text-sm ${
                        activeTab === 'overview' 
                          ? 'border-blue-500 text-blue-600' 
                          : 'border-transparent text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      Overview
                    </button>
                    <button
                      onClick={() => setActiveTab('amenities')}
                      className={`py-2 px-1 border-b-2 font-medium text-sm ${
                        activeTab === 'amenities' 
                          ? 'border-blue-500 text-blue-600' 
                          : 'border-transparent text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      Amenities
                    </button>
                    <button
                      onClick={() => setActiveTab('location')}
                      className={`py-2 px-1 border-b-2 font-medium text-sm ${
                        activeTab === 'location' 
                          ? 'border-blue-500 text-blue-600' 
                          : 'border-transparent text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      Location
                    </button>
                  </nav>
                </div>

                {activeTab === 'overview' && (
                  <div>
                    <p className="text-gray-700 mb-6">{hotel.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <img 
                        src={hotel.images[1]} 
                        alt="Hotel room"
                        className="w-full h-48 object-cover object-top rounded-lg"
                      />
                      <img 
                        src={hotel.images[2]} 
                        alt="Hotel restaurant"
                        className="w-full h-48 object-cover object-top rounded-lg"
                      />
                    </div>
                  </div>
                )}

                {activeTab === 'amenities' && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {hotel.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-5 h-5 flex items-center justify-center mr-2">
                          <i className="ri-check-line text-green-500"></i>
                        </div>
                        <span className="text-sm text-gray-700">{amenity}</span>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'location' && (
                  <div>
                    <p className="text-gray-700 mb-4">Located in the heart of Manhattan with easy access to major attractions.</p>
                    <div className="w-full h-64 bg-gray-200 rounded-lg">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.4!2d-74.0!3d40.7589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzMyLjAiTiA3NMKwMDAnMDAuMCJX!5e0!3m2!1sen!2sus!4v1234567890123"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        className="rounded-lg"
                      ></iframe>
                    </div>
                  </div>
                )}
              </div>

              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold mb-6">Available Rooms</h2>
                <div className="space-y-6">
                  {rooms.map((room) => (
                    <div key={room.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex flex-col sm:flex-row gap-4">
                        <img 
                          src={room.image} 
                          alt={room.name}
                          className="w-full sm:w-48 h-32 object-cover object-top rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold mb-2">{room.name}</h3>
                          <div className="text-sm text-gray-600 mb-2 space-y-1">
                            <p>Size: {room.size}</p>
                            <p>Beds: {room.beds}</p>
                            <p>Guests: {room.guests}</p>
                          </div>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {room.amenities.map((amenity, index) => (
                              <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                                {amenity}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="mb-4">
                            <span className="text-2xl font-bold text-blue-600">${room.price}</span>
                            <span className="text-gray-500 text-sm">/night</span>
                          </div>
                          <Link 
                            href={`/payment?hotel=${hotel.id}&room=${room.id}`}
                            className="w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap inline-block text-center"
                          >
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:w-1/3">
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 sticky top-4">
                <h3 className="text-lg font-semibold mb-4">Quick Booking</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Check-in</label>
                    <input
                      type="date"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Check-out</label>
                    <input
                      type="date"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-8">
                      <option>1 Guest</option>
                      <option>2 Guests</option>
                      <option>3 Guests</option>
                      <option>4 Guests</option>
                    </select>
                  </div>
                  <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap">
                    Check Availability
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
