import React from 'react';
import { Facebook, Twitter, Linkedin, Dribbble } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="text-gray-700 pt-10 pb-6 bg-[#eef0e7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">

          {/* Brand Section */}
          <div className="lg:col-span-2 flex flex-col items-center sm:items-start text-center sm:text-left">
            <img src="/logo.png" alt="JobAway Logo" className="w-28 mb-3" />
            <p className="text-sm mb-4 leading-relaxed max-w-xs">
              Since 2018, JobAway has connected hospitality <br />
              workers to thousands of businesses, private events <br />
              and universities.
            </p>

            <div className="flex gap-4 mt-4 justify-center sm:justify-start flex-wrap">
              <a href="#" className="inline-block">
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="App Store"
                  className="w-28 sm:w-32"
                />
              </a>
              <a href="#" className="inline-block">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                  className="w-28 sm:w-36"
                />
              </a>
            </div>
          </div>

          {/* Footer Link Sections */}
          {[
            {
              title: 'For Workers',
              items: [
                'Find Work',
                'Jobs in Dubai',
                'Jobs in Virginia',
                'Jobs in California',
                'Jobs in Alaska',
              ],
            },
            {
              title: 'For Business',
              items: [
                'Merchandising',
                'Hospitality Staff',
                'General Labour',
                'Car Drivers',
                'Bus Driver',
              ],
            },
            {
              title: 'Company',
              items: ['About Us', 'Career', 'Partners', 'Blog', 'Clients'],
            },
            {
              title: 'Help & Support',
              items: [
                'Contact Us',
                'General FAQ',
                'Support Center',
                'Privacy Policy',
                'Terms & Conditions',
              ],
            },
          ].map((section) => (
            <div key={section.title} className="text-center sm:text-left">
              <h3 className="font-semibold mb-3">{section.title}</h3>
              <ul className="space-y-2 text-sm">
                {section.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="transition-colors duration-300 inline-block"
                      style={{ color: 'inherit' }}
                      onMouseEnter={(e) => (e.target.style.color = '#45a735')}
                      onMouseLeave={(e) => (e.target.style.color = 'inherit')}
                      onMouseDown={(e) => (e.target.style.color = '#45a735')}
                      onMouseUp={(e) => (e.target.style.color = '#45a735')}
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
        <div className="my-6 w-full border-t border-gray-300"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 gap-4 md:gap-0">
          <p className="text-center md:text-left">
            © 2025{' '}
            <a
              href="#"
              className="font-medium"
              style={{ color: '#45a735' }}
              onMouseEnter={(e) => (e.target.style.color = '#3d8f2e')}
              onMouseLeave={(e) => (e.target.style.color = '#45a735')}
            >
              JobAway
            </a>{' '}
            All rights reserved.
          </p>

          <div className="flex items-center space-x-4 justify-center md:justify-start">
            <span className="whitespace-nowrap">Follow Us On:</span>
            {[Facebook, Twitter, Linkedin, Dribbble].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                aria-label="Social Link"
                className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-green-700 hover:text-white transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
