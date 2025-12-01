import React from 'react';
import { ArrowRight, Github } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center px-3 py-1 rounded-full border border-accent/30 bg-accent/5 text-accent text-xs font-semibold tracking-wide uppercase mb-8 animate-fade-in-up">
          New Version 2.0 Released
        </div>
        
        <h1 className="text-5xl md:text-7xl font-display font-extrabold tracking-tight leading-tight mb-6">
          The Future of <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
            Student Innovation
          </span>
        </h1>
        
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-slate-400 leading-relaxed mb-10">
          A powerful, modular, and open-source platform designed to help students showcase their projects with professional style and modern tech stacks.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="#features"
            className="group px-8 py-4 text-base font-bold text-main bg-accent rounded-full hover:bg-accent-hover transition-all duration-200 flex items-center gap-2"
          >
            Explore Features
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 text-base font-semibold text-white border border-white/20 rounded-full hover:bg-white/5 transition-all duration-200 flex items-center gap-2"
          >
            <Github size={18} />
            View on GitHub
          </a>
        </div>

        {/* Hero Image/Mockup Placeholder */}
        <div className="mt-16 md:mt-20 relative mx-auto max-w-5xl">
          <div className="relative rounded-xl bg-card border border-white/10 shadow-2xl overflow-hidden aspect-video group">
             <div className="absolute inset-0 bg-gradient-to-t from-main to-transparent opacity-60 z-10"></div>
             <img 
               src="https://picsum.photos/1920/1080?random=1" 
               alt="Dashboard Preview" 
               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
             />
             <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 cursor-pointer hover:scale-110 transition-transform">
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-accent border-b-[10px] border-b-transparent ml-1"></div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};