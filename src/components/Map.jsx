import React from "react";

const MapEmbed = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-1 mt-6">
      <div className="rounded-xl overflow-hidden border border-gray-200 shadow-md">
        <iframe
          title="Company Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3132.053460215946!2d-122.52307432340924!3d37.97362547195879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085a49935ce8f8b%3A0xdce1e80f87145d78!2sDominican%20University%20of%20California!5e0!3m2!1sen!2sus!4v1720930101116!5m2!1sen!2sus"
          width="100%"
          height="450"
          loading="lazy"
          allowFullScreen
          className="w-full h-[450px] border-0"
        ></iframe>
      </div>
    </div>
  );
};

export default MapEmbed;
