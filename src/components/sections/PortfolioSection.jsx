// src/components/sections/PortfolioSection.jsx
import React, { useState } from 'react';

// --- Sub-component: Portfolio Item ---
const PortfolioItem = ({ image, category, title }) => {
  return (
    <div className="relative group overflow-hidden rounded-md shadow-sm cursor-pointer">
      {/* Background Image */}
      <img
        src={image}
        alt={title || category}
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Hover Overlay (Yellow with Plus Sign) */}
      <div className="absolute inset-0 bg-[#FFB400] opacity-0 group-hover:opacity-95 transition-opacity duration-300 flex items-center justify-center">
        <i className="fa-solid fa-plus text-white text-5xl" />
      </div>
    </div>
  );
};

// --- Main Component ---
const PortfolioSection = ({ profile }) => {
  // Prefer data from JSON; fallback to old dummy images
  const defaultItems = [
    {
      id: 1,
      category: 'UI Design',
      title: 'UI Design Concept',
      image:
        'https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&q=80&w=500'
    },
    {
      id: 2,
      category: 'Web Templates',
      title: 'Web Template',
      image:
        'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=500'
    },
    {
      id: 3,
      category: 'Logo',
      title: 'Logo Mockup',
      image:
        'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=500'
    },
    {
      id: 4,
      category: 'Branding',
      title: 'Branding Pack',
      image:
        'https://images.unsplash.com/photo-1586717791821-3f44a5638d4f?auto=format&fit=crop&q=80&w=500'
    }
  ];

  const portfolioItems =
    profile?.projects && Array.isArray(profile.projects) && profile.projects.length
      ? profile.projects
      : defaultItems;

  const ALL_LABEL = 'All Projects';

  const categories = [
    ALL_LABEL,
    ...Array.from(new Set(portfolioItems.map((item) => item.category)))
  ];

  const [activeCategory, setActiveCategory] = useState(ALL_LABEL);

  const filteredItems =
    activeCategory === ALL_LABEL
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section className="mb-20 font-sans" id="portfolio">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Portfolio
          </h2>
          <p className="text-gray-500 text-base md:text-lg leading-relaxed">
            A selection of projects where I worked on full-stack development,
            backend APIs, and mobile apps using Python, Django, React, and
            React Native.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-lg font-medium transition-colors duration-300 ${
                activeCategory === cat
                  ? 'text-[#FFB400]'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <PortfolioItem
              key={item.id}
              image={item.image}
              category={item.category}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
