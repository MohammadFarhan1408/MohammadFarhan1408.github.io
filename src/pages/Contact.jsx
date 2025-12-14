import React from 'react'

export default function Contact(){
  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-semibold">Let's discuss your project</h2>
      <form className="mt-4 grid gap-3">
        <input className="border p-2 rounded" placeholder="Name" />
        <input className="border p-2 rounded" placeholder="Email" />
        <input className="border p-2 rounded" placeholder="Subject" />
        <textarea className="border p-2 rounded" placeholder="Message" rows="5" />
        <div className="flex items-center justify-between">
          <a href="mailto:farhan14082005@gmail.com" className="text-sm text-gray-600">Or email me directly</a>
          <button className="px-4 py-2 bg-primary text-white rounded">Send</button>
        </div>
      </form>
    </div>
  )
}
