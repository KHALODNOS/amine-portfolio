import React from 'react';
import { Send } from 'lucide-react';

export const CalloutBanner = () => {
  return (
    <section className="py-14 bg-white dark:bg-[#0B0F19] transition-colors">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Rounded Purple Banner */}
        <div className="bg-primary rounded-3xl overflow-hidden shadow-xl text-white relative">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center">
            
            {/* Left Details */}
            <div className="p-8 md:p-12 md:col-span-7 space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
                You have a new project
              </h2>
              <p className="text-xs md:text-sm text-purple-100 leading-relaxed max-w-md">
                Contact me now and get a 30% discount on your new enterprise consulting project.
              </p>
              <div className="pt-2">
                <a 
                  href="#contact" 
                  className="inline-flex items-center space-x-2 bg-white text-primary hover:bg-gray-100 font-medium text-xs md:text-sm px-6 py-3.5 rounded-xl shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5"
                >
                  <span>Contact Me</span>
                  <Send className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>

            {/* Right Portrait Image Inside Banner */}
            <div className="md:col-span-5 flex justify-end items-end h-64 md:h-80">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6U3gpHf0xI85tLSWGxRAoFiXVDp3Lhd0z5PXE59aIM19G_O2FDl6yCAvxQDob7nlNQlsB4OhHwudpNWkNe5NL5UT8FCvXhQw_PB-YMXdPyBUgUi-XMu3r1MVBoXQ85I_R6NM50Pzvic7bDFLcZK6vzCPkXsIEJq_evEyJD8zHgNzoipnGkuleBjCZLx7sGqtuiO0s0vu3uGuASnaVBhdDF-SzT6_LgDqbu3yBKUS3h2rjL0aZ4UZuHA" 
                alt="Alex Vance" 
                className="h-full w-auto object-cover object-top"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
