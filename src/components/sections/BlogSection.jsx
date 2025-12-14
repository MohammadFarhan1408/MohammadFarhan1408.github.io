// src/components/sections/BlogSection.jsx
import React, { useEffect, useState } from 'react';

// --- Sub-component: Blog Card ---
const BlogCard = ({ image, title, description, link = '#' }) => {
  return (
    <div className="bg-white h-full flex flex-col group hover:shadow-lg transition-shadow duration-300">
      {/* Image */}
      <div className="relative overflow-hidden h-64">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 flex flex-col grow">
        <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#FFB400] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-500 mb-6 leading-relaxed grow">
          {description}
        </p>

        <a
          href={link}
          className="inline-flex items-center text-[#FFB400] font-bold uppercase text-sm tracking-wider hover:underline"
        >
          Learn More
          <i className="fa-solid fa-chevron-right text-xs ml-2" />
        </a>
      </div>
    </div>
  );
};

// --- Helper: slides per screen ---
// Mobile < 768px -> 1
// Tablet & Laptop >= 768px -> 2
const getSlidesPerView = () => {
  if (typeof window === 'undefined') return 1; // safety for SSR
  return window.innerWidth < 768 ? 1 : 2;
};

// --- Main Component ---
const BlogSection = ({ profile }) => {
  const themeYellow = '#FFB400';

  const fallbackDesc =
    'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vitae Nulla Diam In Ac Dictum A Urna';

  // Prefer blogs from profile JSON; fallback to old dummy posts
  const defaultPosts = [
    {
      id: 1,
      title: 'How To Make Web Templates',
      description: fallbackDesc,
      image:
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80',
      link: '#'
    },
    {
      id: 2,
      title: 'Make Business Card',
      description: fallbackDesc,
      image:
        'https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&w=600&q=80',
      link: '#'
    },
    {
      id: 3,
      title: 'How To Make Flyer Design',
      description: fallbackDesc,
      image:
        'https://images.unsplash.com/photo-1586717791821-3f44a5638d4f?auto=format&fit=crop&w=600&q=80',
      link: '#'
    }
  ];

  const posts =
    profile?.blogs && Array.isArray(profile.blogs) && profile.blogs.length
      ? profile.blogs
      : defaultPosts;

  const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => setSlidesPerView(getSlidesPerView());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!posts.length) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev + slidesPerView >= posts.length ? 0 : prev + slidesPerView
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [posts.length, slidesPerView]);

  if (!posts.length) return null;

  const totalSlides = Math.ceil(posts.length / slidesPerView);
  const translateX = `-${(currentIndex / slidesPerView) * 100}%`;

  return (
    <section className="mb-20 font-sans" id="blog">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Blog
          </h2>
          <p className="text-gray-500 text-base md:text-lg leading-relaxed">
            Short articles where I share what I learn while working with Python,
            Django, React, and React Native.
          </p>
        </div>

        {/* Slider */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(${translateX})` }}
          >
            {posts.map((post, idx) => (
              <div
                key={post.id || idx}
                className="px-4 shrink-0"
                style={{ width: `${100 / slidesPerView}%` }}
              >
                <BlogCard
                  image={post.image}
                  title={post.title}
                  description={post.description}
                  link={post.link}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center items-center space-x-2 mt-12">
          {[...Array(totalSlides)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i * slidesPerView)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === currentIndex / slidesPerView ? '' : 'opacity-40'
              }`}
              style={{ backgroundColor: themeYellow }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
