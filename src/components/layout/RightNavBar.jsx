// src/components/layout/RightNavBar.jsx
import React, { useEffect, useState } from 'react';
import { fetchRightNavItems } from '../../services/api';

// ---------- Nav Item ----------
const NavItem = ({ iconClass, tooltip, isActive, onClick }) => (
  <div className="relative group mb-5 last:mb-0">
    {/* Tooltip */}
    <div className="absolute right-full top-1/2 -translate-y-1/2 mr-4 px-3 py-1 bg-[#2B2B2B] text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50">
      {tooltip}
      <div className="absolute top-1/2 -translate-y-1/2 -right-1 w-2 h-2 bg-[#2B2B2B] rotate-45" />
    </div>

    <button
      onClick={onClick}
      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
        isActive
          ? 'bg-[#FFB400] text-gray-900 shadow-md'
          : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
      }`}
    >
      <i className={`${iconClass} text-lg`} />
    </button>
  </div>
);

// ---------- Defaults ----------
const DEFAULT_ITEMS = [
  { id: 'home', iconClass: 'fa-solid fa-house', tooltip: 'Home' },
  { id: 'services', iconClass: 'fa-solid fa-file-code', tooltip: 'Services' },
  { id: 'education', iconClass: 'fa-solid fa-user-graduate', tooltip: 'Education' },
  { id: 'portfolio', iconClass: 'fa-solid fa-briefcase', tooltip: 'Portfolio' },
  { id: 'blog', iconClass: 'fa-solid fa-pen', tooltip: 'Blog' },
  { id: 'contact', iconClass: 'fa-solid fa-comments', tooltip: 'Contact' }
];

// ---------- Main ----------
const RightNavbar = () => {
  const [navItems, setNavItems] = useState(DEFAULT_ITEMS);
  const [activeTab, setActiveTab] = useState('home');

  // Load from JSON
  useEffect(() => {
    fetchRightNavItems()
      .then((items) => {
        if (Array.isArray(items) && items.length) {
          setNavItems(items);
        }
      })
      .catch(() => {});
  }, []);

  // Scroll to section
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    setActiveTab(id);
  };

  // Track active section on scroll ✅
  useEffect(() => {
    const handleScroll = () => {
      let current = activeTab;

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          current = item.id;
        }
      });

      if (current !== activeTab) {
        setActiveTab(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems, activeTab]);

  return (
    <div className="hidden lg:flex fixed right-0 top-0 h-screen w-20 bg-white shadow-[-5px_0_15px_rgba(0,0,0,0.05)] flex-col items-center py-8 z-50">
      {/* Dark mode placeholder */}
      <div className="mb-auto">
        <button className="w-12 h-12 rounded-full text-gray-800 hover:text-[#FFB400]">
          <i className="fa-solid fa-moon text-xl" />
        </button>
      </div>

      {/* Nav items */}
      <div className="flex flex-col items-center justify-center grow">
        {navItems.map((item) => (
          <NavItem
            key={item.id}
            iconClass={item.iconClass}
            tooltip={item.tooltip}
            isActive={activeTab === item.id}
            onClick={() => scrollToSection(item.id)}
          />
        ))}
      </div>

      <div className="mt-auto h-12" />
    </div>
  );
};

export default RightNavbar;
