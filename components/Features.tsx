import React from 'react';
import { Shield, Zap, Layout, Globe, Smartphone, Code } from 'lucide-react';

const featuresData = [
  {
    icon: <Zap size={24} />,
    title: "Lightning Fast",
    description: "Optimized for speed with zero-bloat architecture and efficient code splitting."
  },
  {
    icon: <Shield size={24} />,
    title: "Secure by Design",
    description: "Enterprise-grade security standards implemented from the ground up."
  },
  {
    icon: <Layout size={24} />,
    title: "Modular Layout",
    description: "Drag-and-drop components allow for infinite customization possibilities."
  },
  {
    icon: <Smartphone size={24} />,
    title: "Mobile First",
    description: "Fully responsive design that looks and feels native on any device."
  },
  {
    icon: <Globe size={24} />,
    title: "Global CDN",
    description: "Assets served from the edge to ensure low latency worldwide."
  },
  {
    icon: <Code size={24} />,
    title: "Clean API",
    description: "Developer-friendly API documentation with typed SDKs available."
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-[#18242e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-accent font-bold tracking-wider uppercase text-sm mb-2">Capabilities</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Powerful Features for <br/> Modern Needs
          </h3>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg">
            We've packed this project with everything you need to get started, without the complexity you don't.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <div 
              key={index}
              className="group bg-card p-8 rounded-2xl border border-white/5 hover:border-accent/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-main rounded-lg flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};