import React from 'react';
import { Instagram, Linkedin, Mail, MapPin, Phone, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const services = [
    'Interior Design',
    'Build Services', 
    'Consultation',
    'Project Management',
    '3D Visualization & Rendering'
  ];

  const quickLinks = [
    'About Us',
    'Services', 
    'Projects',
    'Case Studies',
    'Blog/Insights',
    'Career Opportunities'
  ];

  return (
    <footer className="dark-section">
      <div className="max-w-7xl mx-auto section-padding">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-light text-sora-pure-white mb-4">
                sora.studio
              </h3>
              <p className="text-sora-text-light leading-relaxed">
                Creating calm, intentional spaces through multidisciplinary interior design and build services rooted in Japanese minimalism.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <a href="#" className="text-sora-text-light hover:text-sora-pure-white transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-sora-text-light hover:text-sora-pure-white transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-sora-text-light hover:text-sora-pure-white transition-colors duration-300">
                <Mail size={20} />
              </a>
            </div>

            <div className="space-y-3">
              <h4 className="text-sora-pure-white font-medium">Stay Updated</h4>
              <div className="flex gap-2">
                <Input 
                  placeholder="Enter your email"
                  className="bg-sora-pure-white/10 border-sora-pure-white/20 text-sora-pure-white placeholder:text-sora-text-light"
                />
                <Button variant="outline" className="bg-sora-gold border-sora-gold text-sora-pure-white hover:bg-sora-gold/90">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sora-pure-white font-medium mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a href="#" className="text-sora-text-light hover:text-sora-pure-white transition-colors duration-300">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sora-pure-white font-medium mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sora-text-light hover:text-sora-pure-white transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-sora-pure-white font-medium mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-sora-gold mt-1 flex-shrink-0" />
                <span className="text-sora-text-light">
                  Bogenville, 54 Jakarta
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={16} className="text-sora-gold flex-shrink-0" />
                <span className="text-sora-text-light">
                  +62 778 9901 2345
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={16} className="text-sora-gold flex-shrink-0" />
                <span className="text-sora-text-light">
                  hello@sorastudio.com
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Clock size={16} className="text-sora-gold flex-shrink-0" />
                <span className="text-sora-text-light">
                  Sun-Fri 08.00-17.00 WIB
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-sora-pure-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sora-text-light text-sm">
              Copyright 2025 sorastudio all rights reserved
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sora-text-light hover:text-sora-pure-white text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-sora-text-light hover:text-sora-pure-white text-sm transition-colors duration-300">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;