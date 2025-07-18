import React from 'react';
import { Facebook, Twitter, Linkedin, Dribbble } from 'lucide-react';
import logo from "./assets/nexeralogo.png";

const Footer = () => {
  return (
    <footer className="bg-[#e6edf8] text-gray-700 border-t border-gray-300 pt-16 pb-2">
      <div
        className="relative z-10 mx-auto px-4"
        style={{
          maxWidth: '1050px',
          minWidth: '320px',
          width: '100%',
        }}
      >
        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 mb-14">
          
          {/* Brand Section */}
          <div className="lg:col-span-2 flex flex-col items-center sm:items-start text-center sm:text-left">
            <img src={logo} alt="JobAway Logo" className="w-28 mb-4" />
            <p className="text-sm leading-relaxed max-w-xs mb-6">
              Since 2018, JobAway has connected hospitality <br />
              workers to thousands of businesses, private events <br />
              and universities.
            </p>

            {/* App Store Buttons */}
            <div className="flex gap-4 justify-center sm:justify-start flex-wrap">
              <a href="#">
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="App Store"
                  className="w-32"
                />
              </a>
              <a href="#">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                  className="w-36"
                />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {[
            {
              title: 'For Workers',
              items: ['Find Work', 'Jobs in Dubai', 'Jobs in Virginia', 'Jobs in California', 'Jobs in Alaska'],
            },
            {
              title: 'For Business',
              items: ['Merchandising', 'Hospitality Staff', 'General Labour', 'Car Drivers', 'Bus Driver'],
            },
            {
              title: 'Company',
              items: ['About Us', 'Career', 'Partners', 'Blog', 'Clients'],
            },
            {
              title: 'Help & Support',
              items: ['Contact Us', 'General FAQ', 'Support Center', 'Privacy Policy', 'Terms & Conditions'],
            },
          ].map((section) => (
            <div key={section.title} className="text-center sm:text-left">
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2 text-sm">
                {section.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:text-[#3574b8] transition-colors duration-300 inline-block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full border-t border-gray-300 mb-6"></div>

        {/* Bottom Footer */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between text-sm text-gray-600 pb-1 py-1">
          {/* Left */}
          <p className="text-center md:text-left mb-3 md:mb-0">
            Copyright © 2025{' '}
            <a
              href="#"
              className="font-semibold"
              style={{ color: '#3574b8' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#14243d')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#3574b8')}
            >
              JobAway
            </a>{' '}
            All rights reserved.
          </p>

          {/* Right */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-black">Follow Us On:</span>
            {[Facebook, Twitter, Linkedin, Dribbble].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                aria-label="Social Link"
                className="w-9 h-9 bg-white rounded-full flex items-center justify-center border border-gray-300 hover:bg-[#3574b8] hover:text-white transition-colors"
              >
                <Icon className="w-[14px] h-[14px]" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
