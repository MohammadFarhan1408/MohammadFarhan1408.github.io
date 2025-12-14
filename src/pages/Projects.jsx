import React, { useEffect, useState } from 'react'
import { fetchProjects } from '../services/api'
import ProjectCard from '../components/ui/ProjectCard'

export default function Projects(){
  const [projects, setProjects] = useState([])
  useEffect(()=> {
    fetchProjects().then(setProjects).catch(console.error)
  },[])
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Portfolio</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>
    </div>
  )
}
