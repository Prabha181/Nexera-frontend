import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaClock, FaCode, FaUserShield, FaThumbsUp,
  FaStar, FaUserFriends, FaPhoneAlt
} from 'react-icons/fa';
import { User, Briefcase } from 'lucide-react';
import Subscribe from '../../Subscribe';

const jobData = [
  {
    id: 1,
    postedAgo: '6 months ago',
    jobCode: '0222512',
    title: 'Software Engineer',
    location: 'San Francisco, California',
    salary: '$200 - $300 Per Month',
    experience: '2 - 3 Yrs',
    icon: <FaCode className="text-[#66ff66] text-3xl" />,
  },
  {
    id: 2,
    postedAgo: '6 months ago',
    jobCode: '0222512',
    title: 'Resources Manager',
    location: 'San Francisco, California',
    salary: '$200 - $300 Per Month',
    experience: '2 - 3 Yrs',
    icon: <FaCode className="text-[#66ff66] text-3xl" />,
  },
  {
    id: 3,
    postedAgo: '6 months ago',
    jobCode: '0222512',
    title: 'Administrative Coordinator',
    location: 'San Francisco, California',
    salary: '$200 - $300 Per Month',
    experience: '2 - 3 Yrs',
    icon: <FaCode className="text-[#66ff66] text-3xl" />,
  },
  {
    id: 4,
    postedAgo: '6 months ago',
    jobCode: '0222512',
    title: 'Talent Acquisition',
    location: 'San Francisco, California',
    salary: '$200 - $300 Per Month',
    experience: '2 - 3 Yrs',
    icon: <FaCode className="text-[#66ff66] text-3xl" />,
  },
  {
    id: 5,
    postedAgo: '6 months ago',
    jobCode: '0222512',
    title: 'Software Engineer',
    location: 'San Francisco, California',
    salary: '$200 - $300 Per Month',
    experience: '2 - 3 Yrs',
    icon: <FaCode className="text-[#66ff66] text-3xl" />,
  },
  {
    id: 6,
    postedAgo: '6 months ago',
    jobCode: '0222512',
    title: 'Resources Manager',
    location: 'San Francisco, California',
    salary: '$200 - $300 Per Month',
    experience: '2 - 3 Yrs',
    icon: <FaCode className="text-[#66ff66] text-3xl" />,
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
          <Link to="/" className="hover:text-[#45A735] font-medium">Home</Link>
          &nbsp;–&nbsp; Job Openings
        </p>
      </div>

      {/* Subheading */}
      <div className="text-center mb-12">
        <div className="inline-block px-4 py-1 mb-3 rounded-full border border-[#bbf7d0] bg-[#ecfdf5]">
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#45a735]">
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
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#12431D] flex items-center justify-center">
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
                <button className="border border-[#45A735] text-[#000000] px-5 py-2 rounded-full text-sm font-medium hover:bg-[#45A735]/10 transition">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section with Tabs */}
      <div className="max-w-7xl mx-auto mt-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 mb-3 rounded-full border border-[#bbf7d0] bg-[#ecfdf5]">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#45a735]">
              Welcome to JobAway
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">Modern Day Staffing Agency</h2>
        </div>

        <div className="bg-white rounded-3xl shadow-xl sm:p-10 max-w-6xl mx-auto">
  {/* Tabs */}
            <div className="flex justify-center mb-12">
              <div className="flex rounded-full p-2 gap-1 sm:gap-0 max-w-md w-[370px] h-[70px] bg-[#396340]">
                <button
                  onClick={() => setActiveTab('talents')}
                  className={`flex items-center justify-center gap-2 font-medium px-4 sm:px-6 py-2 rounded-full shadow-md flex-1 whitespace-nowrap transition ${
                    activeTab === 'talents'
                      ? 'bg-[#78EC54] text-black'
                      : 'bg-transparent text-white hover:bg-[#78EC54] hover:text-black'
                  }`}
                >
                  <User size={16} /> For Talents
                </button>
                <button
                  onClick={() => setActiveTab('business')}
                  className={`flex items-center justify-center gap-2 font-medium px-4 sm:px-6 py-2 rounded-full transition flex-1 whitespace-nowrap ${
                    activeTab === 'business'
                      ? 'bg-[#78EC54] text-black'
                      : 'bg-transparent text-white hover:bg-[#78EC54] hover:text-black'
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
                  Agency for <span className="text-green-600">12 years</span>
                </h1>
                <p className="text-gray-500 text-base">
                  Voted the fastest solution to implement the easiest to administer your employee & business.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[{
                    icon: <FaUserShield className="text-green-600 text-xl" />, title: 'Easiest Admin', date: 'Fall 2023'
                  }, {
                    icon: <FaThumbsUp className="text-green-600 text-xl" />, title: 'Users love Us', date: 'Winter 2023'
                  }, {
                    icon: <FaStar className="text-green-600 text-xl" />, title: 'Leader', date: 'Winter 2023'
                  }, {
                    icon: <FaUserFriends className="text-green-600 text-xl" />, title: 'Best support', date: 'Winter 2023'
                  }].map((item, idx) => (
                    <div key={idx} className="bg-white rounded-xl p-4 flex items-center gap-4 shadow-sm">
                      {item.icon}
                      <div>
                        <p className="font-semibold">{item.title}</p>
                        <p className="text-sm text-gray-500">{item.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Content - Always show both elements */}
              <div className="flex flex-col items-center lg:items-end gap-6">
                {/* Top Section: Person 1 and Contact Info */}
                <div className="flex items-center gap-4">
                  {/* Person 1 Image */}
                  <img
                    src="/src/assets/person1.jpg"
                    alt="Person 1"
                    className="w-28 h-28 sm:w-36 sm:h-36 rounded-full object-cover"
                  />
                  {/* Contact Info */}
                  <div className="bg-[#f6fdf3] rounded-full px-4 py-2 flex items-center gap-3 shadow-sm">
                    <div className="bg-[#78EB54] p-2 rounded-full object-cover">
                      <FaPhoneAlt className="text-black" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs text-gray-500">ONLINE SUPPORT</p>
                      <p className="font-semibold text-black">+912 (556) 889</p>
                    </div>
                  </div>
                </div>

                {/* Bottom Section: Experience Badge and Person 2 */}
                <div className="flex items-center gap-4">
                  {/* Experience Badge */}
                  <div className="flex items-center gap-3 bg-[#26472B] text-white px-6 py-3  w-50 h-15 rounded-full font-medium shadow ">
                  <div className="bg-[#78EB54] text-black font-bold text-lg w-15 h-10 flex items-center justify-center rounded-full">
                    12
                  </div>
                  <span>Year of Experience</span>
                </div>
                  {/* Person 2 Image */}
                  <img
                    src="/src/assets/person2.jpg"
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
