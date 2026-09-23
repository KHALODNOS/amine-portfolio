import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

export const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'Enterprise Analytics',
      description: 'Strategic financial modeling and cloud enterprise architecture adaptable to cross-border teams with automated KPI monitoring.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCeQZ8zYY7osmXUV4O7GE-55LsA2tDXX5R9PfXxvUqwezyN7irj1UVy4qfgsH7EpHuqaGGCdeLSg9UYTJRoGsPodGplpwVFm2YdJXzvLE8ZUCvqMXj4WFFdrfBU6Qh5NT0gQEtlplFAOtdUGQuz6VGTTU6mOD1c5HwfZyixDCLpV8pGopurH1VGvOhnhjWTxd4lQv6v6fj5RrhsR9jaf3gMCFRqOZ_a4IYc8PU6V7UJa9LYr2-87AYS9Q',
    },
    {
      id: 2,
      title: 'Global Growth Expansion',
      description: 'Accelerated cross-border B2B operations into top EU tech hubs, driving 140% ARR growth year over year.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 3,
      title: 'Operations Optimization',
      description: 'Revamped supply chain logistics and digital infrastructure for an enterprise distribution network.',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800',
    },
  ];

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const currentProject = projects[currentIndex];

  return (
    <section className="py-20 bg-white dark:bg-[#0B0F19] transition-colors" id="portfolio">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-[#1C1E26] dark:text-white tracking-tight">Portfolio</h2>
          <p className="text-xs md:text-sm text-[#687182] dark:text-gray-400 mt-1">Most recent work</p>
        </div>

        {/* Carousel Presentation Wrapper */}
        <div className="relative flex items-center justify-between">
          
          {/* Arrow Left */}
          <button 
            onClick={prevSlide}
            aria-label="Previous Project" 
            className="hidden md:flex items-center justify-center text-primary hover:scale-125 transition-transform p-2 cursor-pointer"
            type="button"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Main Carousel Card */}
          <div className="w-full max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-4 transition-all duration-300">
            {/* Left: Project Visual */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800 h-64 md:h-72">
              <img 
                src={currentProject.image} 
                alt={currentProject.title} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right: Project Description */}
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-[#1C1E26] dark:text-white">
                {currentProject.title}
              </h3>
              <p className="text-xs md:text-sm text-[#687182] dark:text-gray-400 leading-relaxed">
                {currentProject.description}
              </p>
              <div>
                <a 
                  href="#contact" 
                  className="inline-flex items-center space-x-2 bg-primary hover:bg-[#5042db] text-white text-xs md:text-sm font-medium px-5 py-3 rounded-xl shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5"
                >
                  <span>Case Study</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Arrow Right */}
          <button 
            onClick={nextSlide}
            aria-label="Next Project" 
            className="hidden md:flex items-center justify-center text-primary hover:scale-125 transition-transform p-2 cursor-pointer"
            type="button"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex justify-center items-center space-x-2 mt-8">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx ? 'w-6 bg-primary' : 'w-2.5 bg-gray-300 dark:bg-gray-700'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
