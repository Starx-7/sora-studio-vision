import React from 'react';

const PartnersSection = () => {
  const partners = [
    'IKEA', 'Herman Miller', 'Muji', 'West Elm', 'CB2', 'Restoration Hardware'
  ];

  return (
    <section className="section-padding bg-sora-pure-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 fade-in-up">
          <h2 className="section-title">Trusted by Industry Leaders</h2>
          <p className="text-sora-text-secondary">
            We collaborate with the world's best brands to deliver exceptional results
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div 
              key={partner} 
              className={`text-center fade-in-up stagger-${index + 1}`}
            >
              <div className="h-16 flex items-center justify-center bg-sora-accent-gray/50 rounded-lg hover:bg-sora-gold/20 transition-all duration-300 group">
                <span className="text-sora-text-secondary group-hover:text-sora-text-primary font-medium transition-colors duration-300">
                  {partner}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;