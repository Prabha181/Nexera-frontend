import React, { useState } from 'react';
import { Play, Check, X } from 'lucide-react';
import BannerImage from './assets/video-1.jpg';

const VideoContainer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 mt-10 relative">
      {/* Modal Video */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
          <div className="relative w-full max-w-4xl bg-white rounded-xl overflow-hidden shadow-xl">
            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 z-50 text-gray-600 hover:text-black transition"
              aria-label="Close video modal"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="w-full aspect-video">
              <iframe
                className="w-full h-full rounded-xl"
                src="https://www.youtube.com/embed/Q6Y-DZzHxj0?autoplay=1"
                title="Video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="w-full max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full">
          {/* Image with layers */}
          <div className="relative w-full max-w-md mx-auto">
            <div className="absolute top-6 left-6 w-full h-full rounded-xl bg-white opacity-60 shadow-xl transform -rotate-[4deg] z-0" />
            <div className="absolute top-3 left-3 w-full h-full rounded-xl bg-gray-100 opacity-80 shadow-xl transform rotate-[3deg] z-10" />

            <div className="relative z-20 rounded-xl overflow-hidden shadow-2xl">
              <img
                src={BannerImage}
                alt="Hospitality professional"
                className="w-full h-[220px] sm:h-[280px] md:h-[384px] object-cover rounded-xl"
              />
              {/* Watch Video Button */}
              <div
                onClick={() => setIsModalOpen(true)}
                className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center text-white cursor-pointer transition hover:bg-black/40"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') setIsModalOpen(true); }}
                aria-label="Watch Video"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 border-2 border-dashed border-white rounded-full flex items-center justify-center">
                  <Play className="w-6 h-6 text-white fill-white" />
                </div>
                <p className="mt-2 text-sm font-medium select-none">Watch Video</p>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="px-0 sm:px-4 text-center md:text-left">
            <div className="inline-block px-4 py-1 mb-4 rounded-full border border-[#3574b8] bg-[#e6edf8] shadow-sm">
              <span className="text-xs uppercase font-bold tracking-widest text-[#3574b8]">
                About Us
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-5 sm:mb-6">
              The <span className="text-[#3574b8]">Unified Platform</span> for All Your Needs
            </h1>

            <p className="text-gray-600 text-base mb-5 text-[13px] sm:text-[14px] max-w-md mx-auto md:mx-0">
              We serve as a trusted bridge between job seekers and employers,
              connecting <br /> them through a transparent and seamless ecosystem.
              Our cohesive vision is simple — everyone should get what they’re looking for, without the hassle.
            </p>

            <div className="space-y-3 max-w-md mx-auto md:mx-0">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#e6edf8] shrink-0">
                  <Check className="w-4 h-4 text-[#3574b8]" />
                </div>
                <p className="text-gray-700 text-sm sm:text-base">
                  <span className="hover:text-[#3574b8] font-medium cursor-pointer">
                    For Employers:
                  </span>{' '}
                  Streamline your hiring process and discover the perfect candidate with ease.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#e6edf8] shrink-0">
                  <Check className="w-4 h-4 text-[#3574b8]" />
                </div>
                <p className="text-gray-700 text-sm sm:text-base">
                  <span className="hover:text-[#3574b8] font-medium cursor-pointer">
                    For Job Seekers:
                  </span>{' '}
                  Find your dream job with verified company profiles, clear expectations and honest terms.
                </p>
              </div>
              <p className="text-gray-700 text-sm sm:text-base max-w-md mx-auto md:mx-0">
                Join a platform where opportunity meets trust.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoContainer;
