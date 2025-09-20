import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PartnersSection from '@/components/PartnersSection';
import ProcessSection from '@/components/ProcessSection';
import ProjectsSection from '@/components/ProjectsSection';
import ServicesSection from '@/components/ServicesSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-sora-warm-white">
      <Header />
      <main>
        <HeroSection />
        <PartnersSection />
        <ProcessSection />
        <ProjectsSection />
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
