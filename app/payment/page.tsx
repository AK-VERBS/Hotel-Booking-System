
'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

function PaymentContent() {
  const searchParams = useSearchParams();
  const hotelId = searchParams.get('hotel');
  const roomId = searchParams.get('room');

  const [paymentMethod, setPaymentMethod] = useState('card');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: ''
  });

  const hotel = {
    name: 'Grand Plaza Hotel',
    location: 'New York, NY',
    image: 'https://readdy.ai/api/search-image?query=Luxury%20hotel%20exterior%20with%20elegant%20architecture%2C%20professional%20hospitality%20photography%2C%20modern%20building%20design%2C%20upscale%20accommodation%2C%20sophisticated%20entrance%20area&width=300&height=200&seq=payment-hotel&orientation=landscape'
  };

  const room = {
    name: 'Deluxe Room',
    price: 299,
    nights: 2,
    guests: 2
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Payment processed successfully! Booking confirmed.');
  };

  const subtotal = room.price * room.nights;
  const taxes = subtotal * 0.12;
  const total = subtotal + taxes;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Complete Your Booking</h1>
          <p className="text-gray-600">Review your details and complete the payment</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Guest Information</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </form>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
              <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
              
              <div className="mb-6">
                <div className="flex space-x-4 mb-4">
                  <button
                    onClick={() => setPaymentMethod('card')}
                    className={`flex items-center px-4 py-2 rounded-lg border ${
                      paymentMethod === 'card' 
                        ? 'border-blue-500 bg-blue-50 text-blue-600' 
                        : 'border-gray-300 text-gray-700'
                    }`}
                  >
                    <div className="w-5 h-5 flex items-center justify-center mr-2">
                      <i className="ri-bank-card-line"></i>
                    </div>
                    Credit Card
                  </button>
                  <button
                    onClick={() => setPaymentMethod('paypal')}
                    className={`flex items-center px-4 py-2 rounded-lg border ${
                      paymentMethod === 'paypal' 
                        ? 'border-blue-500 bg-blue-50 text-blue-600' 
                        : 'border-gray-300 text-gray-700'
                    }`}
                  >
                    <div className="w-5 h-5 flex items-center justify-center mr-2">
                      <i className="ri-paypal-line"></i>
                    </div>
                    PayPal
                  </button>
                </div>

                {paymentMethod === 'card' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        placeholder="1234 5678 9012 3456"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                        <input
                          type="text"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleInputChange}
                          placeholder="MM/YY"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                        <input
                          type="text"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          placeholder="123"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Cardholder Name</label>
                      <input
                        type="text"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                )}

                {paymentMethod === 'paypal' && (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-4">
                      <i className="ri-paypal-line text-2xl text-blue-600"></i>
                    </div>
                    <p className="text-gray-600">You will be redirected to PayPal to complete the payment</p>
                  </div>
                )}
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
              >
                Complete Payment - ${total.toFixed(2)}
              </button>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 sticky top-4">
              <h3 className="text-lg font-semibold mb-4">Booking Summary</h3>
              
              <div className="flex gap-4 mb-4">
                <img 
                  src={hotel.image} 
                  alt={hotel.name}
                  className="w-16 h-16 object-cover object-top rounded-lg"
                />
                <div>
                  <h4 className="font-medium">{hotel.name}</h4>
                  <p className="text-sm text-gray-600">{hotel.location}</p>
                </div>
              </div>

              <div className="border-t pt-4 mb-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Room Type</span>
                    <span className="text-sm font-medium">{room.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Guests</span>
                    <span className="text-sm font-medium">{room.guests}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Nights</span>
                    <span className="text-sm font-medium">{room.nights}</span>
                  </div>
                </div>
              </div>

              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Subtotal</span>
                  <span className="text-sm">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Taxes & Fees</span>
                  <span className="text-sm">${taxes.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-semibold text-lg border-t pt-2">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="mt-6 text-center">
                <div className="flex items-center justify-center text-sm text-gray-600 mb-2">
                  <div className="w-4 h-4 flex items-center justify-center mr-1">
                    <i className="ri-shield-check-line text-green-500"></i>
                  </div>
                  Secure payment
                </div>
                <p className="text-xs text-gray-500">
                  Your payment information is encrypted and secure
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function Payment() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading payment page...</p>
        </div>
      </div>
    }>
      <PaymentContent />
    </Suspense>
  );
}
