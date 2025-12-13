// src/services/api.js

// Static data imports from modular files
import profile from '../data/profile.js';
import services from '../data/services.js';
import education from '../data/education.js';
import workHistory from '../data/workHistory.js';
import projects from '../data/projects.js';
import blogs from '../data/blogs.js';
import testimonials from '../data/testimonials.js';
import rightNavItems from '../data/navigation.js';
import footer from '../data/footer.js';

// ✅ Fetch profile
export async function fetchProfile() {
  return Promise.resolve(profile);
}

// ✅ Fetch services
export async function fetchServices() {
  return Promise.resolve(services);
}

// ✅ Fetch education
export async function fetchEducation() {
  return Promise.resolve(education);
}

// ✅ Fetch work history
export async function fetchWorkHistory() {
  return Promise.resolve(workHistory);
}

// ✅ Fetch projects
export async function fetchProjects() {
  return Promise.resolve(projects);
}

// ✅ Fetch blogs
export async function fetchBlogs() {
  return Promise.resolve(blogs);
}

// ✅ Fetch testimonials
export async function fetchTestimonials() {
  return Promise.resolve(testimonials);
}

// ✅ Fetch right navbar items
export async function fetchRightNavItems() {
  return Promise.resolve(rightNavItems);
}

// ✅ Fetch footer
export async function fetchFooter() {
  return Promise.resolve(footer);
}