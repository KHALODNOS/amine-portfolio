import React from 'react';
import { Send, MousePointer, ArrowDown } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="min-h-screen pt-28 pb-16 flex items-center bg-white dark:bg-[#0B0F19] transition-colors" id="home">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Social Icons Left Column */}
          <div className="hidden lg:flex lg:col-span-1 flex-col items-center space-y-6">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="LinkedIn Profile" 
              className="text-primary hover:scale-110 transition-transform"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a 
              href="https://dribbble.com" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="Website and Portfolios" 
              className="text-primary hover:scale-110 transition-transform"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm10.198 10.975c-.32-.016-2.616-.11-5.074.836-.263-.566-.541-1.127-.834-1.678 3.51-1.455 4.887-3.411 4.965-3.526 1.059 1.258 1.71 2.868 1.71 4.629 0 .178-.01.353-.027.525zm-2.022-5.744c-.115.158-1.42 1.942-4.757 3.284-1.442-2.544-3.08-4.743-3.238-4.953 1.488-.633 3.125-.989 4.846-.989 1.542 0 2.98.483 4.181 1.303l-1.032 1.355zm-8.874-3.167c.184.241 1.79 2.404 3.238 4.908-2.678 1.134-5.836 1.733-8.803 1.733-.298 0-.589-.007-.872-.018.918-2.973 3.328-5.279 6.437-6.623zm-7.302 8.653c.277.01.564.017.859.017 3.298 0 6.786-.689 9.697-1.956.262.502.513 1.009.75 1.517-4.148 1.401-7.794 4.549-8.777 5.485-1.554-1.472-2.527-3.549-2.527-5.856 0-.397.03-.787.086-1.171l-.088-.036zm3.333 8.784c.884-.871 4.098-3.729 8.082-5.111.958 2.457 1.551 5.093 1.718 6.012-1.528.814-3.279 1.282-5.138 1.282-1.745 0-3.388-.415-4.846-1.157l.184-1.026zm11.599.418c-.147-.796-.69-3.245-1.587-5.597 2.213-.918 4.223-.889 4.492-.882-.249 2.766-1.77 5.163-3.905 6.479z" />
              </svg>
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="GitHub Profile" 
              className="text-primary hover:scale-110 transition-transform"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>

          {/* Hero Text Details */}
          <div className="lg:col-span-6 space-y-5">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1C1E26] dark:text-white leading-tight">
              Hi, I'm Alex
            </h1>
            <h2 className="text-lg md:text-xl font-medium text-[#687182] dark:text-gray-400">
              Business Strategist & Consultant
            </h2>
            <p className="text-sm md:text-base text-[#687182] dark:text-gray-400 leading-relaxed max-w-lg">
              High level experience in business strategy, commercial management and venture scaling, producing profitable results.
            </p>

            <div className="pt-2">
              <a 
                href="#contact" 
                className="inline-flex items-center space-x-2 bg-primary hover:bg-[#5042db] text-white text-sm font-medium px-6 py-3.5 rounded-xl shadow-md shadow-primary/20 transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                <span>Contact Me</span>
                <Send className="w-4 h-4 ml-1" />
              </a>
            </div>

            {/* Scroll Down Indicator */}
            <div className="pt-8 flex items-center space-x-2 text-primary text-xs font-medium cursor-pointer">
              <MousePointer className="w-5 h-5 text-primary" />
              <a href="#about" className="hover:underline flex items-center gap-1">
                Scroll down 
                <ArrowDown className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Hero Image with Organic Blob Mask */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-primary blob-shape flex items-center justify-center overflow-hidden shadow-2xl shadow-primary/25">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6U3gpHf0xI85tLSWGxRAoFiXVDp3Lhd0z5PXE59aIM19G_O2FDl6yCAvxQDob7nlNQlsB4OhHwudpNWkNe5NL5UT8FCvXhQw_PB-YMXdPyBUgUi-XMu3r1MVBoXQ85I_R6NM50Pzvic7bDFLcZK6vzCPkXsIEJq_evEyJD8zHgNzoipnGkuleBjCZLx7sGqtuiO0s0vu3uGuASnaVBhdDF-SzT6_LgDqbu3yBKUS3h2rjL0aZ4UZuHA" 
                alt="Portrait of Alex" 
                className="w-full h-full object-cover object-top scale-105"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
