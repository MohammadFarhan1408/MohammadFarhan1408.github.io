import React from 'react'

 const Footer = ({profile}) => {
  const {
    fullName = 'Your Name',
  } = profile || {};

  return (
    <footer className="bg-white text-gray-800 py-3 mt-12">
      <div className="container mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} {fullName} — Built with React & Tailwind</p>
      </div>
    </footer>
  )
}

export default Footer;