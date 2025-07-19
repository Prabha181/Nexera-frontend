import React, { useState } from 'react';
import { Play, Check, X } from 'lucide-react';
import BannerImage from './assets/video-1.jpg';

const VideoContainer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full overflow-x-hidden bg-white py-16 px-4 mt-10 relative">
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center px-4">
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/Q6Y-DZzHxj0?autoplay=1"
              title="YouTube video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-white bg-black bg-opacity-50 rounded-full p-1 hover:bg-opacity-80 transition"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}

      {/* Outer wrapper */}
      <div className="w-full max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Image with decorative layers */}
          <div className="relative w-full max-w-md mx-auto overflow-hidden">
            {/* Decorative rotated layers */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <div className="absolute inset-0 transform -rotate-2 bg-white opacity-60 shadow-xl rounded-xl scale-105" />
              <div className="absolute inset-0 transform rotate-2 bg-gray-100 opacity-80 shadow-xl rounded-xl scale-105" />
            </div>

            {/* Main image layer with play button */}
            <div className="relative z-20 rounded-xl overflow-hidden shadow-2xl">
              <img
                src={BannerImage}
                alt="Hospitality professional"
                className="w-full h-[256px] sm:h-[320px] md:h-[384px] object-cover rounded-xl"
              />
              <div
                className="absolute inset-0 bg-black/10 flex flex-col items-center justify-center text-white cursor-pointer hover:bg-black/20 transition"
                onClick={() => setIsModalOpen(true)}
              >
                <div className="w-16 h-16 border-2 border-dashed border-white rounded-full flex items-center justify-center">
                  <Play className="w-6 h-6 text-white fill-white" />
                </div>
                <p className="mt-2 text-sm font-medium select-none">Watch Video</p>
              </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="px-2 sm:px-0 text-center md:text-left">
            <div className="inline-block px-4 py-1 mb-2 rounded-full border border-[#3574b8] bg-[#e6edf8] shadow-sm">
              <span className="text-xs uppercase font-bold tracking-widest text-[#3574b8]">
                About Us
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-3">
              The <span className="text-[#3574b8]">Unified Platform</span> for<br/> All Your Needs
            </h1>

            <p className="text-gray-600 text-[14px] leading-snug mb-4 max-w-md mx-auto md:mx-0">
                We serve as a trusted bridge between job seekers and employers,
                connecting them through a transparent and seamless ecosystem.
                Our cohesive vision is simple — everyone should get what they’re looking for, without the hassle.
            </p>


            <div className="space-y-3 max-w-md mx-auto md:mx-0">
              <div className="flex items-start gap-3 text-left">
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#e6edf8] shrink-0">
                  <Check className="w-4 h-4 text-[#3574b8]" />
                </div>
                <p className="text-gray-600 text-[14px] leading-snug mb-2 max-w-md mx-auto md:mx-0">
                  <span className="hover:text-[#3574b8] font-medium cursor-pointer">
                    For Employers:
                  </span>{' '}
                  Streamline your hiring process and discover the perfect candidate with ease.
                </p>
              </div>

              <div className="flex items-start gap-3 text-left">
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#e6edf8] shrink-0">
                  <Check className="w-4 h-4 text-[#3574b8]" />
                </div>
                <p className="text-gray-600 text-[14px] leading-snug mb-2 max-w-md mx-auto md:mx-0">
                  <span className="hover:text-[#3574b8] font-medium cursor-pointer">
                    For Job Seekers:
                  </span>{' '}
                  Find your dream job with verified company profiles, clear expectations and honest terms.
                </p>
              </div>

             <p className="text-gray-600 text-[14px] leading-snug mb-4 max-w-md mx-auto md:mx-0">
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
