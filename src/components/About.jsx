import React from 'react';
import { Download } from 'lucide-react';

export const About = () => {
  return (
    <section className="py-20 bg-white dark:bg-[#0B0F19] transition-colors" id="about">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Title Block */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-[#1C1E26] dark:text-white tracking-tight">About Me</h2>
          <p className="text-xs md:text-sm text-[#687182] dark:text-gray-400 mt-1">My introduction</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          
          {/* Left Professional Office Image */}
          <div className="md:col-span-5 flex justify-center">
            <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOIliCq4gE9x-7_mGojIpyBX96fP3jnkaxCQXitoggLSx1TbWz7nimx2NjI0NOJU2BIUUnJzqEShLaYSZILRNXHKwQyXlSMZWvzb4mu3m5q4YINuKBMZz6Yrqdv1rmdx7L8vfC64I2tVWoDRh0AnWA3ez4POKUAvl-gLGEoLCkWwH5PNY9jEFKROewqCGJkiMflpyI5JTopglzkw7sLR0_jmlgzokIa-zdwuc4IlmpOdYdN9mggvx3OQ" 
                alt="Alex Vance in office" 
                className="w-full h-80 object-cover"
              />
            </div>
          </div>

          {/* Right Content & Stats */}
          <div className="md:col-span-7 space-y-6">
            <p className="text-sm md:text-base text-[#687182] dark:text-gray-300 leading-relaxed">
              Business consultant and venture builder with extensive knowledge and years of experience, working in strategic management and commercial operations, delivering quality work.
            </p>

            {/* 3 Stat Blocks side by side */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              <div className="text-center p-3 rounded-xl bg-[#F4F3FF] dark:bg-[#161F33]">
                <span className="block text-2xl font-bold text-[#1C1E26] dark:text-white">08+</span>
                <span className="text-xs text-[#687182] dark:text-gray-400 leading-tight mt-1 block">Years<br />experience</span>
              </div>
              <div className="text-center p-3 rounded-xl bg-[#F4F3FF] dark:bg-[#161F33]">
                <span className="block text-2xl font-bold text-[#1C1E26] dark:text-white">35+</span>
                <span className="text-xs text-[#687182] dark:text-gray-400 leading-tight mt-1 block">Completed<br />projects</span>
              </div>
              <div className="text-center p-3 rounded-xl bg-[#F4F3FF] dark:bg-[#161F33]">
                <span className="block text-2xl font-bold text-[#1C1E26] dark:text-white">12+</span>
                <span className="text-xs text-[#687182] dark:text-gray-400 leading-tight mt-1 block">Companies<br />advised</span>
              </div>
            </div>

            {/* Download CV CTA */}
            <div className="pt-4">
              <a 
                href="#contact" 
                className="inline-flex items-center space-x-2 bg-primary hover:bg-[#5042db] text-white text-sm font-medium px-6 py-3.5 rounded-xl shadow-md shadow-primary/20 transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                <span>Download CV</span>
                <Download className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
