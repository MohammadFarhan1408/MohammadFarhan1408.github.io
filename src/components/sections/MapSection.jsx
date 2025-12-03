import React from 'react';

const MapSection = () => {
  return (
    <section className="w-full bg-gray-200">
      {/* Google Map Embed 
        - Width: 100% to span the full screen
        - Height: 350px to match the aspect ratio of your image
        - Query: San Francisco (as shown in your screenshot)
      */}
      <iframe
        title="San Francisco Map"
        width="100%"
        height="350"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29392.08314781616!2d72.59869508366592!3d22.94984433946781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e889e9f447065%3A0x75a855584b5baf08!2sVatva%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1764571799451!5m2!1sen!2sin"
        className="w-full grayscale-0 contrast-100 opacity-90 block"
      ></iframe>
    </section>
    
  );
};

export default MapSection;