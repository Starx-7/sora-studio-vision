import React from 'react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-3d-house.jpg';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-sora-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 fade-in-left">
            <div className="space-y-4">
              <span className="hero-subtitle">About Us</span>
              <h1 className="hero-title">
                We are a multidisciplinary interior design & build studio
              </h1>
              <p className="hero-description">
                Rooted in Japanese minimalism, we create serene, functional spaces that enhance daily life through thoughtful design.
              </p>
            </div>
            
            <Button className="btn-primary">
              Schedule a Meeting
            </Button>
          </div>

          {/* Right Content - 3D Model */}
          <div className="relative fade-in-right">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="3D architectural model of modern minimalist house"
                className="w-full h-auto float-animation"
              />
              
              {/* Floating Info Card */}
              <div className="absolute bottom-4 right-4 floating-card max-w-xs">
                <p className="text-sm text-sora-text-secondary leading-relaxed">
                  Sora studio creates calm, intentional spaces that feel right for your lifestyle
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;