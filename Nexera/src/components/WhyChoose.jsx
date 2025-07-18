import React from 'react';
import BackgroundImage from "/src/assets/shape-bg.png";

const WhyChoose = () => {
  const features = [
    {
      title: 'Retain Top Talent',
      description: 'Providing clear career paths and growth opportunities is key to retaining top talent.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
      )
    },
    {
      title: 'Stay Compliant',
      description: 'Educate employees about compliance requirements through regular training.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 12l2 2 4-4" />
          <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3" />
          <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3" />
          <path d="M3 12c0 5.5 4.5 10 10 10s10-4.5 10-10" />
        </svg>
      )
    },
    {
      title: 'Improve Employee',
      description: 'Invest in employee training and development programs to enhance skills and knowledge.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 3v18h18" />
          <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
          <path d="M15 8h3.8v4" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative py-16 bg-cover bg-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute left-0 bottom-0 w-full h-[600px] sm:h-[800px] md:h-[1000px] lg:h-[1235px] bg-no-repeat bg-center pointer-events-none"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 z-0 bg-white opacity-80 sm:opacity-90"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-block px-4 py-1 mb-4 rounded-full border border-[#bbf7d0] bg-[#ecfdf5] shadow-sm">
            <span className="text-xs uppercase font-bold tracking-widest text-[#45a735]">Why Us</span>
          </div>
          <h2 className="text-3xl font-bold text-black">Why Choose Us</h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 flex flex-col items-start"
            >
              <div className="text-green-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4 text-sm">{feature.description}</p>
              <button className="mt-auto text-green-600 font-medium text-sm hover:underline w-full sm:w-auto text-center">
                Learn More <span className="ml-1">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
