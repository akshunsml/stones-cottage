import React from 'react';
import { Menu, Phone, Mail, Facebook } from 'lucide-react';
import { Link } from './Link';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-semibold text-gray-900">
              Stones Cottage Farm
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/about">About Us</Link>
            <Link href="/accommodations">Accommodations</Link>
            <Link href="/facilities">Facilities</Link>
            <Link href="/explore">Explore</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:07904630649" className="text-gray-600 hover:text-gray-900">
              <Phone className="h-5 w-5" />
            </a>
            <a href="mailto:Info@stonescottagefarm.co.uk" className="text-gray-600 hover:text-gray-900">
              <Mail className="h-5 w-5" />
            </a>
            <a href="https://facebook.com" className="text-gray-600 hover:text-gray-900">
              <Facebook className="h-5 w-5" />
            </a>
          </div>

          <div className="md:hidden">
            <button className="text-gray-600 hover:text-gray-900">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}