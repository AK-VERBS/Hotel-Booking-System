
'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Hotels() {
  const [filters, setFilters] = useState({
    priceRange: '',
    rating: '',
    amenities: [] as string[]
  });

  const hotels = [
    {
      id: 1,
      name: 'Grand Plaza Hotel',
      location: 'New York, NY',
      price: 299,
      rating: 4.8,
      reviews: 1234,
      amenities: ['WiFi', 'Pool', 'Gym', 'Restaurant'],
      image: 'https://readdy.ai/api/search-image?query=Luxury%20modern%20hotel%20exterior%20with%20glass%20facade%20and%20elegant%20entrance%2C%20upscale%20architectural%20design%2C%20professional%20photography%20with%20warm%20lighting%2C%20contemporary%20building%20with%20sophisticated%20details%2C%20urban%20setting%20with%20landscaped%20surroundings%2C%20high-end%20hospitality%20venue%20with%20welcoming%20atmosphere&width=400&height=300&seq=hotels1&orientation=landscape'
    },
    {
      id: 2,
      name: 'Seaside Resort',
      location: 'Miami, FL',
      price: 199,
      rating: 4.6,
      reviews: 892,
      amenities: ['Beach', 'Pool', 'Spa', 'Restaurant'],
      image: 'https://readdy.ai/api/search-image?query=Beautiful%20beachfront%20resort%20hotel%20with%20palm%20trees%20and%20ocean%20view%2C%20tropical%20paradise%20setting%2C%20white%20sand%20beach%2C%20luxury%20resort%20architecture%20with%20modern%20amenities%2C%20sunset%20lighting%2C%20relaxing%20vacation%20atmosphere%2C%20coastal%20luxury%20hospitality&width=400&height=300&seq=hotels2&orientation=landscape'
    },
    {
      id: 3,
      name: 'Mountain Lodge',
      location: 'Aspen, CO',
      price: 399,
      rating: 4.9,
      reviews: 567,
      amenities: ['Ski Access', 'Fireplace', 'Restaurant', 'Spa'],
      image: 'https://readdy.ai/api/search-image?query=Cozy%20mountain%20lodge%20hotel%20surrounded%20by%20snow-capped%20peaks%2C%20rustic%20wooden%20architecture%2C%20alpine%20setting%2C%20warm%20interior%20lighting%2C%20ski%20resort%20atmosphere%2C%20luxury%20cabin%20style%20accommodation%2C%20winter%20wonderland%20backdrop&width=400&height=300&seq=hotels3&orientation=landscape'
    },
    {
      id: 4,
      name: 'City Center Hotel',
      location: 'Chicago, IL',
      price: 179,
      rating: 4.5,
      reviews: 743,
      amenities: ['WiFi', 'Business Center', 'Restaurant', 'Gym'],
      image: 'https://readdy.ai/api/search-image?query=Modern%20downtown%20hotel%20building%20with%20city%20skyline%20backdrop%2C%20urban%20architecture%2C%20glass%20and%20steel%20construction%2C%20busy%20metropolitan%20area%2C%20professional%20business%20hotel%2C%20contemporary%20design%2C%20evening%20city%20lights&width=400&height=300&seq=hotels4&orientation=landscape'
    },
    {
      id: 5,
      name: 'Boutique Inn',
      location: 'San Francisco, CA',
      price: 249,
      rating: 4.7,
      reviews: 456,
      amenities: ['WiFi', 'Restaurant', 'Bar', 'Concierge'],
      image: 'https://readdy.ai/api/search-image?query=Elegant%20boutique%20hotel%20with%20sophisticated%20interior%20design%2C%20modern%20architectural%20details%2C%20upscale%20accommodation%2C%20stylish%20lobby%20area%2C%20contemporary%20luxury%20hospitality%2C%20warm%20ambient%20lighting%2C%20premium%20hotel%20atmosphere&width=400&height=300&seq=hotels5&orientation=landscape'
    },
    {
      id: 6,
      name: 'Garden Hotel',
      location: 'Portland, OR',
      price: 159,
      rating: 4.4,
      reviews: 321,
      amenities: ['Garden', 'WiFi', 'Restaurant', 'Pet Friendly'],
      image: 'https://readdy.ai/api/search-image?query=Charming%20garden%20hotel%20with%20lush%20landscaping%20and%20outdoor%20spaces%2C%20peaceful%20natural%20setting%2C%20eco-friendly%20architecture%2C%20green%20surroundings%2C%20boutique%20accommodation%2C%20serene%20atmosphere%2C%20sustainable%20hospitality%20design&width=400&height=300&seq=hotels6&orientation=landscape'
    }
  ];

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const toggleAmenity = (amenity: string) => {
    setFilters(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Hotels</h1>
          <p className="text-gray-600">Discover amazing hotels worldwide with the best prices</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow p-6 sticky top-4">
              <h3 className="font-semibold text-lg mb-4">Filters</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price Range
                  </label>
                  <select 
                    value={filters.priceRange}
                    onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm pr-8"
                  >
                    <option value="">All Prices</option>
                    <option value="0-150">$0 - $150</option>
                    <option value="150-250">$150 - $250</option>
                    <option value="250-350">$250 - $350</option>
                    <option value="350+">$350+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Rating
                  </label>
                  <select 
                    value={filters.rating}
                    onChange={(e) => handleFilterChange('rating', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm pr-8"
                  >
                    <option value="">All Ratings</option>
                    <option value="4.5+">4.5+ Stars</option>
                    <option value="4.0+">4.0+ Stars</option>
                    <option value="3.5+">3.5+ Stars</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Amenities
                  </label>
                  <div className="space-y-2">
                    {['WiFi', 'Pool', 'Gym', 'Restaurant', 'Spa', 'Beach', 'Pet Friendly'].map((amenity) => (
                      <label key={amenity} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={filters.amenities.includes(amenity)}
                          onChange={() => toggleAmenity(amenity)}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <span className="ml-2 text-sm text-gray-700">{amenity}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-3/4">
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">{hotels.length} hotels found</p>
              <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm pr-8">
                <option>Sort by: Recommended</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating: High to Low</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {hotels.map((hotel) => (
                <div key={hotel.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <img 
                    src={hotel.image} 
                    alt={hotel.name}
                    className="w-full h-48 object-cover object-top"
                  />
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-lg">{hotel.name}</h3>
                      <button className="text-gray-400 hover:text-red-500">
                        <div className="w-6 h-6 flex items-center justify-center">
                          <i className="ri-heart-line"></i>
                        </div>
                      </button>
                    </div>
                    
                    <p className="text-gray-600 mb-2 flex items-center">
                      <div className="w-4 h-4 flex items-center justify-center mr-1">
                        <i className="ri-map-pin-line text-sm"></i>
                      </div>
                      {hotel.location}
                    </p>
                    
                    <div className="flex items-center mb-3">
                      <div className="flex items-center">
                        <div className="w-4 h-4 flex items-center justify-center mr-1">
                          <i className="ri-star-fill text-yellow-400 text-sm"></i>
                        </div>
                        <span className="text-sm font-medium mr-2">{hotel.rating}</span>
                      </div>
                      <span className="text-sm text-gray-500">({hotel.reviews} reviews)</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {hotel.amenities.slice(0, 3).map((amenity) => (
                        <span key={amenity} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                          {amenity}
                        </span>
                      ))}
                      {hotel.amenities.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                          +{hotel.amenities.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-blue-600">${hotel.price}</span>
                        <span className="text-gray-500 text-sm">/night</span>
                      </div>
                      <Link href={`/hotels/${hotel.id}`} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
