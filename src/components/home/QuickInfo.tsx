import React from 'react';
import { MapPin, Phone, Mail, Facebook } from 'lucide-react';

export function QuickInfo() {
  return (
    <div className="bg-gray-50 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center space-x-3">
            <MapPin className="h-5 w-5 text-gray-600" />
            <span className="text-sm text-gray-600">
              Hebden Bridge Road, Oxenhope, West Yorkshire
            </span>
          </div>
          
          <div className="flex items-center space-x-3">
            <Phone className="h-5 w-5 text-gray-600" />
            <a href="tel:07904630649" className="text-sm text-gray-600 hover:text-gray-900">
              07904 630 649
            </a>
          </div>
          
          <div className="flex items-center space-x-3">
            <Mail className="h-5 w-5 text-gray-600" />
            <a href="mailto:Info@stonescottagefarm.co.uk" className="text-sm text-gray-600 hover:text-gray-900">
              Info@stonescottagefarm.co.uk
            </a>
          </div>
          
          <div className="flex items-center space-x-3">
            <Facebook className="h-5 w-5 text-gray-600" />
            <a href="https://facebook.com" className="text-sm text-gray-600 hover:text-gray-900">
              Follow us on Facebook
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}