import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Phone, Instagram } from 'lucide-react';

const ServicesSection = () => {
  return (
    <section className="section-padding bg-sora-beige">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Services */}
          <div className="space-y-8 fade-in-left">
            <div className="flex items-center gap-4 mb-8">
              <span className="section-subtitle">Services (2)</span>
              <div className="bg-sora-gold text-sora-pure-white text-sm font-medium px-3 py-1 rounded-full">
                Special summer
              </div>
              <span className="text-sora-gold font-bold">25% Off</span>
            </div>

            <div>
              <h2 className="section-title mb-6">Let's Collaborate</h2>
              <p className="text-lg text-sora-text-secondary leading-relaxed mb-8">
                We believe great design comes from understanding your unique lifestyle and translating that into spaces that truly feel like home.
              </p>
            </div>

            <div className="bg-sora-pure-white rounded-2xl p-8 shadow-sm">
              <div className="aspect-video bg-sora-accent-gray rounded-xl mb-6 flex items-center justify-center">
                <span className="text-sora-text-light">Modern exterior visualization</span>
              </div>
              <p className="text-sora-text-secondary">
                From concept to completion, we handle every aspect of your interior design and build project with precision and care.
              </p>
            </div>
          </div>

          {/* Right Column - Company Info */}
          <div className="space-y-8 fade-in-right">
            <div className="bg-sora-pure-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-medium text-sora-text-primary">Sora Studio</h3>
                <div className="flex items-center gap-2 text-sora-text-secondary">
                  <MapPin size={16} />
                  <span className="text-sm">Jakarta</span>
                </div>
              </div>

              <p className="text-sora-gold font-medium mb-6">Tailored to Your Lifestyle</p>

              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-sora-text-primary mb-2">Services</h4>
                  <p className="text-sora-text-secondary">Interior design and build</p>
                </div>

                <div>
                  <h4 className="font-medium text-sora-text-primary mb-2">Office Address</h4>
                  <p className="text-sora-text-secondary">Bogenville, 54 Jakarta</p>
                </div>

                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-sora-text-secondary" />
                  <span className="text-sora-text-secondary">Sun-Fri 08.00-17.00 WIB</span>
                </div>

                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-sora-text-secondary" />
                  <span className="text-sora-text-secondary">+62 778 9901 2345</span>
                </div>

                <div className="flex items-center gap-2">
                  <Instagram size={16} className="text-sora-text-secondary" />
                  <span className="text-sora-text-secondary">@sorastudiomy</span>
                </div>
              </div>

              <Button className="w-full mt-8 btn-primary">
                Get Started Today
              </Button>
            </div>

            {/* Testimonial Preview */}
            <div className="bg-sora-pure-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <span className="section-subtitle">Testimonials (99+)</span>
              </div>
              <blockquote className="text-sora-text-secondary italic">
                "Sora Studio transformed our home into a sanctuary. Their attention to detail and understanding of our needs was exceptional."
              </blockquote>
              <p className="text-sm text-sora-text-light mt-3">— Sarah & David, Hana Residence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;