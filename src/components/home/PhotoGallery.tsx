import React from 'react';

interface GalleryImage {
  url: string;
  alt: string;
  description: string;
}

const galleryImages: GalleryImage[] = [
  {
    url: "https://images.unsplash.com/photo-1571935441005-7c8cd80f2951?auto=format&fit=crop&q=80",
    alt: "Stones Cottage Farm Exterior",
    description: "Our beautiful farmhouse nestled in the heart of Bronte Country"
  },
  {
    url: "https://images.unsplash.com/photo-1571935441005-7c8cd80f2951?auto=format&fit=crop&q=80",
    alt: "Farm Animals",
    description: "Meet our friendly farm animals, including our flock of geese"
  },
  {
    url: "https://images.unsplash.com/photo-1571935441005-7c8cd80f2951?auto=format&fit=crop&q=80",
    alt: "Master Bedroom",
    description: "Luxurious master bedroom with peacock-inspired decor"
  },
  {
    url: "https://images.unsplash.com/photo-1571935441005-7c8cd80f2951?auto=format&fit=crop&q=80",
    alt: "Living Room",
    description: "Cozy living room with Bronte-themed decorations"
  }
];

export function PhotoGallery() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Experience Farm Life</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white text-sm">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}