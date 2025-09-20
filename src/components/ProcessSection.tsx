import React from 'react';
import { ArrowRight } from 'lucide-react';
import consultationImage from '@/assets/process-consultation.jpg';
import designImage from '@/assets/process-design.jpg';
import drawingsImage from '@/assets/process-drawings.jpg';
import procurementImage from '@/assets/process-procurement.jpg';
import constructionImage from '@/assets/process-construction.jpg';
import handoverImage from '@/assets/process-handover.jpg';

const ProcessSection = () => {
  const processes = [
    {
      id: '01',
      title: 'Consultation',
      description: 'We listen to your needs and dreams, and translate them into spatial goals',
      image: consultationImage,
      delay: 'stagger-1'
    },
    {
      id: '02',
      title: 'Interior design',
      description: 'We develop layout plans, moodboards, and visual directions',
      image: designImage,
      delay: 'stagger-2'
    },
    {
      id: '03',
      title: 'Detailed 2D and 3D drawings',
      description: 'Detailed 2D and 3D drawings for precision and visual clarity',
      image: drawingsImage,
      delay: 'stagger-3'
    },
    {
      id: '04',
      title: 'Procurement',
      description: 'We source quality materials and furniture with your budget in mind',
      image: procurementImage,
      delay: 'stagger-4'
    },
    {
      id: '05',
      title: 'Construction',
      description: 'Our build team turns vision into real space with accuracy and care',
      image: constructionImage,
      delay: 'stagger-5'
    },
    {
      id: '06',
      title: 'Final stage, handover',
      description: 'Final styling, quality check, and the moment you move in with a smile',
      image: handoverImage,
      delay: 'stagger-6'
    }
  ];

  return (
    <section id="services" className="section-padding bg-sora-pure-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <span className="section-subtitle">Meet our expertise</span>
          <h2 className="section-title">Here's How We Transform Spaces</h2>
        </div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processes.map((process) => (
            <div key={process.id} className={`process-card fade-in-up ${process.delay}`}>
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <img 
                  src={process.image} 
                  alt={process.title}
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-sora-gold text-white text-sm font-medium px-3 py-1 rounded-full">
                  {process.id}
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-sora-text-primary">
                  {process.title}
                </h3>
                <p className="text-sora-text-secondary leading-relaxed">
                  {process.description}
                </p>
                <button className="flex items-center text-sora-gold hover:text-sora-text-primary transition-colors duration-300 group">
                  <span className="font-medium">Learn more</span>
                  <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;