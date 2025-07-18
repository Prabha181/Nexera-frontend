import React from 'react';
import { Facebook, Twitter, Linkedin, Dribbble } from 'lucide-react';

const Footer = () => {
  return (
    <footer
      className="text-gray-700 pt-16 pb-12"
      style={{ backgroundColor: "#cfcfcf" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <img src="/logo.png" alt="JobAway Logo" className="w-28 mb-3" />
            <p className="text-sm mb-4 leading-relaxed">
              Since 2018, JobAway has connected hospitality workers to thousands
              of businesses, private events and universities.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="#">
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="App Store"
                  className="w-40 sm:w-36"
                />
              </a>
              <a href="#">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                  className="w-44 sm:w-36"
                />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {[
            {
              title: "For Workers",
              links: [
                "Find Work",
                "Jobs in Dubai",
                "Jobs in Virginia",
                "Jobs in California",
                "Jobs in Alaska"
              ]
            },
            {
              title: "For Business",
              links: [
                "Merchandising",
                "Hospitality Staff",
                "General Labour",
                "Car Drivers",
                "Bus Driver"
              ]
            },
            {
              title: "Company",
              links: ["About Us", "Career", "Partners", "Blog", "Clients"]
            },
            {
              title: "Help & Support",
              links: [
                "Contact Us",
                "General FAQ",
                "Support Center",
                "Privacy Policy",
                "Terms & Conditions"
              ]
            }
          ].map((col, idx) => (
            <div key={idx}>
              <h3 className="font-semibold mb-3 text-base">{col.title}</h3>
              <ul className="space-y-2 text-sm">
                {col.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-[#45A735] transition">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-8 w-full border-t border-gray-300"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 gap-4">
          <p className="text-center md:text-left">
            © 2025{' '}
            <a
              href="#"
              className="font-medium text-[#45a735] hover:text-[#3d8f2e] transition"
            >
              JobAway
            </a>{' '}
            – All rights reserved.
          </p>

          <div className="flex items-center space-x-3 sm:space-x-4">
            <span className="text-sm">Follow Us:</span>
            {[Facebook, Twitter, Linkedin, Dribbble].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label={Icon.name}
                className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-green-700 hover:text-white transition"
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
