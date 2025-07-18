import { Play, Check } from 'lucide-react';
import BannerImage from './assets/video-1.jpg';

const VideoContainer = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      {/* Outer wrapper: same as brand section */}
      <div className="w-full max-w-[1000px] mx-auto">
        {/* Inner grid: same width as logo row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full max-w-[1000px] mx-auto">

          {/* Left side: Stacked image */}
          <div className="relative w-full max-w-md mx-auto">
            {/* Background layers */}
            <div className="absolute top-6 left-6 w-full h-full rounded-xl bg-white opacity-60 shadow-xl transform -rotate-[4deg] z-0" />
            <div className="absolute top-3 left-3 w-full h-full rounded-xl bg-gray-100 opacity-80 shadow-xl transform rotate-[3deg] z-10" />

            {/* Main image */}
            <div className="relative z-20 rounded-xl overflow-hidden shadow-2xl">
              <img
                src={BannerImage}
                alt="Hospitality professional"
                className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl"
              />
              {/* Play overlay */}
              <div className="absolute inset-0 bg-black/10 flex flex-col items-center justify-center text-white cursor-pointer">
                <div className="w-16 h-16 border-2 border-dashed border-white rounded-full flex items-center justify-center">
                  <Play className="w-6 h-6 text-white fill-white" />
                </div>
                <p className="mt-2 text-sm font-medium select-none">Watch Video</p>
              </div>
            </div>
          </div>

          {/* Right side: Content */}
          <div className="px-2 sm:px-0 text-center md:text-left">
            <div className="inline-block px-4 py-1 mb-4 rounded-full border border-[#bbf7d0] bg-[#ecfdf5] shadow-sm">
              <span className="text-xs uppercase font-bold tracking-widest text-[#45a735]">
                About Us
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
              The Leading Hospitality <br />
              Staffing <span className="text-[#45A735]">Platform</span>
            </h1>

            <p className="text-gray-600 text-base mb-6 max-w-xl mx-auto md:mx-0">
              This staffing platform provides access to a diverse pool of qualified
              candidates with specialized skills in areas such as hospitality
              management.
            </p>

            <div className="space-y-4 max-w-xl mx-auto md:mx-0">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#E9F8E4] shrink-0">
                  <Check className="w-4 h-4 text-[#45A735]" />
                </div>
                <p className="text-gray-700 text-base">
                  This helps businesses maintain service excellence
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#E9F8E4] shrink-0">
                  <Check className="w-4 h-4 text-[#45A735]" />
                </div>
                <p className="text-gray-700 text-base">
                  This scalability allows businesses to adjust staffing
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default VideoContainer;
