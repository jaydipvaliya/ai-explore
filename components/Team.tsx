import React from 'react';
import { Linkedin, Twitter, Github } from 'lucide-react';

const teamMembers = [
  {
    name: "Alex Morgan",
    role: "Lead Developer",
    image: "https://picsum.photos/200/200?random=20",
    socials: { twitter: "#", linkedin: "#", github: "#" }
  },
  {
    name: "Sarah Jenkins",
    role: "UI/UX Designer",
    image: "https://picsum.photos/200/200?random=21",
    socials: { twitter: "#", linkedin: "#", github: "#" }
  },
  {
    name: "David Chen",
    role: "Backend Engineer",
    image: "https://picsum.photos/200/200?random=22",
    socials: { twitter: "#", linkedin: "#", github: "#" }
  },
  {
    name: "Emily White",
    role: "Project Manager",
    image: "https://picsum.photos/200/200?random=23",
    socials: { twitter: "#", linkedin: "#", github: "#" }
  }
];

export const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-[#18242e] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-accent font-bold tracking-wider uppercase text-sm mb-2">Our Team</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Meet the Builders
          </h3>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg">
            We are a group of passionate students dedicated to building high-quality software.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-card p-6 rounded-2xl border border-white/5 hover:border-accent/30 transition-all duration-300 text-center group">
              <div className="w-24 h-24 mx-auto mb-6 relative">
                 <div className="absolute inset-0 bg-accent rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                 <img 
                   src={member.image} 
                   alt={member.name} 
                   className="w-full h-full object-cover rounded-full border-2 border-card relative z-10"
                 />
              </div>
              <h4 className="text-lg font-bold text-white">{member.name}</h4>
              <p className="text-accent text-sm font-medium mb-4">{member.role}</p>
              
              <div className="flex justify-center space-x-3 opacity-60 group-hover:opacity-100 transition-opacity">
                <a href={member.socials.twitter} className="text-slate-400 hover:text-white hover:bg-white/10 p-2 rounded-full transition-colors">
                  <Twitter size={16} />
                </a>
                <a href={member.socials.linkedin} className="text-slate-400 hover:text-white hover:bg-white/10 p-2 rounded-full transition-colors">
                  <Linkedin size={16} />
                </a>
                <a href={member.socials.github} className="text-slate-400 hover:text-white hover:bg-white/10 p-2 rounded-full transition-colors">
                  <Github size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};