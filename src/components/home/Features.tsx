import React from 'react';
import { Bed, Gamepad2, Bath, Wifi, Car, TreePine } from 'lucide-react';

const features = [
  {
    icon: Bed,
    title: "Comfortable Rooms",
    description: "Two beautifully decorated bedrooms with luxury bedding"
  },
  {
    icon: Gamepad2,
    title: "Gaming Barn",
    description: "Entertainment space with games and activities"
  },
  {
    icon: Bath,
    title: "Hot Tub",
    description: "Private hot tub with countryside views"
  },
  {
    icon: Wifi,
    title: "Free Wi-Fi",
    description: "Stay connected throughout your stay"
  },
  {
    icon: Car,
    title: "EV Charging",
    description: "Electric vehicle charging available"
  },
  {
    icon: TreePine,
    title: "Private Garden",
    description: "Peaceful garden with edible plants"
  }
];

export function Features() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Cottage Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Icon className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-gray-500">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}