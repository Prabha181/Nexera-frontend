import React from 'react';

const WorkOptions = () => {
  return (
    <div className="bg-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Local Workers */}
        <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center relative">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Job Providers</h2>
          <p className="text-gray-600 mb-6 max-w-md sm:max-w-none">
            Join over 1 million workers who use GravyWork to find flexible and temp to hire opportunities.
          </p>

          <button
            className="mb-6 relative h-12 w-36 bg-[#3574b8] text-white shadow-2xl rounded-full flex items-center justify-center text-sm font-medium overflow-hidden transition-all
              before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-500
              after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-500
              hover:before:w-1/2 hover:before:bg-[#14243d]
              hover:after:w-1/2 hover:after:bg-[#14243d]
              hover:text-white"
          >
            <span className="relative z-10">Job Seekers</span>
          </button>

          <img
            src="/src/assets/worker.jpg"
            alt="Local Workers"
            className="w-full max-w-md h-72 object-cover rounded-xl"
          />
        </div>

        {/* Business Owner */}
        <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center relative">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">For Business Owner</h2>
          <p className="text-gray-600 mb-6 max-w-xs sm:max-w-none">
            Finding individuals who share your company's values and vision can contribute to a cohesive team.
          </p>

          <button
            className="mb-6 relative h-12 w-36 bg-[#3574b8] text-white shadow-2xl rounded-full flex items-center justify-center text-sm font-medium overflow-hidden transition-all
              before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-500
              after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-500
              hover:before:w-1/2 hover:before:bg-[#14243d]
              hover:after:w-1/2 hover:after:bg-[#14243d]
              hover:text-white"
          >
            <span className="relative z-10">Find Employee</span>
          </button>

          <img
            src="/src/assets/business.png"
            alt="Business Owner"
            className="w-full max-w-md h-72 object-cover rounded-xl"
          />
        </div>

      </div>
    </div>
  );
};

export default WorkOptions;
