// src/components/sections/ContactSection.jsx
import React, { useState } from 'react';

// ------- INFO CARD -------
const ContactInfoGroup = ({ iconClass, details }) => (
  <div className="bg-white p-6 mb-8 last:mb-0">
    <div className="flex justify-center mb-6">
      <div className="w-12 h-12 rounded-full bg-[#FFB400] flex items-center justify-center">
        <i className={`${iconClass} text-xl text-gray-900`} />
      </div>
    </div>

    <div className="space-y-3">
      {details.map((item, idx) => (
        <div key={idx} className="flex justify-between text-sm md:text-base">
          <span className="text-gray-500 font-medium">{item.label}:</span>
          <span className="text-gray-800 text-right ml-2"> {item.value}</span>
        </div>
      ))}
    </div>
  </div>
);

// ------- INPUT -------
const Input = ({ label, ...props }) => (
  <div className="mb-6">
    <label className="block text-gray-500 text-sm font-medium mb-2">
      {label}
    </label>
    <input
      {...props}
      className="w-full bg-[#F0F0F6] text-gray-800 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#FFB400]"
    />
  </div>
);

// ------- TEXTAREA -------
const TextArea = ({ label, ...props }) => (
  <div className="mb-6">
    <label className="block text-gray-500 text-sm font-medium mb-2">
      {label}
    </label>
    <textarea
      {...props}
      rows="6"
      className="w-full bg-[#F0F0F6] text-gray-800 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#FFB400] resize-none"
    />
  </div>
);

// ------- MAIN -------
const ContactSection = ({ profile }) => {
  const contact = profile?.contact || {};

  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert('Please fill required fields');
      return;
    }

    window.location.href = `mailto:${contact?.emails?.email}?subject=${encodeURIComponent(
      form.subject || 'Portfolio Contact'
    )}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )}`;
  };

  const infoData = [
    {
      icon: 'fa-solid fa-map-location-dot',
      items: [
        { label: 'City', value: contact?.location?.city },
        { label: 'State', value: contact?.location?.state },
        { label: 'Country', value: contact?.location?.country }
      ]
    },
    {
      icon: 'fa-solid fa-envelope',
      items: [
        { label: 'Email', value: contact?.emails?.email },
      ]
    },
    {
      icon: 'fa-solid fa-phone',
      items: [
        { label: 'Personal', value: contact?.phones?.personal }
      ]
    }
  ];

  return (
    <section className="mb-10 font-sans" id="contact">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* FORM */}
          <div className="w-full lg:w-2/3">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Leave Your Info
            </h2>

            <form onSubmit={handleSubmit} className="bg-white p-6">
              <Input
                label="Your Full Name *"
                name="name"
                value={form.name}
                onChange={handleChange}
              />

              <Input
                label="Your Email *"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
              />

              <Input
                label="Subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
              />

              <TextArea
                label="Message *"
                name="message"
                value={form.message}
                onChange={handleChange}
              />

              <button
                type="submit"
                className="bg-[#FFB400] text-gray-900 font-bold px-8 py-3 hover:bg-[#e0a800]"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* INFO */}
          <div className="w-full lg:w-1/3">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Contact Info
            </h2>

            {infoData.map((g, i) => (
              <ContactInfoGroup
                key={i}
                iconClass={g.icon}
                details={g.items}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
