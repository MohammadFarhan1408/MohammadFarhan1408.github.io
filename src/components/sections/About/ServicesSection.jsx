// src/components/sections/About/ServicesSection.jsx
import React from 'react';

// --- Individual Service Card ---
const ServiceCard = ({ title, description, iconClass, themeYellow }) => (
  <div className="bg-white p-8 rounded-lg text-center transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] group">
    <div className="mb-8 inline-block">
      <i
        className={`${iconClass} text-6xl group-hover:scale-110 transition-transform duration-300`}
        style={{ color: themeYellow }}
      />
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mb-4">
      {title}
    </h3>

    <p className="text-gray-500 leading-relaxed">
      {description}
    </p>
  </div>
);

// --- Advertising / CTA Block ---
const AdvertisingBlock = ({ themeYellow }) => (
  <div className="bg-white p-8 rounded-lg flex flex-col justify-center text-center lg:text-left">
    <h3 className="text-3xl font-bold text-gray-900 mb-6">
      Let’s Work Together
    </h3>

    <p className="text-gray-500 mb-8 leading-relaxed">
      Looking for a junior developer to build web or mobile applications? I’m open
      to internships, full-time roles, and freelance opportunities.
    </p>

    <a
      href="#contact"
      className="inline-flex items-center justify-center lg:justify-start font-bold tracking-wider hover:underline group"
      style={{ color: themeYellow }}
    >
      CONTACT ME
      <i className="fa-solid fa-chevron-right text-xs ml-3 transition-transform group-hover:translate-x-1" />
    </a>
  </div>
);

// --- Main Component ---
const ServicesSection = ({ profile }) => {
  const themeYellow = '#FFB400';

  const services = profile?.services ?? [];

  return (
    <section className="mb-20 font-sans" id="services">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            My Services
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Services I provide based on hands-on project experience and real-world development work.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              iconClass={service.iconClass}
              themeYellow={themeYellow}
            />
          ))}

          <AdvertisingBlock themeYellow={themeYellow} />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
