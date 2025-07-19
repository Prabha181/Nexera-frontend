import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaClock, FaCode, FaUserShield, FaThumbsUp,
  FaStar, FaUserFriends, FaPhoneAlt
} from 'react-icons/fa';
import { User, Briefcase } from 'lucide-react';
import Subscribe from '../../Subscribe';

// ✅ Import images from assets folder
import person1 from '../../../assets/person1.jpg';
import person2 from '../../../assets/person2.jpg';

const jobData = [
  {
    id: 1,
    postedAgo: '6 months ago',
    jobCode: '0222512',
    title: 'Software Engineer',
    location: 'San Francisco, California',
    salary: '$200 - $300 Per Month',
    experience: '2 - 3 Yrs',
    icon: <FaCode className="text-[#e6edf8] text-3xl" />,
  },
  {
    id: 2,
    postedAgo: '6 months ago',
    jobCode: '0222512',
    title: 'Resources Manager',
    location: 'San Francisco, California',
    salary: '$200 - $300 Per Month',
    experience: '2 - 3 Yrs',
    icon: <FaCode className="text-[#e6edf8] text-3xl" />,
  },
  {
    id: 3,
    postedAgo: '6 months ago',
    jobCode: '0222512',
    title: 'Administrative Coordinator',
    location: 'San Francisco, California',
    salary: '$200 - $300 Per Month',
    experience: '2 - 3 Yrs',
    icon: <FaCode className="text-[#e6edf8] text-3xl" />,
  },
  {
    id: 4,
    postedAgo: '6 months ago',
    jobCode: '0222512',
    title: 'Talent Acquisition',
    location: 'San Francisco, California',
    salary: '$200 - $300 Per Month',
    experience: '2 - 3 Yrs',
    icon: <FaCode className="text-[#e6edf8] text-3xl" />,
  },
  {
    id: 5,
    postedAgo: '6 months ago',
    jobCode: '0222512',
    title: 'Software Engineer',
    location: 'San Francisco, California',
    salary: '$200 - $300 Per Month',
    experience: '2 - 3 Yrs',
    icon: <FaCode className="text-[#e6edf8] text-3xl" />,
  },
  {
    id: 6,
    postedAgo: '6 months ago',
    jobCode: '0222512',
    title: 'Resources Manager',
    location: 'San Francisco, California',
    salary: '$200 - $300 Per Month',
    experience: '2 - 3 Yrs',
    icon: <FaCode className="text-[#e6edf8] text-3xl" />,
  },
];

const JobOpenings = () => {
  const [activeTab, setActiveTab] = useState('talents');

  return (
    <div className="relative min-h-screen bg-white px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center py-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black mb-2">Job Openings</h2>
        <p className="text-sm text-gray-600">
          <Link to="/" className="hover:text-[#3574b8] font-medium">Home</Link>
          &nbsp;–&nbsp; Job Openings
        </p>
      </div>

      {/* Subheading */}
      <div className="text-center mb-12">
        <div className="inline-block px-4 py-1 mb-3 rounded-full border border-[#3574b8] bg-[#e6edf8]">
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#3574b8]">
            Posted Jobs
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">Find Your Job</h2>
      </div>

      {/* Job Listings */}
      <div className="space-y-8 max-w-5xl mx-auto">
        {jobData.map((job) => (
          <div key={job.id} className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
            <div className="flex flex-wrap justify-between items-center border-b border-gray-200 pb-3 text-sm text-gray-600 gap-2">
              <div className="flex flex-wrap items-center gap-3">
                <FaClock className="text-black" />
                <span>Posted by <span className="font-semibold text-black">{job.postedAgo}</span></span>
                <span>Job Code: <span className="font-semibold text-black">{job.jobCode}</span></span>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mt-6 gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#14243d] flex items-center justify-center">
                  {job.icon}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-black">{job.title}</h3>
                  <p className="text-gray-500 text-sm">{job.location}</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm">Salary</h4>
                  <p className="text-gray-500 text-sm">{job.salary}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm">Experience Need</h4>
                  <p className="text-gray-500 text-sm">{job.experience}</p>
                </div>
              </div>
              <div>
                <button
                  className="mb-6 relative h-12 w-36 bg-[#3574b8] text-white shadow-2xl rounded-full flex items-center justify-center text-sm font-medium overflow-hidden transition-all
                    before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-500
                    after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-500
                    hover:before:w-1/2 hover:before:bg-[#14243d]
                    hover:after:w-1/2 hover:after:bg-[#14243d]
                    hover:text-white"
                >
                  <span className="relative z-10">View Details</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section with Tabs */}
      <div className="max-w-6xl mx-auto mt-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center mb-10">
          <div className="inline-block px-4 py-1 mb-3 rounded-full border border-[#3574b8] bg-[#e6edf8]">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#3574b8]">
              Welcome to JobAway
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">Modern Day Staffing Agency</h2>
        </div>

        <div className="bg-white rounded-3xl shadow-xl sm:p-10 max-w-5xl">
          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="flex rounded-full p-2 gap-1 sm:gap-0 max-w-md w-[370px] h-[70px] bg-[#14243d]">
              <button
                onClick={() => setActiveTab('talents')}
                className={`flex items-center justify-center gap-2 font-medium px-4 sm:px-6 py-2 rounded-full shadow-md flex-1 whitespace-nowrap transition ${
                  activeTab === 'talents'
                    ? 'bg-[#3574b8] text-[#e6edf8]'
                    : 'bg-transparent text-[#e6edf8] hover:bg-[#3574b8] hover:text-white'
                }`}
              >
                <User size={16} /> For Talents
              </button>
              <button
                onClick={() => setActiveTab('business')}
                className={`flex items-center justify-center gap-2 font-medium px-4 sm:px-6 py-2 rounded-full transition flex-1 whitespace-nowrap ${
                  activeTab === 'business'
                    ? 'bg-[#3574b8] text-white'
                    : 'bg-transparent text-white hover:bg-[#3574b8] hover:text-white'
                }`}
              >
                <Briefcase size={16} /> For Business
              </button>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
            {/* Left Content */}
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl font-bold leading-snug">
                An Award Winning Hiring <br />
                Agency for <span className="text-[#3574b8]">12 years</span>
              </h1>
              <p className="text-gray-500 text-base">
                Voted the fastest solution to implement the easiest to administer your employee & business.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[{
                  icon: <FaUserShield className="text-[#3574b8] text-xl" />, title: 'Easiest Admin', date: 'Fall 2023'
                }, {
                  icon: <FaThumbsUp className="text-[#3574b8] text-xl" />, title: 'Users love Us', date: 'Winter 2023'
                }, {
                  icon: <FaStar className="text-[#3574b8] text-xl" />, title: 'Leader', date: 'Winter 2023'
                }, {
                  icon: <FaUserFriends className="text-[#3574b8] text-xl" />, title: 'Best support', date: 'Winter 2023'
                }].map((item, idx) => (
                  <div key={idx} className="bg-[#e6edf8] rounded-xl p-4 flex items-center gap-4 shadow-sm">
                    {item.icon}
                    <div>
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-sm text-gray-500">{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content */}
            <div className="flex flex-col items-center lg:items-end gap-6">
              {/* Top Section */}
              <div className="flex items-center gap-4">
                <img
                  src={person1}
                  alt="Person 1"
                  className="w-28 h-28 sm:w-36 sm:h-36 rounded-full object-cover"
                />
                <div className="bg-[#e6edf8] rounded-full px-4 py-2 flex items-center gap-3 shadow-sm">
                  <div className="bg-[#3574b8] p-2 rounded-full object-cover">
                    <FaPhoneAlt className="text-[#e6edf8]" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-gray-500">ONLINE SUPPORT</p>
                    <p className="font-semibold text-black">+912 (556) 889</p>
                  </div>
                </div>
              </div>

              {/* Bottom Section */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3 bg-[#14243d] text-white px-6 py-3 w-50 h-15 rounded-full font-medium shadow">
                  <div className="bg-[#3574b8] text-[#e6edf8] font-bold text-lg w-15 h-10 flex items-center justify-center rounded-full">
                    12
                  </div>
                  <span>Year of Experience</span>
                </div>
                <img
                  src={person2}
                  alt="Person 2"
                  className="w-28 h-28 sm:w-36 sm:h-36 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Subscribe />
    </div>
  );
};

export default JobOpenings;
