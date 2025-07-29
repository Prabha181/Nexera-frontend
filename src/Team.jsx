import React from "react";

// ✅ Importing team member images
import tom from './assets/tom.jpg';
import loenard from './assets/loenard.jpg';
import gilbert from './assets/gilbert.jpg';
import franklin from './assets/franklin.jpg';
import antonio from './assets/antonio.jpg';
import diarmuid from './assets/diarmuid.jpg';
import ashitaka from './assets/ashitaka.jpg';

const Team = () => {
  const teamMembers = [
    { id: 1, name: "Tom Oliver", position: "Founder", image: tom },
    { id: 2, name: "Loenard Barnes", position: "Lead Engineer", image: loenard },
    { id: 3, name: "Gilbert Sherman", position: "Sale Manager", image: gilbert },
    { id: 4, name: "Franklin Bailey", position: "Art Director", image: franklin },
    { id: 5, name: "Antonio Alex", position: "Lead Engineer", image: antonio },
    { id: 6, name: "Diarmuid Eoin", position: "Sale Manager", image: diarmuid },
    { id: 7, name: "Ashitaka Dai", position: "Art Director", image: ashitaka },
  ];

  return (
    <section className="py-8 bg-white mt-13">
      <style>{`
        @keyframes circle {
          0% {
            opacity: 1;
          }
          40% {
            opacity: 1;
          }
          100% {
            width: 200%;
            height: 200%;
            opacity: 0;
          }
        }

        .circle-hover::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background-color: rgba(255, 255, 255, 0.4);
          transform: translate(-50%, -50%);
          border-radius: 9999px;
          opacity: 0;
          pointer-events: none;
        }

        .group:hover .circle-hover::before {
          animation: circle 0.75s forwards;
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Label */}
        <div className="inline-block px-4 py-1 mb-4 rounded-full border border-[#3574b8] bg-[#e6edf8] shadow-sm">
          <span className="text-xs uppercase font-bold tracking-widest text-[#3574b8]">
            Our Team
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Meet The Team</h2>

        {/* First row - 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0 mb-2">
          {teamMembers.slice(0, 4).map((member) => (
            <div key={member.id} className="group flex flex-col items-center text-center">
              <figure className="relative overflow-hidden cursor-pointer circle-hover">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="rounded-full mb-4 shadow-lg object-cover"
                  style={{ width: '100%', maxWidth: '230px', aspectRatio: '1 / 1' }}
                />
              </figure>
              <h3 className="text-lg font-bold text-gray-900 mb-1 hover:text-[#3574b8] cursor-pointer transition-colors duration-300">
                {member.name}
              </h3>
              <p className="text-sm font-semibold text-gray-600">{member.position}</p>
            </div>
          ))}
        </div>

        {/* Second row - 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 max-w-4xl mx-auto">
          {teamMembers.slice(4, 7).map((member) => (
            <div key={member.id} className="group flex flex-col items-center text-center">
              <figure className="relative overflow-hidden cursor-pointer circle-hover">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="rounded-full mb-4 shadow-lg object-cover"
                  style={{ width: '100%', maxWidth: '230px', aspectRatio: '1 / 1' }}
                />
              </figure>
              <h3 className="text-lg font-bold text-gray-900 mb-1 hover:text-[#3574b8] cursor-pointer transition-colors duration-300">
                {member.name}
              </h3>
              <p className="text-sm font-semibold text-gray-600">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
