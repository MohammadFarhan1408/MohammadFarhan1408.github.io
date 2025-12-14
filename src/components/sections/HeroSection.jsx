// src/components/sections/HeroSection.jsx
import React from 'react';

const HeroSection = ({ profile }) => {
  const themeYellow = '#FFB400';

  // Safely unwrap profile with defaults so we never read from null/undefined
  const {
    fullName = 'Your Name',
    role = 'Your Role',
    about = 'Short description about you goes here. Add this in your profile JSON under "about".',
    avatar = 'https://avatars.githubusercontent.com/u/122987956?v=4',
    cvUrl = '/resume.pdf'
  } = profile || {};

  return (
    <section className="mb-20 relative w-full bg-white overflow-hidden font-sans" id="home">
      {/* --- Decorative Background Shapes --- */}
      <div className="hidden md:block">
        {/* Top Left Yellow Circle */}
        <div
          className="absolute top-12 left-10 lg:left-20 w-4 h-4 border-2 rounded-full"
          style={{ borderColor: themeYellow }}
        />
        {/* Top Center Green Circle */}
        <div className="absolute top-16 left-1/2 w-4 h-4 border-2 border-green-400 rounded-full" />
        {/* Top Right Yellow Diamond */}
        <div
          className="absolute top-20 right-10 lg:right-24 w-5 h-5 border-2 rotate-45"
          style={{ borderColor: themeYellow }}
        />
        {/* Center Left Blue Tilted Square */}
        <div className="absolute top-1/2 left-12 lg:left-32 w-6 h-6 border-2 border-blue-400 rotate-12" />
        {/* Bottom Left Green Circle */}
        <div className="absolute bottom-20 left-16 lg:left-36 w-5 h-5 border-2 border-green-500 rounded-full" />
        {/* Bottom Center-Right Yellow Circle */}
        <div
          className="absolute bottom-24 right-1/3 w-6 h-6 border-2 rounded-full"
          style={{ borderColor: themeYellow }}
        />
        {/* Bottom Right Red Triangle */}
        <svg
          className="absolute bottom-12 right-10 lg:right-20 w-5 h-5 text-red-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        </svg>
      </div>

      {/* --- Main Content Container --- */}
      <div className="container mx-auto px-6 md:px-12 xl:px-20 py-16 md:py-20 lg:py-28 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          {/* --- Left Column: Text and Button --- */}
          <div className="w-full md:w-[80%] mt-12 md:mt-0 flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-4xl md:text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              I’m {fullName}
              <br />
              <span style={{ color: themeYellow }}>{role}</span>
            </h1>

            <p className="mt-6 text-lg text-gray-500 max-w-lg w-md">
              {about}
            </p>

            <a
              href={cvUrl || '#'}
              className="mt-10 font-bold py-4 px-10 rounded inline-flex items-center transition-colors duration-300 hover:shadow-md"
              style={{ backgroundColor: themeYellow, color: '#1a1a1a' }}
              target={cvUrl ? '_blank' : undefined}
              rel={cvUrl ? 'noreferrer' : undefined}
            >
              Download CV
              <i className="fa fa-download ml-2" aria-hidden="true"></i>
            </a>
          </div>

          {/* --- Right Column: Image --- */}
          <div className="w-full md:w-[20%] flex justify-center items-start md:justify-end relative left-10">
            <img
              src={avatar}
              alt={fullName}
              className="h-auto w-[250px] md:max-w-full lg:max-w-lg xl:max-w-xl object-cover "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
