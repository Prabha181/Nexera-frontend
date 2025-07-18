import React from "react";

// ✅ Import images from src/assets
import tomImg from "../assets/tom.jpg";
import loenardImg from "../assets/loenard.jpg";
import gilbertImg from "../assets/gilbert.jpg";
import franklinImg from "../assets/franklin.jpg";
// You can add more imports if there are more team members

const Team = () => {
  const teamMembers = [
    { id: 1, name: "Tom Oliver", position: "Founder", image: tomImg },
    { id: 2, name: "Loenard Barnes", position: "Lead Engineer", image: loenardImg },
    { id: 3, name: "Gilbert Sherman", position: "Sale Manager", image: gilbertImg },
    { id: 4, name: "Franklin Bailey", position: "Art Director", image: franklinImg },
    // You can add more team members if needed
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block px-4 py-1 mb-4 rounded-full border border-[#3574b8] bg-[#e6edf8] shadow-sm">
          <span className="text-xs uppercase font-bold tracking-widest text-[#3574b8]">
            Our Team
          </span>
        </div>  
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Meet The Team</h2>

        {/* Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex flex-col items-center text-center">
              <img 
                src={member.image} 
                alt={member.name} 
                className="rounded-full mb-4 shadow-lg object-cover"
                style={{ width: '100%', maxWidth: '240px', aspectRatio: '1 / 1' }}
              />
              <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-sm font-semibold text-gray-600">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
