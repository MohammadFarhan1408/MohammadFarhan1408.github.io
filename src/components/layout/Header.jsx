import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-white/60 backdrop-blur sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="font-bold text-xl text-primary">Farhan</Link>
        <nav className="space-x-4 hidden md:flex">
          <NavLink to="/" className={({isActive}) => isActive ? 'text-primary font-semibold' : 'text-gray-600'}>Home</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? 'text-primary font-semibold' : 'text-gray-600'}>About</NavLink>
          <NavLink to="/projects" className={({isActive}) => isActive ? 'text-primary font-semibold' : 'text-gray-600'}>Projects</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? 'text-primary font-semibold' : 'text-gray-600'}>Contact</NavLink>
        </nav>
        <a href="/resume.pdf" className="hidden md:inline-block px-4 py-2 bg-primary text-white rounded">Resume</a>
      </div>
    </header>
  )
}
