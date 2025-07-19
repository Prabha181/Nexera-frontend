import React from 'react';

const WhyChooseUs = () => {
  const features = [
    {
      title: 'Unified Hiring Dashboard',
      description:
        'One unified Dashboard Organize. Track. Schedule. Hire. All in one smart workspace.',
      icon: (
        <svg
          className="w-10 h-10 sm:w-12 sm:h-12 text-[#3574b8] mb-4 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
        </svg>
      ),
    },
    {
      title: 'AI-Powered Smart Matching',
      description:
        'Smart Match Algorithm AI-powered. Role-specific. Matches that make sense, instantly.',
      icon: (
        <svg
          className="w-10 h-10 sm:w-12 sm:h-12 text-[#3574b8] mb-4 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.64 5.64l2.12 2.12M16.24 16.24l2.12 2.12M5.64 18.36l2.12-2.12M16.24 7.76l2.12-2.12" />
        </svg>
      ),
    },
    {
      title: 'Centralized Hiring Workspace',
      description:
        'All in one hiring work space Post. Manage. Communicate. No switching tabs or tools.',
      icon: (
        <svg
          className="w-10 h-10 sm:w-12 sm:h-12 text-[#3574b8] mb-4 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <rect x="3" y="4" width="18" height="16" rx="2" ry="2" />
          <path d="M9 4v16M3 10h18" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-6 sm:py-5 bg-white">
      {/* Container matches StatCard */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-0">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 mb-4 rounded-full border border-[#3574b8] bg-[#e6edf8] shadow-sm">
            <span className="text-xs uppercase font-bold tracking-widest text-[#3574b8]">
              Why Us
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-black">Why Choose Us</h2>
        </div>

        {/* Responsive Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="w-full max-w-ms bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition duration-300 flex flex-col cursor-pointer hover:border-[#3574b8] focus:outline-none focus:ring-2 focus:ring-[#3574b8]"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm flex-grow mb-4">{feature.description}</p>
              <button className="text-left text-black font-semibold text-sm hover:text-[#3574b8]">
                Learn More <span className="ml-1">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
