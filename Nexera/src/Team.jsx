import React from "react";

const Team = () => {
  const teamMembers = [
    { 
      id: 1, 
      name: "Tom Oliver", 
      position: "Founder", 
      image: "/src/assets/tom.jpg" 
    },
    { 
      id: 2, 
      name: "Loenard Barnes", 
      position: "Lead Engineer", 
      image: "/src/assets/loenard.jpg" 
    },
    { 
      id: 3, 
      name: "Gilbert Sherman", 
      position: "Sale Manager", 
      image: "/src/assets/gilbert.jpg" 
    },
    { 
      id: 4, 
      name: "Franklin Bailey", 
      position: "Art Director", 
      image: "/src/assets/franklin.jpg" 
    },
    { 
      id: 5, 
      name: "Antonio Alex", 
      position: "Lead Engineer", 
      image: "/src/assets/antonio.jpg" 
    },
    { 
      id: 6, 
      name: "Diarmuid Eoin", 
      position: "Sale Manager", 
      image: "/src/assets/diarmuid.jpg" 
    },
    { 
      id: 7, 
      name: "Ashitaka Dai", 
      position: "Art Director", 
      image: "/src/assets/ashitaka.jpg" 
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block px-4 py-1 mb-4 rounded-full border border-[#bbf7d0] bg-[#ecfdf5] shadow-sm">
          <span className="text-xs uppercase font-bold tracking-widest text-[#45a735]">
            Our Team
          </span>
        </div>  
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Meet The Team</h2>
        
        {/* First row - 4 columns on md, 2 cols on sm, 1 col on xs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {teamMembers.slice(0, 4).map((member) => (
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
        
        {/* Second row - 3 columns on sm+, 1 col on xs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {teamMembers.slice(4, 7).map((member) => (
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
