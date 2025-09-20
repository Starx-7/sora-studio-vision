import React from 'react';
import { ArrowRight, MapPin, Calendar, DollarSign, Home, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import hanaHouseImage from '@/assets/project-hana-house.jpg';
import moriCoffeeImage from '@/assets/project-mori-coffee.jpg';

const ProjectsSection = () => {
  const projects = [
    {
      id: '01',
      title: 'The Hana Residence Project',
      location: 'BSD Tangerang',
      year: '2025',
      service: 'Interior design & build',
      duration: '8 months',
      description: 'A minimal family home for Mr & Mrs Eva. A couple desired a warm, simple, peaceful home.',
      type: 'Private Home',
      category: 'Young Family',
      area: '128 m² - 2 floors',
      budget: '500 millions',
      image: hanaHouseImage
    },
    {
      id: '02',
      title: 'Mori Coffee',
      location: 'Bali',
      year: '2025',
      service: 'Interior design & build',
      duration: '4 months',
      description: 'The space should be relaxing for casual hangouts and work. Earthy tones create a warm, inviting atmosphere.',
      type: 'Commercial',
      category: 'Coffee Shop',
      area: '80m² - 1 floor',
      budget: '180 millions',
      image: moriCoffeeImage
    }
  ];

  return (
    <section id="projects" className="section-padding dark-section">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 fade-in-up">
          <span className="section-subtitle">Project highlight</span>
          <h2 className="section-title">Featured Projects</h2>
        </div>

        {/* Projects Showcase */}
        {projects.map((project, index) => (
          <div key={project.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index > 0 ? 'mt-32' : ''} mb-24`}>
            {/* Project Info */}
            <div className={`space-y-8 fade-in-left ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
              <div className="flex items-center gap-4 text-sora-text-light">
                <span className="text-sm font-medium">({project.year})</span>
                <span className="text-sm">{project.service}</span>
                <span className="text-sm">({project.duration})</span>
              </div>

              <div>
                <h3 className="text-4xl md:text-5xl font-light mb-4 text-sora-pure-white">
                  {project.title}
                </h3>
                
                <div className="flex items-center gap-2 mb-6 text-sora-text-light">
                  <MapPin size={16} />
                  <span>{project.location}</span>
                  <span className="mx-2">•</span>
                  <span>Design and build</span>
                </div>

                <p className="text-lg text-sora-text-light leading-relaxed mb-8">
                  {project.description}
                </p>
              </div>

              {/* Project Details */}
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Home size={16} className="text-sora-gold" />
                    <span className="text-sora-text-light">Type:</span>
                    <span className="text-sora-pure-white font-medium">{project.type}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-sora-gold" />
                    <span className="text-sora-text-light">Category:</span>
                    <span className="text-sora-pure-white font-medium">{project.category}</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-sora-gold" />
                    <span className="text-sora-text-light">Area:</span>
                    <span className="text-sora-pure-white font-medium">{project.area}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <DollarSign size={16} className="text-sora-gold" />
                    <span className="text-sora-text-light">Budget:</span>
                    <span className="text-sora-pure-white font-medium">{project.budget}</span>
                  </div>
                </div>
              </div>

              <Button variant="outline" className="bg-sora-pure-white text-sora-charcoal hover:bg-sora-gold hover:text-sora-pure-white border-sora-pure-white">
                <span>See Full Project</span>
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>

            {/* Project Visualization */}
            <div className={`relative fade-in-right ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
              <div className="relative rounded-2xl overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-auto"
                />
                <div className="absolute top-6 left-6 text-6xl font-thin text-sora-pure-white/20">
                  {project.id}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;