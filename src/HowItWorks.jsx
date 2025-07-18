import React from 'react';
import { User, Briefcase } from 'lucide-react';
import BusinessImg from './assets/hero_section_banner.png';

const steps = [
  {
    number: '1',
    title: "Sign up, It's Free!",
    description:
      'Our team will set up your account and help you build job to easy-to-use web dashboard.',
  },
  {
    number: '2',
    title: 'Post jobs in minutes',
    description:
      'Create and post anywhere from 1-100 job openings with just a few clicks. Customize your own.',
  },
  {
    number: '3',
    title: 'Review Your Staff',
    description:
      'View bios, reviews, and rosters before workers arrive on the job, and post reviews and pay, effortlessly.',
  },
  
];

const HowItWorks = () => {
  return (
    <section
      className="text-white py-12 mt-8 sm:py-16 px-4 sm:px-6 lg:px-8 relative bg-green-950 bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url(${BusinessImg})`,
      }}
    >
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="inline-block px-4 py-1 mb-4 rounded-full border border-[#e6edf8] bg-transparent">
          <span
            className="text-xs sm:text-[12px] uppercase font-bold tracking-widest"
            style={{ color: '#e6edf8' }}
          >
            PROCESS
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">
          How It Works?
        </h2>

        
        {/* Toggle Buttons */}
        <div className="flex justify-center mb-12">
          <div className="flex rounded-full p-2 gap-1 sm:gap-0 max-w-md w-[370px] h-[70px] bg-[#14243d]">
            <button
              className="flex items-center gap-2 font-medium px-4 sm:px-6 py-2 rounded-full shadow-md flex-1 text-[#e6edf8] bg-[#3574b8] whitespace-nowrap"
              type="button"
            >
              <User size={16} /> For Talents
            </button>
            <button
              className="flex items-center gap-2 font-medium px-4 sm:px-6 py-2 rounded-full transition flex-1 text-[#e6edf8] hover:bg-[#3574b8] hover:text-[#e6edf8] whitespace-nowrap"
              type="button"
            >
              <Briefcase size={16} /> For Business
            </button>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1050px] mx-auto">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative px-6 py-5 rounded-lg text-left transition-all w-full overflow-hidden
                bg-[#14243d] text-white shadow-xl
                before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:bg-[#3574b8] before:transition-all before:duration-500
                after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:bg-[#3574b8] after:transition-all after:duration-500
                hover:before:w-1/2 hover:after:w-1/2  hover:text-black"

            >
              <div className="relative z-10 flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-[#3574b8] text-[#e6edf8] font-bold flex items-center justify-center text-base">
                  {step.number}
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-white transition-colors duration-300">
                  {step.title}
                </h3>
              </div>
              <p className="text-[15px] font-normal text-white leading-relaxed relative z-10 group-hover:text-white transition-colors duration-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;