import React from 'react'

export default function ProjectCard({project}) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={project.img} alt={project.title} className="w-full h-44 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="text-sm text-gray-600 mt-2">{project.desc}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((t,i) => (
            <span key={i} className="text-xs px-2 py-1 bg-gray-100 rounded">{t}</span>
          ))}
        </div>
        <div className="mt-4">
          <a href={project.link} className="text-primary font-medium">View Project →</a>
        </div>
      </div>
    </div>
  )
}
