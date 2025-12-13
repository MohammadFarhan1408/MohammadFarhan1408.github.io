import React, { useEffect, useState } from 'react'
import { fetchProfile } from '../services/api'

export default function About(){
  const [profile, setProfile] = useState(null)
  useEffect(()=> {
    fetchProfile().then(setProfile)
  },[])
  return (
    <div className="grid md:grid-cols-2 gap-8 items-start">
      <div>
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="mt-4 text-gray-700">{profile?.summary}</p>
        <ul className="mt-6 space-y-2">
          <li><strong>Email:</strong> {profile?.email}</li>
          <li><strong>Phone:</strong> {profile?.phone}</li>
          <li><strong>Location:</strong> {profile?.location}</li>
        </ul>
        <a href="/resume.pdf" className="inline-block mt-6 px-4 py-2 bg-primary text-white rounded">Download Resume</a>
      </div>
      <div>
        <h3 className="text-xl font-semibold">Skills</h3>
        <div className="mt-4 grid grid-cols-2 gap-2">
          {profile?.skills?.map((s,i)=> (
            <span key={i} className="px-3 py-2 bg-gray-100 rounded">{s}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
