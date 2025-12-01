import React from 'react';

export const Screenshots: React.FC = () => {
  return (
    <section id="screenshots" className="py-24 bg-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-xl">
             <h2 className="text-accent font-bold tracking-wider uppercase text-sm mb-2">Visual Tour</h2>
             <h3 className="text-3xl md:text-4xl font-display font-bold text-white">
               See the Interface
             </h3>
          </div>
          <div className="mt-4 md:mt-0">
             <button className="text-slate-400 hover:text-white transition-colors font-medium flex items-center gap-2">
               View all screenshots &rarr;
             </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Item 1 */}
          <div className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer">
            <img 
              src="https://picsum.photos/800/600?random=10" 
              alt="App Screenshot 1" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-main/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <div>
                <h4 className="text-white font-bold text-lg">Main Dashboard</h4>
                <p className="text-slate-300 text-sm">Real-time analytics overview</p>
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer">
            <img 
              src="https://picsum.photos/800/600?random=11" 
              alt="App Screenshot 2" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-main/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <div>
                <h4 className="text-white font-bold text-lg">User Profile</h4>
                <p className="text-slate-300 text-sm">Customizable settings panel</p>
              </div>
            </div>
          </div>

          {/* Item 3 */}
          <div className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer">
            <img 
              src="https://picsum.photos/800/600?random=12" 
              alt="App Screenshot 3" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-main/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <div>
                <h4 className="text-white font-bold text-lg">Dark Mode</h4>
                <p className="text-slate-300 text-sm">Eye-friendly interface</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};