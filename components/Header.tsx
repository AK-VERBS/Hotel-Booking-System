
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600 font-pacifico">
              HotelBooking
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Home
            </Link>
            <Link href="/hotels" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Hotels
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Login
            </Link>
            <Link href="/register" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap">
              Sign Up
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-6 h-6 flex items-center justify-center cursor-pointer"
          >
            <i className="ri-menu-line text-xl"></i>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600 cursor-pointer">
              Home
            </Link>
            <Link href="/hotels" className="block px-3 py-2 text-gray-700 hover:text-blue-600 cursor-pointer">
              Hotels
            </Link>
            <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600 cursor-pointer">
              About
            </Link>
            <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600 cursor-pointer">
              Contact
            </Link>
            <Link href="/login" className="block px-3 py-2 text-gray-700 hover:text-blue-600 cursor-pointer">
              Login
            </Link>
            <Link href="/register" className="block px-3 py-2 text-blue-600 cursor-pointer">
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
