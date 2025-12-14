// src/components/layout/LeftMenu.jsx
import React from 'react';

// --- Reusable Sub-components ---

const SocialIcon = ({ iconClass, url = '#' }) => (
  <a
    href={url}
    target="_blank"
    rel="noreferrer"
    className="w-8 h-8 bg-[#FFB400] rounded-full flex items-center justify-center text-gray-900 hover:bg-[#e0a800] transition-colors duration-300"
  >
    <i className={`${iconClass} text-sm`} />
  </a>
);

const InfoRow = ({ label, value, isAvailable }) => (
  <div className="flex justify-between items-center text-sm font-medium mb-3 last:mb-0">
    <span className="bg-[#FFB400] text-gray-800 px-2 py-0.5 mr-4">{label}:</span>
    <span className={isAvailable ? 'text-green-500' : 'text-gray-600'}>{value}</span>
  </div>
);

const ProgressBar = ({ label, percentage }) => (
  <div className="mb-4 last:mb-0">
    <div className="flex justify-between text-sm text-gray-600 mb-1">
      <span>{label}</span>
      <span>{percentage}%</span>
    </div>
    <div className="w-full h-1.5 bg-gray-200 rounded-full">
      <div
        className="h-full bg-[#FFB400] rounded-full"
        style={{ width: `${percentage}%` }}
      />
    </div>
  </div>
);

const ExtraSkillItem = ({ label }) => (
  <div className="flex items-center text-sm text-gray-600 mb-2 last:mb-0">
    <i className="fa-regular fa-clone text-[#FFB400] mr-2 text-lg" />
    <span>{label}</span>
  </div>
);

// --- Main Component ---

const LeftMenu = ({ profile, loading }) => {
  // defaults so UI doesn’t break if profile isn’t loaded yet
  const {
    fullName = 'Rayan Adlardard',
    role = 'Font-End Developer',
    avatar = 'https://i.pravatar.cc/150?img=12',
    socialLinks = [
      { iconClass: 'fa-brands fa-facebook-f', url: '#' },
      { iconClass: 'fa-brands fa-instagram', url: '#' },
      { iconClass: 'fa-brands fa-twitter', url: '#' },
      { iconClass: 'fa-brands fa-linkedin-in', url: '#' },
      { iconClass: 'fa-brands fa-youtube', url: '#' },
      { iconClass: 'fa-brands fa-dribbble', url: '#' }
    ],
    personalInfo = {
      age: '24',
      residence: 'BD',
      freelance: 'Available',
      address: 'Dhaka,Bangladesh'
    },
    languages = [
      { label: 'Bangla', percentage: 100 },
      { label: 'English', percentage: 80 },
      { label: 'Spanish', percentage: 60 }
    ],
    skills = [
      { label: 'Html', percentage: 90 },
      { label: 'CSS', percentage: 85 },
      { label: 'Js', percentage: 80 },
      { label: 'PHP', percentage: 75 },
      { label: 'WordPress', percentage: 85 }
    ],
    extraSkills = [
      'Bootstrap, Materialize',
      'Stylus, Sass, Less',
      'Gulp, Webpack, Grunt',
      'GIT Knowledge'
    ],
    cvUrl = '/resume.pdf'
  } = profile || {};

  return (
    <div className="w-full max-w-[320px] bg-white p-6 mx-auto shadow-lg rounded-md font-sans lg:sticky lg:top-8">
      {/* Header Section */}
      <div className="flex flex-col items-center">
        <div className="relative">
          <img
            src={avatar}
            alt={fullName}
            className="w-28 h-28 rounded-full border-4 border-gray-100 object-cover object-top pt-1 bg-blue-100"
          />
          <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full" />
        </div>
        <h2 className="mt-4 text-lg font-bold text-gray-800">
          {loading && !profile ? 'Loading...' : fullName}
        </h2>
        <p className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full mt-2">
          {role}
        </p>
      </div>

      {/* Social Icons */}
      <div className="flex flex-wrap justify-center gap-3 my-5">
        {socialLinks.map((item, idx) => (
          <SocialIcon key={idx} iconClass={item.iconClass} url={item.url} />
        ))}
      </div>

      <hr className="border-gray-200 my-5" />

      {/* Personal Info */}
      <div className="space-y-2">
        <InfoRow label="Age" value={personalInfo.age} />
        <InfoRow label="Residence" value={personalInfo.residence} />
        <InfoRow
          label="Freelance"
          value={personalInfo.freelance}
          isAvailable={personalInfo.freelance?.toLowerCase() === 'available'}
        />
        <InfoRow label="Address" value={personalInfo.address} />
      </div>

      <hr className="border-gray-200 my-5" />

      {/* Languages Section */}
      <div>
        <h3 className="text-md font-bold text-gray-800 mb-4">Languages</h3>
        {languages.map((lang, idx) => (
          <ProgressBar key={idx} label={lang.label} percentage={lang.percentage} />
        ))}
      </div>

      <hr className="border-gray-200 my-5" />

      {/* Skills Section */}
      <div>
        <h3 className="text-md font-bold text-gray-800 mb-4">Skills</h3>
        {skills.map((skill, idx) => (
          <ProgressBar key={idx} label={skill.label} percentage={skill.percentage} />
        ))}
      </div>

      <hr className="border-gray-200 my-5" />

      {/* Extra Skills Section */}
      <div>
        <h3 className="text-md font-bold text-gray-800 mb-4">Extra Skills</h3>
        {extraSkills.map((item, idx) => (
          <ExtraSkillItem key={idx} label={item} />
        ))}
      </div>

      <hr className="border-gray-200 my-5" />

      {/* Download CV Button */}
      <a
        href={cvUrl}
        target="_blank"
        rel="noreferrer"
        className="w-full flex items-center justify-center bg-[#FFB400] text-gray-900 font-bold py-3 px-4 rounded hover:bg-[#e0a800] transition-colors duration-300"
      >
        DOWNLOAD CV
        <i className="fa-solid fa-download ml-3" />
      </a>
    </div>
  );
};

export default LeftMenu;
