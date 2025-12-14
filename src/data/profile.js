// src/data/profile.js

// Import all related data
import services from './services.js';
import education from './education.js';
import workHistory from './workHistory.js';
import projects from './projects.js';
import blogs from './blogs.js';
import testimonials from './testimonials.js';
import rightNavItems from './navigation.js';
import footer from './footer.js';
import Hero from '../assets/hero.png';

const profile = {
    fullName: "Mohammad Farhan Taili",
    role: "Full Stack Developer",
    about: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Et, Volutpat Feugiat Placerat Lobortis. Natoque Rutrum Semper Sed Suspendisse Nunc Lectus.",
    avatar: Hero,
    contact: {
        location: {
            country: "India",
            city: "Ahmedabad",
            state: "Gujarat"
        },
        emails: {
            email: "farhantaili08@gmail.com",
            telegram: "@farhantaili",
            linkedin: "linkedin.com/in/mohammad-farhan-taili"
        },
        phones: {
            personal: "+91 9924310984"
        }
    },
    socialLinks: [
        { iconClass: "fa-brands fa-linkedin-in", url: "https://linkedin.com/in/mohammad-farhan-taili" },
        { iconClass: "fa-brands fa-github", url: "https://github.com/MohammadFarhan1408" }
    ],
    personalInfo: {
        age: "22",
        residence: "IN",
        freelance: "Available",
        address: "Ahmedabad, India"
    },
    languages: [
        { label: "English", percentage: 90 },
        { label: "Hindi", percentage: 95 }
    ],
    skills: [
        { label: "Python", percentage: 90 },
        { label: "Django", percentage: 85 },
        { label: "React", percentage: 80 }
    ],
    extraSkills: [
        "React Native",
        "MySQL & Firebase",
        "Tailwind CSS",
        "Git & GitHub"
    ],
    cvUrl: "/resume.pdf",

    // Include nested data for backward compatibility
    services,
    education,
    workHistory,
    projects,
    blogs,
    testimonials,
    rightNavItems,
    footer
};

export default profile;
