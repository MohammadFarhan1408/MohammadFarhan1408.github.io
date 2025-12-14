// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import { fetchProfile } from '../services/api';
import LeftMenu from '../components/layout/LeftMenu';
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/About/ServicesSection';
import RightNavbar from '../components/layout/RightNavBar';
import TestimonialSection from '../components/sections/TestimonialSection';
import EducationSection from '../components/sections/About/EducationSection';
import WorkHistorySection from '../components/sections/About/WorkHistorySection';
import PortfolioSection from '../components/sections/PortfolioSection';
import BlogSection from '../components/sections/BlogSection';
import ContactSection from '../components/sections/ContactSection';
import MapSection from '../components/sections/MapSection';
import Footer from '../components/layout/Footer';

export default function Home() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProfile()
      .then((data) => setProfile(data))
      .catch((err) => {
        console.error('Failed to load profile:', err);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="flex flex-col gap-5 lg:flex-row">
      {/* LEFT COLUMN */}
      <div className="w-full lg:w-1/3 xl:w-[22%] lg:shrink-0">
        <LeftMenu profile={profile} loading={loading} />
      </div>

      {/* CENTER COLUMN */}
      <div className="w-full lg:flex-1 xl:w-[68%]">
        <HeroSection profile={profile} />
        <ServicesSection profile={profile} />
        <EducationSection  profile={profile} />
        <WorkHistorySection  profile={profile} />
        <PortfolioSection  profile={profile}  />
        <TestimonialSection profile={profile} />
        <BlogSection profile={profile} />
        <ContactSection  profile={profile} />
        <MapSection />
        <Footer profile={profile} />

      </div>

      {/* RIGHT COLUMN (only on large screens) */}
      <div className="hidden xl:block xl:w-[10%]">
        <RightNavbar />
      </div>
    </section>
  );
}
