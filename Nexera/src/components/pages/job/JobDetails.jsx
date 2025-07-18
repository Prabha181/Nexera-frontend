import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaDribbble } from 'react-icons/fa';
import Subscribe from "../../Subscribe";

const JobDetails = () => {
  return (
    <div className="min-h-screen bg-white px-4 sm:px-6 lg:px-8 py-12">
      {/* Header / Breadcrumb */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-2">Job Details</h2>
        <p className="text-sm text-gray-600">
          <Link to="/" className="hover:text-[#45A735]">Home</Link> &nbsp;–&nbsp; Job Details
        </p>
      </div>

      {/* Content Layout */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-10 py-8 justify-center content-center">
        {/* Left Sidebar */}
        <div className="w-full lg:w-1/3 space-y-6">
          {/* Job Meta Info */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="mb-4">
              <h4 className="font-bold text-gray-900">Location</h4>
              <p className="text-sm text-gray-500">San Francisco, California</p>
            </div>
            <div className="mb-4">
              <h4 className="font-bold text-gray-900">Website</h4>
              <p className="text-sm text-gray-500 break-words">http://www.example.com</p>
            </div>
            <div className="mb-4">
              <h4 className="font-bold text-gray-900">Salary</h4>
              <p className="text-sm text-gray-500">$200 - $300 Per Month</p>
            </div>
            <div className="mb-4">
              <h4 className="font-bold text-gray-900">Experience Need</h4>
              <p className="text-sm text-gray-500">2-3 Yrs</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900">Apply Within</h4>
              <p className="text-sm text-gray-500">25th March, 2025</p>
            </div>
          </div>

          {/* Requirements Box */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-lg font-bold mb-4">Requirements</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><strong>Age:</strong> 25th March, 2025</li>
              <li><strong>Sex:</strong> Male / Female</li>
              <li><strong>Education:</strong> CSE Engineer</li>
              <li><strong>Experience:</strong> 1-3 Yrs</li>
              <li><strong>Skills:</strong> Something Related this Job</li>
            </ul>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-2/3 space-y-6">
          {/* Job Description */}
          <div>
            <h2 className="text-xl font-bold text-black mb-4">Job Description</h2>
            <p className="text-gray-600">
              A Software Engineer is a professional who applies engineering principles to the design,
              development, maintenance, testing, and evaluation of software and systems that make computers
              or devices function effectively.
            </p>
            <p className="text-gray-600 mt-4">
              Software Engineers are proficient in various programming languages and tools, and they
              continuously update their skills to keep pace with the ever-evolving technology landscape.
            </p>
          </div>

          {/* Responsibilities */}
          <div>
            <h2 className="text-xl font-bold text-black mb-4">Responsibilities</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Collaborate with stakeholders to understand the requirements</li>
              <li>Design the overall structure of the software system, including system architecture</li>
              <li>Choose appropriate technologies and frameworks to meet project requirements</li>
              <li>Review code written by peers to ensure quality and adherence to standards</li>
              <li>Participate in project planning, including estimating timelines and resources needed</li>
              <li>Optimize software for performance, scalability, and efficiency</li>
            </ul>
          </div>

          {/* Advantages */}
          <div>
            <h2 className="text-xl font-bold text-black mb-4">Advantages</h2>
            <p className="text-gray-600">
              A Software Engineer applies engineering principles to the design, development,
              maintenance, testing, and evaluation of software and systems.
            </p>
            <p className="text-gray-600 mt-4">
              They are proficient in various programming languages and tools, continuously updating
              their skills to keep up with modern technologies.
            </p>

            {/* Social Icons */}
            <div className="flex flex-wrap items-center gap-3 mt-6 justify-center lg:justify-start">
              <span className="font-semibold text-black">Share On:</span>
              <a href="#" aria-label="Facebook">
                <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center hover:bg-green-600 transition">
                  <FaFacebookF size={14} />
                </div>
              </a>
              <a href="#" aria-label="Twitter">
                <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center hover:bg-green-600 transition">
                  <FaTwitter size={14} />
                </div>
              </a>
              <a href="#" aria-label="LinkedIn">
                <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center hover:bg-green-600 transition">
                  <FaLinkedinIn size={14} />
                </div>
              </a>
              <a href="#" aria-label="Dribbble">
                <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center hover:bg-green-600 transition">
                  <FaDribbble size={14} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Subscribe />
    </div>
  );
};

export default JobDetails;
