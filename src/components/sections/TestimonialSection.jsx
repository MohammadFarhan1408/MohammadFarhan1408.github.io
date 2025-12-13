// src/components/sections/TestimonialSection.jsx
import React, { useEffect, useState } from 'react';

// --- Star Rating ---
const StarRating = ({ count = 5, color }) => (
  <div className="flex space-x-1 mb-4">
    {[...Array(count)].map((_, i) => (
      <i key={i} className="fa-solid fa-star text-sm" style={{ color }} />
    ))}
  </div>
);

// --- Card ---
const TestimonialCard = ({
  title,
  body,
  authorName,
  authorRole,
  authorImage,
  rating,
  themeColor
}) => (
  <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm h-full flex flex-col">
    <StarRating count={rating} color={themeColor} />

    <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>

    <p className="text-gray-500 leading-relaxed mb-8 grow">{body}</p>

    <div className="flex items-center mt-auto">
      <img
        src={authorImage}
        alt={authorName}
        className="w-16 h-16 rounded-full object-cover mr-4"
      />
      <div>
        <h4 className="text-lg font-bold text-gray-900">{authorName}</h4>
        <p className="text-sm text-gray-500">{authorRole}</p>
      </div>
    </div>
  </div>
);

// --- Helper: slides per screen ---
// Mobile < 768px -> 1
// Tablet & Laptop >= 768px -> 2
const getSlidesPerView = () => {
  if (typeof window === 'undefined') return 1; // safety for SSR
  return window.innerWidth < 768 ? 1 : 2;
};

// --- Main Component ---
const TestimonialSection = ({ profile }) => {
  const themeYellow = '#FFB400';
  const testimonials = profile?.testimonials ?? [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());

  useEffect(() => {
    const handleResize = () => setSlidesPerView(getSlidesPerView());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-slide
  useEffect(() => {
    if (!testimonials.length) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev + slidesPerView >= testimonials.length ? 0 : prev + slidesPerView
      );
    }, 4500);

    return () => clearInterval(interval);
  }, [testimonials.length, slidesPerView]);

  if (!testimonials.length) return null;

  const totalSlides = Math.ceil(testimonials.length / slidesPerView);
  const translateX = `-${(currentIndex / slidesPerView) * 100}%`;

  return (
    <section className="mb-20 font-sans" id="testimonials">
      <div className="container mx-auto px-6 md:px-12 xl:px-24">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Recommendations
          </h2>
          <p className="text-gray-500 text-base md:text-lg">
            Feedback from mentors and team members based on real project work.
          </p>
        </div>

        {/* Slider */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(${translateX})` }}
          >
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="px-4 shrink-0"
                style={{ width: `${100 / slidesPerView}%` }}
              >
                <TestimonialCard
                  {...t}
                  rating={t.rating || 5}
                  themeColor={themeYellow}
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

export default TestimonialSection;
