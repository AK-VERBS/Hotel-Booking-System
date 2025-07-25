
'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-green-600 to-blue-600 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-top"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20customer%20service%20office%20with%20professional%20staff%2C%20help%20desk%20environment%2C%20contemporary%20workspace%2C%20customer%20support%20team%2C%20communication%20center%2C%20friendly%20service%20representatives%2C%20modern%20technology%2C%20professional%20atmosphere%2C%20office%20setting&width=1200&height=400&seq=contact-hero&orientation=landscape')`
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative text-center text-white z-10">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">We're here to help you with any questions or concerns</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">Choose the best way to reach us</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-600 rounded-full mx-auto mb-4">
                <i className="ri-phone-fill text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Phone Support</h3>
              <p className="text-gray-600 mb-3">Available 24/7 for urgent inquiries</p>
              <p className="text-blue-600 font-semibold">+1 (555) 123-4567</p>
              <p className="text-gray-500 text-sm">International: +1 (555) 987-6543</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 flex items-center justify-center bg-green-600 rounded-full mx-auto mb-4">
                <i className="ri-mail-fill text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Email Support</h3>
              <p className="text-gray-600 mb-3">Get detailed responses within 24 hours</p>
              <p className="text-blue-600 font-semibold">support@hotelbooking.com</p>
              <p className="text-gray-500 text-sm">General: info@hotelbooking.com</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 flex items-center justify-center bg-purple-600 rounded-full mx-auto mb-4">
                <i className="ri-chat-3-fill text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Live Chat</h3>
              <p className="text-gray-600 mb-3">Instant support during business hours</p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap">
                Start Chat
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Send us a Message</h2>
            <p className="text-xl text-gray-600">Fill out the form below and we'll get back to you soon</p>
          </div>
          
          <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm"
                  placeholder="Enter your email address"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject *
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm pr-8"
              >
                <option value="">Select a subject</option>
                <option value="booking-inquiry">Booking Inquiry</option>
                <option value="payment-issue">Payment Issue</option>
                <option value="cancellation">Cancellation Request</option>
                <option value="technical-support">Technical Support</option>
                <option value="general-feedback">General Feedback</option>
                <option value="partnership">Partnership Inquiry</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                maxLength={500}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-sm resize-none"
                placeholder="Please describe your inquiry or concern in detail..."
              />
              <div className="text-right text-sm text-gray-500 mt-1">
                {formData.message.length}/500 characters
              </div>
            </div>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center">
                  <div className="w-5 h-5 flex items-center justify-center mr-3">
                    <i className="ri-check-circle-fill text-green-600"></i>
                  </div>
                  <span className="text-green-800">Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.</span>
                </div>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center">
                  <div className="w-5 h-5 flex items-center justify-center mr-3">
                    <i className="ri-error-warning-fill text-red-600"></i>
                  </div>
                  <span className="text-red-800">Sorry, there was an error sending your message. Please try again.</span>
                </div>
              </div>
            )}
            
            <button
              type="submit"
              disabled={isSubmitting || formData.message.length > 500}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors cursor-pointer whitespace-nowrap"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 flex items-center justify-center mr-2">
                    <i className="ri-loader-4-line animate-spin"></i>
                  </div>
                  Sending...
                </div>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Offices</h2>
            <p className="text-xl text-gray-600">Visit us at our global locations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">New York (HQ)</h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex items-center">
                  <div className="w-5 h-5 flex items-center justify-center mr-3">
                    <i className="ri-map-pin-fill text-blue-600"></i>
                  </div>
                  <span>123 Hotel Street, NY 10001</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 flex items-center justify-center mr-3">
                    <i className="ri-phone-fill text-blue-600"></i>
                  </div>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 flex items-center justify-center mr-3">
                    <i className="ri-time-fill text-blue-600"></i>
                  </div>
                  <span>Mon-Fri: 9AM-6PM EST</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">London</h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex items-center">
                  <div className="w-5 h-5 flex items-center justify-center mr-3">
                    <i className="ri-map-pin-fill text-blue-600"></i>
                  </div>
                  <span>456 Travel Lane, London SW1A 1AA</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 flex items-center justify-center mr-3">
                    <i className="ri-phone-fill text-blue-600"></i>
                  </div>
                  <span>+44 20 7123 4567</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 flex items-center justify-center mr-3">
                    <i className="ri-time-fill text-blue-600"></i>
                  </div>
                  <span>Mon-Fri: 9AM-6PM GMT</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Tokyo</h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex items-center">
                  <div className="w-5 h-5 flex items-center justify-center mr-3">
                    <i className="ri-map-pin-fill text-blue-600"></i>
                  </div>
                  <span>789 Booking Street, Tokyo 100-0001</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 flex items-center justify-center mr-3">
                    <i className="ri-phone-fill text-blue-600"></i>
                  </div>
                  <span>+81 3 1234 5678</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 flex items-center justify-center mr-3">
                    <i className="ri-time-fill text-blue-600"></i>
                  </div>
                  <span>Mon-Fri: 9AM-6PM JST</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Find quick answers to common questions</p>
          </div>
          
          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How can I cancel my booking?</h3>
              <p className="text-gray-600">You can cancel your booking through your dashboard or by contacting our support team. Cancellation policies vary by hotel.</p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is it safe to book through HotelBooking?</h3>
              <p className="text-gray-600">Yes, we use industry-standard encryption and security measures to protect your personal and payment information.</p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you offer price matching?</h3>
              <p className="text-gray-600">We strive to offer competitive prices. If you find a lower price elsewhere, contact us within 24 hours of booking.</p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I modify my reservation?</h3>
              <p className="text-gray-600">Log into your account and go to "My Bookings" to modify your reservation, or contact our support team for assistance.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
