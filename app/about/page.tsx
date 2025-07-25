
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-top"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20luxury%20hotel%20lobby%20with%20elegant%20interior%20design%2C%20marble%20floors%2C%20comfortable%20seating%20areas%2C%20warm%20lighting%2C%20professional%20hospitality%20atmosphere%2C%20contemporary%20architecture%2C%20welcoming%20reception%20desk%2C%20sophisticated%20decor%20elements%2C%20spacious%20open%20layout%2C%20premium%20hotel%20ambiance&width=1200&height=400&seq=about-hero&orientation=landscape')`
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative text-center text-white z-10">
          <h1 className="text-5xl font-bold mb-4">About HotelBooking</h1>
          <p className="text-xl max-w-2xl mx-auto">Your trusted partner in finding the perfect accommodation worldwide</p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2020, HotelBooking was born from a simple idea: make hotel booking effortless and enjoyable for travelers worldwide. We recognized that finding the perfect accommodation shouldn't be complicated or time-consuming.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our team of travel enthusiasts and technology experts came together to create a platform that connects travelers with exceptional hotels, ensuring every journey starts with the perfect stay.
              </p>
              <p className="text-lg text-gray-600">
                Today, we're proud to serve millions of travelers globally, offering access to over 50,000 hotels in 200+ countries, all backed by our commitment to exceptional service and competitive pricing.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20diverse%20team%20working%20together%20in%20modern%20office%20environment%2C%20collaborative%20workspace%2C%20happy%20employees%2C%20technology%20company%20culture%2C%20teamwork%20atmosphere%2C%20contemporary%20office%20design%2C%20people%20using%20computers%2C%20business%20meeting%2C%20innovative%20workplace&width=600&height=400&seq=our-story&orientation=landscape"
                alt="Our Team"
                className="rounded-lg shadow-xl object-cover object-top w-full h-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to transforming the way people discover and book accommodations worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-600 rounded-full mx-auto mb-4">
                <i className="ri-heart-fill text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Customer First</h3>
              <p className="text-gray-600">
                Every decision we make is guided by what's best for our customers. Your satisfaction is our top priority.
              </p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 flex items-center justify-center bg-green-600 rounded-full mx-auto mb-4">
                <i className="ri-shield-check-fill text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Trust & Security</h3>
              <p className="text-gray-600">
                We ensure secure transactions and protect your personal information with industry-leading security measures.
              </p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 flex items-center justify-center bg-purple-600 rounded-full mx-auto mb-4">
                <i className="ri-rocket-fill text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                We continuously improve our platform with cutting-edge technology to enhance your booking experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">5M+</div>
              <div className="text-blue-100">Happy Travelers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-blue-100">Partner Hotels</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-blue-100">Countries</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The passionate people behind HotelBooking</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20business%20woman%20CEO%20portrait%2C%20confident%20executive%2C%20modern%20office%20background%2C%20leadership%2C%20corporate%20headshot%2C%20professional%20attire%2C%20business%20leader%2C%20successful%20entrepreneur%2C%20contemporary%20workplace&width=300&height=300&seq=ceo-sarah&orientation=squarish"
                alt="Sarah Johnson"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover object-top"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sarah Johnson</h3>
              <p className="text-blue-600 mb-3">CEO & Founder</p>
              <p className="text-gray-600 text-sm">
                Former travel industry executive with 15+ years of experience in hospitality and technology innovation.
              </p>
            </div>
            
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20business%20man%20CTO%20portrait%2C%20technology%20executive%2C%20software%20engineer%2C%20modern%20office%20background%2C%20tech%20leader%2C%20professional%20attire%2C%20innovation%20specialist%2C%20contemporary%20workplace%2C%20confident%20professional&width=300&height=300&seq=cto-michael&orientation=squarish"
                alt="Michael Chen"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover object-top"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Michael Chen</h3>
              <p className="text-blue-600 mb-3">CTO</p>
              <p className="text-gray-600 text-sm">
                Tech visionary who leads our engineering team in building scalable, user-friendly booking solutions.
              </p>
            </div>
            
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20business%20woman%20marketing%20director%20portrait%2C%20creative%20executive%2C%20modern%20office%20background%2C%20marketing%20professional%2C%20professional%20attire%2C%20brand%20specialist%2C%20contemporary%20workplace%2C%20confident%20leader&width=300&height=300&seq=marketing-emily&orientation=squarish"
                alt="Emily Rodriguez"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover object-top"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Emily Rodriguez</h3>
              <p className="text-blue-600 mb-3">Head of Marketing</p>
              <p className="text-gray-600 text-sm">
                Creative strategist who ensures our brand connects with travelers worldwide through compelling campaigns.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
