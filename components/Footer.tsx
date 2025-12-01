import React from 'react';
import { Zap, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-main pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="flex items-center space-x-2 mb-4 group">
               <div className="bg-accent text-main p-1 rounded-md group-hover:rotate-12 transition-transform duration-300">
                  <Zap size={20} strokeWidth={3} />
               </div>
               <span className="font-display font-bold text-xl tracking-tight text-white">
                 AI<span className="text-accent">X</span>PLORE
               </span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering students to build, share, and grow their technical portfolios with modern tools.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-accent transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Changelog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-accent transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">GitHub Repo</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Discord</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Project Nexus. All rights reserved.</p>
          <p className="flex items-center mt-2 md:mt-0">
            Made with <Heart size={14} className="text-red-500 mx-1 fill-current" /> by the Student Team
          </p>
        </div>
      </div>
    </footer>
  );
};