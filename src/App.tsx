import React from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/home/Hero';
import { QuickInfo } from './components/home/QuickInfo';
import { Features } from './components/home/Features';
import { PhotoGallery } from './components/home/PhotoGallery';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <QuickInfo />
        <Features />
        <PhotoGallery />
      </main>
    </div>
  );
}

export default App;