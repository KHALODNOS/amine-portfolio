import React, { useState } from 'react';
import { Code, Briefcase, ChevronDown, ChevronUp } from 'lucide-react';

export const Skills = () => {
  const [openCategory, setOpenCategory] = useState('leadership');

  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <section className="py-20 bg-white dark:bg-[#0B0F19] transition-colors" id="skills">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-[#1C1E26] dark:text-white tracking-tight">Skills</h2>
          <p className="text-xs md:text-sm text-[#687182] dark:text-gray-400 mt-1">My technical level</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Category 1: Strategic Leadership */}
          <div className="space-y-6">
            <div 
              onClick={() => toggleCategory('leadership')}
              className="flex items-center justify-between cursor-pointer p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-[#161F33] transition-colors"
            >
              <div className="flex items-center space-x-3">
                <div className="text-primary text-2xl">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#1C1E26] dark:text-white">Strategic Leadership</h3>
                  <p className="text-xs text-[#687182] dark:text-gray-400">More than 6 years</p>
                </div>
              </div>
              {openCategory === 'leadership' ? (
                <ChevronUp className="w-5 h-5 text-primary" />
              ) : (
                <ChevronDown className="w-5 h-5 text-primary" />
              )}
            </div>

            {/* Skill bars list */}
            {openCategory === 'leadership' && (
              <div className="space-y-4 pl-4 md:pl-9 transition-all">
                <div>
                  <div className="flex justify-between text-xs font-semibold text-[#1C1E26] dark:text-gray-200 mb-1">
                    <span>Strategic Planning</span>
                    <span>90%</span>
                  </div>
                  <div className="w-full bg-[#E5E3FF] dark:bg-gray-700 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full transition-all duration-500" style={{ width: '90%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-[#1C1E26] dark:text-gray-200 mb-1">
                    <span>Financial Modeling</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-[#E5E3FF] dark:bg-gray-700 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full transition-all duration-500" style={{ width: '85%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-[#1C1E26] dark:text-gray-200 mb-1">
                    <span>Team Leadership</span>
                    <span>95%</span>
                  </div>
                  <div className="w-full bg-[#E5E3FF] dark:bg-gray-700 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full transition-all duration-500" style={{ width: '95%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-[#1C1E26] dark:text-gray-200 mb-1">
                    <span>Growth Operations</span>
                    <span>80%</span>
                  </div>
                  <div className="w-full bg-[#E5E3FF] dark:bg-gray-700 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full transition-all duration-500" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Category 2: Commercial Strategy */}
          <div className="space-y-6">
            <div 
              onClick={() => toggleCategory('commercial')}
              className="flex items-center justify-between cursor-pointer p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-[#161F33] transition-colors"
            >
              <div className="flex items-center space-x-3">
                <div className="text-primary text-2xl">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#1C1E26] dark:text-white">Commercial Strategy</h3>
                  <p className="text-xs text-[#687182] dark:text-gray-400">More than 5 years</p>
                </div>
              </div>
              {openCategory === 'commercial' ? (
                <ChevronUp className="w-5 h-5 text-primary" />
              ) : (
                <ChevronDown className="w-5 h-5 text-primary" />
              )}
            </div>

            {/* Skill bars list */}
            {openCategory === 'commercial' && (
              <div className="space-y-4 pl-4 md:pl-9 transition-all">
                <div>
                  <div className="flex justify-between text-xs font-semibold text-[#1C1E26] dark:text-gray-200 mb-1">
                    <span>B2B Sales & Negotiation</span>
                    <span>92%</span>
                  </div>
                  <div className="w-full bg-[#E5E3FF] dark:bg-gray-700 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full transition-all duration-500" style={{ width: '92%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-[#1C1E26] dark:text-gray-200 mb-1">
                    <span>Supply Chain & Logistics</span>
                    <span>80%</span>
                  </div>
                  <div className="w-full bg-[#E5E3FF] dark:bg-gray-700 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full transition-all duration-500" style={{ width: '80%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-[#1C1E26] dark:text-gray-200 mb-1">
                    <span>Client Relations & Retention</span>
                    <span>95%</span>
                  </div>
                  <div className="w-full bg-[#E5E3FF] dark:bg-gray-700 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full transition-all duration-500" style={{ width: '95%' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
