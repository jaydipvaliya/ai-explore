import React from 'react';
import { Mail, MapPin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-main relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/2 right-0 -mr-20 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info */}
          <div>
            <h2 className="text-accent font-bold tracking-wider uppercase text-sm mb-2">Get In Touch</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Let's Start a Conversation
            </h3>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Have questions about the project? Want to collaborate or request a feature? We're always open to new ideas and opportunities.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-card rounded-full flex items-center justify-center text-accent border border-white/5">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-sm text-slate-400">Email Us</div>
                  <div className="text-white font-medium">contact@projectnexus.dev</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-card rounded-full flex items-center justify-center text-accent border border-white/5">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-sm text-slate-400">Location</div>
                  <div className="text-white font-medium">University Campus, Tech Block B</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card p-8 rounded-2xl border border-white/5 shadow-2xl">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    className="w-full bg-main border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full bg-main border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                <textarea 
                  id="message"
                  rows={4}
                  className="w-full bg-main border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-accent text-main font-bold py-4 rounded-lg hover:bg-accent-hover transition-colors flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};