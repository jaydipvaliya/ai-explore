import React from 'react';
import { Target, Lightbulb, TrendingUp } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-main relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div>
            <h2 className="text-accent font-bold tracking-wider uppercase text-sm mb-2">About The Project</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Bridging the gap between <span className="text-slate-400">theory and reality.</span>
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              This project started as a simple university assignment but evolved into a fully functional tool. Our goal is to provide a clean, accessible interface for managing complex data structures without the visual clutter found in enterprise software.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-card p-3 rounded-lg text-accent">
                  <Target size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-white">Precision Focused</h4>
                  <p className="text-slate-400 mt-1">Built with TypeScript to ensure type safety and reliable code execution across all modules.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-card p-3 rounded-lg text-accent">
                  <Lightbulb size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-white">Intuitive Design</h4>
                  <p className="text-slate-400 mt-1">A user-first approach to UI/UX, ensuring that even the most complex features are easy to use.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-card p-3 rounded-lg text-accent">
                  <TrendingUp size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-white">Scalable Architecture</h4>
                  <p className="text-slate-400 mt-1">Designed to grow. The modular component structure allows for easy expansion.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="absolute inset-0 bg-accent/20 blur-[60px] rounded-full transform rotate-45"></div>
            <div className="relative bg-card border border-white/5 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center space-x-2 mb-6 border-b border-white/5 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="text-xs text-slate-500 ml-2 font-mono">terminal — bash — 80x24</div>
              </div>
              <div className="font-mono text-sm space-y-2">
                <div className="flex">
                  <span className="text-accent mr-2">$</span>
                  <span className="text-white">npm install project-nexus</span>
                </div>
                <div className="text-slate-500">Installing dependencies...</div>
                <div className="text-slate-500">Fetching core modules... [100%]</div>
                <div className="text-green-400">Done in 2.4s.</div>
                <br />
                <div className="flex">
                  <span className="text-accent mr-2">$</span>
                  <span className="text-white">nexus start --mode=production</span>
                </div>
                <div className="text-slate-500">Starting server on port 3000...</div>
                <div className="text-accent">Server ready! 🚀</div>
              </div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-[#1D2B36] p-4 rounded-xl border border-white/10 shadow-xl flex items-center gap-3">
               <div className="bg-green-500/10 text-green-400 p-2 rounded-lg">
                 <TrendingUp size={20} />
               </div>
               <div>
                 <div className="text-xs text-slate-400">Performance</div>
                 <div className="text-lg font-bold text-white">98/100</div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};