import React from "react";

const Team = () => {
  const teamMembers = [
    { id: 1, name: "Tom Oliver", position: "Founder", image: "/src/assets/tom.jpg" },
    { id: 2, name: "Leenard Barnes", position: "Lead Engineer", image: "/src/assets/loenard.jpg" },
    { id: 3, name: "Gilbert Sherman", position: "Sale Manager", image: "/src/assets/gilbert.jpg" },
    { id: 4, name: "Franklin Bailey", position: "Art Director", image: "/src/assets/franklin.jpg" },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block px-4 py-1 mb-4 rounded-full border border-[#bbf7d0] bg-[#ecfdf5] shadow-sm">
          <span className="text-xs uppercase font-bold tracking-widest text-[#45a735]">
            Our Team
          </span>
        </div>  
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Meet The Team</h2>
        
        {/* Responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex flex-col items-center text-center">
              {/* Responsive square image */}
              <img 
                src={member.image} 
                alt={member.name} 
                className="rounded-full mb-5 shadow-lg object-cover w-full max-w-[240px] aspect-square"
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
