import React, { useState } from 'react';
import { GraduationCap, Briefcase, Calendar } from 'lucide-react';

export const Qualification = () => {
  const [activeTab, setActiveTab] = useState('work');

  const educationData = [
    {
      title: 'Master of Business Admin',
      subtitle: 'INSEAD / Business School',
      period: '2013 - 2015',
      align: 'left',
    },
    {
      title: 'BSc Economics & Finance',
      subtitle: 'London School of Economics',
      period: '2009 - 2013',
      align: 'right',
    },
  ];

  const workData = [
    {
      title: 'Venture Partner',
      subtitle: 'Capital Partners - Global',
      period: '2021 - Present',
      align: 'left',
    },
    {
      title: 'Chief Operating Officer',
      subtitle: 'Alpha Group - London',
      period: '2018 - 2021',
      align: 'right',
    },
    {
      title: 'Senior Business Strategist',
      subtitle: 'Bain & Consulting - NY',
      period: '2015 - 2018',
      align: 'left',
    },
    {
      title: 'Business Analyst',
      subtitle: 'McKinsey & Co - London',
      period: '2013 - 2015',
      align: 'right',
    },
  ];

  const currentItems = activeTab === 'work' ? workData : educationData;

  return (
    <section className="py-20 bg-white dark:bg-[#0B0F19] transition-colors" id="qualification">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#1C1E26] dark:text-white tracking-tight">Qualification</h2>
          <p className="text-xs md:text-sm text-[#687182] dark:text-gray-400 mt-1">My personal journey</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center items-center space-x-10 mb-12">
          <button
            onClick={() => setActiveTab('education')}
            className={`flex items-center space-x-2 font-medium text-sm transition-colors cursor-pointer pb-1 ${
              activeTab === 'education'
                ? 'text-primary border-b-2 border-primary font-semibold'
                : 'text-[#1C1E26] dark:text-gray-400 hover:text-primary'
            }`}
            type="button"
          >
            <GraduationCap className="w-5 h-5 text-primary" />
            <span>Education</span>
          </button>

          <button
            onClick={() => setActiveTab('work')}
            className={`flex items-center space-x-2 font-medium text-sm transition-colors cursor-pointer pb-1 ${
              activeTab === 'work'
                ? 'text-primary border-b-2 border-primary font-semibold'
                : 'text-[#1C1E26] dark:text-gray-400 hover:text-primary'
            }`}
            type="button"
          >
            <Briefcase className="w-5 h-5 text-primary" />
            <span>Work</span>
          </button>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-xl mx-auto min-h-[300px]">
          {/* Central Line */}
          <div className="absolute left-1/2 top-1 bottom-1 w-0.5 bg-[#E5E3FF] dark:bg-gray-800 -translate-x-1/2"></div>

          {currentItems.map((item, idx) => (
            <div key={idx} className="relative grid grid-cols-2 gap-8 mb-10 items-center">
              {item.align === 'left' ? (
                <>
                  <div className="text-right pr-6">
                    <h4 className="text-sm font-semibold text-[#1C1E26] dark:text-white">{item.title}</h4>
                    <p className="text-xs text-[#687182] dark:text-gray-400">{item.subtitle}</p>
                    <span className="inline-flex items-center text-[11px] text-[#687182] dark:text-gray-400 mt-1.5">
                      <Calendar className="w-3.5 h-3.5 mr-1 text-[#687182] dark:text-gray-400" />
                      {item.period}
                    </span>
                  </div>
                  {/* Dot Marker */}
                  <div className="absolute left-1/2 top-2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-primary border-4 border-white dark:border-[#0B0F19] shadow-sm"></div>
                  <div></div>
                </>
              ) : (
                <>
                  <div></div>
                  {/* Dot Marker */}
                  <div className="absolute left-1/2 top-2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-primary border-4 border-white dark:border-[#0B0F19] shadow-sm"></div>
                  <div className="text-left pl-6">
                    <h4 className="text-sm font-semibold text-[#1C1E26] dark:text-white">{item.title}</h4>
                    <p className="text-xs text-[#687182] dark:text-gray-400">{item.subtitle}</p>
                    <span className="inline-flex items-center text-[11px] text-[#687182] dark:text-gray-400 mt-1.5">
                      <Calendar className="w-3.5 h-3.5 mr-1 text-[#687182] dark:text-gray-400" />
                      {item.period}
                    </span>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
