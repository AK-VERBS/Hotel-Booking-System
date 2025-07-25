
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 font-pacifico">HotelBooking</h3>
            <p className="text-gray-400 mb-4">Your trusted partner for finding the perfect hotel anywhere in the world.</p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 flex items-center justify-center bg-blue-600 rounded-full cursor-pointer hover:bg-blue-700 transition-colors">
                <i className="ri-facebook-fill text-white"></i>
              </div>
              <div className="w-10 h-10 flex items-center justify-center bg-blue-600 rounded-full cursor-pointer hover:bg-blue-700 transition-colors">
                <i className="ri-twitter-fill text-white"></i>
              </div>
              <div className="w-10 h-10 flex items-center justify-center bg-blue-600 rounded-full cursor-pointer hover:bg-blue-700 transition-colors">
                <i className="ri-instagram-fill text-white"></i>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white cursor-pointer">Home</Link></li>
              <li><Link href="/hotels" className="text-gray-400 hover:text-white cursor-pointer">Hotels</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white cursor-pointer">About</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white cursor-pointer">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link href="/help" className="text-gray-400 hover:text-white cursor-pointer">Help Center</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-white cursor-pointer">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-white cursor-pointer">Privacy Policy</Link></li>
              <li><Link href="/cancellation" className="text-gray-400 hover:text-white cursor-pointer">Cancellation Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center">
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-phone-fill"></i>
                </div>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-mail-fill"></i>
                </div>
                <span>info@hotelbooking.com</span>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-map-pin-fill"></i>
                </div>
                <span>123 Hotel Street, NY 10001</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 HotelBooking. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
