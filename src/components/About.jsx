import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, User, Award, Heart, Headphones } from 'lucide-react';
import WhyChooseUs from './WhyChooseUs';
import BrandLogo from '../BrandLogo';
import Industries from './Industries';
import Team2 from './Team2';
import Slider from './Slider';

import about3 from '../assets/about-3.jpg';
import about5 from '../assets/about-5.jpg';
import about4 from '../assets/about-4.jpg';
import about6 from '../assets/about-6.jpg';

const About = () => {
  const teamMembers = [
    { id: 1, image: about3, position: 'top-left' },
    { id: 2, image: about5, position: 'top-right' },
    { id: 3, image: about4, position: 'bottom-left' },
    { id: 4, image: about6, position: 'bottom-right' }
  ];

  const awards = [
    { icon: <User className="w-6 h-6" />, title: 'Easiest Admin', period: 'Fall 2023' },
    { icon: <Heart className="w-6 h-6" />, title: 'Users love Us', period: 'Winter 2023' },
    { icon: <Award className="w-6 h-6" />, title: 'Leader', period: 'Winter 2023' },
    { icon: <Headphones className="w-6 h-6" />, title: 'Best support', period: 'Winter 2023' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-4">
        {/* Header */}
        <div className="bg-white py-16 text-center">
          <h2 className="text-4xl font-extrabold text-black mb-2">About us</h2>
          <p className="text-sm text-gray-600">
            <Link to="/" className="text-sm font-medium text-gray-500 hover:text-[#3574b8] transition-colors">
              Home
            </Link>{' '}
            &nbsp;–&nbsp; us
          </p>
        </div>

        {/* Team & About Section */}
        <div className="pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Team Images */}
            <div className="relative w-full max-w-md sm:max-w-lg mx-auto aspect-square">
              {teamMembers.map((member, index) => {
                const posClasses = {
                  'top-left': 'top-0 left-0',
                  'top-right': 'top-0 right-0',
                  'bottom-left': 'bottom-0 left-0',
                  'bottom-right': 'bottom-0 right-0'
                }[member.position];

                return (
                  <div
                    key={index}
                    className={`absolute ${posClasses} w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300`}
                  >
                    <img
                      src={member.image}
                      alt={`Team member ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                );
              })}

              {/* Center Badge */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full shadow-xl px-4 py-3 sm:px-6 sm:py-4 flex items-center space-x-2 sm:space-x-3 hover:shadow-2xl transition-shadow duration-300">
                <div className="rounded-full p-2 sm:p-3 flex items-center justify-center bg-[#3574b8]">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-[#e6edf8]" />
                </div>
                <div className="text-left">
                  <div className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.05em]">
                    ONLINE SUPPORT
                  </div>
                  <div className="text-gray-900 text-sm sm:text-base font-bold uppercase tracking-[0.02em] hover:text-[#3574b8] transition-colors">
                    +912 (556) 889
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-6">
              <div className="inline-block px-4 py-1 mb-3 rounded-full border border-[#3574b8] bg-[#e6edf8] shadow-sm">
                <span className="text-[10px] uppercase font-bold tracking-[0.1em] text-[#3574b8]">
                  About Us
                </span>
              </div>
              <h1 className="text-3xl sm:text-3xl font-bold text-gray-900 leading-tight mb-6">
                The <span className="text-[#3574b8]">Unified Platform</span> for <br />All Your Needs
              </h1>
              <p className="text-[14px] text-gray-600 leading-relaxed font-semibold -mt-2">
                At Nexera, we connect top talent with forward-thinking companies, bringing both sides of the hiring journey onto one seamless platform.
              </p>
              <p className="text-[14px] text-gray-600 leading-relaxed font-semibold -mt-2">
                With powerful, intuitive features, we empower individuals to find meaningful careers and help organizations build stronger teams, all through a frictionless and intelligent experience.
              </p>
              <p className="text-[14px] text-gray-600 leading-relaxed font-semibold -mt-2">
                This isn’t just a platform, it’s your strategic hiring partner.
              </p>

              {/* Awards with hover effect on title */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {awards.map((award, index) => (
                  <div
                    key={index}
                    className="bg-white px-5 py-4 rounded-2xl shadow-2xl transition-shadow duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-[#3574b8] w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full text-white text-xl">
                        {award.icon}
                      </div>
                      <div>
                        <h3 className="text-black text-sm sm:text-base font-semibold leading-tight mb-1 hover:text-[#3574b8] transition-colors duration-300">
                          {award.title}
                        </h3>
                        <p className="text-gray-500 text-xs sm:text-sm">{award.period}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Components */}
        {/* <BrandLogo /> */}
        <WhyChooseUs />
        <Industries />
        <Team2 />
        <Slider />
      </div>
    </div>
  );
};

export default About;
