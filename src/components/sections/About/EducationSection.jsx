// src/components/sections/About/EducationSection.jsx
import React from 'react';

// --- Sub-component: Individual Education Row ---
const EducationRow = ({
  institution,
  role,
  date,
  certificateTitle,
  description
}) => {
  return (
    <div className="flex flex-col md:flex-row py-10 gap-6 md:gap-10">
      {/* Left Column: Institution & Date */}
      <div className="w-full md:w-1/3">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{institution}</h3>
        <div className="flex items-center space-x-4 text-sm font-medium">
          <span className="text-gray-800">{role}</span>
          <span className="bg-[#FFB400] text-white text-xs px-3 py-1 inline-block shadow-sm">
            {date}
          </span>
        </div>
      </div>

      {/* Right Column: Certificate & Description */}
      <div className="w-full md:w-2/3">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          {certificateTitle}
        </h3>
        <p className="text-gray-500 leading-relaxed text-sm md:text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

// --- Main Component ---
const EducationSection = ({ profile }) => {
  const educationList =
    profile?.education && Array.isArray(profile.education)
      ? profile.education
      : [];

  if (!educationList.length) return null;

  return (
    <section className="mb-20 font-sans" id="education">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Education
          </h2>
          <p className="text-gray-500 text-base md:text-lg leading-relaxed">
            Formal education and certifications that helped me build a strong
            foundation in software development and databases.
          </p>
        </div>

        {/* Education List */}
        <div className="bg-white px-2 md:px-10">
          {educationList.map((item, index) => (
            <div key={index}>
              <EducationRow
                institution={item.institution}
                role={item.role}
                date={item.date}
                certificateTitle={item.degree}
                description={item.description}
              />
              {index !== educationList.length - 1 && (
                <hr className="border-gray-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
