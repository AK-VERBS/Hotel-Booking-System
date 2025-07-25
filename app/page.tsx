
'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchBox from '@/components/ui/SearchBox';
import Link from 'next/link';

export default function Home() {
  const [searchResults, setSearchResults] = useState(null);

  const handleSearch = (searchData: any) => {
    console.log('Search data:', searchData);
    setSearchResults(searchData);
  };

  const featuredHotels = [
    {
      id: 1,
      name: 'Grand Plaza Hotel',
      location: 'New York, NY',
      price: 299,
      rating: 4.8,
      image: 'https://readdy.ai/api/search-image?query=Luxury%20modern%20hotel%20exterior%20with%20glass%20facade%20and%20elegant%20entrance%2C%20upscale%20architectural%20design%2C%20professional%20photography%20with%20warm%20lighting%2C%20contemporary%20building%20with%20sophisticated%20details%2C%20urban%20setting%20with%20landscaped%20surroundings%2C%20high-end%20hospitality%20venue%20with%20welcoming%20atmosphere&width=400&height=300&seq=hotel1&orientation=landscape'
    },
    {
      id: 2,
      name: 'Seaside Resort',
      location: 'Miami, FL',
      price: 199,
      rating: 4.6,
      image: 'https://readdy.ai/api/search-image?query=Beautiful%20beachfront%20resort%20hotel%20with%20palm%20trees%20and%20ocean%20view%2C%20tropical%20paradise%20setting%2C%20white%20sand%20beach%2C%20luxury%20resort%20architecture%20with%20modern%20amenities%2C%20sunset%20lighting%2C%20relaxing%20vacation%20atmosphere%2C%20coastal%20luxury%20hospitality&width=400&height=300&seq=hotel2&orientation=landscape'
    },
    {
      id: 3,
      name: 'Mountain Lodge',
      location: 'Aspen, CO',
      price: 399,
      rating: 4.9,
      image: 'https://readdy.ai/api/search-image?query=Cozy%20mountain%20lodge%20hotel%20surrounded%20by%20snow-capped%20peaks%2C%20rustic%20wooden%20architecture%2C%20alpine%20setting%2C%20warm%20interior%20lighting%2C%20ski%20resort%20atmosphere%2C%20luxury%20cabin%20style%20accommodation%2C%20winter%20wonderland%20backdrop&width=400&height=300&seq=hotel3&orientation=landscape'
    },
    {
      id: 4,
      name: 'City Center Hotel',
      location: 'Chicago, IL',
      price: 179,
      rating: 4.5,
      image: 'https://readdy.ai/api/search-image?query=Modern%20downtown%20hotel%20building%20with%20city%20skyline%20backdrop%2C%20urban%20architecture%2C%20glass%20and%20steel%20construction%2C%20busy%20metropolitan%20area%2C%20professional%20business%20hotel%2C%20contemporary%20design%2C%20evening%20city%20lights&width=400&height=300&seq=hotel4&orientation=landscape'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        <section 
          className="relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=Luxurious%20hotel%20lobby%20interior%20with%20marble%20floors%20and%20elegant%20chandeliers%2C%20sophisticated%20hospitality%20design%2C%20warm%20ambient%20lighting%2C%20grand%20reception%20area%2C%20upscale%20accommodation%20atmosphere%2C%20professional%20hotel%20photography%2C%20modern%20luxury%20interior%20architecture&width=1920&height=800&seq=hero-bg&orientation=landscape')`
          }}
        >
          <div className="container mx-auto px-4 py-24">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-white mb-6">
                Find Your Perfect Stay
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Discover amazing hotels worldwide with the best prices and exclusive deals. Book your dream vacation today.
              </p>
            </div>
            
            <SearchBox onSearch={handleSearch} />
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We offer the best hotel booking experience with unmatched service and competitive prices.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-4">
                  <i className="ri-money-dollar-circle-line text-2xl text-blue-600"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">Best Prices</h3>
                <p className="text-gray-600">We guarantee the lowest prices on hotel bookings with no hidden fees.</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-4">
                  <i className="ri-customer-service-2-line text-2xl text-blue-600"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                <p className="text-gray-600">Our dedicated support team is available around the clock to help you.</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-4">
                  <i className="ri-shield-check-line text-2xl text-blue-600"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">Secure Booking</h3>
                <p className="text-gray-600">Your personal information and payments are always secure with us.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Hotels</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover our handpicked selection of premium hotels with exceptional service and amenities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredHotels.map((hotel) => (
                <div key={hotel.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
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
                        <span className="text-2xl font-bold text-blue-600">\${hotel.price}</span>
                        <span className="text-gray-500 text-sm">/night</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link href="/hotels" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap">
                View All Hotels
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Book Your Next Stay?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust us for their hotel bookings worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap">
                Sign Up Now
              </Link>
              <Link href="/hotels" className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap">
                Browse Hotels
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
