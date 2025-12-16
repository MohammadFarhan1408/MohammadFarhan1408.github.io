import React from 'react';

const HeroSection = ({ profile }) => {
  const themeYellow = '#FFB400';

  if (!profile) return null;

  const {
    fullName,
    role,
    about,
    avatar,
    cvUrl
  } = profile;

  return (
    <section
      className="mb-20 relative w-full bg-white overflow-hidden font-sans"
      id="home"
    >
      {/* Decorative shapes only on md+ */}
      <div className="hidden md:block">
        <div
          className="absolute top-12 left-10 lg:left-20 w-4 h-4 border-2 rounded-full"
          style={{ borderColor: themeYellow }}
        />
        <div className="absolute top-16 left-1/2 w-4 h-4 border-2 border-green-400 rounded-full" />
        <div
          className="absolute top-20 right-10 lg:right-24 w-5 h-5 border-2 rotate-45"
          style={{ borderColor: themeYellow }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 xl:px-20 py-16 md:py-20 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          
          {/* Text Section */}
          <div className="w-full md:w-3/5 flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              I’m {fullName}
              <br />
              <span style={{ color: themeYellow }}>{role}</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-gray-500 max-w-xl break-words">
              {about}
            </p>

            {cvUrl && (
              <a
                href={cvUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-10 font-bold py-3 px-8 rounded inline-flex items-center transition hover:shadow-md"
                style={{ backgroundColor: themeYellow, color: '#1a1a1a' }}
              >
                Download CV
                <i className="fa fa-download ml-2" />
              </a>
            )}
          </div>

          {/* Image Section */}
          <div className="w-full md:w-2/5 flex justify-center">
            <img
              src={avatar}
              alt={fullName}
              className="
                w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64
                rounded-full object-cover
              "
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
